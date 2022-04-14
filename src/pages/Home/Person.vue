<template>
  <div>
    <form action="#" class="over">
      <div class="left">
        <el-form
          ref="formRef"
          label-width="120px"
          :model="formLabelAlign"
          style="max-width: 500px"
          :rules="rule"
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
                  :src="imageUrl ? imageUrl : formLabelAlign.avatar"
                  class="avatar"
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
              v-model="formLabelAlign.name"
              placeholder="请填写你工作中的名字，便于向求职者展示"
            />
          </el-form-item>
          <el-form-item label="职位" prop="name">
            <el-input
              v-model="formLabelAlign.post"
              placeholder="请填写当前公司的任职职位"
            />
          </el-form-item>
          <el-form-item label="公司全称" prop="name">
            <el-input
              v-model="formLabelAlign.fullName"
              placeholder="请填写与营业执照名称/劳动合同/公司发票抬头一致的公司全称"
            />
          </el-form-item>
          <el-form-item
            label="接受简历邮箱"
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
            <el-input
              v-model="formLabelAlign.acceptEmail"
              placeholder="请填写常用邮箱，支持招聘设置中修改"
            />
          </el-form-item>
          <el-button type="primary" @click="confirmPerson(formRef)"
            >下一步</el-button
          >
        </el-form>
      </div>
      <div class="right">
        <div class="top">
          <img
            :src="
              imageUrl ||
              'https://tse4-mm.cn.bing.net/th/id/OIP-C.W3zARu1eQ44qyPGNAj0GPgAAAA?w=172&h=180&c=7&r=0&o=5&dpr=2&pid=1.7'
            "
            class="avatar"
          />
          <span>{{ formLabelAlign.name || "姓名" }}</span>
          <span>{{ formLabelAlign.post || "职位" }}</span>
        </div>
        <div class="line"></div>
        <div class="bottom">
          <span>{{ formLabelAlign.fullName || "公司全称" }}</span>
          <span>{{ formLabelAlign.acceptEmail || "邮箱" }}</span>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Plus } from "@element-plus/icons-vue";
import type { FormInstance, UploadProps } from "element-plus";
import { ElMessage } from "element-plus";
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import router from "../../router";
import { putHrinfosHrinfoid } from "../../services/services";
import { key } from "../../stores";
const formRef = ref<FormInstance>();
const uploadRef = ref<UploadProps>();
const store = useStore(key);
const formLabelAlign = reactive({
  avatar: "",
  name: "",
  post: "",
  fullName: "",
  acceptEmail: "",
  hrId: "",
  phoneNumber: "",
  createdAt: "",
  updatedAt: "",
});

const imageUrl = ref("");

const handleAvatarSuccess: UploadProps["onSuccess"] = (
  response
  // uploadFile
) => {
  imageUrl.value = response.url;
};
const handleAvatarError: UploadProps["onError"] = () =>
  // err,
  // uploadFile
  {
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
const rule = reactive({
  name: [{ required: true, message: "此项不能为空", trigger: "blur" }],
});
const confirmPerson = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      const res = await putHrinfosHrinfoid(
        store.state.accountInfo.infoId,
        formLabelAlign
      );
      store.commit("setHrInfo", res.data);
      router.push({
        name: "Company",
        params: { companyName: formLabelAlign.fullName },
      });
    } else {
      ElMessage.error("请填写完整信息");
    }
  });
};
</script>

<style scoped lang="scss">
a {
  display: block;
  width: 150px;
  text-decoration: none;
}

.over {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;

  .left {
    .el-form {
      display: flex;
      flex-direction: column;

      .avatar {
        display: flex;
        flex-wrap: nowrap;

        img {
          width: 75px;
          height: 75px;
          border-radius: 50%;
        }

        .avatar-uploader-icon {
          padding: 20px;
          border: solid 1px #dcdfe6;
          border-radius: 50%;
        }

        span {
          margin-left: 15px;
          font-size: 8px;
          color: #999;
        }
      }

      .el-button {
        width: 150px;
        height: 42px;
        margin-left: 120px;
      }
    }
  }

  .right {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 235px;
    height: 235px;
    margin-right: 250px;
    font-size: 14px;
    background: #fff;
    border: 1px solid #eaedec;
    border-radius: 3px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 7%);

    .top {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 75px;
        height: 75px;
        margin: 20px 0 10px;
        border-radius: 50%;
      }

      :nth-child(3) {
        margin: 5px 0;
        font-size: 10px;
        color: #999;
      }
    }

    .line {
      width: 225px;
      height: 1px;
      margin: 15px 5px;
      background-color: rgb(0 0 0 / 5%);
    }

    .bottom {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      span {
        margin: 2px;
        font-size: 10px;
        color: #999;
      }
    }
  }
}
</style>
