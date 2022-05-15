<template>
  <div class="container">
    <el-scrollbar ref="scrollbarRef">
      <div v-for="(chat, index) in chatList" :key="index" class="chat-list">
        <p class="time">
          <span>{{ formatDate(chat.updatedAt) }}</span>
        </p>
        <div v-if="chat.initiateType === 1" class="user-main">
          <div class="user-info">
            <img
              class="user-avatar"
              :src="
                userinfomartion.avatarUrl
                  ? VITE_CDN_URL + userinfomartion.avatarUrl
                  : ''
              "
              alt=""
            />
            <span class="name">{{
              userinfomartion.firstName + userinfomartion.lastName
            }}</span>
          </div>
          <div class="left-farm">
            <p class="text">{{ chat.content }}</p>
          </div>
        </div>
        <div v-else class="hr-main">
          <div class="hr-info">
            <img :src="VITE_CDN_URL + hravatarUrl" alt="" class="hr-avatar" />
            <span class="name">{{ hrName }}</span>
          </div>
          <div class="right-farm">
            <p class="text">{{ chat.content }}</p>
          </div>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { UserInformation } from "@/services/types";
import {
useMainStore,
useMessageStore,
withReadStateMessageRecord
} from "@/stores/main";
import { ElScrollbar } from "element-plus";
import { storeToRefs } from "pinia";
import {
computed,
defineProps,
nextTick,
onMounted,
PropType,
ref,
watchEffect
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
const userinfomartion = ref<UserInformation>({ ...props.userInfo });

const chatList = ref<withReadStateMessageRecord[]>([]);
watchEffect(() => {
  if (scrollbarRef.value && chatList.value.length) {
    nextTick(() => {
      scrollbarRef.value!.scrollTo(
        0,
        scrollbarRef.value!.resize$!.offsetHeight
      );
    });
  }
  let userinfo = props.userInfo;
  let id = props.chatId;
  chatList.value = store.messages[id];
  userinfomartion.value = userinfo;
});

onMounted(() => {
  if (chatList.value) {
    chatList.value.forEach((item) => {
      item.haveRead = true;
    });
  }
  if (route.params) {
    chatList.value = computed(() => store.messages[props.chatId]).value;
  }
  store.messages[props.chatId].forEach((item) => {
    const date=new Date(item.updatedAt);
    const now= Date.now();
    item.
  });
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

      .user-info {
        display: flex;
        flex-direction: column;

        .name {
          font-size: 8px;
          color: #999;
        }
      }

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

      .hr-info {
        display: flex;
        flex-direction: column;

        .name {
          font-size: 8px;
          color: #999;
        }
      }

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

        .name {
          font-size: 14px;
          color: #fff;
        }
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
