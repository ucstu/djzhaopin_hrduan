<template>
  <div class="content">
    <div class="chat">
      <div class="left">
        <div class="left-top">
          <span>我的消息</span>
          <span>快速处理</span>
        </div>
        <div
          v-for="deliveryRecord in deliveryRecords"
          :key="deliveryRecord.deliveryRecordId"
          class="job-hunter"
          @click="selectPerson(deliveryRecord.userInformationId)"
        >
          <el-badge is-dot class="item">
            <div class="hunter">
              <img
                :src="
                  VITE_CDN_URL +
                  userInformations.get(deliveryRecord.userInformationId)
                    ?.avatarUrl
                "
                alt=""
              />
              <div class="hunter-info">
                <span>{{
                  userInformations.get(deliveryRecord.userInformationId)
                    ?.firstName +
                  "" +
                  userInformations.get(deliveryRecord.userInformationId)
                    ?.lastName
                }}</span>
                <div class="info">
                  <span>{{
                    userInformations.get(deliveryRecord.userInformationId)
                      ?.cityName
                  }}</span>
                  <span>{{
                    jobInformations.get(deliveryRecord.positionInformationId)
                      ?.positionName
                  }}</span>
                  <span>{{
                    jobInformations.get(deliveryRecord.positionInformationId)
                      ?.startingSalary +
                    "K-" +
                    jobInformations.get(deliveryRecord.positionInformationId)
                      ?.ceilingSalary +
                    "K"
                  }}</span>
                </div>
              </div>
            </div>
          </el-badge>
        </div>
      </div>
      <div class="right">
        <el-empty
          v-show="condition"
          image="https://img.51miz.com/Element/00/90/08/25/e1fc0d58_E900825_4a0d0e68.png"
        />
        <Chat v-show="!condition" />
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
import { ref } from "vue";
import Chat from "./Chat.vue";

const VITE_CDN_URL = import.meta.env.VITE_CDN_URL as string;
const condition = ref(true);
const store = useMainStore();
const deliveryRecords = ref<DeliveryRecord[]>([]);
const userInformations = ref<Map<string, UserInformation>>(new Map());
const jobInformations = ref<Map<string, PositionInformation>>(new Map());
getCompanyInfosP0DeliveryRecords(
  store.companyInformation.companyInformationId,
  { status: [2] }
).then((res) => {
  deliveryRecords.value = res.data.body;
  deliveryRecords.value.forEach((item) => {
    getUserInfosP0(item.userInformationId).then((res) => {
      userInformations.value.set(item.userInformationId, res.data.body);
    });
    getCompanyInfosP0PositionInfosP1(
      store.companyInformation.companyInformationId,
      item.positionInformationId
    ).then((res) => {
      jobInformations.value.set(item.positionInformationId, res.data.body);
    });
  });
});
const selectPerson = (userInformationId: string) => {
  condition.value = false;
};
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
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 80px;
        border-right: solid 1px #ccc;
        border-bottom: solid 1px #ccc;

        span {
          margin: 0 10px;
          color: rgb(0 179 139);
        }
      }

      .job-hunter {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 100%;
        height: 80px;
        border-bottom: 1px solid #ccc;

        .el-badge {
          width: 95%;
          height: 95%;

          .hunter {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            height: 100%;

            img {
              width: 50px;
              height: 50px;
              border-radius: 50%;
            }

            .hunter-info {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              width: 60%;
              height: 80%;

              .info {
                display: flex;
                justify-content: space-around;
                margin-left: -10px;
                font-size: 13px;
                color: #ccc;
              }
            }
          }
        }
      }

      .job-hunter:hover {
        cursor: pointer;
        background-color: rgb(0 179 139);
      }
    }

    .right {
      width: 75%;
      height: 100%;
    }
  }
}
</style>
