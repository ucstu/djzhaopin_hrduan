<template>
  <div class="center">
    <div class="notice">
      <span>注意：</span>
      <span>显示姓名会更有诚意，建议设置为显示</span>
    </div>
    <div class="bottom">
      <el-radio v-model="radio1" label="1" size="large">
        <div class="info">
          <div class="avatar">
            <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62345e1d5a7e3f0310ddcb3c/623446ec62a7d9001102351f/16484562757872304492.png"
            />
          </div>
          <div class="name">
            <span>杨白毛</span>
          </div>
        </div>
      </el-radio>
      <el-radio v-model="radio1" label="2" size="large">
        <div class="info">
          <div class="avatar">
            <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62345e1d5a7e3f0310ddcb3c/623446ec62a7d9001102351f/16484562757872304492.png"
            />
          </div>
          <div class="name">
            <span>杨先生</span>
          </div>
        </div>
      </el-radio>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const radio1 = ref("1");
</script>

<style scoped lang="scss">
img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.center {
  margin: 40px 0;

  .notice {
    display: flex;
    flex-direction: column;

    span {
      margin: 5px 0;
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    margin: 60px 0;

    .el-radio {
      margin: 40px 0;
    }

    .info {
      display: flex;
      flex-direction: row;
      margin: 40px 0;

      .name {
        margin-left: 10px;
      }
    }
  }
}
</style>
