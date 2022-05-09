<template>
  <div id="list">
    <div
      v-for="deliveryRecord in deliveryRecords"
      :key="deliveryRecord.deliveryRecordId"
      class="job-hunter"
      @click="selectPerson(deliveryRecord.userInformationId)"
    >
      <el-badge is-dot class="item">
        <div class="hunter">
          <img
            :src="
              VITE_CDN_URL +
              userInformations.get(deliveryRecord.userInformationId)?.avatarUrl
            "
            alt=""
          />
          <div class="hunter-info">
            <span>{{
              userInformations.get(deliveryRecord.userInformationId)
                ?.firstName +
              "" +
              userInformations.get(deliveryRecord.userInformationId)?.lastName
            }}</span>
            <div class="info">
              <span>{{
                userInformations.get(deliveryRecord.userInformationId)?.cityName
              }}</span>
              <span>{{
                jobInformations.get(deliveryRecord.positionInformationId)
                  ?.positionName
              }}</span>
              <span>{{
                jobInformations.get(deliveryRecord.positionInformationId)
                  ?.startingSalary +
                "K-" +
                jobInformations.get(deliveryRecord.positionInformationId)
                  ?.ceilingSalary +
                "K"
              }}</span>
            </div>
          </div>
        </div>
      </el-badge>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  DeliveryRecord,
  PositionInformation,
  UserInformation,
} from "@/services/types";
import { PropType } from "vue";

const VITE_CDN_URL = import.meta.env.VITE_CDN_URL as string;
defineProps({
  deliveryRecords: {
    type: Array as PropType<DeliveryRecord[]>,
    default: () => [],
  },
  userInformations: {
    type: Map as PropType<Map<string, UserInformation>>,
    default: () => new Map(),
  },
  jobInformations: {
    type: Map as PropType<Map<string, PositionInformation>>,
    default: () => new Map(),
  },
});
// const selectPerson = (id) => {
//   this.$store.commit("changeCurrentSessionId", id);
// };
</script>

<style lang="scss" scoped>
#list {
  li {
    padding: 12px 15px;
    cursor: pointer;
    border-bottom: 1px solid #292c33;

    &:hover {
      background-color: rgb(255 255 255 / 3%);
    }
  }

  li.active {
    /* 注意这个是.不是冒号: */
    background-color: rgb(255 255 255 / 10%);
  }

  .avatar {
    width: 30px;
    height: 30px;
    vertical-align: middle;
    border-radius: 2px;
  }

  .name {
    display: inline-block;
    margin-left: 15px;
  }
}
</style>
