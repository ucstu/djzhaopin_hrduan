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
                  :value="index - 1"
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
                  :value="index - 1"
                />
              </el-select>

              <el-date-picker
                v-model="valueMap.deliveryDate"
                type="date"
                placeholder="选择日期"
                class="data-picker"
                :default-value="new Date(2010, 9, 1)"
              />
            </div>
            <div class="second-line">
              <el-select v-model="valueMap.sex" class="m-2" placeholder="性别">
                <el-option
                  v-for="(item, index) in gander"
                  :key="item"
                  :label="item"
                  :value="index - 1"
                />
              </el-select>
              <el-select v-model="valueMap.age" class="m-2" placeholder="年龄">
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
              <div
                v-for="deliveryRecord in deliveryRecords"
                :key="deliveryRecord.deliveryRecordId"
                class="resume-item"
              >
                <div class="item-header">
                  <el-checkbox v-model="checked1" />
                  <img
                    :src="
                      VITE_CDN_URL +
                      userInformations.get(deliveryRecord.userInformationId)
                        ?.avatarUrl
                    "
                    alt=""
                  />
                  <div class="header-person">
                    <div>
                      <span>{{
                        userInformations.get(deliveryRecord.userInformationId)
                          ?.firstName +
                        "" +
                        userInformations.get(deliveryRecord.userInformationId)
                          ?.lastName
                      }}</span>
                      <span
                        >·男·<span>{{
                          userInformations.get(deliveryRecord.userInformationId)
                            ?.age
                        }}</span
                        >岁·<span>{{
                        education[
                          userInformations.get(deliveryRecord.userInformationId)!.education
                        ]
                        }}</span
                        >·{{
                        slution[
                          userInformations.get(deliveryRecord.userInformationId)!.jobStatus
                        ]
                        }}</span
                      >
                    </div>
                    <div>
                      <span
                        >想找：{{
                          userInformations.get(deliveryRecord.userInformationId)
                            ?.cityName
                        }}</span
                      ><span
                        >{{
                          jobInformations.get(
                            deliveryRecord.positionInformationId
                          )?.positionName
                        }}|{{
                          jobInformations.get(
                            deliveryRecord.positionInformationId
                          )?.startingSalary +
                          "K-" +
                          jobInformations.get(
                            deliveryRecord.positionInformationId
                          )?.ceilingSalary +
                          "K"
                        }}</span
                      >
                    </div>
                  </div>
                </div>

                <div class="resume-label">
                  {{ " 求高薪 | 求稳定 | 求发展 " }}
                </div>
                <div>
                  <el-button
                    type="primary"
                    @click="
                      inspectionResume(
                        userInformations.get(deliveryRecord.userInformationId)!.userInformationId
                      )
                    "
                    >查看简历</el-button
                  >
                </div>
              </div>
            </el-scrollbar>
          </div>
          <div class="footer">
            <el-checkbox v-model="checked1" label="全选" size="large" />
            <el-button type="primary">面试邀请</el-button>
            <el-button type="primary" plain>删除简历</el-button>
            <el-button type="primary" plain>导出简历</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
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

const VITE_CDN_URL = import.meta.env.VITE_CDN_URL as string;
const store = useStore(key);
const deliveryRecords = ref<DeliveryRecord[]>([]);
const slution = { 1: "随时入职", 2: "2周内入职", 3: "1月内入职" };

const userInformations = ref<Map<string, UserInformation>>(new Map());
const jobInformations = ref<Map<string, PositionInformation>>(new Map());

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
    ).then((respones) => {
      jobInformations.value.set(item.positionInformationId, respones.data.body);
    });
  });
});
const valueMap = ref<DeliveryRecord>({
  age: "",
  /**
   *
   * 投递日期
   */
  deliveryDate: "",
  /**
   *
   * 投递职位
   */
  jobId: "",
  /**
   *
   * 搜索内容
   */
  search: "",
  /**
   *
   * 性别
   */
  sex: "",
  /**
   *
   * 状态{1:待查看,2:已查看,3:通过筛选,4:约面试,5:不合适}
   */
  status: 1,
  /**
   *
   * 工作经验{0:经验不限,1:在校/应届,2:3年及以下,3:3-5年,4:5-10年,5:10年以上}
   */
  workingYears: "",
});
const inspectionResume = (id: string) => {
  router.push({
    name: "Resume",
    params: {
      userInformationId: id,
    },
  });
};
onUpdated(() => {
  getCompanyInfosP0DeliveryRecords(
    store.state.companyInformation.companyInformationId,
    valueMap.value
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
// getCompanyinfosCompanyinfoidDeliveryrecords(
//   store.state.companyInfo.companyId,
//   valueMap.value
// ).then((res) => {

// });
const checked1 = ref(false);
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

          .resume-item {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 70px;
            border-bottom: solid 1px rgb(221 221 221);

            .item-header {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 40%;
              margin-left: 15px;

              img {
                position: absolute;
                left: 30px;
                width: 40px;
                height: 40px;
                border-radius: 50%;
              }

              .header-person {
                position: absolute;
                left: 100px;
                display: flex;
                flex-direction: column;
                width: 100%;
                font-size: 7px;

                div {
                  display: flex;
                  width: 100%;
                  height: 100%;
                }
              }
            }

            .resume-label {
              position: absolute;
              left: 45%;
            }
          }
        }

        .footer {
          display: flex;
          justify-content: space-between;
          width: 40%;
          margin-top: 80px;
        }
      }
    }
  }
}
</style>
