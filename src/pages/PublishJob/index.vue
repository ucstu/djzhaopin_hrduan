<template>
  <div>
    <setting-header />
    <div class="upside">
      <div class="upside-lia">
        <div>
          <span class="title">发布职位，开启招聘之旅~</span>
          <router-link to="/Manage"> 跳过发布 </router-link>
        </div>
        <div class="line"></div>
      </div>
    </div>
    <div class="beneath">
      <div class="inside">
        <el-divider direction="vertical" class="divider" />
        <span class="title">基本信息</span>
        <span class="explain"
          >职位名称、类别与招聘类型发布后不可修改，请准确填写</span
        >
        <div>
          <el-form
            ref="formRef"
            v-model="jobTypeList"
            label-width="120px"
            :rules="rules"
            size="large"
            style="max-width: 700px"
          >
            <el-form-item label="招聘类型" prop="name">
              <el-select
                v-model="jobTypeList.positionType"
                placeholder="请选择招聘类型"
              >
                <el-option
                  v-for="item in jobTypeMap"
                  :key="item"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="职位名称" prop="name">
              <el-input
                v-model="jobTypeList.name"
                placeholder="职位名称建议包括工作内容和职位等级"
                maxlength="20"
              />
            </el-form-item>
            <!-- <el-form-item label="职位类别" prop="name">
                            <el-input v-model="jobTypeList.name" placeholder="请选择职位类别" />
                        </el-form-item> -->
            <el-form-item label="经验和学历" prop="name">
              <el-col :span="11">
                <el-select
                  v-model="jobTypeList.workingYears"
                  placeholder="请选择经验要求"
                >
                  <el-option
                    v-for="(item, index) in workingYears"
                    :key="item"
                    :label="item"
                    :value="index"
                  >
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="2" class="text-center">
                <span class="text-gray-500"></span>
              </el-col>
              <el-col :span="11">
                <el-select
                  v-model="jobTypeList.education"
                  placeholder="请选择学历要求"
                >
                  <el-option
                    v-for="(item, index) in educationMap"
                    :key="item"
                    :label="item"
                    :value="index"
                  >
                  </el-option>
                </el-select>
              </el-col>
            </el-form-item>
            <el-form-item label="薪资范围" prop="name">
              <el-col :span="11">
                <el-input
                  v-model.number="jobTypeList.startingSalary"
                  placeholder="请输入起始薪资"
                >
                  <template #append>K</template>
                </el-input>
              </el-col>
              <el-col :span="2" class="text-center">
                <span class="text-gray-500">-</span>
              </el-col>
              <el-col :span="11">
                <el-input
                  v-model.number="jobTypeList.ceilingSalary"
                  placeholder="请输入上限薪资"
                >
                  <template #append>K</template>
                </el-input>
              </el-col>
            </el-form-item>
            <el-divider direction="vertical" class="divider" />
            <span class="title">职位详情</span>
            <span class="explain"
              >详细的职位介绍信息能帮助你更快找到合适的候选人</span
            >
            <el-form-item label="职位描述" prop="name">
              <el-input
                v-model="jobTypeList.jobDescription"
                minlength="20"
                autosize
                maxlength="2000"
                placeholder="请输入岗位职责、任职要求等，至少20字，建议使用短句并分条
