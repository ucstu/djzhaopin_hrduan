<template>
  <div class="content">
    <div class="main">
      <div class="center">
        <div class="total">
          <div class="top">
            <div class="first-line">
              <el-select
                v-model="valueMap.status"
                class="m-2"
                placeholder="按反馈"
              >
                <el-option
                  v-for="(item, index) in feedbackMap"
                  :key="item"
                  :label="item"
                  :value="[index + 1]"
                />
              </el-select>
              <el-select
                v-model="valueMap.workingYears"
                class="m-2"
                placeholder="工作经验"
              >
                <el-option
                  v-for="(item, index) in workExperience"
                  :key="item"
                  :label="item"
                  :value="index + 1"
                />
              </el-select>

              <el-date-picker
                v-model="valueMap.deliveryDates"
                type="date"
                placeholder="选择日期"
                class="data-picker"
                :default-value="new Date(2010, 9, 1)"
              />
            </div>
            <div class="second-line">
              <el-select v-model="valueMap.sexs" class="m-2" placeholder="性别">
                <el-option
                  v-for="(item, index) in gander"
                  :key="item"
                  :label="item"
                  :value="index - 1"
                />
              </el-select>
              <el-select v-model="valueMap.ages" class="m-2" placeholder="年龄">
                <el-option
                  v-for="(item, index) in age"
                  :key="item"
                  :label="item"
                  :value="index - 1"
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
            <el-scrollbar height="400px">
              <ResumeInfo />
            </el-scrollbar>
          </div>
          <ResumeFooter :delivery-records="deliveryRecords" />
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
import { key } from "@/stores";
import { Search } from "@element-plus/icons-vue";
import { onUpdated, ref } from "vue";
import { useStore } from "vuex";
import ResumeInfo from "../Interview/resumeInfo.vue";
import ResumeFooter from "./ResumeFooter.vue";
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
const valueMap = ref<Record>({ status: [2] } as Record);
const store = useStore(key);
const deliveryRecords = ref<DeliveryRecord[]>([]);
const userInformations = ref<Map<string, UserInformation>>(new Map());
const jobInformations = ref<Map<string, PositionInformation>>(new Map());
getCompanyInfosP0DeliveryRecords(
  store.state.companyInformation.companyInformationId,
  { status: [2] }
).then((res) => {
  deliveryRecords.value = res.data.body;
  deliveryRecords.value.forEach((item) => {
    getUserInfosP0(item.userInformationId).then((response) => {
      userInformations.value.set(item.userInformationId, response.data.body);
    });
    getCompanyInfosP0PositionInfosP1(
      store.state.companyInformation.companyInformationId,
      item.positionInformationId
    ).then((respones) => {
      jobInformations.value.set(item.positionInformationId, respones.data.body);
    });
  });
});

onUpdated(() => {
  getCompanyInfosP0DeliveryRecords(
    store.state.companyInformation.companyInformationId,
    { status: [1] }
  ).then((res) => {
    deliveryRecords.value = res.data.body;
    deliveryRecords.value.forEach((item) => {
      getUserInfosP0(item.userInformationId).then((response) => {
        userInformations.value.set(item.userInformationId, response.data.body);
      });
      getCompanyInfosP0PositionInfosP1(
        store.state.companyInformation.companyInformationId,
        item.positionInformationId
      ).then((resposable) => {
        jobInformations.value.set(
          item.positionInformationId,
          resposable.data.body
        );
      });
    });
  });
});

const feedbackMap = ["已通过", "已拒绝", "待审核"];
const gander = ["男", "女"];
const workExperience = ["1年以下", "1-3年", "3-5年", "5-10年", "10年以上"];
const age = ["18-25", "25-35", "35-45", "45-55", "55-65"];
const education = { 1: "大专", 2: "本科", 3: "硕士", 4: "博士" };
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
            justify-content: space-between;
            height: 50px;

            .data-picker {
              max-width: 200px;
              margin: 0 2px;
            }
          }

          .second-line {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }

        .resume {
          height: 400px;
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
