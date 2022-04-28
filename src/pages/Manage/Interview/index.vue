<template>
  <div class="content">
    <div class="main">
      <div class="center">
        <div class="total">
          <div class="top">
            <div class="first-line">
              <h1>面试时间：</h1>
              <el-date-picker
                type="daterange"
                range-separator="To"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
              />
            </div>
          </div>
          <ResumeInfo />
          <div class="footer">
            <el-checkbox v-model="checked1" label="全选" size="large" />
            <el-button type="primary">邀请面试</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  getCompanyinfosP0Deliveryrecords,
  getCompanyinfosP0PositioninfosP1,
  getUserinfosP0,
} from "@/services/services";
import {
  DeliveryRecord,
  PositionInformation,
  UserInformation,
} from "@/services/types";
import { key } from "@/stores";
import { ref } from "vue";
import { useStore } from "vuex";
import ResumeInfo from "./resumeInfo.vue";
const store = useStore(key);
const deliveryRecords = ref<DeliveryRecord[]>([]);
const checked1 = ref(false);
const userInformations = ref<Map<string, UserInformation>>(new Map());
const jobInformations = ref<Map<string, PositionInformation>>(new Map());

getCompanyinfosP0Deliveryrecords(
  store.state.companyInformation.companyInformationId,
  { status: "3" }
).then((res) => {
  deliveryRecords.value = res.data.body;
  deliveryRecords.value.forEach((item) => {
    getUserinfosP0(item.userInformationId).then((res) => {
      userInformations.value.set(item.userInformationId, res.data.body);
    });
    getCompanyinfosP0PositioninfosP1(
      store.state.companyInformation.companyInformationId,
      item.positionInformationId
    ).then((res) => {
      jobInformations.value.set(item.positionInformationId, res.data.body);
    });
  });
});
</script>

<style scoped lang="scss">
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgb(245 245 250);

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    .center {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 95%;
      background: #fff;
      border: 1px solid #d5d6d7;

      .total {
        width: 95%;
        height: 680px;

        .top {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-top: 20px;

          .first-line {
            display: flex;
            align-items: center;
            height: 50px;
          }
        }

        .footer {
          display: flex;
          justify-content: space-between;
          width: 20%;
          margin-top: 80px;
        }
      }
    }
  }
}
</style>
