<template>
  <div class="center">
    <div class="echarts-box">
      <div id="myEcharts" :style="{ width: '1200px', height: '400px' }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted } from "vue";
let echarts = inject("echarts");
onMounted(() => {
  let myChart = echarts.init(document.getElementById("myEcharts"));
  // 绘制图表
  let option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
  };
  myChart.setOption(option, true);
  window.addEventListener("resize", () => {
    myChart.resize();
  });
});
</script>

<style scoped lang="scss">
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .echarts-box {
    width: 100%;
    height: 100%;
  }
}
</style>
