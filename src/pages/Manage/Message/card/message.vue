<template>
  <div id="message" v-scroll-bottom="session">
    <ul v-for="item in sessions" v-if="currentSessionId == item.id">
      <li v-for="entry in item.messages">
        <p class="time">
          <span>{{ 111 }}</span>
        </p>
        <div class="main" :class="{ self: entry.self }">
          <img class="avatar" :src="entry.self ? img : item.user.img" alt="" />
          <p class="text">{{ entry.content }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
#message {
  max-height: 68%;
  padding: 15px;
  overflow-y: scroll;

  ul {
    list-style-type: none;

    li {
      margin-bottom: 15px;
    }
  }

  .time {
    margin: 7px 0;
    text-align: center;

    > span {
      display: inline-block;
      padding: 0 18px;
      font-size: 12px;
      color: #fff;
      background-color: #dcdcdc;
      border-radius: 2px;
    }
  }

  .main {
    .avatar {
      float: left;
      width: 30px;
      height: 30px;
      margin: 0 10px 0 0;
      border-radius: 3px;
    }

    .text {
      display: inline-block;
      max-width: 80%;
      padding: 0 10px;
      line-height: 30px;
      background-color: #fafafa;
      border-radius: 4px;
    }
  }

  .self {
    text-align: right;

    .avatar {
      float: right;
      width: 30px;
      height: 30px;
      margin: 0 0 0 10px;
      border-radius: 3px;
    }

    .text {
      display: inline-block;
      max-width: 80%;
      padding: 0 10px;
      line-height: 30px;
      background-color: #b2e281;
      border-radius: 4px;
    }
  }
}
</style>
