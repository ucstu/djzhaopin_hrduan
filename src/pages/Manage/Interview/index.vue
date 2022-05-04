<template>
  <div class="content">
    <div class="main">
      <div class="center">
        <div class="total">
          <div class="top">
            <div class="first-line">
              <h1>面试时间：</h1>
              <el-date-picker
                v-model="workTimeing"
                type="daterange"
                range-separator="到"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                @change="handleWorkTimeChange(workTimeing)"
              />
            </div>
          </div>
          <div class="resume">
            <el-scrollbar height="400px">
              <ResumeInfo
                :user-informations="userInformations"
                :job-informations="jobInformations"
                :delivery-records="deliveryRecords"
                :checked="checked1"
              />
            </el-scrollbar>
          </div>
          <div class="footer">
            <div>
              <el-checkbox v-model="checked1" label="全选" size="large" />
              <el-button type="primary">邀请面试</el-button>
            </div>
            <el-pagination
              background
              layout="prev, pager, next"
              :total="total"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useDate from "@/hooks/useDate";
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
import { computed } from "@vue/reactivity";
import { onUpdated, ref } from "vue";
import ResumeInfo from "./resumeInfo.vue";
const store = useMainStore();
const deliveryRecords = ref<DeliveryRecord[]>([]);
const checked1 = ref(false);
const userInformations = ref<Map<string, UserInformation>>(new Map());
const jobInformations = ref<Map<string, PositionInformation>>(new Map());
const workTimeing = ref([]);
const deliveryDates = ref<Array<`${number}-${number}-${number}`>>([]);
const handleWorkTimeChange = (val: Array<string>) => {
  let startTime = useDate(val[0]);
  let endTime = useDate(val[1]);
  deliveryDates.value[0] = startTime;
  deliveryDates.value[1] = endTime;
};
const total = computed(() => {
  let num = (deliveryRecords.value.length / 7) * 10;
  return Math.ceil(num);
});
onUpdated(() => {
  getCompanyInfosP0DeliveryRecords(
    store.companyInformation.companyInformationId,
    { status: [4], deliveryDates: deliveryDates.value }
  ).then((res) => {
    deliveryRecords.value = res.data.body;
    deliveryRecords.value.forEach((item) => {
      getUserInfosP0(item.userInformationId)
        .then((res) => {
          userInformations.value.set(item.userInformationId, res.data.body);
        })
        .catch(failResponseHandler);
      getCompanyInfosP0PositionInfosP1(
        store.companyInformation.companyInformationId,
        item.positionInformationId
      )
        .then((res) => {
          jobInformations.value.set(item.positionInformationId, res.data.body);
        })
        .catch(failResponseHandler);
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

        .resume {
          height: 490px;
          margin-top: 30px;
          overflow-y: hidden;
          border: solid 1px #d5d6d7;

          .scrollbar-demo-item {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 50px;
            margin: 10px;
            color: var(--el-color-primary);
            text-align: center;
            background: var(--el-color-primary-light-9);
            border-radius: 4px;
          }
        }

        .footer {
          display: flex;
          justify-content: space-between;
          width: 100%;
          margin-top: 10px;

          .el-checkbox {
            margin-right: 20px;
          }
        }
      }
    }
  }
}
</style>
