<template>
  <div id="chat-bottom">
    <el-input
      v-if="!isEmpty"
      v-model="content"
      autosize
      type="textarea"
      placeholder="Please input"
    />
    <el-input
      v-model="content"
      :autosize="{ minRows: 9, maxRows: 9 }"
      type="textarea"
      placeholder="按下Enter 发送"
      @keyup="sentMessage"
    />
    <el-button type="primary" @click="sentMessage1">发送</el-button>
  </div>
</template>

<script lang="ts" setup>
import { sendMessage } from "@/utils/stomp";
import { defineProps, ref, watchEffect } from "vue";
const isEmpty = ref(true);
const content = ref("");

let props = defineProps({
  chatId: {
    type: String,
    default: "",
  },
});

watchEffect(() => {
  let id = props.chatId;
});

const sentMessage = (e: any) => {
  if (e.key === "Enter") {
    if (content.value) {
      sendMessage(content.value, 1, props.chatId, 1);
      content.value = "";
    }
  }
};

const sentMessage1 = () => {
  if (content.value) {
    sendMessage(content.value, 1, props.chatId, 1);
    content.value = "";
  }
};
</script>

<style lang="scss" scoped>
#chat-bottom {
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 30%;
  border-top: solid 1px #ddd;

  ::v-deep .el-input {
    max-height: 100%;
    border: none;
    border-top: transparent;
  }

  .el-button {
    display: flex;
    width: 120px;
    height: 100%;
  }
}
</style>
