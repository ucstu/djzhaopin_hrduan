<template>
  <div class="content">
    <div class="main">
      <div class="center">
        <div class="total">
          <div class="top">
            <div class="first-line">
              <el-select
                v-model="deliveryRecord.interviewTime"
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
                v-model="deliveryRecord.interviewTime"
                class="m-2"
                placeholder="工作经验"
              >
                <el-option
                  v-for="item in workExperience"
                  :key="item"
                  :label="item"
                  :value="item"
                />
              </el-select>
              <el-select
                v-model="deliveryRecord.interviewTime"
                class="m-2"
                placeholder="学历"
              >
                <el-option
                  v-for="item in education"
                  :key="item"
                  :label="item"
                  :value="item"
                />
              </el-select>
              <el-date-picker
                v-model="deliveryRecord.interviewTime"
                type="date"
                placeholder="Pick a date"
                class="data-picker"
                :default-value="new Date(2010, 9, 1)"
              />
            </div>
            <div class="second-line">
              <el-select
                v-model="deliveryRecord.interviewTime"
                class="m-2"
                placeholder="性别"
              >
                <el-option
                  v-for="item in gander"
                  :key="item"
                  :label="item"
                  :value="item"
                />
              </el-select>
              <el-select
                v-model="deliveryRecord.interviewTime"
                class="m-2"
                placeholder="年龄"
              >
                <el-option
                  v-for="item in age"
                  :key="item"
                  :label="item"
                  :value="item"
                />
              </el-select>
              <el-select
                v-model="deliveryRecord.interviewTime"
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
                v-model="deliveryRecord.interviewTime"
                class="w-50 m-2"
                input-style="max-width: 220px;"
                placeholder="Type something"
                :prefix-icon="Search"
              />
            </div>
          </div>
          <div class="resume">
            <el-scrollbar height="400px">
              <div class="resume-item">
                <div class="item-header">
                  <el-checkbox v-model="checked1" />
                  <img
                    src="https://tse1-mm.cn.bing.net/th/id/R-C.b4504d02c6b9a71453c61fef88578b77?rik=rBhjlBcXKOZkiw&riu=http%3a%2f%2fimg.jj20.com%2fup%2fallimg%2ftx25%2f380412030426662.jpg&ehk=MrcDJRR%2fT3NWdla%2fkub6nInyr7M3eZF72Kzo%2brbcCVI%3d&risl=&pid=ImgRaw&r=0"
                    alt=""
                  />
                  <div class="header-person">
                    <span>姓名</span>
                    <span>男·35岁·高中毕业·经验丰富</span>
                    <span>想找：重庆|货运司机|面议</span>
                  </div>
                </div>
                <div>{{ " 求高薪 | 求稳定 | 求发展 " }}</div>
                <div><el-button type="primary">查看简历</el-button></div>
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
import { DeliveryRecord } from "@/services/types";
import { Search } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
const deliveryRecord = reactive<DeliveryRecord>({
  deliveryRecordId: "",
  createdAt: "",
  updatedAt: "",
  userId: "",
  state: "1",
  interviewTime: "",
  jobInformationId: "",
});
const checked1 = ref(false);
const feedbackMap = ["已通过", "已拒绝", "待审核"];
const gander = ["男", "女"];
const workExperience = ["1年以下", "1-3年", "3-5年", "5-10年", "10年以上"];
const education = ["大专", "本科", "硕士", "博士"];
const age = ["18-25", "25-35", "35-45", "45-55", "55-65"];
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
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 49px;
            border-bottom: solid 1px rgb(221 221 221);

            .item-header {
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 20%;
              margin-left: 15px;

              img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
              }

              .header-person {
                display: flex;
                flex-direction: column;
                font-size: 7px;
              }
            }

            .el-button {
              margin-right: 20px;
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
