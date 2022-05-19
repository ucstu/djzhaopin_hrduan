<template>
  <div class="big-image">
    <transition name="fade">
      <div class="img-view" @click="bigImg">
        <div class="img-layer"></div>

        <div class="img">
          <img :style="{ width: imgWidth, height: imgHeight }" :src="imgSrc" />
        </div>
      </div>
    </transition>
  </div>
</template>
​
<script lang="ts" setup>
import { defineProps } from "vue";
let emit = defineEmits(["big-img"]);
defineProps({
  imgSrc: {
    type: String,
    default: "",
    required: true,
  },
  imgWidth: {
    type: String,
    default: "",
  },
  imgHeight: {
    type: String,
    default: "",
  },
});

const bigImg = () => {
  // 发送事件
  emit("big-img");
};
</script>
<style lang="scss" scoped>
.big-image {
  .fade-enter-active,
  .fade-leave-active {
    transition: all 1s;
    transform: translate3d(0, 0, 0);
  }

  .fade-enter,
  .fade-leave-active {
    transform: translate3d(100%, 0, 0);
  }

  .img-view {
    position: inherit;
    width: 100%;
    height: 100%;

    .img-layer {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: rgb(0 0 0 / 70%);
    }
  }

  .img {
    width: 100%;
    height: 100%;

    img {
      position: absolute;
      right: 50%;
      left: 50%;

      // margin: auto ;
      z-index: 1000;
      display: block;
      max-width: 100%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
