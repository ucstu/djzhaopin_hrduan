import { MessageRecord } from "@/services/types";
import { useMainStore, useMessageStore } from "@/stores/main";
import { ElMessage } from "element-plus";
import Stomp from "stompjs";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL as string;

const mainStore = useMainStore();
const messageStore = useMessageStore();

const socket = new WebSocket(`${VITE_BASE_URL.replace(/^http/, "ws")}/ws`);
const stompClient = Stomp.over(socket);

const messageIds = new Set<string>();

export const connectStomp = () => {
  stompClient.connect(
    { Authorization: "Bearer " + mainStore.jsonWebToken },
    (frame) => {
      stompClient.subscribe("/user/queue/message", (message) => {
        // 每接收到一次消息都会触发这个回调
        // @ts-ignore
        if (!messageIds.has(message.headers["message-id"])) {
          const data = JSON.parse(message.body) as {
            body: MessageRecord[];
            message: string;
            status: number;
            timestamp: string;
          };
          for (const messageRecord of data.body) {
            if (!messageStore.messages[messageRecord.initiateId]) {
              messageStore.messages[messageRecord.initiateId] = [];
            }
            messageStore.messages[messageRecord.initiateId].push({
              ...messageRecord,
              haveRead: false,
            });
          }
          if (data.body.length > 0) {
            ElMessage.success({
              message: `你收到了${data.body.length}条新的消息`,
            });
          }
        }
        if (messageIds.size > 10) {
          messageIds.clear();
        }
      });
      stompClient.subscribe("/user/queue/error", (errors) => {
        // 每接收到一次消息都会触发这个回调
        const data = JSON.parse(errors.body) as {
          errors: any;
          message: string;
          status: number;
          timestamp: string;
        };
      });
      stompClient.subscribe("/topic/pingpong", (pong) => {});
      setInterval(() => {
        stompClient.send(
          "/ping",
          {},
          JSON.stringify({
            timestamp: new Date().toISOString(),
          })
        );
      }, 30000);
    },
    handleDisconnect
  );
};

const handleDisconnect = () => {
  if (mainStore.jsonWebToken) {
    connectStomp();
  }
};

// 发送消息
export const sendMessage = (
  content: string,
  messageType: 1 | 2 | 3 | 4,
  serviceId: string,
  serviceType: number
) => {
  const message = {
    content,
    initiateId: mainStore.accountInformation.fullInformationId,
    initiateType: 2,
    messageType,
    serviceId,
    serviceType,
  };
  stompClient.send("/message", {}, JSON.stringify(message));
  if (!messageStore.messages[serviceId]) {
    messageStore.messages[serviceId] = [];
  }
  messageStore.messages[serviceId].push({
    ...message,
    haveRead: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    messageRecordId: "",
  });
};
