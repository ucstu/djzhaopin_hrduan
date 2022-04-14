<template>
  <div class="top">
    <div class="left">
      <span>We</span>
      <span class="red">❤</span>
      <span>{{ store.state.companyInfo.fullName || "You" }}</span>
    </div>
    <div class="right">
      <router-link to="/PublishJob">
        <img src="../assets/pub.png" />
      </router-link>
      <img :src="avatar" />
      <div class="dropdown">
        <div class="user">
          <span>{{ name || "HR" }}</span>
        </div>
        <ul class="dropdown-content">
          <li>
            <a href="#">账号设置</a>
          </li>
          <li>
            <a href="#">退出</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { key } from "../stores";
const store = useStore(key);
const { name, avatar } = store.state.hrInfo;
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
    .red {
      margin: 0 10px;
      color: red;
    }
  }

  .right {
    display: flex;
    align-items: center;

    :first-child {
      width: 20px;
      height: 20px;
    }

    :nth-child(2) {
      width: 30px;
      height: 30px;
      margin: auto 10px auto 20px;
      border-radius: 50%;
    }

    span {
      margin-left: 10px;
    }

    .dropdown {
      position: relative;
      display: inline-block;
      width: 85px;
      cursor: pointer;

      .user {
        padding-left: 18px;
        text-align: center;

        span {
          display: block;
          width: 60px;
          height: 60px;
        }
      }

      a {
        color: rgb(255 255 255);
        text-decoration: none;
      }

      a:hover {
        color: rgb(176 163 192);
      }
    }

    .dropdown-content {
      position: absolute;
      top: 30px;
      left: -6px;
      display: none;
      width: 60px;
      height: 55px;
      padding: 12px 16px;
      font-size: 14px;
      list-style: none;
      border-radius: 0;
      box-shadow: 0 8px 16px 0 rgb(0 0 0 / 20%);
      transform: matrix();

      :nth-child(1) {
        width: 60px;
        margin-top: 1px;
        text-align: center;
      }

      :nth-child(2) {
        position: absolute;
        left: 10px;
        margin-top: 15px;
        text-align: center;
      }
    }

    .dropdown:hover .dropdown-content {
      display: block;
      background-color: rgb(51 51 51);
    }
  }
}
</style>
