<template>
  <div class="container">
    <div class="chat-content">
      <template v-if="chatList && chatList.length"> </template>
      <div v-else class="empty">没有消息</div>
    </div>
    <div class="chat-bottom">
      <el-input v-model="chatMsg" class="chat-input" placeholder="请输入内容" />
      <el-button class="chat-btn" type="primary" @click="sendMsg"
        >发送</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const chatList = ref([]); // 消息列表
const chatMsg = ref("");
const sendMsg = () => {};
</script>

<style lang="scss" scoped>
.container {
  padding: 24px;
}

.chat-content {
  box-sizing: border-box;
  width: 100%;
  height: 600px;
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

.chat-bottom {
  display: flex;

  .empty {
    padding: 50px 0;
    font-size: 14px;
    text-align: center;
  }

  .chat-input {
    &:deep(el-input__inner) {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  .chat-btn {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>
