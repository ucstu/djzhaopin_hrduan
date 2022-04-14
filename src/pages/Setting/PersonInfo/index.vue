<template>
  <div class="person-info">
    <div class="top">
      <el-form
        ref="ruleFormRef"
        :model="formHr"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
        style="max-width: 500px"
      >
        <el-form-item label="头像" prop="name">
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
              <img
                v-if="imageUrl"
                :src="imageUrl ? imageUrl : formHr.avatar"
                class="avatar"
                alt=""
              />
              <el-icon v-else class="avatar-uploader-icon" :size="30">
                <Plus />
              </el-icon>
            </el-upload>
            <span>
              建议使用招聘者真实头像提升真实性、专业性
              支持jpg、jpeg、gif、png，小于10MB
            </span>
          </div>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input
            v-model="formHr.name"
            placeholder="请填写你工作中的名字，便于向求职者展示"
          />
        </el-form-item>
        <el-form-item label="职位" prop="name">
          <el-input v-model="formHr.post" placeholder="请填写职位信息" />
        </el-form-item>
        <el-form-item label="公司" prop="name">
          <el-input v-model="formHr.fullName" placeholder="请填写公司信息" />
        </el-form-item>
        <el-form-item label="手机" prop="phone">
          <el-input
            v-model="formHr.phoneNumber"
            placeholder="请填写工作手机号"
          />
        </el-form-item>
        <el-form-item
          label="邮箱"
          prop="acceptEmail"
          :rules="[
            {
              required: true,
              message: '此项不能为空',
              trigger: 'blur',
            },
            {
              type: 'email',
              message: '请输入正确的邮箱地址',
              trigger: ['blur', 'change'],
            },
          ]"
        >
          <el-input v-model="formHr.acceptEmail" placeholder="请填写常用邮箱" />
        </el-form-item>
      </el-form>
    </div>
    <div class="bottom">
      <div class="line"></div>
      <div class="password">
        <span @click="Topassword"> 修改密码>></span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  getCompanyinfosCompanyinfoid,
  getHrinfosHrinfoid,
} from "@/services/services";
import { Plus } from "@element-plus/icons-vue";
import type { UploadProps } from "element-plus";
import { ElMessage } from "element-plus";
import { onMounted, reactive, ref } from "vue";
import router from "../../../router/index";
import { store } from "../../../stores";
const formSize = ref("default");

const imageUrl = ref("");
onMounted(() => {
  getHrinfosHrinfoid(store.state.hrInfo.hrId).then((res) => {
    console.log(res);
    imageUrl.value = res.data.avatar;
    formHr.name = res.data.name;
    formHr.post = res.data.post;
    formHr.acceptEmail = res.data.acceptEmail;
    formHr.phoneNumber = res.data.phoneNumber;
  });
  getCompanyinfosCompanyinfoid(store.state.companyInfo.companyId).then(
    (res) => {
      console.log(res);
      formHr.fullName = res.data.fullName;
    }
  );
});
// const updateHrinfo = (rule: any, value: any, callback: any) => {
//     if (value === '') {
//         callback(new Error('请填写此项'))
//     } else {
//         if (useValidate(value)){
//             formHr.value.validateField
//         }
//             // if (formHr.include !== '') {
//             //     if (!ruleFormRef.value) return
//             //     ruleFormRef.value.validateField('checkPass', () => null)
//             // }
//             callback()
//     }
// }
const formHr = reactive({
  avatar: "",
  name: "",
  post: "",
  fullName: "",
  acceptEmail: "",
  hrId: "",
  phoneNumber: "",
});
const rules = reactive({
  name: [
    {
      required: true,
      message: "此项不能为空",
      trigger: "blur",
    },
    // {
    //     validator: updateHrinfo,
    //     trigger: 'change',
    // },
  ],
  phone: [
    { required: true, message: "请输入手机号", trigger: "blur" },
    {
      pattern: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/,
      message: "请输入合法手机号/电话号",
      trigger: "change",
    },
  ],
});

const Topassword = () => {
  router.push("/Setting/Other");
};
const handleAvatarSuccess: UploadProps["onSuccess"] = (
  response,
  uploadFile
) => {
  imageUrl.value = response.url;
};
const handleAvatarError: UploadProps["onError"] = (err, uploadFile) => {
  ElMessage.error("对不起，上传失败，请重试");
};

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
</script>

<style scoped lang="scss">
$pas-height: 4.9vh;
$info-width: 75vw;
$info-height: 85vh;

.person-info {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 75vw;
  min-height: $info-height;
  margin: 60px 30px;
  border: solid 1px #ccc;

  .top {
    width: $info-width;
    height: 700px;
    background-color: #fff;

    // height: $info-height - $pas-height;

    .el-form {
      display: flex;
      flex-direction: column;
      margin-top: 40px;

      .el-form-item {
        margin-top: 15px;

        .avatar {
          display: flex;
          flex-wrap: nowrap;

          img {
            width: 75px;
            height: 75px;
            border-radius: 0;
          }

          .avatar-uploader-icon {
            height: 40px;
            padding: 20px;
            border: solid 1px #dcdfe6;
            border-radius: 5px;
          }

          span {
            margin-left: 15px;
            font-size: 8px;
            color: #999;
          }
        }
      }
    }
  }

  .bottom {
    .line {
      width: $info-width;
      height: 1px;
      background-color: rgb(204 204 204 / 100%);
    }

    .password {
      width: $info-width;
      height: 50px;
      line-height: 50px;
      color: rgb(0 0 0);
      text-align: left;
      cursor: pointer;

      span {
        margin-left: 30px;
      }

      span:hover {
        color: rgb(0 139 100);
      }
    }
  }
}
</style>
