<template>
  <div class="content">
    <div class="chat">
      <div class="left">
        <div class="left-top">
          <SelfInformationCard />
          <div class="title">
            <span>我的消息</span>
            <span>快速处理</span>
          </div>
        </div>
        <ChatUserList
          :user-informations="userInformations"
          :messages="messages[mainStore.accountInformation.fullInformationId]"
          :active-user-information-id="activeUserInformationId"
          @chat-with-user="chatWithUser"
        />
      </div>
      <div class="right">
        <ChatBox
          v-if="activeUserInformationId !== null"
          :chat-id="activeUserInformationId"
          :user-info="userInformations.get(activeUserInformationId)"
          :chat-list="
            messages[mainStore.accountInformation.fullInformationId][
              activeUserInformationId
            ]
          "
        />
        <el-empty
          v-else
          image="https://img.51miz.com/Element/00/90/08/25/e1fc0d58_E900825_4a0d0e68.png"
        />
        <ChatBoxBottom :chat-id="activeUserInformationId" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  getCompanyInfosP0DeliveryRecords,
  getCompanyInfosP0PositionInfosP1,
  getUserInfosP0,
} from "@/services/services";
import {
  DeliveryRecord,
  PositionInformation,
  UserInformation,
} from "@/services/types";
import { useMainStore, useMessageStore } from "@/stores/main";
import { storeToRefs } from "pinia";
import { onBeforeMount, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import ChatBox from "./components/ChatBox.vue";
import ChatBoxBottom from "./components/ChatBoxBottom.vue";
import ChatUserList from "./components/ChatUserList.vue";
import SelfInformationCard from "./components/SelfInformationCard.vue";

const route = useRoute();
const mainStore = useMainStore();
const messageStore = useMessageStore();

const activeUserInformationId = ref<string>(null as unknown as string);

const chatWithUser = (_activeUserInformationId: string | number) => {
  if (typeof _activeUserInformationId === "string") {
    activeUserInformationId.value = _activeUserInformationId.toString();
    readAllMessage(_activeUserInformationId);
  }
};

const readAllMessage = (activeUserInformationId: string) => {
  for (const message of messages.value[
    mainStore.accountInformation.fullInformationId
  ][activeUserInformationId]) {
    message.haveRead = true;
  }
};

let loadedInformationCount = 0;

const deliveryRecords = ref<Map<string, DeliveryRecord>>(new Map());
const userInformations = ref<Map<string, UserInformation>>(new Map());
const positionInformations = ref<Map<string, PositionInformation>>(new Map());
const { messages } = storeToRefs(messageStore);

onBeforeMount(() => {
  activeUserInformationId.value = route.params.userId.toString();
});

watchEffect(() => {
  const messageKeys = Object.keys(
    messages.value[mainStore.accountInformation.fullInformationId]
  );
  const messageKeysCount = messageKeys.length;
  if (messageKeysCount > loadedInformationCount) {
    messageKeys.forEach((messageKey) => {
      getUserInfosP0(messageKey).then((res) => {
        userInformations.value.set(messageKey, res.data.body);
        getCompanyInfosP0DeliveryRecords(
          mainStore.companyInformation.companyInformationId,
          {
            userName: res.data.body.firstName + res.data.body.lastName,
            status: [1, 2, 3, 4, 5],
          }
        ).then((res) => {
          if (res.data.body.totalCount > 0) {
            deliveryRecords.value.set(
              messageKey,
              res.data.body.deliveryRecords[0]
            );
            getCompanyInfosP0PositionInfosP1(
              mainStore.companyInformation.companyInformationId,
              res.data.body.deliveryRecords[0].positionInformationId
            ).then((res) => {
              positionInformations.value.set(
                res.data.body.positionInformationId,
                res.data.body
              );
            });
          }
        });
      });
    });
    loadedInformationCount = messageKeysCount;
  }
  if (
    messages.value[mainStore.accountInformation.fullInformationId][
      activeUserInformationId.value
    ]
  ) {
    readAllMessage(activeUserInformationId.value);
  }
});
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgb(245 245 250);

  .chat {
    display: flex;
    width: 95%;
    height: 800px;
    background-color: rgb(255 255 255);
    border: solid 1px #ccc;
    border-radius: 5px;

    .left {
      width: 25%;
      height: 100%;
      border-right: 1px solid #ccc;

      .left-top {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 130px;
        border-bottom: solid 1px #ccc;

        .title {
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 30px;
          margin: 5px 0;

          span {
            margin: 0 10px;
            color: rgb(0 179 139);
            cursor: pointer;
          }
        }
      }
    }

    .right {
      position: relative;
      width: 75%;
      height: 100%;
    }
  }
}
</style>
