<template>
  <div id="list">
    <div
      v-for="deliveryRecord in deliveryRecords"
      :key="deliveryRecord.deliveryRecordId"
      class="job-hunter"
      @click="selectPerson(deliveryRecord.userInformationId)"
    >
      <el-badge :value="1" :max="10" class="item">
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
import { useMainStore } from "@/stores/main";
import { defineProps, PropType, ref } from "vue";
const VITE_CDN_URL = import.meta.env.VITE_CDN_URL as string;
const store = useMainStore();
const condition = ref(false);
let emit = defineEmits(["submitMessage"]);
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
const selectPerson = (id: string) => {
  store.charList.push(id);
  condition.value = true;
  emit("submitMessage", condition.value);
};
</script>

<style lang="scss" scoped>
#list {
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

  .job-hunter:hover {
    cursor: pointer;
    background-color: rgb(113 255 153);
  }

  .job-hunter:active {
    cursor: pointer;
    background-color: rgb(0 179 139);
  }
}
</style>
