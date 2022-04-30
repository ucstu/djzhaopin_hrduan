<template>
  <div>
    <SystemHeader />
  </div>
  <div class="beneath">
    <div class="main">
      <div class="content">
        <div class="solution">
          <span
            v-if="
              (greet =
                ho < 9
                  ? '早上好'
                  : ho < 12
                  ? '上午好'
                  : ho < 15
                  ? '中午好'
                  : ho < 19
                  ? '下午好'
                  : '晚上好')
            "
            >{{ greet }}，{{ store.state.hrInformation.hrName }}</span
          >
          <span>时间和注意力是你最宝贵的财富！~</span>
        </div>
        <div class="label">
          <div>
            <span>{{ interviewNum.length }}</span>
            <span>新简历</span>
          </div>
          <div>
            <span>{{ num.countComunication }}</span>
            <span>待沟通</span>
          </div>
          <div>
            <span>{{ num.countInterviewed }}</span>
            <span> 今日已面试</span>
          </div>
          <div @click="goPosition">
            <span>{{
              store.state.companyInformation.recruitmentPosition
            }}</span>
            <span>在招职位试</span>
          </div>
        </div>
        <div class="bottom">
          <div class="notice">
            <div class="whole">
              <span>全部({{ interviewNum.length }})</span>
              <el-divider direction="vertical" />
              <span>面试({{ num.count }})</span>
            </div>
            <div class="add"></div>
          </div>
          <div class="time-line">
            <el-timeline>
              <el-timeline-item
                v-for="interview in interviewNum"
                :key="interview.updatedAt"
                :timestamp="interview.createdAt"
                placement="top"
              >
                <el-card class="el-card-define">
                  <div class="card">
                    <div class="left">
                      <img src="@/assets/message.png" />
                      <div>
                        <h4>面试提醒</h4>
                        <div class="hint">
                          <p>
                            候选人:{{
                              userInformations.get(interview.userInformationId)
                                ?.firstName +
                              "" +
                              userInformations.get(interview.userInformationId)
                                ?.lastName
                            }}
                          </p>
                          <el-divider direction="vertical" />
                          <p>
                            应聘职位：{{
                              jobInformations.get(
                                interview.positionInformationId
                              )?.positionName
                            }}
                          </p>
                        </div>
                        <p>面试时间：{{ interview.interviewTime }}</p>
                      </div>
                    </div>
                    <div class="right">
                      <el-button
                        type="primary"
                        @click="inspectionResume(interview.userInformationId)"
                        >查看简历</el-button
                      >
                    </div>
                  </div>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SystemHeader from "@/components/System/SystemHeader.vue";
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
import { failResponseHandler } from "@/utils/handler";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore(key);
const ho = new Date().getHours();
const greet = "";
const interviewNum = ref<DeliveryRecord[]>([]);
const num = ref({
  count: 0,
  countComunication: 0,
  countInterviewed: 0,
});
const userInformations = ref<Map<string, UserInformation>>(new Map());
const jobInformations = ref<Map<string, PositionInformation>>(new Map());
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
onMounted(() => {
  getCompanyInfosP0DeliveryRecords(
    store.state.hrInformation.companyInformationId,
    valueMap.value
  )
    .then((res) => {
      store.commit("setDeliveryRecord", res.data.body);
      interviewNum.value = res.data.body;
      interviewNum.value.forEach((item) => {
        getCompanyInfosP0PositionInfosP1(
          store.state.hrInformation.companyInformationId,
          item.positionInformationId
        ).then((response) => {
          jobInformations.value.set(
            item.positionInformationId,
            response.data.body
          );
        });
        getUserInfosP0(item.userInformationId).then((responseable) => {
          userInformations.value.set(
            item.userInformationId,
            responseable.data.body
          );
        });
        if (item.status == 4) {
          num.value.count = num.value.count + 1;
        } else if (item.status == 2) {
          num.value.countComunication = num.value.countComunication + 1;
        } else if (item.status == 3) {
          num.value.countInterviewed = num.value.countInterviewed + 1;
        }
      });
    })
    .catch(failResponseHandler);
});
const goPosition = () => {
  router.push("/System/Position");
};
const inspectionResume = (id: string) => {
  router.push({
    name: "Resume",
    params: {
      userId: id,
    },
  });
};
</script>

<style scoped lang="scss">
.beneath {
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;

  .main {
    display: flex;
    justify-content: center;
    width: 95%;
    height: auto;
    margin-top: 25px;
    border: solid 1px #ccc;
    border-radius: 10px;

    .content {
      width: 90%;
      margin-top: 45px;

      .solution {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 45px;

        :nth-child(2) {
          font-size: 16px;
          color: #ccc;
          letter-spacing: 2px;
        }
      }

      .label {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 100px;
        margin-top: 30px;
        background-color: rgb(250 250 250);
        border: solid 2px #f5f6f7;

        div {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 100%;
          height: 100%;
          font-size: 18px;
          font-weight: 400;
          letter-spacing: 2px;

          span {
            text-align: center;
          }
        }
      }

      .bottom {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: auto;
        margin-top: 30px;

        .notice {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 50px;
          background-color: rgb(250 250 250);
          border: solid 1px #f3f4f5;

          .whole {
            height: 21px;
            margin-left: 30px;

            :first-child {
              color: rgb(0 179 139);
            }
          }

          .add {
            display: flex;
            align-items: center;
            height: 21px;
            margin-right: 30px;
          }
        }

        .time-line {
          height: auto;
          margin-top: 40px;

          .card {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .left {
              display: flex;
              align-items: center;

              img {
                width: 40px;
                height: 40px;
              }

              .hint {
                display: flex;
                align-items: center;
              }
            }
          }
        }
      }
    }
  }
}
</style>
