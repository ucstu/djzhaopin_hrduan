<template>
  <div class="content">
    <v-chart class="chart" :option="option" />
  </div>
</template>

<script setup lang="ts">
import useGetDayAll from "@/hooks/useGetdata";
import { LineChart } from "echarts/charts";
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from "echarts/components";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { defineProps, PropType, provide, ref, watch, watchEffect } from "vue";
import VChart, { THEME_KEY } from "vue-echarts";

let props = defineProps({
  inspectionRecordCounts: {
    type: Array as PropType<number[]>,
    default: () => [],
  },
  dataInfo: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  title: {
    type: String,
    default: "",
  },
});
const inspectDate = ref();
const dataList = ref(["2022-05-01", "2022-05-01"]);
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
    text: props.title,
    left: "center",
  },

  xAxis: {
    data: dataList.value,
  },
  yAxis: {},
  series: [
    {
      data: inspectDate.value,
      type: "line",
      areaStyle: {
        color: "#ff0",
        opacity: 0.5,
      },
    },
    {
      data: [10, 15, 32, 21, 23],
      type: "line",
      areaStyle: {
        color: "#ff0",
        opacity: 0.5,
      },
    },
  ],
});
watch(
  () => [...props.inspectionRecordCounts],
  (val) => {
    inspectDate.value = val;
  },
  { deep: true }
);
watchEffect(() => {
  let data = props.dataInfo;
  dataList.value = useGetDayAll(data[0], data[1]);
  option.value.xAxis.data = dataList.value;
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
    width: 1000px;
    height: 350px;
  }
}
</style>
