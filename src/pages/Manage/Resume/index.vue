<template>
  <div class="content">
    <div class="main">
      <div class="center">
        <div class="total">
          <div class="left">
            <div class="avatar">
              <img
                :src="
                  userInfo?.avatarUrl
                    ? VITE_CDN_URL + userInfo.avatarUrl
                    : VITE_CDN_URL + imgUrl
                "
                alt="avatar"
              />
            </div>
            <div class="info">
              <span class="name">{{ userInfo ? userName : "" }}</span>
              <span class="state">
                <el-breadcrumb separator="/">
                  <el-breadcrumb-item>{{ userInfo?.sex }}</el-breadcrumb-item>
                  <el-breadcrumb-item>{{
                    userInfo?.age + "岁"
                  }}</el-breadcrumb-item>
                  <el-breadcrumb-item>{{
                    educationMap[userInfo.education]
                  }}</el-breadcrumb-item>
                  <el-breadcrumb-item>{{
                    userInfo?.workingYears
                      ? userInfo.workingYears + "年"
                      : "无经验"
                  }}</el-breadcrumb-item>
                </el-breadcrumb></span
              >
              <span class="state"
                >求职状态：{{ jobStatusMap[userInfo!.jobStatus] }}</span
              >
              <span class="state"
                >期望职位：{{ positionInfo?.positionName }}</span
              >
              <span class="state">期望地点：{{ userInfo?.cityName }}</span>
              <span class="state"
                >期望薪资：{{
                  positionInfo?.startingSalary +
                  "k" +
                  "-" +
                  positionInfo?.ceilingSalary +
                  "k"
                }}</span
              >
              <el-button
                type="primary"
                @click="toMessage(userInfo!.userInformationId)"
                >在线沟通</el-button
              >
              <h3>工作经历：</h3>
              <p></p>
            </div>
            <div class="info2">
              <div class="img-docu">
                <h3>图片作品：{{ userInfo?.pictureWorks }}</h3>
              </div>
              <div class="project-docu">
                <h3>项目经历:{{}}</h3>
              </div>
            </div>
          </div>

          <div class="right">
            <el-divider
              direction="vertical"
              border-style="dashed"
              style="height: 80%"
            />
            <div class="comment">
              <h4>个人优势</h4>
              <div class="font">{{ userInfo?.personalAdvantage }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import {
  getCompanyInfosP0PositionInfosP1,
  getUserInfosP0,
} from "@/services/services";
import { PositionInformation, UserInformation } from "@/services/types";
import { useMainStore } from "@/stores/main";
import { failResponseHandler } from "@/utils/handler";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const VITE_CDN_URL = import.meta.env.VITE_CDN_URL;
const route = useRoute();
const store = useMainStore();
const userInfo = ref<UserInformation>({} as UserInformation);
const userName = computed(() => {
  return userInfo.value.firstName + userInfo.value.lastName;
});
const positionInfo = ref<PositionInformation>();
const educationMap = { 1: "大专", 2: "本科", 3: "硕士", 4: "博士" };
const jobStatusMap = { 1: "随时入职", 2: "2周内入职", 3: "1月内入职" };
const imgUrl =
  "https://tse1-mm.cn.bing.net/th/id/R-C.7b9f3020f3c91e5f76b4df2e7ea25de1?rik=deUQMVk41dSjNQ&riu=http%3a%2f%2fscimg.jianbihuadq.com%2f202007%2f2020071213324342.jpg&ehk=2kp7%2fRJpUGhKSaZH2j2g8lKPBohMH9veb%2f4AuNFaemc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1";

if (typeof route.params.userId === "string") {
  getUserInfosP0(route.params.userId)
    .then((res) => {
      userInfo.value = res.data.body;
    })
    .catch(failResponseHandler);
} else {
  getUserInfosP0(route.params.userId[0])
    .then((res) => {
      userInfo.value = res.data.body;
    })
    .catch(failResponseHandler);
}
if (typeof route.params.postId === "string") {
  getCompanyInfosP0PositionInfosP1(
    store.companyInformation.companyInformationId,
    route.params.postId
  )
    .then((res) => {
      positionInfo.value = res.data.body;
    })
    .catch(failResponseHandler);
} else {
  getCompanyInfosP0PositionInfosP1(
    store.companyInformation.companyInformationId,
    route.params.postId[1]
  )
    .then((res) => {
      positionInfo.value = res.data.body;
    })
    .catch(failResponseHandler);
}
const toMessage = (userId: string) => {
  router.push({
    name: "Message",
    params: {
      userId: userId,
    },
  });
};
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
      border-radius: 5px;

      .total {
        display: flex;
        justify-content: space-between;
        width: 95%;
        height: 680px;

        .left {
          display: flex;
          width: 100%;

          .avatar {
            width: 15%;
            height: 100%;
            padding-left: 20px;
            margin-top: 40px;

            img {
              width: 80px;
              height: 80px;
              border-radius: 50%;
            }
          }

          .info {
            display: flex;
            flex-direction: column;
            width: 40%;
            height: 100%;
            padding-top: 30px;

            .name {
              margin: 20px 0;
            }

            .state {
              margin: 15px 0;
              font-size: 10px;
              color: rgb(0 179 139);
            }

            .el-button {
              width: 40%;
              height: 50px;
              margin: 15px 0;
            }
          }

          .info2 {
            display: flex;
            flex-direction: column;
            width: 40%;
            height: 100%;
            padding-top: 30px;

            .img-docu {
              width: 100%;
              height: 50%;
            }

            .project-docu {
              width: 100%;
              height: 50%;
            }
          }
        }

        .right {
          display: flex;
          width: 20%;
          height: 100%;
          margin: 5% 0;

          .comment {
            width: 100%;
            text-align: center;

            .font {
              font-size: 14px;
              font-weight: 400;
              letter-spacing: 2px;
              word-wrap: break-word;
            }
          }
        }
      }
    }
  }
}
</style>
