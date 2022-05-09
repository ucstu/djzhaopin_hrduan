<template>
  <div id="card">
    <header class="header">
      <img class="avatar" :src="avatarUrl" alt="" />
      <p class="name">{{ hrName }}</p>
      <p class="position">{{ postName }}</p>
    </header>
    <footer>
      <el-input
        v-model="input2"
        class="w-50 m-2"
        placeholder="输入搜索信息"
        :prefix-icon="Search"
      />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { Search } from "@element-plus/icons-vue";
import { ref, toRefs } from "vue";
const store = useMainStore();
const { avatarUrl, hrName, postName } = toRefs(store.hrInformation);
const input2 = ref("");
</script>

<style lang="scss" scoped>
#card {
  .header {
    display: flex;
    align-items: center;
    justify-content: space-around;

    .avatar {
      width: 40px;
      height: 40px;
      margin: 0 10px;
      vertical-align: middle; /* 这个是图片和文字居中对齐 */
    }

    .name {
      display: block;
      font-size: 16px;
    }
  }

  ::v-deep .el-input {
    border: none;
    border-left: transparent;
  }
}
</style>
