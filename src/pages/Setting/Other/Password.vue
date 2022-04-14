<template>
  <div class="password">
    <span>登录账号：{{ store.state.accountInfo.phoneNumber }}</span>
    <div>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="ruleForm.password"
            type="password"
            autocomplete="off"
            placeholder="8-16位字母，数字，特殊符号组成"
          />
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            v-model="ruleForm.checkPass"
            type="password"
            autocomplete="off"
            placeholder="请再次输入密码"
          />
        </el-form-item>
        <!-- <el-form-item label="验证码">
                    <el-input v-model="ruleForm.verificationCode" type="text" autocomplete="off" placeholder="请输入验证码" />
                </el-form-item> -->
        <el-form-item>
          <el-button type="primary" @click="updateForm(ruleFormRef)"
            >保存</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { putAcocuntsAccountid } from "@/services/services";
import type { FormInstance } from "element-plus";
import { ElMessage } from "element-plus";
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { key } from "../../../stores";
const ruleFormRef = ref<FormInstance>();
const store = useStore(key);
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else {
    if (ruleForm.checkPass !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("checkPass", () => null);
    }
    callback();
  }
};
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请再次输入密码"));
  } else if (value !== ruleForm.password) {
    callback(new Error("两次密码不一致"));
  } else {
    callback();
  }
};
const rules = reactive({
  password: [{ validator: validatePass, trigger: "blur" }],
  checkPass: [{ validator: validatePass2, trigger: "blur" }],
});

const ruleForm = reactive({
  password: "",
  checkPass: "",
  verificationCode: 1321,
});
const updateForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      putAcocuntsAccountid(store.state.accountInfo.accountId, ruleForm).then(
        (res) => {
          console.log(res);
          if (res.status === 200) {
            ruleForm.password = "";
            ruleForm.checkPass = "";
            ElMessage.success("修改成功");
          }
        }
      );
    } else {
      console.log("error submit!");
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
        width: 20%;
      }
    }
  }
}
</style>
