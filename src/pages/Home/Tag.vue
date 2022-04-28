<template>
  <div class="tag">
    <el-scrollbar height="400px">
      <div class="scroll">
        <div
          v-for="(jobType, jobTypeIndex) in checkableJobTypes"
          :key="jobTypeIndex"
          class="tag-field"
        >
          <span style="margin: 5px 0">{{ jobType.fieldName }}</span>
          <div class="tag-list">
            <div
              v-for="(direction, directionIndex) in jobType.directions"
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
        @close="direction.checked = false"
        >{{ direction.directionName }}</el-tag
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getPositiontypes } from "@/services/services";
import { onMounted, reactive, ref } from "vue";
const emit = defineEmits(["submit-data"]);
interface PositionType {
  directions: {
    directionName: string;
    checked: boolean;
  }[];
  fieldName: string;
}
const changeDirection = (direction: { checked: boolean }) => {
  direction.checked = !direction.checked;
  emit("submit-data", {
    type: "direction",
    data: direction,
  });
};
const checkableJobTypes = ref<PositionType[]>([]);
const checkableDirections = ref<PositionType["directions"]>([]);
onMounted(() => {
  getPositiontypes().then((res) => {
    checkableJobTypes.value = res.data.body.map(
      (jobType: { directions: any[]; fieldName: any }) => {
        const _checkableDirections = jobType.directions.map(
          (direction: { directionName: any }) => {
            let checkableDirection = reactive({
              directionName: direction.directionName,
              checked: false,
            });
            checkableDirections.value.push(checkableDirection);
            return checkableDirection;
          }
        );
        return {
          fieldName: jobType.fieldName,
          directions: _checkableDirections,
        };
      }
    );
  });
});
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
