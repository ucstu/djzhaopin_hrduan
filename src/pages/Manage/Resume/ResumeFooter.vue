<template>
  <div class="footer">
    <div class="left">
      <el-checkbox
        v-model="checked1"
        label="全选"
        size="large"
        @change="handleChecked"
      />
      <el-button type="primary" @click="requireInterview">面试邀请</el-button>
      <el-button type="primary" plain @click="deleteInterview"
        >删除简历</el-button
      >
      <el-button type="primary" plain>导出简历</el-button>
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
import { defineProps, ref } from "vue";
defineProps({
  total: {
    type: Number,
    default: 0,
  },
});
const emit = defineEmits(["submit-page", "submit-checked", "change-state"]);
const handleChecked = () => {
  emit("submit-checked", {
    checked: checked1,
  });
};
const requireInterview = () => {
  emit("change-state", {
    state: 4,
  });
};
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
