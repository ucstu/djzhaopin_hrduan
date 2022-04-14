<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div>
          <system-headeer />
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px" style="background-color: rgb(240 250 250)">
          <el-scrollbar>
            <el-menu
              active-text-color="#999"
              text-color="#000"
              background-color="rgb(240, 250, 250)"
              router="true"
            >
              <el-menu-item index="/System/Message">
                <el-icon>
                  <chat-dot-square />
                </el-icon>
                <span>消息</span>
              </el-menu-item>
              <el-menu-item index="/System/Position">
                <el-icon>
                  <house />
                </el-icon>
                <span>职位管理</span>
              </el-menu-item>
              <el-sub-menu index="3">
                <template #title>
                  <el-icon> <Document /> </el-icon>简历管理
                </template>
                <el-menu-item-group class="item-text">
                  <template #title></template>
                  <el-menu-item index="/System/ResumeRecevie"
                    >收到的简历</el-menu-item
                  >
                  <el-menu-item index="/System/ResumeDownload"
                    >下载的简历</el-menu-item
                  >
                </el-menu-item-group>
              </el-sub-menu>
              <el-menu-item index="/System/Interview">
                <el-icon>
                  <alarm-clock />
                </el-icon>
                <span>面试管理</span>
              </el-menu-item>
              <el-menu-item index="/System/Talent">
                <el-icon>
                  <search />
                </el-icon>
                <span>人才库</span>
              </el-menu-item>
              <el-menu-item index="/System/Data">
                <el-icon>
                  <files />
                </el-icon>
                <span>数据中心</span>
              </el-menu-item>
              <el-menu-item index="/System/Individual">
                <el-icon>
                  <user />
                </el-icon>
                <span>个人中心</span>
              </el-menu-item>
            </el-menu>
          </el-scrollbar>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import {
  AlarmClock,
  ChatDotSquare,
  Document,
  Files,
  House,
  Search,
  User,
} from "@element-plus/icons-vue";
import SystemHeadeer from "./SystemHeadeer.vue";
</script>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
}

.el-header {
  height: 42.5px;
}

.common-layout {
  height: 100%;
}

.el-container {
  height: 100%;

  .el.aside {
    height: 100%;
  }
}

.el-menu {
  ::v-deep .item-text {
    padding: 0;
    font-size: 10px;
    color: greenyellow;
  }
}
</style>
