<template>
  <div class="cards">
    <div class="center">
      <el-form
        ref="formRef"
        :model="formCompany"
        label-width="120px"
        :rules="rule"
        style="max-width: 500px"
      >
        <el-form-item label="公司名称" prop="fullName">
          <el-input v-model="formCompany.fullName" type="text" />
        </el-form-item>
        <el-form-item label="公司Logo">
          <div class="avatar">
            <el-upload
              ref="uploadRef"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
              :on-error="handleAvatarError"
              name="avatar"
              class="avatar-uploader"
              action="http://127.0.0.1:4523/mock/743652/avatars"
            >
              <img v-if="ImageUrl" :src="formCompany.logo" class="avatar" />
              <el-icon v-else class="avatar-uploader-icon" :size="30">
                <Plus />
              </el-icon>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="公司行业" prop="comprehension">
          <el-input
            v-model="formCompany.comprehension"
            :input-style="{ display: 'none' }"
          />
          <div class="select" @click="dialogFormVisible = true">
            <span>{{ formCompany.comprehension || "请选择" }}</span>
            <img src="@/assets/down.png" alt="" />
          </div>
          <el-dialog v-model="dialogFormVisible" title="请选择公司行业">
            <Tag @submit-data="submitData" />
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false"
                  >确定</el-button
                >
              </span>
            </template>
          </el-dialog>
        </el-form-item>
        <el-form-item label="所在城市" style="width: auto">
          <el-cascader
            v-model="formCompany.city"
            :options="cityMap"
            placeholder="请选择"
            style="width: 411px"
          />
        </el-form-item>
        <el-form-item label="详细地址" prop="address">
          <el-input v-model="formCompany.address" type="text" autosize />
        </el-form-item>
        <el-form-item label="公司规模" prop="scale">
          <el-select v-model="formCompany.scale" placeholder="请选择">
            <el-option label="少于15人" value="1" />
            <el-option label="15-50人" value="2" />
            <el-option label="50-150人" value="3" />
            <el-option label="150-500人" value="4" />
            <el-option label="500-2000人" value="5" />
            <el-option label="2000人以上" value="6" />
          </el-select>
        </el-form-item>
        <el-form-item label="关于我们" prop="about">
          <el-input
            v-model="formCompany.about"
            type="textarea"
            show-word-limit
            maxlength="200"
            :autosize="{ minRows: 2, maxRows: 4 }"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="updateCompany(formRef)"
            >修改信息</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  getCityinfos,
  putCompanyinfosCompanyinfoid,
} from "@/services/services";
import { CompanyInformation } from "@/services/types";
import { key } from "@/stores";
import { Plus } from "@element-plus/icons-vue";
import { ElMessage, FormInstance, UploadProps } from "element-plus";
import { onMounted, reactive, ref } from "vue";
import { useStore } from "vuex";
import Tag from "../../Home/Tag.vue";
const formRef = ref<FormInstance>();
const uploadRef = ref<UploadProps>();
const store = useStore(key);
const imageUrl = ref("../../assets/down.png");
const dialogFormVisible = ref(false);
const ImageUrl = ref("");
//表格数据

const formCompany = reactive<CompanyInformation>({
  address: "",
  about: "",
  benefits: [],
  city: "",
  companyInformationId: "",
  comprehension: "",
  establishmentTime: "",
  financingStage: "1",
  fullName: "",
  hrId: "",
  logo: "",
  name: "",
  legalRepresentative: "",
  organizationType: "",
  recruitmentPosition: 5,
  scale: "1",
  registeredCapital: "",
  createdAt: "",
  updatedAt: "",
});

const submitData = (data: {
  data: { checked: boolean; directionName: string };
}) => {
  if (data.data.checked) {
    formCompany.comprehension = data.data.directionName;
  }
};

const handleAvatarSuccess: UploadProps["onSuccess"] = (response) => {
  imageUrl.value = response.url;
};
const handleAvatarError: UploadProps["onError"] = () => {
  ElMessage.error("对不起，上传失败，请重试");
};
const rule = reactive({
  comprehension: [{ required: true, message: "此项不能为空", trigger: "blur" }],
  fullName: [{ required: true, message: "此项不能为空", trigger: "blur" }],
  address: [{ required: true, message: "此项不能为空", trigger: "blur" }],
  scale: [{ required: true, message: "此项不能为空", trigger: "blur" }],
});
const beforeAvatarUpload: UploadProps["beforeUpload"] = (rawFile) => {
  const imgTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
  if (!imgTypes.includes(rawFile.type)) {
    ElMessage.error("对不起，暂不支持上传该类型文件");
    return false;
  } else if (rawFile.size / 1024 / 1024 > 10) {
    ElMessage.error("对不起，上传文件大小不能超过10MB");
    return false;
  }
  return true;
};
interface cityInfo {
  children: { value: string; label: string }[];
  value: string;
  label: string;
}
const cityMap = ref<cityInfo[]>([]);
onMounted(() => {
  getCityinfos().then((res) => {
    cityMap.value = res.data.body.map((item) => {
      return {
        value: item.provinceName,
        label: item.provinceName,
        children: item.cities.map((city) => {
          return {
            value: city,
            label: city,
          };
        }),
      };
    });
  });
  formCompany.fullName = store.state.companyInfo.fullName;
  formCompany.logo = store.state.companyInfo.logo;
  formCompany.about = store.state.companyInfo.about;
  formCompany.address = store.state.companyInfo.address;
  formCompany.scale = store.state.companyInfo.scale;
});

const updateCompany = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      putCompanyinfosCompanyinfoid(
        store.state.companyInfo.companyInformationId,
        formCompany
      )
        .then((res) => {
          ElMessage.success("修改成功");
          store.commit("setCompanyInfo", res.data.body);
        })
        .catch((reject) => {
          ElMessage.error(reject.response.data.message);
        });
    }
  });
};
</script>

<style scoped lang="scss">
.cards {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 800px;
  background-color: rgb(255 255 255);
  border: solid 1px rgb(117 244 216);
  border-radius: 5px;

  .center {
    width: 90%;
    height: 90%;

    .el-form {
      display: flex;
      flex-direction: column;

      span {
        margin-left: 15px;
        font-size: 8px;
        color: #999;
      }

      .el-form-item {
        .el-select {
          width: 411px;
        }

        .select {
          position: relative;
          width: 411px;
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

        .bottom-btn {
          display: flex;
        }
      }

      .avatar {
        display: flex;
        flex-wrap: nowrap;

        .avatar-uploader-icon {
          padding: 20px;
          border: solid 1px #dcdfe6;
        }
      }

      .el-button {
        width: 150px;
        height: 42px;
        margin-left: 120px;
      }
    }
  }
}
</style>
