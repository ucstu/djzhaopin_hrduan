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
              v-for="(
                interviewInfo, interviewInfoIndex
              ) in interviewTag.illustrate"
              :key="interviewInfoIndex"
              class="tag-item"
            >
              <el-check-tag
                ref="checkTagRef"
                :checked="interviewInfo.checked"
                @change="changeDirection(interviewInfo, interviewInfoIndex)"
              >
                {{ interviewInfo.name }}</el-check-tag
              >
            </div>
            <!-- <div
              v-for="(
                interviewInfo, interviewInfoIndex
              ) in interviewTag.situation"
              :key="interviewInfoIndex"
              class="tag-item"
            >
              <el-check-tag
                ref="checkTagRef"
                :checked="interviewInfo.checked"
                @change="
                  changeOnly(
                    interviewInfo,
                    interviewInfoIndex,
                    interviewTag.situation
                  )
                "
              >
                {{ interviewInfo.name }}</el-check-tag
              >
            </div>
            <div
              v-for="(interviewInfo, interviewInfoIndex) in interviewTag.time"
              :key="interviewInfoIndex"
              class="tag-item"
            >
              <el-check-tag
                ref="checkTagRef"
                :checked="interviewInfo.checked"
                @change="
                  changeOnly(
                    interviewInfo,
                    interviewInfoIndex,
                    interviewTag.time
                  )
                "
              >
                {{ interviewInfo.name }}</el-check-tag
              >
            </div> -->
            <div
              v-for="(interviewInfo, interviewInfoIndex) in interviewTag.wheel"
              :key="interviewInfoIndex"
              class="tag-item"
            >
              <el-check-tag
                ref="checkTagRef"
                :checked="interviewInfo.checked"
                @change="changeDirection(interviewInfo, interviewInfoIndex)"
              >
                {{ interviewInfo.name }}</el-check-tag
              >
            </div>
          </div>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>
<script lang="ts" setup>
// import { ElMessage } from "element-plus";
import { ref } from "vue";
const emit = defineEmits(["submit-data"]);

const interviewTagList = ref([
  {
    interviewTagname: "面试形式",
    illustrate: [
      { name: "现场面试", checked: false },
      { name: "视频面试", checked: false },
      { name: "电话面试", checked: false },
    ],
  },
  {
    interviewTagname: "面试轮数",
    situation: [
      { name: "1-2轮次", checked: false },
      { name: "3-4轮次", checked: false },
      { name: "5-6轮次", checked: false },
      { name: "暂不确定", checked: false },
    ],
  },
  {
    interviewTagname: "面试时长",
    time: [
      { name: "一天内完成", checked: false },
      { name: "分多次完成", checked: false },
    ],
  },
  {
    interviewTagname: "面试说明",
    wheel: [
      { name: "可周末面试", checked: false },
      { name: "包含笔试", checked: false },
      { name: "可下班面试", checked: false },
      { name: "包含面试作业", checked: false },
    ],
  },
]);
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
const changeDirection = (
  interviewInfo: { checked: boolean },
  _interviewInfoIndex: number
) => {
  interviewInfo.checked = !interviewInfo.checked;

  emit("submit-data", {
    type: "interviewInfo",
    data: interviewInfo,
    index: _interviewInfoIndex,
  });
};
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
