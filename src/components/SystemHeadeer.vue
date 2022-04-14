<template>
  <div class="top">
    <div class="left">
      <div class="left-we">
        <span>We</span>
        <span class="red">❤</span>
        <span>{{ store.state.companyInfo.fullName || "You" }}</span>
      </div>
      <div class="left-route">
        <router-link to="/Manage">
          <span>首页</span>
        </router-link>
        <router-link to="/System/Talent">
          <span>找人才</span>
        </router-link>
        <router-link to="/PublishJob">
          <span>招聘</span>
        </router-link>
      </div>
    </div>
    <div class="right">
      <router-link to="/Setting/">
        <img :src="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { key } from "../stores";
const store = useStore(key);
const avatar = store.state.hrInfo.avatar;
</script>

<style scoped lang="scss">
.top {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 42.5px;
  color: rgb(255 255 255);
  background-color: rgb(50 55 62);

  .left {
    display: flex;
    justify-content: space-between;
    width: 400px;
    margin-right: 100px;

    .left-route {
      display: flex;
      justify-content: space-around;
      width: 200px;

      a {
        color: rgb(255 255 255);
        text-decoration: none;
      }

      span {
        cursor: pointer;
      }
    }

    .red {
      margin: 0 10px;
      color: red;
    }
  }

  .right {
    display: flex;
    align-items: center;

    :first-child {
      width: 30px;
      height: 30px;
      margin: auto 10px auto 20px;
      border-radius: 50%;
    }
  }
}
</style>
