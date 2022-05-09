<template>
  <div id="uesrtext">
    <textarea
      v-model="content"
      placeholder="按 Ctrl + Enter 发送"
      @keyup="addMessage"
    ></textarea>
  </div>
</template>

<script lang="ts" setup>
const addMessage = (e) => {
  if (e.ctrlKey && e.keyCode === 13 && this.content.length) {
    this.$store.commit("addMessage", this.content);
    this.content = "";
  }
};
</script>

<style lang="scss" scoped>
#uesrtext {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 30%;
  border-top: solid 1px #ddd;

  textarea {
    width: 100%;
    height: 100%;
    padding: 10px;
    border: none;
    outline: none;
  }
}
</style>
