<template>
  <div class="tag">
    <el-scrollbar height="400px">
      <div class="scroll">
        <div
          v-for="(interviewTag, interviewTagIndex) in interviewTagList"
          :key="interviewTagIndex"
          class="tag-field"
        >
          <span style="margin: 5px 0">{{ interviewTag.interviewTagname }}</span>
          <div class="tag-list">
            <div
              v-for="(interviewInfo1, interviewInfoIndex) in interviewTag.tag"
              :key="interviewInfoIndex"
              class="tag-item"
            >
              <el-check-tag
                ref="checkTagRef"
                :checked="interviewInfo1.checked"
                @change="handleillustrate(interviewInfo1, interviewTagIndex)"
              >
                {{ interviewInfo1.name }}</el-check-tag
              >
            </div>
          </div>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const emit = defineEmits(["submit-data"]);

const interviewTagList = ref([
  {
    interviewTagname: "面试形式",
    tag: [
      { name: "现场面试", checked: false },
      { name: "视频面试", checked: false },
      { name: "电话面试", checked: false },
    ],
  },
  {
    interviewTagname: "面试轮数",
    tag: [
      { name: "1-2轮次", checked: false },
      { name: "3-4轮次", checked: false },
      { name: "5-6轮次", checked: false },
      { name: "暂不确定", checked: false },
    ],
  },
  {
    interviewTagname: "面试时长",
    tag: [
      { name: "一天内完成", checked: false },
      { name: "分多次完成", checked: false },
    ],
  },
  {
    interviewTagname: "面试说明",
    tag: [
      { name: "可周末面试", checked: false },
      { name: "包含笔试", checked: false },
      { name: "可下班面试", checked: false },
      { name: "包含面试作业", checked: false },
    ],
  },
]);
interface InterviewInfo {
  illustrate: 1 | 2 | 3 | 4;

  situation: 1 | 2 | 3;

  time: 1 | 2;

  wheel: 1 | 2 | 3 | 4;
}
const interviewInfo = ref<InterviewInfo>({
  illustrate: 1,
  situation: 1,
  time: 1,
  wheel: 1,
});
const handleillustrate = (
  data: { name: string; checked: boolean },
  index: number
) => {
  if (data.checked) {
    interviewInfo.value.illustrate = (index + 1) as 1 | 2 | 3 | 4;
  }
};
const handlesituation = (data: { checked: any }, index: number) => {
  if (data.checked) {
    interviewInfo.value.situation = (index + 1) as 1 | 2 | 3;
  }
};
const handletime = (data: { checked: any }, index: number) => {
  if (data.checked) {
    interviewInfo.value.time = (index + 1) as 1 | 2;
  }
};
const handlewheel = (data: { checked: any }, index: number) => {
  if (data.checked) {
    interviewInfo.value.wheel = (index + 1) as 1 | 2 | 3 | 4;
  }
};

// const changeOnly = (
//   interviewInfo: { checked: boolean; name: string },
//   interviewInfoIndex: number,
//   interviewTag: any
// ) => {
//   interviewTag.forEach((item, index) => {
//     interviewInfo.checked = !interviewInfo.checked;
//     if (item.checked) {
//       if (index !== interviewInfoIndex) {
//         item.checked = false;
//       } else {
//         ElMessage.warning("不能选择多种的面试形式");
//       }
//     } else {
//       interviewInfo.checked = !interviewInfo.checked;
//     }
//   });
// };
// const changeDirection = (
//   interviewInfo: { checked: boolean },
//   _interviewInfoIndex: number
// ) => {
//   interviewInfo.checked = !interviewInfo.checked;
//   emit("submit-data", {
//     type: "interviewInfo",
//     data: interviewInfo,
//     index: _interviewInfoIndex + 1,
//   });
// };
</script>
<style scoped lang="scss">
.tag {
  position: relative;
  width: 80%;
  padding: 20px;
  margin: 0 auto;
  background-color: rgb(255 255 255);
  border-radius: 5px;

  .scrollbar-demo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 10px;
    color: var(--el-color-primary);
    text-align: center;
    background: var(--el-color-primary-light-9);
  }

  .scroll {
    height: 400px;
    border: solid 1px rgb(236 198 198);
    border-radius: 5px;
  }

  .tag-field {
    display: flex;
    flex-direction: column;
  }

  .tag-list {
    display: flex;
    flex-flow: row wrap;

    .tag-item {
      margin: 0 7px;

      .el-check-tag {
        width: 80px;
        overflow: hidden;
        text-align: center;

        // text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
