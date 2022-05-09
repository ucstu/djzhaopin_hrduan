<template>
  <div class="container">
    <div class="chat-content">
      <template v-if="chatList && chatList.length">
        <div v-for="(chat, index) in chatList" :key="index">
          <p class="time">
            <span>{{ chat }}</span>
          </p>
          <div class="main" :class="{ self: chat }">
            <img class="avatar" :src="imageUrl ? imageUrl : ''" alt="" />
            <p class="text">{{ chat }}</p>
          </div>
        </div>
      </template>
      <div v-else class="empty">没有消息</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getUserInfosP0 } from "@/services/services";
import { useMainStore } from "@/stores/main";
import { ref } from "vue";
const store = useMainStore();
const imageUrl = ref("");
getUserInfosP0(store.charList[0]).then((res) => {
  imageUrl.value = res.data.body.avatarUrl;
});
const chatList = ref(["1"]); // 消息列表
const chatMsg = ref("");
const sendMsg = () => {};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 70%;
  padding: 10px;
  border: 1px solid #ddd;
  border-bottom: none;

  .message-box {
    margin-bottom: 10px;

    .message {
      box-sizing: border-box;
      width: 100%;
      margin-top: 5px;
      margin-left: 42px;
      border-radius: 4px;

      .block {
        display: inline-block;
        padding: 8px;
        font-size: 14px;
        line-height: 1.5;
        background-color: #eee;
        border-radius: 4px;
      }
    }

    .user {
      .avatar {
        width: 32px;
        height: 32px;
        margin-right: 10px;
      }
    }

    .info {
      display: flex;
      justify-content: center;
      font-size: 12px;
      color: #999;

      .name {
        margin-left: 10px;
      }
    }

    &.right-message {
      text-align: right;

      .message {
        padding-right: 42px;
        margin-left: auto;
      }

      .user {
        justify-content: flex-end;
        margin-right: 0;
        margin-left: 10px;

        .name {
          margin-right: 0;
          margin-left: 10px;
        }
      }

      .avatar {
        margin-right: 0;
        margin-left: 10px;
      }
    }
  }
}

// .chat-bottom {
//   display: flex;

//   .empty {
//     padding: 50px 0;
//     font-size: 14px;
//     text-align: center;
//   }

//   .chat-input {
//     &:deep(el-input__inner) {
//       border-top-left-radius: 0;
//       border-top-right-radius: 0;
//       border-bottom-right-radius: 0;
//     }
//   }

//   .chat-btn {
//     border-top-left-radius: 0;
//     border-top-right-radius: 0;
//     border-bottom-left-radius: 0;
//   }
// }
</style>
