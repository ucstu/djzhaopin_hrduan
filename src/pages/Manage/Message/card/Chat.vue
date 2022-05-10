<template>
  <div class="container">
    <template v-if="chatList">
      <el-scrollbar ref="scrollbarRef">
        <div v-for="(chat, index) in chatList" :key="index" class="chat-list">
          <p class="time">
            <span>{{ formatDate(chat.updatedAt) }}</span>
          </p>
          <div v-if="chat.initiateType === 1" class="user-main">
            <img
              class="user-avatar"
              :src="
                userinfomartion.avatarUrl
                  ? VITE_CDN_URL + userinfomartion.avatarUrl.value
                  : ''
              "
              alt=""
            />
            <div class="left-farm">
              <div></div>
              <p class="text">{{ chat.content }}</p>
            </div>
          </div>
          <div v-else class="hr-main">
            <img :src="VITE_CDN_URL + hravatarUrl" alt="" class="hr-avatar" />
            <div class="right-farm">
              <div></div>
              <p class="text">{{ chat.content }}</p>
            </div>
          </div>
        </div>
      </el-scrollbar>
    </template>
    <div v-else class="empty">没有消息</div>
  </div>
</template>

<script setup lang="ts">
import { UserInformation } from "@/services/types";
import { useMainStore, useMessageStore } from "@/stores/main";
import { ElScrollbar } from "element-plus";
import { storeToRefs } from "pinia";
import {
  defineProps,
  nextTick,
  onMounted,
  PropType,
  ref,
  toRefs,
  watchEffect,
} from "vue";
import { useRoute } from "vue-router";

const VITE_CDN_URL = import.meta.env.VITE_CDN_URL as string;
const store = useMessageStore();
const route = useRoute();
const mainStore = useMainStore();
const { avatarUrl: hravatarUrl, hrName } = mainStore.hrInformation;
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>();
let props = defineProps({
  chatId: {
    type: String,
    default: "",
  },
  userInfo: {
    type: Object as PropType<UserInformation>,
    default: () => ({}),
  },
});

const { messages: _messages } = storeToRefs(store);
const userinfomartion = toRefs(props.userInfo);

let chatList = _messages.value[props.chatId];
if (route.params) {
  chatList = _messages.value[route.params.chatId as string];
}

onMounted(() => {
  chatList.forEach((item) => {
    item.haveRead = true;
  });
});

watchEffect(() => {
  if (scrollbarRef.value && chatList.length) {
    nextTick(() => {
      scrollbarRef.value!.scrollTo(
        0,
        scrollbarRef.value!.resize$!.offsetHeight
      );
    });
  }
  let userinfo = props.userInfo;
  let id = props.chatId;
});
const formatDate = (timestamp: any) => {
  return timestamp.replace(/T/g, " ").replace(/\.[\d]{3}Z/, "");
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 70%;
  border: 1px solid #ddd;
  border-bottom: none;

  .el-scrollbar {
    width: 100%;
    height: 100%;
  }

  .chat-list {
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    .time {
      display: flex;
      justify-content: center;
      font-size: 12px;
    }

    .user-main {
      display: flex;
      height: 60px;

      .left-farm {
        display: flex;
        align-items: center;
        width: auto;
        height: 30px;
        padding: 5px;
        margin-left: 10px;
        background-color: #4dcaae;
        border: #ddd 1px solid;
        border-radius: 10px;
      }

      .user-avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
    }

    .hr-main {
      display: flex;
      flex-direction: row-reverse;

      .right-farm {
        display: flex;
        align-items: center;
        width: auto;
        height: 30px;
        padding: 5px;
        margin-right: 10px;
        background-color: #4dcaae;
        border: #ddd 1px solid;
        border-radius: 10px;
      }

      .hr-avatar {
        width: 32px;
        height: 32px;
        margin-right: 10px;
        border-radius: 50%;
      }
    }
  }
}
</style>
