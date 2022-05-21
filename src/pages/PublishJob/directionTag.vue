<template>
  <div class="tag">
    <el-scrollbar height="400px">
      <div class="scroll">
        <div
          v-for="(jobType, jobTypeIndex) in checkableJobTypes"
          :key="jobTypeIndex"
          class="tag-field"
        >
          <span style="margin: 5px 0">{{ jobType.classificationName }}</span>
          <div class="tag-list">
            <div
              v-for="(direction, directionIndex) in jobType.subdivisionLabels"
              :key="directionIndex"
              class="tag-item"
            >
              <el-check-tag
                ref="checkTagRef"
                :checked="direction.checked"
                @change="changeDirection(direction)"
              >
                {{ direction.directionName }}</el-check-tag
              >
            </div>
          </div>
        </div>
      </div>
    </el-scrollbar>
    <div
      v-for="(direction, directionIndex) in checkableDirections"
      :key="directionIndex"
      style="display: inline-block"
    >
      <el-tag
        v-if="direction.checked"
        class="mx-1"
        closable
        :disable-transitions="false"
        effect="plain"
        type="info"
        @close="changeDirection(direction)"
        >{{ direction.directionName }}</el-tag
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getDirectionTags } from "@/services/services";
import { failResponseHandler } from "@/utils/handler";
import { onMounted, reactive, ref } from "vue";
const emit = defineEmits(["submit-direction"]);
interface PositionType {
  subdivisionLabels: {
    directionName: string;
    checked: boolean;
  }[];
  classificationName: string;
}
const changeDirection = (direction: {
  directionName: string;
  checked: boolean;
}) => {
  direction.checked = !direction.checked;
  emit("submit-direction", {
    type: "direction",
    data: direction,
  });
};
const checkableJobTypes = ref<PositionType[]>([]);
const checkableDirections = ref<PositionType["subdivisionLabels"]>([]);
onMounted(() => {
  getDirectionTags({ positionName: "软件工程师" })
    .then((res) => {
      checkableJobTypes.value = res.data.body.map(
        (jobType: {
          subdivisionLabels: string[];
          classificationName: string;
        }) => {
          const _checkableDirections = jobType.subdivisionLabels.map(
            (direction: string) => {
              let checkableDirection = reactive({
                directionName: direction,
                checked: false,
              });
              checkableDirections.value.push(checkableDirection);
              return checkableDirection;
            }
          );
          return {
            classificationName: jobType.classificationName,
            subdivisionLabels: _checkableDirections,
          };
        }
      );
    })
    .catch(failResponseHandler);
});
</script>
<style scoped lang="scss">
.tag {
  position: relative;
  width: 80%;
  height: 100%;
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
    height: auto;
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
        width: 70px;
        overflow: hidden;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
