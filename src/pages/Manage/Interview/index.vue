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
                :delivery-records-checkeds="deliveryRecordsCheckeds"
                :checked="checked1"
              />
            </el-scrollbar>
          </div>
          <div class="footer">
            <div>
              <el-checkbox v-model="checked1" label="全选" size="large" />
              <el-button
                type="primary"
                @click="changeState(3 as 1 | 2 | 3 | 4 | 5 )"
                >发出offer</el-button
              >
              <el-button
                type="primary"
                plain
                @click="changeState(5 as 1 | 2 | 3 | 4 | 5 )"
                >删除简历</el-button
              >
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
  putUserInfosP0DeliveryRecordsP1,
} from "@/services/services";
import {
  DeliveryRecord,
  PositionInformation,
  UserInformation,
} from "@/services/types";
import { useMainStore } from "@/stores/main";
import { failResponseHandler } from "@/utils/handler";
import { ElMessage } from "element-plus";
import { computed, ref } from "vue";
import ResumeInfo from "./resumeInfo.vue";
const store = useMainStore();
const deliveryRecords = ref<DeliveryRecord[]>([]);
const checked1 = ref(false);
interface DeliveryRecordChecked extends DeliveryRecord {
  checked: boolean;
}

const deliveryRecordsCheckeds = ref<DeliveryRecordChecked[]>([]);
const userInformations = ref<Map<string, UserInformation>>(new Map());
const jobInformations = ref<Map<string, PositionInformation>>(new Map());
const deliveryDates = ref<Array<string>>(["2022-05-01", "2022-06-01"]);
const workTimeing = ref([]);
const handleWorkTimeChange = (val: Array<string>) => {
  let startTime = useDate(val[0]);
  let endTime = useDate(val[1]);
  deliveryDates.value[0] = startTime;
  deliveryDates.value[1] = endTime;

  getCompanyInfosP0DeliveryRecords(
    store.companyInformation.companyInformationId,
    { status: [4], deliveryDates: deliveryDates.value }
  )
    .then((res) => {
      totalCount.value = res.data.body.totalCount;
      deliveryRecordsCheckeds.value = [];
      deliveryRecords.value = res.data.body.deliveryRecords;
      deliveryRecords.value.forEach((item) => {
        deliveryRecordsCheckeds.value.push(
          Object.assign(item, { checked: false })
        );
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
};
const changeState = (val: 1 | 2 | 3 | 4 | 5) => {
  if (deliveryRecordsCheckeds.value) {
    //变更状态函数，将选中的简历信息的状态进行变更
    const newDeliver = deliveryRecordsCheckeds.value.filter(
      (deliveryRecordsChecked: DeliveryRecordChecked) => {
        return deliveryRecordsChecked.checked === true;
      }
    );
    newDeliver.map((delivery: DeliveryRecordChecked) => {
      delivery.status = val;
      putUserInfosP0DeliveryRecordsP1(
        delivery.userInformationId,
        delivery.deliveryRecordId,
        delivery
      ).then(() => {
        ElMessage.success("操作成功");
      });
    });
  }
};
const totalCount = ref(0);
const total = computed(() => {
  let num: number = (total.value / 7) * 10;
  return Math.ceil(num);
});
getCompanyInfosP0DeliveryRecords(
  store.companyInformation.companyInformationId,
  { status: [4] }
)
  .then((res) => {
    totalCount.value = res.data.body.totalCount;
    deliveryRecords.value = res.data.body.deliveryRecords;
    deliveryRecords.value.forEach((item) => {
      deliveryRecordsCheckeds.value.push(
        Object.assign(item, { checked: false })
      );
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
