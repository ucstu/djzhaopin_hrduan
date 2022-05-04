<template>
  <div class="password">
    <span>登录账号：{{ store.accountInformation.userName }}</span>
    <div>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="验证码">
          <el-input
            v-model.number="ruleForm.verificationCode"
            placeholder="输入验证码"
          >
            <template #append>
              <el-button v-if="!btn" @click="postverificationCode">{{
                vcode
              }}</el-button>
              <el-button v-if="btn" @click="postverificationCode">{{
                vcode
              }}</el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="deleteForm(ruleFormRef)"
            >注销账号</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import { deleteAccountInfosP0, getVerificationCode } from "@/services/services";
import {
  AccountInformation,
  CompanyInformation,
  HrInformation,
} from "@/services/types";
import { useMainStore } from "@/stores/main";
import { failResponseHandler } from "@/utils/handler";
import type { FormInstance } from "element-plus";
import { ElMessage } from "element-plus";
import { reactive, ref } from "vue";
const ruleFormRef = ref<FormInstance>();
const store = useMainStore();
const vcode = ref("获取验证码");
const btn = ref(false);

const ruleForm = reactive({
  verificationCode: "",
});

const postverificationCode = () => {
  getVerificationCode({
    email: store.hrInformation.acceptEmail,
  })
    .then((res) => {
      ElMessage.success("发送成功");
    })
    .catch(failResponseHandler);
  btn.value = true;
  let time = 60;
  const timer = setInterval(() => {
    time--;
    vcode.value = `${time}s`;
    if (time === 0) {
      clearInterval(timer);
      vcode.value = "获取验证码";
      btn.value = false;
    }
  }, 1000);
};
const deleteForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      deleteAccountInfosP0(store.accountInformation.accountInformationId, {
        verificationCode: ruleForm.verificationCode,
      })
        .then(() => {
          store.jsonWebToken = null as unknown as string;
          store.hrInformation = null as unknown as HrInformation;
          store.accountInformation = null as unknown as AccountInformation;
          store.companyInformation = null as unknown as CompanyInformation;
          ElMessage.success("注销成功");
          router.push("/");
        })
        .catch(failResponseHandler);
    } else {
      return false;
    }
  });
};
</script>

<style scoped lang="scss">
.password {
  margin: 40px 0;

  .el-form {
    margin: 40px 0;

    .el-form-item {
      margin: 40px 0;

      .el-button {
        width: 100px;
      }
    }
  }
}
</style>
