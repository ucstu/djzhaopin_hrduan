<template>
  <div class="content">
    <div class="main">
      <div class="center">
        <div class="total">
          <div class="top">
            <div class="second-line abcdefg">
              <el-select
                v-model="valueMap.status"
                class="m-2"
                placeholder="按反馈"
              >
                <el-option
                  v-for="item in feedbackMap"
                  :key="item"
                  :label="item"
                  :value="item"
                />
              </el-select>
              <el-select
                v-model="valueMap.positionInfoIds"
                class="m-2"
                placeholder="投递职位"
              >
                <el-option
                  v-for="item in education"
                  :key="item"
                  :label="item"
                  :value="item"
                />
              </el-select>

              <el-input
                v-model="valueMap.search"
                class="w-50 m-2"
                input-style="max-width: 220px;"
                placeholder="输入搜索内容"
                :prefix-icon="Search"
              />
            </div>
          </div>
          <div class="resume">
            <el-scrollbar height="490px">
              <ResumeInfo
                :user-informations="userInformations"
                :job-informations="jobInformations"
                :delivery-records="deliveryRecords"
                :checked1="checked1"
              />
            </el-scrollbar>
          </div>
          <ResumeFooter :checked="checked1" />
        </div>
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
import { Search } from "@element-plus/icons-vue";
import { onUpdated, ref } from "vue";
import ResumeInfo from "../Interview/resumeInfo.vue";
import ResumeFooter from "./ResumeFooter.vue";
const deliveryRecords = ref<DeliveryRecord[]>([]);
const userInformations = ref<Map<string, UserInformation>>(new Map());
const jobInformations = ref<Map<string, PositionInformation>>(new Map());
const store = useMainStore();
interface Record {
  status: number[];
  ages?: string;
  deliveryDates?: string;
  page?: string;
  positionInfoIds?: string;
  search?: string;
  sexs?: string;
  size?: string;
  sort?: string;
  workingYears?: string;
}
const valueMap = ref<Record>({
  status: [1],
});

getCompanyInfosP0DeliveryRecords(
  store.companyInformation.companyInformationId,
  { status: [2] }
)
  .then((res) => {
    deliveryRecords.value = res.data.body.deliveryRecords;
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
  })
  .catch(failResponseHandler);

const feedbackMap = ["待查看", "已查看", "通过筛选", "约面试", "不合适"];

const checked1 = ref(false);
onUpdated(() => {
  getCompanyInfosP0DeliveryRecords(
    store.companyInformation.companyInformationId,
    { status: [1] }
  )
    .then((res) => {
      deliveryRecords.value = res.data.body.deliveryRecords;
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
            jobInformations.value.set(
              item.positionInformationId,
              res.data.body
            );
          })
          .catch(failResponseHandler);
      });
    })
    .catch(failResponseHandler);
});
const education = ["大专", "本科", "硕士", "博士"];
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

          .second-line {
            display: flex;
            align-items: center;
            justify-content: space-between;
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
      }
    }
  }
}
</style>
