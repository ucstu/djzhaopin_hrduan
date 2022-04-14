<template>
  <div class="tag">
    <div
      v-for="(jobType, jobTypeIndex) in checkableJobTypes"
      :key="jobTypeIndex"
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
import { ElMessage } from "element-plus";
import { onMounted, reactive, ref } from "vue";
import { getPositiontypes } from "../../services/services";

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
    checkableJobTypes.value = res.data.map((jobType) => {
      const checkableDirections = jobType.directions.map((direction) => {
        const _checkablePositions = direction.positions.map((position) => {
          let checkablePosition = reactive({
            positionName: position,
            checked: false,
          });
          if (checkablePositions.value.length === 0) {
            checkablePositions.value.push(checkablePosition);
          } else {
            ElMessage.warning("请勿重复选择");
          }
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
  padding: 20px;
  margin: 0 auto;
  background-color: rgb(255 255 255);
  border-radius: 5px;
  box-shadow: 0 0 10px rgb(0 0 0 / 50%);

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
