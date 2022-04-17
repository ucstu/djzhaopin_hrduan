<template>
  <div class="cards">
    <div class="center">
      <el-form
        ref="formRef"
        :model="formCompany"
        label-width="120px"
        :rules="rule"
        style="max-width: 500px"
      >
        <el-form-item label="Activity name">
          <el-input v-model="sizeForm.name" />
        </el-form-item>
        <el-form-item label="Activity name">
          <el-input v-model="sizeForm.name" />
        </el-form-item>
        <el-form-item label="Activity name">
          <el-input v-model="sizeForm.name" type="textarea" />
        </el-form-item>
        <el-form-item label="所在城市">
          <el-cascader
            v-model="value"
            :options="options"
            placeholder="请选择"
            @change="handleChange"
          />
        </el-form-item>
        <div class="bottom-btn">
          <el-button type="primary" @click="confirmCompany(formRef)"
            >确认</el-button
          >
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const sizeForm = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});
</script>

<style scoped lang="scss">
.cards {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 800px;
  background-color: rgb(255 255 255);
  border: solid 1px rgb(117 244 216);
  border-radius: 5px;

  .center {
    width: 90%;
    height: 90%;
  }
}
</style>
