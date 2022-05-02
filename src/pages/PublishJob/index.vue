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
            :model="jobTypeList"
            label-width="120px"
            :rules="rules"
            size="large"
            style="max-width: 700px"
          >
            <el-form-item label="招聘类型" prop="positionType">
              <el-select
                v-model="jobTypeList.positionType"
                placeholder="请选择招聘类型"
              >
                <el-option
                  v-for="(item, index) in jobTypeMap"
                  :key="item"
                  :label="item"
                  :value="index + 1"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="职位名称" prop="positionName">
              <el-input
                v-model="jobTypeList.positionName"
                placeholder="职位名称建议包括工作内容和职位等级"
              />
            </el-form-item>
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
                    :value="index + 1"
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
                    :value="index + 1"
                  >
                  </el-option>
                </el-select>
              </el-col>
            </el-form-item>
            <el-form-item label="薪资范围">
              <el-col :span="11">
                <el-form-item prop="startingSalary">
                  <el-input
                    v-model.number="jobTypeList.startingSalary"
                    placeholder="请输入起始薪资"
                  >
                    <template #append>K</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="2" class="text-center">
                <span class="text-gray-500">-</span>
              </el-col>
              <el-col :span="11">
                <el-form-item prop="ceilingSalary">
                  <el-input
                    v-model.number="jobTypeList.ceilingSalary"
                    placeholder="请输入上限薪资"
                  >
                    <template #append>K</template>
                  </el-input>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-divider direction="vertical" class="divider" />
            <span class="title">职位详情</span>
            <span class="explain"
              >详细的职位介绍信息能帮助你更快找到合适的候选人</span
            >
            <el-form-item label="职位描述" prop="description">
              <el-input
                v-model="jobTypeList.description"
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
            <el-form-item label="职位亮点" prop="highlights">
              <el-select
                v-model="jobTypeList.highlights"
                multiple
                filterable
                allow-create
                default-first-option
                class="light-select"
                :reserve-keyword="false"
                placeholder="请输入或选择亮点"
              >
                <el-option
                  v-for="item in heightLightMap"
                  :key="item"
                  :label="item"
                  :value="item"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="工作地点" prop="workAreaName">
              <el-input
                v-model="jobTypeList.workAreaName"
                placeholder="请输入工作地址"
              />
            </el-form-item>
            <el-form-item label="所属部门">
              <el-input
                v-model="jobTypeList.departmentName"
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
                <el-form-item prop="weekendReleaseTime">
                  <el-select
                    v-model="jobTypeList.weekendReleaseTime"
                    placeholder="请选择周末休息时间"
                  >
                    <el-option
                      v-for="(item, index) in weekendReleaseTimeMap"
                      :key="item"
                      :label="item"
                      :value="index + 1"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="2" class="text-center">
                <span class="text-gray-500"></span>
              </el-col>
              <el-col :span="11">
                <div class="demo-range">
                  <el-form-item prop="workTime">
                    <el-time-picker
                      v-model="workTimeing"
                      :clearable="false"
                      is-range
                      range-separator="到"
                      start-placeholder="上班时间"
                      end-placeholder="下班时间"
                      format="HH:mm:ss"
                      @change="handleWorkTimeChange(workTimeing)"
                    />
                  </el-form-item>
                </div>
              </el-col>
            </el-form-item>
            <!-- <el-form-item label="面试信息" prop="interviewInfo">
              <el-input
                v-model="jobTypeList.interviewInfo"
                :input-style="{ display: 'none' }"
              />
              <div class="select" @click="dialogFormVisible = true">
                <span>{{ jobTypeList.interviewInfo || "请选择" }}</span>
                <img src="@/assets/down.png" alt="" />
              </div>
              <el-dialog v-model="dialogFormVisible" title="请选择公司行业">
                <InterviewTag @submit-data="submitData" />
                <template #footer>
                  <span class="dialog-footer">
                    <el-button @click="dialogFormVisible = false"
                      >取消</el-button
                    >
                    <el-button type="primary" @click="dialogFormVisible = false"
                      >确定</el-button
                    >
                  </span>
                </template>
              </el-dialog>
            </el-form-item> -->
            <el-form-item>
              <el-button
                v-if="!route.params.PublishJobId"
                type="primary"
                @click="publishPost(formRef)"
                >发布职位</el-button
              >
              <el-button
                v-if="route.params.PublishJobId"
                type="primary"
                @click="updatelishPost(formRef)"
                >修改职位</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useTime from "@/hooks/useTime";
