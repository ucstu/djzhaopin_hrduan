<template>
  <div>
    <state />
    <div class="company">
      <div class="left">
        <el-form
          ref="formRef"
          :model="formCompany"
          label-width="120px"
          :rules="rule"
          style="max-width: 500px"
        >
          <el-form-item label="公司名称">
            <span>{{ route.params.companyName }}</span>
          </el-form-item>
          <el-form-item
            label="公司简称"
            prop="name"
            :rules="[
              {
                required: true,
                message: '此项不能为空',
                trigger: 'blur',
              },
            ]"
          >
            <el-input v-model="formCompany.name" />
            <span
              >公司简称让牛人快速找到你，可以是全称简写/知名产品/知名品牌关键字，提交后不能修改</span
            >
          </el-form-item>
          <el-form-item label="公司logo">
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
                <img v-if="imageUrl" :src="formCompany.logo" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon" :size="30">
                  <Plus />
                </el-icon>
              </el-upload>
              <span>
                温馨提示：已默认生成文字logo，如需替换可点击重新选择或制作
                <br />logo要求：不能为二维码、营业执照、公司门头等
              </span>
            </div>
          </el-form-item>
          <!-- <el-form-item label="公司行业" prop="name">
                        <el-input
                            v-model="formCompany.comprehension"
                            :input-style="{ display: 'none' }"
                        />
                        <div class="select" @click="dialogFormVisible = true">
                            <span>{{ formCompany.comprehension || "请选择" }}</span>
                            <img src="../../assets/down.png" />
                        </div>
                        <el-dialog v-model="dialogFormVisible" title="请选择公司行业" :scroll-lock="false">
                            <el-table :data="gridData">
                                <el-table-column property="date" label="Date" width="150" />
                                <el-table-column property="name" label="Name" width="200" />
                                <el-table-column property="address" label="Address" />
                            </el-table>

                            <div @click="formCompany.comprehension = '149649419'">441156</div>
                            <template #footer>
                                <span class="dialog-footer">
                                    <el-button @click="dialogFormVisible = false">取消</el-button>
                                    <el-button type="primary" @click="dialogFormVisible = false">确定</el-button>
                                </span>
                            </template>
                        </el-dialog>
                    </el-form-item>-->
          <el-form-item label="所在城市">
            <el-cascader
              v-model="value"
              :options="options"
              placeholder="请选择"
              @change="handleChange"
            />
          </el-form-item>
          <el-form-item label="公司规模" prop="name">
            <el-select v-model="formCompany.scale" placeholder="请选择">
              <el-option label="少于15人" value="1" />
              <el-option label="15-50人" value="2" />
              <el-option label="50-150人" value="3" />
              <el-option label="150-500人" value="4" />
              <el-option label="500-2000人" value="5" />
              <el-option label="2000人以上" value="6" />
            </el-select>
          </el-form-item>
          <el-form-item label="发展阶段" prop="name">
            <el-select
              v-model="formCompany.financingStage"
              placeholder="请选择"
            >
              <el-option label="未融资" value="1" />
              <el-option label="天使轮" value="2" />
              <el-option label="A轮" value="3" />
              <el-option label="B轮" value="4" />
              <el-option label="C轮" value="5" />
              <el-option label="D轮及以上" value="6" />
              <el-option label="上市公司" value="7" />
              <el-option label="不需要融资" value="8" />
            </el-select>
          </el-form-item>
          <el-form-item label="公司福利">
            <el-select
              v-model="value"
              multiple
              filterable
              allow-create
              default-first-option
              :reserve-keyword="false"
              placeholder="选择公司福利"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <div class="bottom-btn">
            <el-button type="primary" @click="confirmCompany(formRef)"
              >新建公司</el-button
            >
            <router-link to="/home/person">返回上一步</router-link>
          </div>
        </el-form>
      </div>
      <div class="right">
        <span class="company-title">我的公司</span>
        <div class="my-company">
          <img
            :src="
              imageUrl ||
              'https://tse4-mm.cn.bing.net/th/id/OIP-C.W3zARu1eQ44qyPGNAj0GPgAAAA?w=172&h=180&c=7&r=0&o=5&dpr=2&pid=1.7'
            "
            alt=""
          />
          <div class="infos">
            <span class="infos-top">{{ formCompany.name || "公司简称" }}</span>
            <div class="infos-bottom">
              <span>{{ formCompany.comprehension || "公司行业" }}</span>
              <i>/</i>
              <span>{{
                scaleMap[Number(formCompany.scale)] || "公司规模"
              }}</span>
              <i>/</i>
              <span>{{
                financingStageMap[Number(formCompany.financingStage)] ||
                "发展阶段"
              }}</span>
            </div>
          </div>
        </div>
        <div class="example">
          <span>示例</span>
          <div class="ex-company">
            <el-carousel height="150px" indicator-position="none" arrow="never">
              <el-carousel-item v-for="item in 4" :key="item">
                <div class="car-company">
                  <img :src="formInstance[item - 1].logo" />
                  <div class="infos">
                    <span class="infos-top">{{
                      formInstance[item - 1].name || "公司简称"
                    }}</span>
                    <div class="infos-bottom">
                      <span>{{
                        formInstance[item - 1].industry || "公司行业"
                      }}</span>
                      <i>/</i>
                      <span>{{
                        formInstance[item - 1].size || "公司规模"
                      }}</span>
                      <i>/</i>
                      <span>{{
                        formInstance[item - 1].stage || "发展阶段"
                      }}</span>
                    </div>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Plus } from "@element-plus/icons-vue";