列出，如下
岗位职责：
1、……
2、……
任职要求：
1、……
2、……
请勿输入公司邮箱、联系电话、薪资面议、性别歧视字样及其他
外链，否则将自动删除，不可恢复"
                show-word-limit
                type="textarea"
              />
            </el-form-item>
            <el-form-item label="职位亮点" prop="joblight">
              <el-input
                v-model="jobTypeList.jobHighlights"
                placeholder="请填写职位吸引力，如发展前景、团队实力等"
                :autosize="{ minRows: 2, maxRows: 4 }"
                maxlength="20"
                show-word-limit
              />
            </el-form-item>
            <el-form-item label="工作地点" prop="address">
              <el-input
                v-model="jobTypeList.workingPlace"
                placeholder="请输入工作地址"
              />
            </el-form-item>
            <el-form-item label="所属部门">
              <el-input
                v-model="jobTypeList.department"
                placeholder="选填，例如：基础研发平台"
                maxlength="20"
                show-word-limit
              />
            </el-form-item>
            <el-divider direction="vertical" class="divider" />
            <span class="title">附加信息</span>
            <span class="explain">完善附加信息可以让候选人更加了解职位</span>
            <el-form-item label="工作时间">
              <el-col :span="11">
                <el-select
                  v-model="jobTypeList.workingYears"
                  placeholder="请选择周末休息时间"
                >
                  <el-option
                    v-for="(item, index) in workingYears"
                    :key="item"
                    :label="item"
                    :value="index"
                  >
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="2" class="text-center">
                <span class="text-gray-500"></span>
              </el-col>
              <el-col :span="11">
                <div class="demo-range">
                  <el-time-picker
                    v-model="workTime"
                    clearable="false"
                    is-range
                    range-separator="到"
                    start-placeholder="上班时间"
                    end-placeholder="下班时间"
                    format="HH:mm"
                  />
                </div>
              </el-col>
            </el-form-item>
            <el-form-item label="面试信息">
              <el-select
                v-model="jobTypeList.interviewInfo"
                placeholder="添加面试信息标签"
                multiple
              >
                <el-option
                  v-for="(item, index) in interviewInfo"
                  :key="item"
                  :label="item"
                  :value="index"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="publishPost"
                >发布职位</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { JobInformation } from "@/services/types";
import { key } from "@/stores";
import { FormInstance } from "element-plus";
import { onUpdated, reactive, ref } from "vue";
import { useStore } from "vuex";
const store = useStore(key);
const formRef = ref<FormInstance>();
const jobTypeList = reactive<JobInformation>({
  startingSalary: 0,
  ceilingSalary: 0,
  createdAt: "",
  department: "",
  directionTags: [],
  education: "0",
  hrId: "",
  jobDescription: "",
  jobHighlights: [],
  jobInformationId: "",
  name: "",
  positionType: "1",
  companyId: "",
  releaseDate: "",
  updatedAt: "",
  workArea: "",
  workingPlace: {
    latitude: 1,
    longitude: 1,
  },
  workingYears: "0",
});
const interviewInfo = reactive([1, 2, 3]);
onUpdated(() => {
  console.log(jobTypeList.name);
});
const jobTypeMap = reactive(["全职", "兼职", "实习"]);
const educationMap = reactive(["不限", "大专", "本科", "硕士", "博士"]);
const workingYears = reactive([
  "不限",
  "应届毕业生",
  "1年以下",
  "1-3年",
  "3-5年",
  "5-10年",
  "10年以上",
]);
const rules = reactive({
  name: [{ required: true, message: "此项不能为空", trigger: "blur" }],
  address: [{ required: true, message: "请选择工作地址", trigger: "blur" }],
  joblight: [
    {
      required: true,
      message: "请输入职位吸引候选人的亮点，如：福利待遇、发展前景等",
      trigger: "blur",
    },
  ],
});
const publishPost = () => {
  console.log("submit");
};
// postCompanyinfosCompanyinfoidPositioninfos(store.state.companyInfo.companyId, jobTypeList)
</script>

<style lang="scss" scoped>
a {
  color: rgb(0 179 139);
  text-decoration: none;
}

.upside {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;

  .upside-lia {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 80%;
    height: 100%;
    font-size: 14px;

    .line {
      width: 100%;
      height: 1px;
      background-color: rgb(50 55 62 / 50%);
    }
  }
}

.title {
  font-size: 18px;
  font-weight: 700;
}

.explain {
  margin-left: 40px;
  font-size: 12px;
  color: rgb(50 55 62 / 50%);
}

.beneath {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .inside {
    width: 80%;
    height: 730px;
    margin-top: 40px;

    .divider {
      height: 30px;
      background-color: rgb(50 55 62 / 50%);
    }

    .el-form {
      margin-top: 20px;

      .text-gray-500 {
        margin: 0 20px;
      }
    }
  }
}
</style>
