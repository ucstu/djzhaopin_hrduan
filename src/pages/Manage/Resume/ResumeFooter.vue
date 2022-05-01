<template>
  <div class="footer">
    <div class="left">
      <el-checkbox v-model="checked1" label="全选" size="large" />
      <el-button type="primary">面试邀请</el-button>
      <el-button type="primary" plain>删除简历</el-button>
      <el-button type="primary" plain>导出简历</el-button>
    </div>
    <el-pagination background layout="prev, pager, next" :total="total" />
  </div>
</template>

<script setup lang="ts">
import { DeliveryRecord } from "@/services/types";
import { computed, defineProps, PropType, ref } from "vue";
const props = defineProps({
  checked1: {
    type: Boolean,
    default: false,
  },
  deliveryRecords: {
    type: Array as PropType<DeliveryRecord[]>,
    default: () => [],
  },
});

const total = computed(() => {
  let num = (props.deliveryRecords.length / 7) * 10;
  return Math.ceil(num);
});
const checked1 = ref(false);
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;

  .el-checkbox {
    margin-right: 10px;
  }
}
</style>