import { ElMessage, FormInstance, UploadProps } from "element-plus";
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import router from "../../router";
import { postCompanyinfos } from "../../services/services";
import { CompanyInformation } from "../../services/types";
import { key } from "../../stores";
import State from "./State.vue";
const formRef = ref<FormInstance>();
const uploadRef = ref<UploadProps>();
const store = useStore(key);
const imageUrl = ref("");
const value = ref([]);
const route = useRoute();
const dialogFormVisible = ref(false);
const options = reactive([
  {
    value: [],
    options: [],
  },
]);
//表格数据
const gridData = reactive([]);
// const citys = getCityinfos().then(res => {
//     res.data[0]
// })
const formCompany = reactive<CompanyInformation>({
  address: "",
  about: "",
  benefits: [],
  city: "",
  companyId: "",
  comprehension: "",
  establishmentTime: "",
  financingStage: "1",
  fullName: "",
  hrId: "",
  logo: "",
  name: "",
  legalRepresentative: "",
  organizatioType: "",
  recruitmentPosition: 5,
  scale: "1",
  registeredCapital: "",
  createdAt: "",
  updatedAt: "",
});
// onMounted(() => {
//     console.log(route.params.companyName);

// })
const financingStageMap = [
  "",
  "未融资",
  "天使轮",
  "A轮",
  "B轮",
  "C轮",
  "D轮及以上",
  "上市公司",
  "不需要融资",
];
const scaleMap = [
  "",
  "少于15人",
  "15-50人",
  "50-150人",
  "150-500人",
  "500-2000人",
  "2000人以上",
];
interface companyInfo {
  logo: string;
  name: string;
  stage: string;
  industry: string;
  size: string;
}
const formInstance = reactive<companyInfo[]>([
  {
    logo: "https://tse1-mm.cn.bing.net/th/id/R-C.f6ea7adbf0fd0e4b2f3299308aa92471?rik=YzXBT59%2bWCTZBQ&riu=http%3a%2f%2fwww.gaoruiad.com%2fuploads%2fimage%2f20190621%2f20190621181458_89994.jpg&ehk=vb99sP9BQF%2fKTXBJ6pul4F95H53QX22GJ36iRya2OQs%3d&risl=&pid=ImgRaw&r=0",
    name: "美团",
    stage: "上市公司",
    industry: "消费生活",
    size: "2000人以上",
  },
  {
    logo: "https://tse4-mm.cn.bing.net/th/id/OIP-C.wcteahe8c4YhUEnX-4A9ZAAAAA?pid=ImgDet&rs=1",
    name: "拉勾",
    stage: "D轮及以上",
    industry: "工具类",
    size: "500-2000人",
  },
  {
    logo: "https://tse1-mm.cn.bing.net/th/id/R-C.8f01161b92e0b52c31a6a00423dcc5f4?rik=WRAKTzxDM9xPIw&riu=http%3a%2f%2fqty83k.creatby.com%2fmaterials%2f125788%2forigin%2f8f01161b92e0b52c31a6a00423dcc5f4_origin.jpg&ehk=DXFhsEQlu0tpRMEhAqffYy%2fJaK%2bYLQK%2f%2faNpTe71BT4%3d&risl=&pid=ImgRaw&r=0",
    name: "京东",
    stage: "上市公司",
    industry: "消费生活",
    size: "2000人以上",
  },
  {
    logo: "https://tse1-mm.cn.bing.net/th/id/R-C.c64f052abc3f0187153e95db5aedda53?rik=ZmNhPI%2bcmZfgsw&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fw%2f2020%2f08-04%2f90414%2fwater_90414_698_698_.png&ehk=UZqdW08EdYl%2bxqUcxFCrbC62Eq17qwjXOjPogyASULA%3d&risl=&pid=ImgRaw&r=0",
    name: "字节跳动",
    stage: "D轮及以上",
    industry: "内容资讯",
    size: "2000人以上",
  },
]);

