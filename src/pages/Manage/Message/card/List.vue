<template>
  <el-scrollbar height="670px">
    <div id="list">
      <div
        v-for="(messages, key) in _messages[
          mainStore.hrInformation.hrInformationId
        ]"
        :key="key"
        class="job-hunter"
        :class="{ active: key === activeKey }"
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
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { getUserInfosP0 } from "@/services/services";
import {
  DeliveryRecord,
  PositionInformation,
  UserInformation,
} from "@/services/types";
import {
  useMainStore,
  useMessageStore,
  withReadStateMessageRecord,
} from "@/stores/main";
import { storeToRefs } from "pinia";
import { defineProps, onMounted, PropType, ref } from "vue";
import { useRoute } from "vue-router";
const VITE_CDN_URL = import.meta.env.VITE_CDN_URL as string;
const mainStore = useMainStore();
const messageStore = useMessageStore();
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
const route = useRoute();
const { messages: _messages } = storeToRefs(messageStore);
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
onMounted(() => {
  if (route.params) {
    activeKey.value = route.params.userId.toString();
  }

  // store.messages[props.chatId].forEach((item) => {
  //   let date=new Date(item.updatedAt);
  //  let now= Date.now();

  //   item.
  // });
});
const store = useMainStore();
const _userinfos = ref<Map<string | number, UserInformation>>(new Map());
for (const key in _messages.value[store.hrInformation.hrInformationId]) {
  getUserInfosP0(key).then((res) => {
    _userinfos.value.set(key, res.data.body);
  });
}
const activeKey = ref<string | number>("");
const selectPerson = (
  id: string | number,
  userInfo: UserInformation | undefined
) => {
  emit("submitMessage", { id: id, userInfo: userInfo });
  activeKey.value = id;
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

    &.active {
      cursor: pointer;
      background-color: rgb(147 255 232);
    }
  }

  .job-hunter:hover {
    cursor: pointer;
    background-color: rgb(191 254 209);
  }
}
</style>
