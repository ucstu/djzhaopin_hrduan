<template>
  <div class="data">
    <div class="summary">
      <div class="catalogue"><span class="title">昨日概述</span></div>
      <div class="record">
        <div class="record-item">
          <span>获得浏览量</span>
          <span class="num">0</span>
        </div>
        <div class="record-item">
          <span>获得简历量</span>
          <span class="num">0</span>
        </div>
        <div class="record-item">
          <span>在线沟通量</span>
          <span class="num">0</span>
        </div>
      </div>
    </div>
    <div class="map">
      <el-tabs
        v-model="state.currentView"
        :tab-position="tabPosition"
        class="demo-tabs"
      >
        <div class="map-info">
          <el-date-picker
            v-model="value1"
            type="daterange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"
          />
        </div>
        <el-tab-pane :key="Scan" label="获得浏览量" name="Scan">
          <Scan />
        </el-tab-pane>
        <el-tab-pane :key="Communicate" label="获得简历量" name="Communicate">
          <Communicate />
        </el-tab-pane>
        <el-tab-pane :key="Vita" label="在线沟通量" name="Vita">
          <Vita />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import Communicate from "./Communicate.vue";
import Scan from "./Scan.vue";
import Vita from "./Vita.vue";
const value1 = ref("");
const tabPosition = ref("top");
const state = reactive({
  userID: "",
  // 默认组件，显示第一个组件
  currentView: "Scan",
});
</script>

<style scoped lang="scss">
.data {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgb(240 255 250);

  .summary {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 25%;
    margin-top: 36px;
    margin-right: 49px;
    margin-left: 49px;
    background-color: rgb(255 255 255);
  }

  .catalogue {
    display: flex;
    align-items: center;
    height: 60px;
    background-color: rgb(255 255 255);
    border-bottom: 1px solid #eee;

    .title {
      margin-left: 30px;
      font-weight: bold;
    }
  }

  .record {
    display: flex;
    justify-content: space-around;
    height: 90%;
    background-color: rgb(255 255 255);

    .record-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      .num {
        margin-bottom: 10px;
        font-size: 30px;
        font-weight: 400;
      }
    }
  }

  .map {
    width: 90%;
    height: 450px;
    margin-top: 45px;
    background-color: rgb(255 255 255);
    border: solid 1px rgb(224 224 224);
    border-radius: 5px;

    .el-tabs {
      margin-left: 20px;
    }

    .map-info {
      width: 40%;
      margin-left: 40px;
    }
  }
}
</style>