const handleAvatarSuccess: UploadProps["onSuccess"] = (response) => {
  imageUrl.value = response.url;
};
const handleAvatarError: UploadProps["onError"] = () => {
  ElMessage.error("对不起，上传失败，请重试");
};
const rule = reactive({
  name: [{ required: true, message: "此项不能为空", trigger: "blur" }],
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
// const handleChange = (value: any) => {
//   console.log(value);
// };
const confirmCompany = (formEl: FormInstance | undefined) => {
  console.log(formEl);
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      postCompanyinfos(formCompany)
        .then((res) => {
          ElMessage.success("恭喜您，公司创建成功");
          dialogFormVisible.value = false;
          store.commit("setCompanyInfo", res.data);
          router.push("/PublishJob");
        })
        .catch((reject) => {
          console.error(reject);
        });
    }
  });
};
</script>

<style scoped lang="scss">
a {
  margin-left: 15px;
  font-size: 10px;
  color: rgb(0 0 0 / 80%);
  text-decoration: none;
}

a:hover {
  color: #999;
}

.company {
  display: flex;
  justify-content: space-around;
  padding: 20px;

  .hidden {
    display: none;
  }

  .left {
    .el-form {
      display: flex;
      flex-direction: column;

      span {
        margin-left: 15px;
        font-size: 8px;
        color: #999;
      }

      .el-form-item {
        .select {
          display: flex;
          align-items: center;
          justify-content: space-around;
          width: 211px;
          height: 30px;
          line-height: 30px;
          border: solid 1px #dcdfe6;
          border-radius: 4px;

          span {
            margin-right: 117px;
            font-size: 14px;
            color: #ababb2;
          }

          img {
            width: 16px;
            height: 16px;
          }
        }

        .addbutton {
          width: 80px;
          font-weight: bold;
          color: #999;
          text-align: center;
          cursor: pointer;
          border: solid 1.5px #999;
          border-radius: 10%;
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

  .right {
    .company-title {
      font-size: 14px;
    }

    .my-company {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-around;
      width: 20vw;
      height: 120px;
      margin-top: 8px;
      border: solid 1px #dcdfe6;
      border-radius: 4px;

      & > img {
        width: 5vw;
        height: 9vh;
        object-fit: cover;
        object-position: top;
      }

      .infos {
        display: flex;
        flex-direction: column;

        .infos-top {
          font-size: 14px;
          color: rgb(0 0 0 / 80%);
        }

        .infos-bottom {
          font-size: 10px;
          color: #999;
        }
      }
    }

    .example {
      margin-top: 20px;
      font-size: 14px;

      .ex-company {
        margin-top: 8px;

        .el-carousel {
          .el-carousel__item {
            height: 122px;
            margin: 0;
            font-size: 14px;
            line-height: 148px;
            color: #475669;
            text-align: center;
            border-radius: 4px;
            opacity: 0.75;

            .car-company {
              display: flex;
              align-items: center;
              justify-content: space-around;
              width: 20vw;
              height: 120px;
              background-image: url("https://upfile2.asqql.com/upfile/hdimg/wmtp/wmtp/2017-9/4/102028SKGil0okze.jpg");
              border: solid 1px rgb(0 179 139);
              border-radius: 4px;

              img {
                width: 5vw;
                height: 9vh;
                object-fit: cover;
                object-position: top;
                border-radius: 5px;
              }

              .infos {
                z-index: 100;

                .infos-top {
                  display: flex;
                  height: 20px;
                  font-size: 14px;
                  color: rgb(0 0 0 / 80%);
                }

                .infos-bottom {
                  font-size: 10px;
                  color: #999;
                }
              }
            }
          }
        }

        .el-carousel__item:nth-child(2n) {
          background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n + 1) {
          background-color: #d3dce6;
        }
      }
    }
  }
}
</style>
