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
                  :value="index + 1"
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
                v-model="workTimeing"
                type="daterange"
                range-separator="到"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                @change="handleWorkTimeChange(workTimeing)"
              />
            </div>
            <div class="second-line">
              <el-select v-model="valueMap.sexs" class="m-2" placeholder="性别">
                <el-option
                  v-for="(item, index) in gander"
                  :key="item"
                  :label="item"
                  :value="index + 1"
                />
              </el-select>
              <el-select v-model="valueMap.ages" class="m-2" placeholder="年龄">
                <el-option
                  v-for="(item, index) in age"
                  :key="item"
                  :label="item"
                  :value="index + 1"
                />
              </el-select>

              <el-input
                v-model="valueMap.search"
                class="w-50 m-2"
                input-style="max-width: 350px;"
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
          <ResumeFooter :delivery-records="deliveryRecords" />
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
import { key } from "@/stores";
import { Search } from "@element-plus/icons-vue";
import { ref } from "vue";
import { useStore } from "vuex";
import ResumeInfo from "../Interview/resumeInfo.vue";
import ResumeFooter from "./ResumeFooter.vue";
interface Record {
  status: Array<1 | 2 | 3 | 4 | 5>;
  ages?: Array<1 | 2 | 3 | 4 | 5>;
  deliveryDates?: Array<`${number}-${number}-${number}`>;
  page?: number;
  positionInfoIds?: Array<string>;
  search?: string;
  sexs?: Array<"男" | "女" | "未知">;
  size?: number;
  sort?: Array<`${keyof DeliveryRecord},${"asc" | "desc"}`>;
  workingYears?: Array<1 | 2 | 3 | 4 | 5 | 6>;
}
const checked1 = ref(false);
const store = useStore(key);
const deliveryRecords = ref<DeliveryRecord[]>([]);
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
const valueMap = ref<Record>({
  status: [2],
  deliveryDates: deliveryDates.value,
});

getCompanyInfosP0DeliveryRecords(
  store.state.companyInformation.companyInformationId,
  { status: [1, 2, 3, 4, 5] }
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

// onUpdated(() => {
//   getCompanyInfosP0DeliveryRecords(
//     store.state.companyInformation.companyInformationId,
//     valueMap.value
//   ).then((res) => {
//     deliveryRecords.value = res.data.body;
//     deliveryRecords.value.forEach((item) => {
//       getUserInfosP0(item.userInformationId).then((response) => {
//         userInformations.value.set(item.userInformationId, response.data.body);
//       });
//       getCompanyInfosP0PositionInfosP1(
//         store.state.companyInformation.companyInformationId,
//         item.positionInformationId
//       ).then((resposable) => {
//         jobInformations.value.set(
//           item.positionInformationId,
//           resposable.data.body
//         );
//       });
//     });
//   });
// });

const feedbackMap = ["已通过", "已拒绝", "待审核"];
const gander = ["男", "女"];
const workExperience = ["1年以下", "1-3年", "3-5年", "5-10年", "10年以上"];
const age = ["18-25岁", "25-35岁", "35-45岁", "45-55岁", "55-65岁"];
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
