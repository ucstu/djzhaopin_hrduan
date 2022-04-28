<template>
  <div class="tag">
    <el-scrollbar height="400px">
      <div
        v-for="(jobType, jobTypeIndex) in checkableJobTypes"
        :key="jobTypeIndex"
        class="tag-field"
      >
        <span>{{ jobType.fieldName }}</span>
        <div
          v-for="(direction, directionIndex) in jobType.directions"
          :key="directionIndex"
        >
          <div class="tag-list">
            <div>{{ direction.directionName }}</div>
            <div
              v-for="(position, positionIndex) in direction.positions"
              :key="positionIndex"
              class="tag-item"
            >
              <el-check-tag
                ref="checkTagRef"
                :checked="position.checked"
                @change="position.checked = !position.checked"
              >
                {{ position.positionName }}
              </el-check-tag>
            </div>
          </div>
        </div>
      </div>
    </el-scrollbar>
    <div
      v-for="(position, positionIndex) in checkablePositions"
      :key="positionIndex"
      style="display: inline-block"
    >
      <el-tag
        v-if="position.checked"
        class="mx-1"
        closable
        :disable-transitions="false"
        effect="plain"
        type="info"
        @close="position.checked = false"
        >{{ position.positionName }}</el-tag
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getPositiontypes } from "@/services/services";
import { onMounted, reactive, ref } from "vue";

interface PositionType {
  directions: {
    directionName: string;
    positions: {
      positionName: string;
      checked: boolean;
    }[];
  }[];
  fieldName: string;
}

const checkableJobTypes = ref<PositionType[]>([]);

const checkablePositions = ref<PositionType["directions"][0]["positions"]>([]);

onMounted(() => {
  getPositiontypes().then((res) => {
    checkableJobTypes.value = res.data.body.map((jobType) => {
      const checkableDirections = jobType.directions.map((direction) => {
        const _checkablePositions = direction.positions.map((position) => {
          let checkablePosition = reactive({
            positionName: position,
            checked: false,
          });
          checkablePositions.value.push(checkablePosition);
          return checkablePosition;
        });
        return {
          directionName: direction.directionName,
          positions: _checkablePositions,
        };
      });
      return {
        fieldName: jobType.fieldName,
        directions: checkableDirections,
      };
    });
  });
});
</script>
<style scoped lang="scss">
.tag {
  position: relative;
  width: 80%;
  height: 600px;
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
    border-radius: 4px;
  }

  .tag-field {
    display: flex;
    flex-direction: column;
  }

  .tag-list {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    .tag-item {
      margin-right: 10px;
    }
  }
}
</style>
