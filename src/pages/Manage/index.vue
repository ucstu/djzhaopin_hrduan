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
            >{{ greet }}，{{ store.state.hrInfo.name }}</span
          >
          <span>时间和注意力是你最宝贵的财富！~</span>
        </div>
        <div class="label">
          <div>
            <span>1</span>
            <span>新简历</span>
          </div>
          <div>
            <span>2</span>
            <span>待沟通</span>
          </div>
          <div>
            z
            <span>3</span>
            <span> 今日已面试</span>
          </div>
          <div>
            <span>4</span>
            <span>在招职位试</span>
          </div>
        </div>
        <div class="bottom">
          <div class="notice">
            <div class="whole">
              <span>全部({{}})</span>
              <el-divider direction="vertical" />
              <span>面试({{}})</span>
            </div>
            <div class="add">
              <el-icon>
                <Plus />
              </el-icon>
              <span>添加备注</span>
            </div>
          </div>
          <div class="time-line">
            <el-timeline>
              <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card class="el-card-define">
                  <div class="card">
                    <div class="left">
                      <img src="../../assets/message.png" />
                      <div>
                        <h4>面试提醒</h4>
                        <div class="hint">
                          <p>候选人:{{}}</p>
                          <el-divider direction="vertical" />
                          <p>应聘职位：{{}}</p>
                        </div>
                        <p>面试时间：{{}}</p>
                      </div>
                    </div>
                    <div class="right">
                      <el-button type="primary">查看简历</el-button>
                    </div>
                  </div>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/3" placement="top">
                <el-card>
                  <div class="card">
                    <div class="left">
                      <img src="../../assets/message.png" />
                      <div>
                        <h4>面试提醒</h4>
                        <div class="hint">
                          <p>候选人:{{}}</p>
                          <el-divider direction="vertical" />
                          <p>应聘职位：{{}}</p>
                        </div>
                        <p>面试时间：{{}}</p>
                      </div>
                    </div>
                    <div class="right">
                      <el-button type="primary">查看简历</el-button>
                    </div>
                  </div>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/2" placement="top">
                <el-card>
                  <div class="card">
                    <div class="left">
                      <img src="../../assets/message.png" />
                      <div>
                        <h4>面试提醒</h4>
                        <div class="hint">
                          <p>候选人:{{}}</p>
                          <el-divider direction="vertical" />
                          <p>应聘职位：{{}}</p>
                        </div>
                        <p>面试时间：{{}}</p>
                      </div>
                    </div>
                    <div class="right">
                      <el-button type="primary">查看简历</el-button>
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
import SystemHeader from "@/components/SystemHeadeer.vue";
import { key } from "@/stores";
import { Plus } from "@element-plus/icons-vue";
import { useStore } from "vuex";
const store = useStore(key);
const ho = new Date().getHours();
const greet = "";
</script>

<style scoped lang="scss">
.beneath {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;

  .main {
    display: flex;
    justify-content: center;
    width: 95%;
    height: 1100px;
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
