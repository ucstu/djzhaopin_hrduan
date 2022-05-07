<template>
  <div class="tag">
    <el-scrollbar height="400px">
      <div class="scroll">
        <div
          v-for="(jobType, jobTypeIndex) in checkablePositionTypes"
          :key="jobTypeIndex"
          class="tag-field"
        >
          <span style="margin: 5px 0">{{ jobType.fieldName }}</span>
          <div
            v-for="(direction, directionIndex) in jobType.directions"
            :key="directionIndex"
            class="tag-list"
          >
            <span>{{ direction.directionName }}</span>
            <div class="list-item">
              <div
                v-for="(position, positionIndex) in direction.positions"
                :key="positionIndex"
                class="tag-item"
              >
                <el-check-tag
                  ref="checkTagRef"
                  :checked="position.value.checked"
                  @change="changeDirection(position)"
                >
                  {{ position.value.position }}</el-check-tag
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>
<script lang="ts" setup>
import { getPositionTypes } from "@/services/services";
import { failResponseHandler } from "@/utils/handler";
import { onMounted, Ref, ref } from "vue";
const checkedPosition = ref<Ref<{ checked: boolean; position: string }>>();
const emit = defineEmits(["submit-data"]);
const changeDirection = (
  position: Ref<{
    position: string;
    checked: boolean;
  }>
) => {
  if (checkedPosition.value) {
    checkedPosition.value.value.checked = false;
  }
  position.value.checked = true;
  checkedPosition.value = position;
  emit("submit-data", {
    type: "position",
    data: position,
  });
};
type CheckablePositionType = {
  directions: {
    directionName: string;
    positions: Ref<{
      position: string;
      checked: boolean;
    }>[];
  }[];
  fieldName: string;
};

const checkablePositionTypes = ref<CheckablePositionType[]>([]);

onMounted(() => {
  getPositionTypes()
    .then((res) => {
      checkablePositionTypes.value = res.data.body.map((positionType) => {
        return {
          fieldName: positionType.fieldName,
          directions: positionType.directions.map((direction) => {
            return {
              directionName: direction.directionName,
              positions: direction.positions.map((position) => {
                return ref({
                  position: position,
                  checked: false,
                });
              }),
            };
          }),
        };
      });
    })
    .catch(failResponseHandler);
});
</script>
<style scoped lang="scss">
.tag {
  position: relative;
  width: 80%;
  height: auto;
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
    min-height: 400px;
    border: solid 1px rgb(236 198 198);
    border-radius: 5px;
  }

  .tag-field {
    display: flex;
    flex-direction: column;
  }

  .tag-list {
    display: flex;
    flex-flow: column wrap;

    span {
      display: block;
      height: 30px;
    }

    .list-item {
      display: flex;
      flex-wrap: wrap;

      .tag-item {
        margin-top: 5px;
        margin-right: 5px;

        .el-check-tag {
          display: flex;
          align-items: center;
          justify-content: center;

          // width: 100%;
          // text-align: center;
          // text-overflow: ellipsis;
          // white-space: nowrap;
        }
      }
    }
  }
}
</style>
