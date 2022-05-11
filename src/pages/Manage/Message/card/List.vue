<template>
  <div id="list">
    <div
      v-for="(messages, key) in _messages"
      :key="key"
      class="job-hunter"
      @click="selectPerson(key, _userinfos.get(key))"
    >
      <el-badge :value="countNum(messages)" :max="10" class="item">
        <div class="hunter">
          <img :src="VITE_CDN_URL + _userinfos.get(key)?.avatarUrl" alt="" />
          <div class="hunter-info">
            <span>{{
              _userinfos.get(key)?.firstName +
              "" +
              _userinfos.get(key)?.lastName
            }}</span>
            <div class="info">
              <span>{{ _userinfos.get(key)?.cityName }}</span>
            </div>
          </div>
        </div>
      </el-badge>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getUserInfosP0 } from "@/services/services";
import {
  DeliveryRecord,
  PositionInformation,
  UserInformation,
} from "@/services/types";
import { useMessageStore, withReadStateMessageRecord } from "@/stores/main";
import { storeToRefs } from "pinia";
import { defineProps, PropType, ref } from "vue";
const VITE_CDN_URL = import.meta.env.VITE_CDN_URL as string;
const store = useMessageStore();
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

const { messages: _messages } = storeToRefs(store);
const countNum = (messages: withReadStateMessageRecord[]) => {
  let num = 0;
  messages.forEach((item) => {
    if (!item.haveRead && item.initiateType === 1) {
      num++;
    }
  });
  if (num === 0) {
    return "";
  }
  return num;
};
// _messages.value["d5ec4bd5-da73-441c-a9ea-3db0b148649a"] = [
//   {
//     haveRead: true,
//     content: "string",
//     createdAt: "string",
//     initiateId: "d5ec4bd5-da73-441c-a9ea-3db0b148649a",
//     initiateType: 1,
//     messageRecordId: "dfsfsf",
//     messageType: 2,
//     serviceId: "7b8b5d6a-6d62-4314-9785-a166c0349531",
//     serviceType: 1,
//     updatedAt: "string",
//   },
// ];
const _userinfos = ref<Map<string | number, UserInformation>>(new Map());
for (const key in _messages.value) {
  getUserInfosP0(key).then((res) => {
    _userinfos.value.set(key, res.data.body);
  });
}
const selectPerson = (
  id: string | number,
  userInfo: UserInformation | undefined
) => {
  emit("submitMessage", { id: id, userInfo: userInfo });
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
            margin-left: 5px;
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
