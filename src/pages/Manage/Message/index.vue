<template>
  <div class="content">
    <div class="chat">
      <div class="left">
        <div class="left-top">
          <span>我的消息</span>
          <span>快速处理</span>
        </div>

        <div class="job-hunter" @click="selectPerson">
          <el-badge is-dot class="item">
            <div class="hunter">
              <img :src="userInfos.avatar" alt="" />
              <div class="hunter-info">
                <span>{{ userInfos.firstName + userInfos.lastName }}</span>
                <div class="info">
                  <span>{{ userInfos.city }}</span>
                  <span>{{ workExperience[userInfos.workingYears - 1] }}</span>
                  <span>{{ slution[userInfos.jobStatus] }}</span>
                </div>
              </div>
            </div>
          </el-badge>
        </div>
      </div>
      <div class="right">
        <div class="right-chat"></div>
        <div class="right-input"></div>
        <div class="right-other"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getUserinfosUserinfoid } from "@/services/services";
import { UserInformation } from "@/services/types";
import { key } from "@/stores";
import { onMounted, ref, toRaw } from "vue";
import { useStore } from "vuex";
const store = useStore(key);
const slution = { 1: "随时入职", 2: "2周内入职", 3: "1月内入职" };
const workExperience = ["1年以下", "1-3年", "3-5年", "5-10年", "10年以上"];
const userInfos = ref<UserInformation>({
  age: 0,
  avatar: "",
  city: "",
  createdAt: "",
  dateOfBirth: "",
  education: "1",
  email: "",
  firstName: "",
  jobStatus: "1",
  lastName: "",
  personalAdvantage: "",
  phoneNumber: "",
  pictureWorks: [],
  privacySettings: "1",
  sex: "",
  socialHomepage: "",
  updatedAt: "",
  userId: "",
  workingYears: 0,
});
const imgUrl = ref(
  "https://tse1-mm.cn.bing.net/th/id/R-C.7b9f3020f3c91e5f76b4df2e7ea25de1?rik=deUQMVk41dSjNQ&riu=http%3a%2f%2fscimg.jianbihuadq.com%2f202007%2f2020071213324342.jpg&ehk=2kp7%2fRJpUGhKSaZH2j2g8lKPBohMH9veb%2f4AuNFaemc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
);
console.log(toRaw(store.state.deliveryRecord));

onMounted(() => {
  getUserinfosUserinfoid(store.state.deliveryRecord.userId).then((res) => {
    console.log(res);
    userInfos.value = res.data.body;
  });
});
const selectPerson = () => {
  console.log(11);
};
// getUserinfosUserinfoid
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgb(245 245 250);

  .chat {
    width: 95%;
    height: 800px;
    background-color: rgb(255 255 255);
    border: solid 1px #ccc;
    border-radius: 5px;

    .left {
      width: 25%;
      height: 100%;
      border-right: 1px solid #ccc;

      .left-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 80px;
        border-right: solid 1px #ccc;
        border-bottom: solid 1px #ccc;

        span {
          margin: 0 10px;
          color: rgb(0 179 139);
        }
      }

      .job-hunter {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 100%;
        height: 80px;
        border-bottom: 1px solid #ccc;

        .el-badge {
          width: 95%;
          height: 95%;

          .hunter {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            height: 100%;

            img {
              width: 50px;
              height: 50px;
              border-radius: 50%;
            }

            .hunter-info {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              width: 60%;
              height: 80%;

              .info {
                display: flex;
                justify-content: space-around;
                margin-left: -10px;
                font-size: 13px;
                color: #ccc;
              }
            }
          }
        }
      }
    }
  }
}
</style>
