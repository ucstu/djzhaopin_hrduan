<template>
  <router-view />
</template>
<script setup lang="ts">
import { getAxiosInstance } from "./services/config";
import { useMainStore } from "./stores/main";

const store = useMainStore();

getAxiosInstance(undefined).defaults.headers.common["Authorization"] =
  "Bearer " + store.jsonWebToken;
//定时删除
// const lsc = ((self) => {
//   var prefix = "one_more_lsc_";
//   var list = [];
//   //初始化list
//   self.init = function () {
//     var keys = Object.keys(localStorage);
//     var reg = new RegExp("^" + prefix);
//     var temp = [];
//     //遍历所有localStorage中的所有key
//     for (var i = 0; i < keys.length; i++) {
//       //找出可过期缓存的key
//       if (reg.test(keys[i])) {
//         temp.push(keys[i]);
//       }
//     }
//     list = temp;
//   };
//   self.init();
//   self.check = () => {
//     if (!list || list.length == 0) {
//       return;
//     }
//     var checkCount = 0;
//     while (checkCount < 500) {
//       var expireCount = 0;
//       //随机测试20个设置了过期时间的key
//       for (var i = 0; i < 20; i++) {
//         if (list.length == 0) {
//           break;
//         }
//         var index = Math.floor(Math.random() * list.length);
//         var key = list[index];
//         var val = localStorage.getItem(list[index]);
//         //从list中删除被惰性删除的key
//         if (!val) {
//           list.splice(index, 1);
//           expireCount++;
//           continue;
//         }
//         val = JSON.parse(val);
//         //删除所有发现的已过期的key
//         if (val.expires < new Date().getTime()) {
//           list.splice(index, 1);
//           localStorage.removeItem(key);
//           expireCount++;
//         }
//       }
//       //若删除的key不超过5个则跳出循环
//       if (expireCount <= 5 || list.length == 0) {
//         break;
//       }
//       checkCount++;
//     }
//   };
//   //每隔一秒执行一次定时删除
//   window.setInterval(self.check, 1000);
//   return self;
// })(lsc || {});
</script>

<style lang="scss">
/************************************************************
** 请将全局样式拷贝到项目的全局 CSS 文件或者当前页面的顶部 **
** 否则页面将无法正常显示                                  **
************************************************************/

html {
  font-size: 16px;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    "Microsoft Yahei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

view,
image,
text {
  box-sizing: border-box;
  flex-shrink: 0;
}

#app {
  width: 100vw;
  height: 100vh;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.justify-start {
  display: flex;
  justify-content: flex-start;
}

.justify-center {
  display: flex;
  justify-content: center;
}

.justify-end {
  display: flex;
  justify-content: flex-end;
}

.justify-evenly {
  display: flex;
  justify-content: space-evenly;
}

.justify-around {
  display: flex;
  justify-content: space-around;
}

.justify-between {
  display: flex;
  justify-content: space-between;
}

.items-stretch {
  display: flex;
  align-items: stretch;
}

.items-start {
  display: flex;
  align-items: flex-start;
}

.items-center {
  display: flex;
  align-items: center;
}

.items-end {
  display: flex;
  align-items: flex-end;
}
</style>
