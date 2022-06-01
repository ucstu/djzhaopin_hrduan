<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div>
          <SystemHeader />
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px" style="background-color: rgb(240 250 250)">
          <el-scrollbar>
            <el-menu
              active-text-color="#999"
              text-color="#000"
              background-color="rgb(240, 250, 250)"
              :router="true"
            >
              <el-menu-item index="/System/Message">
                <el-icon>
                  <ChatDotSquare />
                </el-icon>
                <span>消息</span>
              </el-menu-item>
              <el-menu-item index="/System/Position">
                <el-icon>
                  <House />
                </el-icon>
                <span>职位管理</span>
              </el-menu-item>
              <el-menu-item index="/System/ResumeRecevie">
                <el-icon> <Document /> </el-icon>
                <span>简历管理</span>
              </el-menu-item>
              <el-menu-item index="/System/Interview">
                <el-icon>
                  <AlarmClock />
                </el-icon>
                <span>面试管理</span>
              </el-menu-item>
              <el-menu-item index="/System/Talent">
                <el-icon>
                  <Search />
                </el-icon>
                <span>匹配人才</span>
              </el-menu-item>
              <el-menu-item index="/System/Data">
                <el-icon>
                  <Files />
                </el-icon>
                <span>数据中心</span>
              </el-menu-item>
              <el-menu-item index="/System/Individual">
                <el-icon>
                  <User />
                </el-icon>
                <span>个人中心</span>
              </el-menu-item>
            </el-menu>
          </el-scrollbar>
        </el-aside>
        <el-main>
          <router-view #="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
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
import { useRoute } from "vue-router";
import SystemHeader from "./SystemHeader.vue";
const route = useRoute();
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
  height: 100vw;
}

.el-container {
  height: 100%;

  .el.aside {
    height: 100%;
  }

  .el-main {
    height: 100%;
    background-color: rgb(240 255 250);
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
