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
    <div class="button">
      <el-button type="primary" :icon="Plus" @click="addComprise" />
      <el-dropdown size="large" @command="handleCommand">
        <span class="el-dropdown-link">
          使用常用语
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              v-for="prise in comprise"
              :key="prise"
              :command="prise"
              >{{ prise }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-button type="primary" @click="sentMessage1">发送</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";
import { useCompriseStore } from "@/stores/main";
import { sendMessage } from "@/utils/stomp";
import { Plus } from "@element-plus/icons-vue";
import { defineProps, ref, watchEffect } from "vue";
const isEmpty = ref(true);
const content = ref("");
const store = useCompriseStore();
const comprise = store.comprise;
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
const handleCommand = (command: string) => {
  content.value = content.value + command;
};
const sentMessage1 = () => {
  if (content.value) {
    sendMessage(content.value, 1, props.chatId, 1);
    content.value = "";
  }
};
const addComprise = () => {
  router.push({ name: "Comprises" });
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

  .button {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    .el-button {
      width: 120px;
      height: 100%;
    }
  }
}

.example-showcase .el-dropdown-link {
  display: flex;
  align-items: center;
  width: 100%;
  color: var(--el-color-primary);
  cursor: pointer;
}
</style>
