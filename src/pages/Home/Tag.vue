<template>
  <div class="tag">
    <!-- <el-input
            v-if="inputVisible"
            ref="InputRef"
            v-model="inputValue"
            class="ml-1 w-20"
            size="small"
            @keyup.enter="handleInputConfirm"
            @blur="handleInputConfirm"
        />
        <el-button v-else class="button-new-tag ml-1" size="small" @click="showInput">+ New Tag</el-button>-->
    <span>{{ fieldName }}</span>
    <div v-for="item in directions" :key="item.directionName">
      <div class="tag-list">
        <div>{{ item.directionName }}</div>
        <div
          v-for="position in item.postitions"
          :key="position.id"
          class="tag-item"
        >
          <el-check-tag
            ref="checkTagRef"
            :checked="position.checked"
            @click="onChange(position.id)"
          >
            {{ position.label }}
          </el-check-tag>
        </div>
      </div>
    </div>
    <div v-for="(tag, index) in dynamicTags" :key="tag.id">
      <el-tag
        v-if="tag.checked"
        class="mx-1"
        closable
        :disable-transitions="false"
        effect="plain"
        type="info"
        @close="handleClose(index)"
        >{{ tag.label }}</el-tag
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getPositiontypes } from "@/services/services";
import type { ElCheckTag } from "element-plus";
import { ElMessage } from "element-plus";
import { nanoid } from "nanoid";
import { onMounted, ref } from "vue";
interface Tag {
  id: string;
  label: string;
  checked: boolean;
}
const fieldName = ref();
const dynamicTags = ref<Tag[]>([
  { id: "1", label: "Tag 1", checked: false },
  { id: "2", label: "Tag 2", checked: false },
  { id: "3", label: "Tag 3", checked: false },
]);
const checkTagRef = ref<InstanceType<typeof ElCheckTag>>();
const directions = ref([{ directionName: "", postitions: [] }]);
onMounted(() => {
  getPositiontypes().then((res) => {
    console.log(res);
    if (res.status === 200) {
      fieldName.value = res.data[0].fieldName;
      directions.value = res.data[0].directions.map((item) => {
        return {
          directionName: item.directionName,
          postitions: item.postitions.map((item: Object) => {
            return {
              id: nanoid(),
              label: item,
              checked: false,
            };
          }),
        };
      });
      console.log(directions.value);
      dynamicTags.value = directions.value.reduce((prev, cur) => {
        return prev.concat(cur.postitions);
      }, []);
    } else {
      ElMessage.error("请检查网络");
    }
  });
});
const onChange = (id: string) => {
  const tag = dynamicTags.value.find((item) => item.id === id);
  if (tag) {
    tag.checked = !tag.checked;
  }
  let checkedTags = false;
  dynamicTags.value.every((item) => {
    if (item.checked) {
      checkedTags = true;
      if (checkedTags) {
        if (id === item.id) {
          item.checked = !item.checked;
        } else {
          ElMessage.warning("对不起，不能选择多个标签");
        }
      }
      return true;
    } else {
      return false;
    }
  });
};
// const onChange = (index: number) => {
//     let tag = false
//     let idx
//     dynamicTags.value.every((item, key) => {

//         if (item.checked) {
//             tag = true
//             idx = key
//         }
//         return true
//     })
//     if (tag) {
//         if (idx === index) {
//             dynamicTags.value[index].checked = false
//         } else {
//             ElMessage.warning('对不起，不能选择多个标签')
//         }
//     } else {
//         dynamicTags.value[index].checked = true
//     }
// }

const handleClose = (index: number) => {
  dynamicTags.value[index].checked = !dynamicTags.value[index].checked;
};
// const selectedList = ref(dynamicTags.value.filter((v) => v.checked));
// const onChange = (v: any) => {
//     v.checked = !v.checked;
//     console.log(v.checked);
//     const myset = new Set(selectedList.value.map((a) => a.id));
//     if (myset.has(v.id)) {
//         selectedList.value = selectedList.value.filter((_a) => _a.id != v.id);
//     } else {
//         selectedList.value = selectedList.value.concat([v]);
//     }
//     console.log(v);
// };
// const showTag = (item: any) => {
//     console.log(buttomTags.value.length);
//     if (buttomTags.value.length >= 1) {
//         buttomTags.value = [];
//     }
//     if (item.checked) {
//         buttomTags.value.push(item.label as never);
//     } else {
//         buttomTags.value.splice(buttomTags.value.indexOf(item.label as never), 1)
//     }
// }
// const showInput = () => {
//     inputVisible.value = true
//     nextTick(() => {
//         InputRef.value!.input!.focus()
//     })
// }
// const handleInputConfirm = () => {
//     if (inputValue.value) {
//         console.log(inputValue);

//         dynamicTags.value.push(inputValue.value)
//     }
//     inputVisible.value = false
//     inputValue.value = ''
// }
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
