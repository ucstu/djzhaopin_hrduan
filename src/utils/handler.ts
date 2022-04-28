import router from "@/router";
import { RequestError } from "@/services/config";
import { ElMessage } from "element-plus";

const failResponseHandler = (responseError: RequestError) => {
  if (responseError.status === 400) {
    let message = "";
    console.log(responseError.response?.data);
    if (responseError.response?.data.errors) {
      for (const error of responseError.response.data.errors) {
        message +=
          error.field +
          ": " +
          error.defaultMessage +
          ", 实际收到的值为：" +
          error.rejectedValue +
          "\n";
      }
    } else if (responseError.response?.data.message) {
      message = responseError.response.data.message;
    } else {
      message = "请求有误";
    }
    ElMessage.error(message);
  } else if (responseError.status === 401) {
    ElMessage.error("登录失效，请重新登录");
    router.replace("/Login");
  } else if (responseError.status === 403) {
    ElMessage.error("您没有权限访问该资源");
  } else if (responseError.status === 404) {
    ElMessage.error("资源不存在");
  } else if (responseError.status === 500) {
    ElMessage.error("服务器错误");
  }
};

export { failResponseHandler };
