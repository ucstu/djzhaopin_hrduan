<template>
  <div class="content">
    <div class="chat">
      <div class="left">
        <div class="left-top">
          <Card />
          <div class="title">
            <span>我的消息</span>
            <span>快速处理</span>
          </div>
        </div>
        <List
          :user-informations="userInformations"
          :job-informations="jobInformations"
          :delivery-records="deliveryRecords"
          @submit-message="submitMessage"
        />
      </div>
      <div class="right">
        <el-empty
          v-show="!condition"
          image="https://img.51miz.com/Element/00/90/08/25/e1fc0d58_E900825_4a0d0e68.png"
        />
        <Chat v-show="condition" />
        <chat-buttom />
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
import { useMainStore } from "@/stores/main";
import { failResponseHandler } from "@/utils/handler";
import { ref } from "vue";
import Card from "./card/Card.vue";
import Chat from "./card/Chat.vue";
import ChatButtom from "./card/ChatButtom.vue";
import List from "./card/List.vue";
const submitMessage = () => {
  condition.value = true;
};
const condition = ref(false);
const store = useMainStore();
const deliveryRecords = ref<DeliveryRecord[]>([]);
const userInformations = ref<Map<string, UserInformation>>(new Map());
const jobInformations = ref<Map<string, PositionInformation>>(new Map());
getCompanyInfosP0DeliveryRecords(
  store.companyInformation.companyInformationId,
  { status: [1, 2, 3, 4] }
)
  .then((res) => {
    deliveryRecords.value = res.data.body.deliveryRecords;
    deliveryRecords.value.forEach((item) => {
      getUserInfosP0(item.userInformationId)
        .then((response) => {
          userInformations.value.set(
            item.userInformationId,
            response.data.body
          );
        })
        .catch(failResponseHandler);
      getCompanyInfosP0PositionInfosP1(
        store.companyInformation.companyInformationId,
        item.positionInformationId
      )
        .then((responseable) => {
          jobInformations.value.set(
            item.positionInformationId,
            responseable.data.body
          );
        })
        .catch(failResponseHandler);
    });
  })
  .catch(failResponseHandler);
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
        height: 110px;
        border-bottom: solid 1px #ccc;

        .title {
          display: flex;
          justify-content: space-between;
          width: 100%;

          span {
            margin: 0 10px;
            color: rgb(0 179 139);
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
