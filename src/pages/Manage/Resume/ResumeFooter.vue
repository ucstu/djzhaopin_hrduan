<template>
  <div class="footer">
    <div class="left">
      <el-checkbox v-model="totalSelect" label="全选" size="large" />
      <el-popover
        placement="top-start"
        title="面试时间"
        :width="400"
        trigger="click"
      >
        <el-date-picker v-model="value1" type="date" placeholder="Pick a day" />
        <div style="margin: 0; text-align: right">
          <el-button size="small" text @click="visible = false"
            >cancel</el-button
          >
          <el-button size="small" type="primary" @click="visible = false"
            >confirm</el-button
          >
        </div>
        <template #reference>
          <el-button type="primary" @click="requireInterview"
            >面试邀请</el-button
          >
        </template>
      </el-popover>
      <el-popconfirm title="确定删除该简历?">
        <template #reference>
          <el-button type="primary" plain @click="deleteInterview"
            >删除简历</el-button
          >
        </template>
      </el-popconfirm>
    </div>
    <el-pagination
      v-model="currentPage"
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script setup lang="ts">
import { computed, defineProps, PropType, ref } from "vue";
import { DeliveryRecordChecked } from "../Interview/resumeInfo.vue";
const value1 = ref();
let props = defineProps({
  total: {
    type: Number,
    default: 0,
  },
  checked1: {
    type: Boolean,
    default: false,
  },
  deliveryRecordsCheckeds: {
    type: Array as PropType<DeliveryRecordChecked[]>,
    default: () => [],
  },
});
const visible = ref(false);
const emit = defineEmits(["submit-page", "submit-checked", "change-state"]);
const handleChecked = (value) => {
  emit("submit-checked", {
    checked: value,
  });
};
const requireInterview = () => {
  emit("change-state", {
    state: 4,
  });
};
const total = computed(() => {
  return props.deliveryRecordsCheckeds.length;
});
const totalDone = computed(() => {
  return props.deliveryRecordsCheckeds.reduce(
    (per, cur) => per + (cur.checked ? 1 : 0),
    0
  );
});
const totalSelect = computed({
  get() {
    return totalDone.value === total.value && total.value > 0;
  },
  set(value) {
    handleChecked(value);
  },
});
const deleteInterview = () => {
  emit("change-state", {
    state: 5,
  });
};
const handleCurrentChange = (val: number) => {
  emit("submit-page", {
    type: "page",
    data: val,
  });
};
const currentPage = ref(1);
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
