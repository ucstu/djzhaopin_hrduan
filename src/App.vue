<template>
  <router-view />
</template>
<script setup lang="ts">
import { getAxiosInstance } from "@/services/config";
import { MessageRecord } from "@/services/types";
import { useMainStore } from "@/stores/main";
import Stomp from "stompjs";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL as string;

const store = useMainStore();

getAxiosInstance(undefined).defaults.headers.common["Authorization"] =
  "Bearer " + store.jsonWebToken;

const socket = new WebSocket(`${VITE_BASE_URL.replace(/^http/, "ws")}/ws`);

const stompClient = Stomp.over(socket);

stompClient.connect(
  { Authorization: "Bearer " + store.jsonWebToken },
  (frame) => {
    stompClient.subscribe("/user/queue/message", (message) => {
      // 没接收到一次消息都会触发这个回调
      let data = JSON.parse(message.body) as {
        body: MessageRecord[];
        message: string;
        status: number;
        timestamp: string;
      };
      for (let messageRecord of data.body) {
        store.messages[messageRecord.initiateId].push({
          ...messageRecord,
          haveRead: false,
        });
      }
    });
  }
);

const sendMessage = (
  content: string,
  messageType: number,
  serviceId: string,
  serviceType: number
) => {
  stompClient.send(
    "/message",
    {},
    JSON.stringify({
      content,
      initiateId: store.accountInformation.fullInformationId,
      initiateType: 1,
      messageType,
      serviceId,
      serviceType,
    })
  );
};
</script>

<style lang="scss">
/************************************************************
** 请将全局样式拷贝到项目的全局 CSS 文件或者当前页面的顶部 **
** 否则页面将无法正常显示                                  **
************************************************************/

html {
  font-size: 16px;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    "Microsoft Yahei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

view,
image,
text {
  box-sizing: border-box;
  flex-shrink: 0;
}

#app {
  width: 100vw;
  height: 100vh;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.justify-start {
  display: flex;
  justify-content: flex-start;
}

.justify-center {
  display: flex;
  justify-content: center;
}

.justify-end {
  display: flex;
  justify-content: flex-end;
}

.justify-evenly {
  display: flex;
  justify-content: space-evenly;
}

.justify-around {
  display: flex;
  justify-content: space-around;
}

.justify-between {
  display: flex;
  justify-content: space-between;
}

.items-stretch {
  display: flex;
  align-items: stretch;
}

.items-start {
  display: flex;
  align-items: flex-start;
}

.items-center {
  display: flex;
  align-items: center;
}

.items-end {
  display: flex;
  align-items: flex-end;
}
</style>
