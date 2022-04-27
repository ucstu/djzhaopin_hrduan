<template>
  <div class="page">
    <div class="image-wrapper">
      <img
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62345e1d5a7e3f0310ddcb3c/623446ec62a7d9001102351f/16484562558205956397.png"
        class="image"
      />
    </div>

    <div class="alin">
      <div class="center">
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
          min-width="600px"
        >
          <el-form-item label="用户名" prop="user">
            <el-input
              v-model="ruleForm.user"
              type="text"
              autocomplete="off"
              placeholder="请输入用户名"
            />
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input
              v-model="ruleForm.pass"
              type="password"
              autocomplete="off"
              placeholder="请输入密码"
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
          <el-form-item label="验证码" prop="verificationCode">
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
            <el-button type="primary" @click="submitForm(ruleFormRef)"
              >注册</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";
import { getVerificationCode, postAccountinfos } from "@/services/services";
import { failResponseHandler } from "@/utils/handler";
import { ElMessage, FormInstance } from "element-plus";
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { key } from "../../stores";
const store = useStore(key);
const ruleFormRef = ref<FormInstance>();
const vcode = ref("获取验证码");
const btn = ref(false);
const validateUser = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入用户名"));
  }
};
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
  } else if (value !== ruleForm.pass) {
    callback(new Error("两次密码不一致"));
  } else {
    callback();
  }
};

const ruleForm = reactive({
  user: "",
  pass: "",
  checkPass: "",
  verificationCode: "",
});
const postverificationCode = () => {
  getVerificationCode({ phoneNumber: ruleForm.user }).then((res) => {
    ElMessage.success("发送成功");
  });
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
const rules = reactive({
  user: [{ validator: validateUser, trigger: "blur" }],
  pass: [{ validator: validatePass, trigger: "blur" }],
  checkPass: [{ validator: validatePass2, trigger: "blur" }],
});
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  // formEl.validate((valid) => {
  //   if (valid) {
  //     console.log(111);
  //     postAccounts({
  //       accountType: "2",
  //       userName: ruleForm.user,
  //       password: ruleForm.pass,
  //       verificationCode: ruleForm.verificationCode,
  //     }).then((res) => {
  //       console.log(res);
  //       store.commit("setAccountInfo", res.data.body);
  //       ElMessage.success("注册成功");
  //       router.push("/login");
  //     });
  //   } else {
  //     console.log("error submit!");
  //     return false;
  //   }
  // });
  postAccountinfos({
    accountType: 2,
    userName: ruleForm.user,
    password: ruleForm.pass,
    verificationCode: ruleForm.verificationCode,
  })
    .then((res) => {
      store.commit("setAccountInformation", res.data.body);
      ElMessage.success("注册成功");
      router.push("/login");
    })
    .catch(failResponseHandler);
};
</script>
<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgb(255 255 255);

  .image-wrapper {
    display: flex;
    height: 20%;
    padding: 60px 70px 61px;
    background-color: rgb(0 179 139);

    .image {
      width: 80px;
      height: 80px;
      margin-left: 20vw;
      border-radius: 5px;
    }
  }

  .alin {
    display: flex;

    // margin: auto;
    justify-content: center;

    // z-index: 1;
    margin-top: -10vh;

    .center {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 500px;
      height: 300px;
      background-color: rgb(255 255 255);
      border: solid 1px rgb(155 160 158 / 50%);
      border-radius: 5px;

      .el-form {
        margin-top: 20px;
        margin-right: 18%;

        .el-button {
          width: 100px;
        }
      }
    }
  }

  .footer {
    height: 500px;
  }
}
</style>
