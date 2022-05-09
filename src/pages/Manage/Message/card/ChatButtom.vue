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
      :autosize="{ minRows: 11, maxRows: 101 }"
      type="textarea"
      placeholder="按下Enter 发送"
      @keyup="addMessage"
    />
    <el-button>发送</el-button>
  </div>
</template>

<script lang="ts" setup>
import { useMainStore } from "@/stores/main";
import { ref } from "vue";
const isEmpty = ref(true);
const content = ref("");
const store = useMainStore();
const addMessage = (e: any) => {
  // if (e.key === "Enter") {
  // }
};
</script>

<style lang="scss" scoped>
#chat-bottom {
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 30%;
  border-top: solid 1px #ddd;

  ::v-deep .el-input {
    max-height: 100%;
    border: none;
    border-top: transparent;
  }
}
</style>
