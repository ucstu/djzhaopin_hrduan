<template>
  <div class="content">
    <v-chart class="chart" :option="option" />
  </div>
</template>

<script setup lang="ts">
import { LineChart } from "echarts/charts";
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from "echarts/components";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { provide, ref } from "vue";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  LineChart,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);
provide(THEME_KEY, "dark");
const option = ref({
  title: {
    text: "Traffic Sources",
    left: "center",
  },
  xAxis: {
    data: ["A", "B", "C", "D", "E"],
  },
  yAxis: {},
  series: [
    {
      data: [10, 22, 28, 23, 19],
      type: "line",
      areaStyle: {},
    },
    {
      data: [25, 14, 23, 35, 10],
      type: "line",
      areaStyle: {
        color: "#ff0",
        opacity: 0.5,
      },
    },
  ],
});
</script>

<style scoped lang="scss">
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .chart {
    width: 750px;
    height: 300px;
  }
}
</style>
