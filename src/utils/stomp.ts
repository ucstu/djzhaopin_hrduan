import useDate from "@/hooks/useDate";
import useTime from "@/hooks/useTime";
import {
  AccountInformation,
  CompanyInformation,
  HrInformation,
  MessageRecord,
} from "@/services/types";
import { withReadStateMessageRecord } from "@/stores/main";
import { ElMessage } from "element-plus";
import { Store } from "pinia";
import Stomp from "stompjs";
import { ref } from "vue";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL as string;

const socket = new WebSocket(`${VITE_BASE_URL.replace(/^http/, "ws")}/ws`);
const stompClient = Stomp.over(socket);

// @ts-ignore
// stompClient.debug = null;

const messageIds = new Set<string>();

export const connected = ref(false);

let mainStore: Store<
  "main",
  {
    jsonWebToken: string;
    hrInformation: HrInformation;
    accountInformation: AccountInformation;
    companyInformation: CompanyInformation;
  },
  {},
  {}
>;

let messageStore: Store<
  "message",
  {
    messages: {
      [key: string]: {
        [key: string]: withReadStateMessageRecord[];
      };
    };
  },
  {},
  {}
>;

export const connectStomp = (
  _mainStore: Store<
    "main",
    {
      jsonWebToken: string;
      hrInformation: HrInformation;
      accountInformation: AccountInformation;
      companyInformation: CompanyInformation;
    },
    {},
    {}
  >,
  _messageStore: Store<
    "message",
    {
      messages: {
        [key: string]: {
          [key: string]: withReadStateMessageRecord[];
        };
      };
    },
    {},
    {}
  >
) => {
  mainStore = _mainStore;
  messageStore = _messageStore;
  stompClient.connect(
    { Authorization: "Bearer " + _mainStore.jsonWebToken },
    (frame) => {
      connected.value = true;
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
            if (
              !_messageStore.messages[
                mainStore.accountInformation.fullInformationId
              ][messageRecord.initiateId]
            ) {
              _messageStore.messages[
                mainStore.accountInformation.fullInformationId
              ][messageRecord.initiateId] = [];
            }
            _messageStore.messages[
              mainStore.accountInformation.fullInformationId
            ][messageRecord.initiateId].push({
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
    },
    handleDisconnect
  );
};

const handleDisconnect = () => {
  connected.value = false;
  connectStomp(mainStore, messageStore);
};

// 发送消息
export const sendMessage = (
  content: string,
  messageType: 1 | 2 | 3 | 4,
  serviceId: string,
  serviceType: number
) => {
  if (!connected.value) {
    ElMessage.error({
      message: "暂未连接到消息服务器，请耐心等待或重新进入程序",
    });
    return;
  }
  const message = {
    content,
    initiateId: mainStore.accountInformation.fullInformationId,
    initiateType: 2,
    messageType,
    serviceId,
    serviceType,
  };
  stompClient.send("/message", {}, JSON.stringify(message));
  if (
    !messageStore.messages[mainStore.accountInformation.fullInformationId][
      serviceId
    ]
  ) {
    messageStore.messages[mainStore.accountInformation.fullInformationId][
      serviceId
    ] = [];
  }
  const time = new Date().toISOString();
  messageStore.messages[mainStore.accountInformation.fullInformationId][
    serviceId
  ].push({
    ...message,
    haveRead: true,
    createdAt: useDate(time) + " " + useTime(time),
    updatedAt: useDate(time) + " " + useTime(time),
    messageRecordId: "",
  });
};
