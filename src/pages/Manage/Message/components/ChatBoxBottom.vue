<template>
  <div id="chat-bottom">
    <textarea
      v-model="content"
      placeholder="按下Enter发送"
      class="input-content"
      @keyup="sentMessage"
    ></textarea>
    <div class="button">
      <el-button type="primary" :icon="Plus" round @click="addComprise" />
      <div class="icon" @click="uploadimg">
        <input
          ref="uploadInput"
          type="file"
          style="display: none"
          name="icon"
          @change="dealimgchange"
        />
        <el-icon size="40px" color="#999"><PictureFilled /></el-icon>
      </div>
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
            <el-dropdown-item v-if="comprise.length === 0" disabled
              >请点击左边前往添加常用语</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <div class="icon" @click="uploadFile">
        <input
          ref="uploadfileInput"
          type="file"
          style="display: none"
          name="icon"
          @change="dealfilechange"
        />
        <el-icon size="40px" color="#999"><FolderOpened /></el-icon>
      </div>
      <el-button type="primary" round @click="sentMessage1">发送</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";
import { postFiles } from "@/services/services";
import { useCompriseStore } from "@/stores/main";
import { failResponseHandler } from "@/utils/handler";
import { sendMessage } from "@/utils/stomp";
import {
  ArrowDown,
  FolderOpened,
  PictureFilled,
  Plus,
} from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { defineProps, ref } from "vue";
const VITE_CDN_URL = import.meta.env.VITE_CDN_URL as string;
const content = ref("");
const store = useCompriseStore();
const comprise = store.comprise;
let props = defineProps({
  chatId: {
    type: String,
    default: "",
  },
});
//上传，发送图片
const uploadInput = ref<HTMLElement | null>(null);
const uploadimg = () => {
  if (props.chatId) {
    let oBtn = uploadInput.value as HTMLInputElement;
    oBtn.click();
  } else {
    ElMessage.error("请先选择聊天对象");
  }
};
// 上传图片并发送给对方的功能。
const dealimgchange = (e: Event) => {
  const input = e.target as HTMLInputElement;
  let files = input.files;
  if (files) {
    postFiles({ file: files[files.length - 1] })
      .then((res) => {
        sendMessage(res.data.body, 2, props.chatId, 1);
      })
      .catch(failResponseHandler);
  }
};
const uploadfileInput = ref<HTMLElement | null>(null);
const uploadFile = () => {
  if (props.chatId) {
    let oBtn = uploadfileInput.value as HTMLInputElement;
    oBtn.click();
  } else {
    ElMessage.error("请先选择聊天对象");
  }
};
//上传，发送文件
const dealfilechange = (e: Event) => {
  const input = e.target as HTMLInputElement;
  let files = input.files;
  if (files) {
    postFiles({ file: files[files.length - 1] })
      .then((res) => {
        sendMessage(VITE_CDN_URL + res.data.body, 4, props.chatId, 1);
      })
      .catch(failResponseHandler);
  }
};
const sentMessage = (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    if (props.chatId) {
      if (content.value) {
        sendMessage(content.value, 1, props.chatId, 1);
        content.value = "";
      }
    } else {
      ElMessage.warning("请先选择聊天对象");
    }
  }
};
const handleCommand = (command: string) => {
  content.value = content.value + command;
};
// 发送消息的功能。
const sentMessage1 = () => {
  if (props.chatId) {
    if (content.value) {
      sendMessage(content.value, 1, props.chatId, 1);
      content.value = "";
    }
  } else {
    ElMessage.warning("请先选择聊天对象");
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

  .input-content {
    width: 99%;
    height: 1100px;
    overflow: hidden;
    font-size: 16px;
    resize: none;
    border: none;

    &:focus {
      outline: none;
    }

    &::placeholder {
      position: relative;
      top: -80px;
      left: 20px;
    }
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    border-top: solid 1px #ddd;

    .icon {
      width: 60px;
      height: 100%;
    }

    .el-button {
      width: 100px;
      height: 80%;
      margin: 0 5px;
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
