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
                clearable
                @change="handleChange"
                @clear="handleClear"
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
                clearable
                @change="handleChange"
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
              <el-select
                v-model="valueMap.sexs"
                class="m-2"
                placeholder="性别"
                clearable
                @change="handleChange"
              >
                <el-option
                  v-for="item in gander"
                  :key="item"
                  :label="item"
                  :value="item"
                />
              </el-select>
              <el-select
                v-model="valueMap.ages"
                class="m-2"
                placeholder="年龄"
                clearable
                @change="handleChange"
              >
                <el-option
                  v-for="(item, index) in age"
                  :key="item"
                  :label="item"
                  :value="index + 1"
                />
              </el-select>
              <el-input
                v-model="valueMap.userName"
                class="w-50 m-2"
                input-style="max-width: 350px;"
                placeholder="输入姓名查找"
                :prefix-icon="Search"
                clearable
                @change="handleChange"
              />
            </div>
          </div>
          <div class="resume">
            <el-scrollbar height="490px">
              <ResumeInfo
                :user-informations="userInformations"
                :job-informations="jobInformations"
                :delivery-records-checkeds="deliveryRecordsCheckeds"
                @sub-checked="handleChecked"
              >
              </ResumeInfo>
            </el-scrollbar>
          </div>
          <ResumeFooter
            :total="total"
            :delivery-records-checkeds="deliveryRecordsCheckeds"
            @change-state="changState"
            @submit-page="submitPage"
            @submit-checked="submitChecked"
            @submit-interview-time="submitInterviewTime"
          />
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
putUserInfosP0DeliveryRecordsP1
} from "@/services/services";
import {
DeliveryRecord,
GetCompanyInfosP0DeliveryRecordsQueryParams,
PositionInformation,
UserInformation
} from "@/services/types";
import { useMainStore } from "@/stores/main";
import { failResponseHandler } from "@/utils/handler";
import { Search } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { computed, ref } from "vue";
import ResumeInfo from "../Interview/resumeInfo.vue";
import ResumeFooter from "./ResumeFooter.vue";
interface DeliveryRecordChecked extends DeliveryRecord {
  checked: boolean;
}
const interviewTime = ref("");
const store = useMainStore();
const dialogTableVisible = ref(false);
const deliveryRecords = ref<DeliveryRecord[]>([]);
const userInformations = ref<Map<string, UserInformation>>(new Map());
const jobInformations = ref<Map<string, PositionInformation>>(new Map());
const workTimeing = ref([]);
const deliveryDates = ref<Array<`${number}-${number}-${number}`>>([]);
const submitInterviewTime = (data: { time: string }) => {
  interviewTime.value = data.time;
};
const totalCount = ref(0);
const total = computed(() => {
  let num: number = (totalCount.value / 7) * 10;
  return Math.ceil(num);
});
const deliveryRecordsCheckeds = ref<DeliveryRecordChecked[]>([]);
const confirmInterviewTime = (delivery: DeliveryRecordChecked) => {
  dialogTableVisible.value = false;
  putUserInfosP0DeliveryRecordsP1(
    delivery.userInformationId,
    delivery.deliveryRecordId,
    delivery
  ).then(() => {
    ElMessage.success("操作成功");
  });
};
const handleClear = () => {
  valueMap.value.status = [1, 2, 3, 4];
};
const submitChecked = (data: { checked: boolean }) => {
  deliveryRecordsCheckeds.value.map(
    (deliveryRecordsChecked: DeliveryRecordChecked) => {
      deliveryRecordsChecked.checked = data.checked;
    }
  );
};
const valueMap = ref<GetCompanyInfosP0DeliveryRecordsQueryParams>({
  status: [1, 2, 3, 4],
  size: 7,
  deliveryDates: deliveryDates.value,
  page: 0,
});
const submitPage = (data: { type: string; data: number }) => {
  valueMap.value.page = data.data - 1;
  handleChange();
};

const changState = (val: { state: 1 | 2 | 3 | 4 | 5 }) => {
  if (deliveryRecordsCheckeds.value) {
    //变更状态函数，将选中的简历信息的状态进行变更
    const newDeliver = deliveryRecordsCheckeds.value.filter(
      (deliveryRecordsChecked: DeliveryRecordChecked) => {
        return deliveryRecordsChecked.checked === true;
      }
    );
    if (newDeliver.length > 0) {
      //邀请面试打开寻找日期页面
      if (interviewTime.value) {
        newDeliver.map((delivery: DeliveryRecordChecked) => {
          delivery.status = val.state;
          delivery.interviewTime = interviewTime.value;
          confirmInterviewTime(delivery);
        });
        handleChange();
        interviewTime.value = "";
      } else {
        ElMessage.warning("请选择面试时间");
      }
    } else {
      ElMessage.error("请选择简历");
    }
  }
};

const handleChecked = (deliveryRecordId: string) => {
  if (deliveryRecordsCheckeds.value) {
    deliveryRecordsCheckeds.value.map((deliver: DeliveryRecordChecked) => {
      if (deliver.deliveryRecordId === deliveryRecordId) {
        deliver.checked = !deliver.checked;
      }
    });
  }
};

getCompanyInfosP0DeliveryRecords(
  store.companyInformation.companyInformationId,
  valueMap.value
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
        .then((respones) => {
          jobInformations.value.set(
            item.positionInformationId,
            respones.data.body
          );
        })
        .catch(failResponseHandler);
    });
  })
  .catch(failResponseHandler);

const handleChange = () => {
  getCompanyInfosP0DeliveryRecords(
    store.companyInformation.companyInformationId,
    valueMap.value
  )
    .then((res) => {
      totalCount.value = res.data.body.totalCount;
      deliveryRecords.value = res.data.body.deliveryRecords;
      deliveryRecordsCheckeds.value = [];
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
          .then((respones) => {
            jobInformations.value.set(
              item.positionInformationId,
              respones.data.body
            );
          })
          .catch(failResponseHandler);
      });
    })
    .catch(failResponseHandler);
};
const handleWorkTimeChange = (val: Array<string>) => {
  if (val) {
    deliveryDates.value[0] = useDate(val[0]);
    deliveryDates.value[1] = useDate(val[1]);
  } else {
    valueMap.value.status = [1, 2, 3, 4];
    deliveryDates.value = [];
  }
  handleChange();
};
const feedbackMap = ["待查看", "已查看", "通过筛选", "约面试"];
const gander = ["男", "女"];
const workExperience = ["经验不限", "在校/应届", "3-5年", "5-10年", "10年以上"];
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

            .el-data-picker {
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
