<template>
  <div class="tag">
    <el-scrollbar height="400px">
      <div class="scroll">
        <div
          v-for="(jobType, jobTypeIndex) in directionTags"
          :key="jobTypeIndex"
          class="tag-field"
        >
          <TagSelectBlock
            v-if="jobType.subdivisionLabels.length > 0"
            :title="jobType.classificationName"
            :tags="jobType.subdivisionLabels"
            @multiple-select="handleMultipleSelect"
          />
        </div>
      </div>
    </el-scrollbar>
    <div
      v-for="(
        oneCheckedDirectionTags, oneCheckedDirectionTagsIndex
      ) in allCheckedDirectionTags"
      :key="oneCheckedDirectionTagsIndex"
      style="display: inline-block"
    >
      <template
        v-for="(
          checkedDirectionTag, checkedDirectionTagIndex
        ) in oneCheckedDirectionTags"
        :key="checkedDirectionTagIndex"
      >
        <el-tag
          class="mx-1"
          closable
          :disable-transitions="false"
          effect="plain"
          type="info"
          @close="changeDirection(checkedDirectionTag)"
          >{{ checkedDirectionTag.value.tagName }}</el-tag
        >
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getDirectionTags } from "@/services/services";
import { useMainStore } from "@/stores/main";
import { failResponseHandler } from "@/utils/handler";
import { storeToRefs } from "pinia";
import { ref, Ref } from "vue";
const store = useMainStore();
const emits = defineEmits<{
  (e: "direction-selected", checkedTags: typeof allCheckedDirectionTags): void;
}>();

const changeDirection = (
  checkedDirectionTag: Ref<{
    tagName: string;
    checked: boolean;
  }>
) => {
  checkedDirectionTag.value.checked = !checkedDirectionTag.value.checked;
  emits("direction-selected", allCheckedDirectionTags);
};
const { directionTags } = storeToRefs(store);
const allCheckedDirectionTags = ref<
  Array<
    Array<
      Ref<{
        tagName: string;
        checked: boolean;
      }>
    >
  >
>([]);
const handleMultipleSelect = (
  checkedTags: Array<Ref<{ tagName: string; checked: boolean }>>
) => {
  allCheckedDirectionTags.value.push(checkedTags);
  emits("direction-selected", allCheckedDirectionTags);
};
if (directionTags === null) {
  getDirectionTags({ positionName: "软件工程师" })
    .then((res) => {
      store.directionTags = res.data.body;
    })
    .catch(failResponseHandler);
}
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