import router from "@/router";
import {
  getCompanyInfosP0PositionInfosP1,
  postCompanyInfosP0PositionInfos,
  putCompanyInfosP0PositionInfosP1,
} from "@/services/services";
import { PositionInformation } from "@/services/types";
import { useMainStore } from "@/stores/main";
import { failResponseHandler } from "@/utils/handler";
import { ElMessage, FormInstance } from "element-plus";
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
const store = useMainStore();
const route = useRoute();
const formRef = ref<FormInstance>();
const jobTypeList = ref<PositionInformation>({
  workTime: [] as unknown,
} as PositionInformation);
// const dialogFormVisible = ref(false);
const weekendReleaseTimeMap = reactive(["周末双休", "周末单休", "大小周"]);
const jobTypeMap = reactive(["全职", "兼职", "实习"]);
const educationMap = reactive(["不限", "大专", "本科", "硕士", "博士"]);
const workingYears = reactive([
  "不限",
  "应届毕业生",
  "1-3年",
  "3-5年",
  "5-10年",
  "10年以上",
]);
const rules = reactive({
  positionName: [{ required: true, message: "此项不能为空", trigger: "blur" }],
  workAreaName: [
    { required: true, message: "请选择工作地址", trigger: "blur" },
  ],
  positionType: [{ required: true, message: "此项不能为空", trigger: "blur" }],
  highlights: [
    {
      required: true,
      message: "请输入职位吸引候选人的亮点，如：福利待遇、发展前景等",
      trigger: "blur",
    },
  ],
  startingSalary: [
    {
      required: true,
      message: "请输入薪资范围，如：10-20",
      trigger: "blur",
    },
  ],
  ceilingSalary: [
    {
      required: true,
      message: "请输入薪资范围，如：10-20",
      trigger: "blur",
    },
  ],
  description: [
    {
      required: true,
      message: "请输入职位描述",
      trigger: "blur",
    },
  ],
  weekendReleseTime: [
    {
      required: true,
      message: "请选择周末休息时间",
      trigger: "blur",
    },
  ],
  workTime: [
    {
      required: true,
      message: "请选择工作时间",
      trigger: "blur",
    },
  ],
});
// const submitData = (data: {
//   data: { checked: any; directionName: string };
// }) => {
//   if (data.data.checked) {
//     jobTypeList.value.interviewInfo = data.data;
//   }
// };
onMounted(() => {
  if (route.params.PublishJobId) {
    getCompanyInfosP0PositionInfosP1(
      store.companyInformation.companyInformationId,
      route.params.PublishJobId.toString()
    ).then((res) => {
      jobTypeList.value = res.data.body;
    });
  }
});
const workTimeing = ref([]);
const handleWorkTimeChange = (val: Array<string>) => {
  let startTime = useTime(val[0]);
  let endTime = useTime(val[1]);
  jobTypeList.value.workTime = startTime;
  jobTypeList.value.overTime = endTime;
};

const heightLightMap = ["团队和谐"];
const publishPost = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      jobTypeList.value.hrInformationId =
        store.accountInformation.fullInformationId;
      jobTypeList.value.companyInformationId =
        store.hrInformation.companyInformationId;
      postCompanyInfosP0PositionInfos(
        store.hrInformation.companyInformationId,
        jobTypeList.value
      )
        .then((res) => {
          ElMessage.success("恭喜您，职位发布成功");
          store.positionInformation = res.data.body;
          router.push({ name: "Manage" });
        })
        .catch(failResponseHandler);
    }
  });
};

const updatelishPost = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      putCompanyInfosP0PositionInfosP1(
        store.companyInformation.companyInformationId,
        route.params.positionInfoId.toString(),
        jobTypeList.value
      ).then((res) => {
        ElMessage.success("恭喜您，职位信息修改成功");
        router.go(-1);
      });
    }
  });
};
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

      .el-form-item {
        .light-select {
          width: 600px;
        }

        .select {
          position: relative;
          width: 211px;
          height: 30px;
          line-height: 30px;
          border: solid 1px #dcdfe6;
          border-radius: 4px;

          span {
            position: absolute;
            left: -5px;
            font-size: 14px;
            color: #ababb2;
          }

          img {
            position: absolute;
            top: 6px;
            right: 10px;
            width: 16px;
            height: 16px;
          }
        }
      }

      .text-gray-500 {
        margin: 0 20px;
      }
    }
  }
}
</style>
