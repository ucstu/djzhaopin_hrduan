<template>
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
              userInformations.get(deliveryRecord.userInformationId)?.avatarUrl
            "
            alt=""
          />
          <div class="header-person">
            <div>
              <span>{{
                userInformations.get(deliveryRecord.userInformationId)
                  ?.firstName +
                "" +
                userInformations.get(deliveryRecord.userInformationId)?.lastName
              }}</span>
              <span
                >·男·<span>{{
                  userInformations.get(deliveryRecord.userInformationId)?.age
                }}</span
                >岁·<span>{{
                        educations[
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
                  jobInformations.get(deliveryRecord.positionInformationId)
                    ?.positionName
                }}|{{
                  jobInformations.get(deliveryRecord.positionInformationId)
                    ?.startingSalary +
                  "K-" +
                  jobInformations.get(deliveryRecord.positionInformationId)
                    ?.ceilingSalary +
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
</template>

<script setup lang="ts">
import router from "@/router";
import {
  getCompanyinfosP0Deliveryrecords,
  getCompanyinfosP0PositioninfosP1,
  getUserinfosP0,
} from "@/services/services";
import {
  DeliveryRecord,
  PositionInformation,
  UserInformation,
} from "@/services/types";
import { key } from "@/stores";
import { ref } from "vue";
import { useStore } from "vuex";

const VITE_CDN_URL = import.meta.env.VITE_CDN_URL as string;
const store = useStore(key);
const deliveryRecords = ref<DeliveryRecord[]>([]);
const slution = { 1: "随时入职", 2: "2周内入职", 3: "1月内入职" };
const educations = { 1: "大专", 2: "本科", 3: "硕士", 4: "博士" };
const checked1 = ref(false);
const userInformations = ref<Map<string, UserInformation>>(new Map());
const jobInformations = ref<Map<string, PositionInformation>>(new Map());

getCompanyinfosP0Deliveryrecords(
  store.state.companyInformation.companyInformationId,
  { status: [4] }
).then((res) => {
  deliveryRecords.value = res.data.body;
  deliveryRecords.value.forEach((item) => {
    getUserinfosP0(item.userInformationId).then((response) => {
      userInformations.value.set(item.userInformationId, response.data.body);
    });
    getCompanyinfosP0PositioninfosP1(
      store.state.companyInformation.companyInformationId,
      item.positionInformationId
    ).then((res) => {
      jobInformations.value.set(item.positionInformationId, res.data.body);
    });
  });
});

const inspectionResume = (id: string) => {
  router.push({
    name: "Resume",
    params: {
      userInformationId: id,
    },
  });
};
</script>

<style lang="scss" scoped>
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
</style>
