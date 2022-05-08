<template>
  <div class="content">
    <div class="main">
      <div class="total">
        <div class="info">
          <div class="info-main">
            <div class="info-left">
              <div class="left-item">
                <span>招聘中</span>
                <div class="circle">{{ jobTypeList?.length || "0" }}</div>
              </div>
            </div>
            <div class="info-right">
              <el-button type="primary" @click="toPublish">
                <el-icon>
                  <circle-plus />
                </el-icon>
                发布职位
              </el-button>
            </div>
          </div>
          <el-divider />
        </div>
        <div class="state">
          <div class="state-left">
            <span>展示状态</span>
            <span>全部({{ jobTypeList?.length || "0" }})</span>
          </div>
          <div>
            <el-input
              v-model="input2"
              class="w-50 m-2"
              placeholder="请输入职位名称"
              :suffix-icon="Search"
              @change="search"
            />
          </div>
        </div>

        <div ref="positionRef" class="position">
          <el-scrollbar>
            <template v-for="position in jobTypeList" :key="position.companyId">
              <div ref="postRef" class="position-list">
                <div class="position-item">
                  <div class="item">
                    <span class="post">职位:{{ position.positionName }}</span>
                    <span class="address">{{
                      "工作地点:" + position.workAreaName
                    }}</span>
                  </div>
                  <div class="item">
                    <span>{{
                      "经验和学历:" +
                      workingYears[position.workingYears] +
                      "-" +
                      educationMap[position.education]
                    }}</span>
                    <span>{{ "招聘类型:" + slution[position.workType] }}</span>
                  </div>
                  <div class="item">
                    <span>{{
                      "薪酬:" +
                      position.startingSalary +
                      "k" +
                      "-" +
                      position.ceilingSalary +
                      "k"
                    }}</span>
                  </div>
                </div>
                <div class="position-button">
                  <el-button
                    type="primary"
                    @click="updatePosition(position.positionInformationId)"
                    >编辑职位</el-button
                  >
                  <el-button
                    type="danger"
                    @click="deletePosition(position.positionInformationId)"
                    >删除职位</el-button
                  >
                </div>
              </div>
            </template>
          </el-scrollbar>
        </div>
        <div class="alert">
          <h3>温馨提示</h3>
          <div class="sentence">
            <span>
              1、彻底删除:为避免您的资源点或消费损失，请在完成招聘之后尽快删除职位。</span
            ><span>
              2、取消免费展示:取消职位的免费展示状态，不影响其他商业操作,等待更新推出.....</span
            ><span>
              3、刷新:相当于新发一条信息，在按时间排序的情况下信息将靠前显示。</span
            ><span>
              4、职位推广:获得更多展示，操作简单，招人更快。推广管理，等待更新....</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import {
  deleteCompanyInfosP0PositionInfosP1,
  getCompanyInfosP0PositionInfos,
} from "@/services/services";
import {
  GetCompanyInfosP0PositionInfosQueryParams,
  PositionInformation,
} from "@/services/types";
import { useMainStore } from "@/stores/main";
import { failResponseHandler } from "@/utils/handler";
import { CirclePlus, Search } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { reactive, ref } from "vue";
const store = useMainStore();
const jobTypeList = ref<PositionInformation[]>();
const input2 = ref("");
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
const valueMap = ref<GetCompanyInfosP0PositionInfosQueryParams>({});
getCompanyInfosP0PositionInfos(
  store.companyInformation.companyInformationId,
  valueMap.value
)
  .then((res) => {
    jobTypeList.value = res.data.body.positionInformations;
  })
  .catch(failResponseHandler);
const slution = { 1: "全职", 2: "兼职", 3: "实习" };
const toPublish = () => {
  router.push("/PublishJob");
};
const updatePosition = (id: string) => {
  router.push({
    name: "PublishJob",
    params: { PublishJobId: id },
  });
};
//下拉发请求
// const positionRef = ref<HTMLElement>(null);
// const postRef = ref<HTMLElement>(null);
// onMounted(() => {
//   console.log(post.value);
// });

// const updatePositionList = async () => {
//   // 距离底部200px时加载一次
//   let bottomOfWindow =
//     postRef.value.offsetHeight -
//       postRef.value.scrollTop -
//       positionRef.value.offsetHeight <=
//     20;
//   if (bottomOfWindow && isLoading == true) {
//     this.page = this.page + 1; //每次分页+1
//     const data = {
//       page: this.page,
//       limit: this.limit,
//       type: "1",
//     };
//     const res = await requset(`url`, data, "get"); //自己封装的请求数据的方法
//     //有数据的时候加载
//     if (res.data.length > 0) {
//       this.list.push(...res.data); //追加数据 使用 ...语法
//       isLoading = true;
//     } else {
//       this.$notify({
//         title: "温馨提示：",
//         message: "暂无更多数据信息！",
//         position: "bottom-right",
//       });
//       isLoading = false; //无数据可以加载
//     }
//   }

//   getCompanyInfosP0PositionInfos(
//     store.companyInformation.companyInformationId,
//     { sort: [] }
//   )
//     .then((res) => {
//       jobTypeList.value = res.data.body.positionInformations;
//     })
//     .catch(failResponseHandler);
// };
const search = () => {
  getCompanyInfosP0PositionInfos(
    store.companyInformation.companyInformationId,
    { positionName: input2.value }
  )
    .then((res) => {
      jobTypeList.value = res.data.body.positionInformations;
    })
    .catch(failResponseHandler);
};
const deletePosition = (id: string) => {
  deleteCompanyInfosP0PositionInfosP1(
    store.companyInformation.companyInformationId,
    id
  )
    .then((res) => {
      jobTypeList.value = jobTypeList.value?.filter(
        (item) =>
          item.positionInformationId !== res.data.body.positionInformationId
      );
      ElMessage.success("删除成功");
    })
    .catch(failResponseHandler);
};
</script>

<style scoped lang="scss">
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95%;
    height: auto;
    background-color: rgb(245 245 250);

    .total {
      width: 92%;
      height: 100%;

      .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .info-main {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 75px;
          margin-top: 15px;

          .info-left {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 40%;
            height: 100%;

            .left-item {
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 20%;

              .circle {
                width: 25px;
                height: 25px;
                text-align: center;
                background-color: rgb(0 179 139);
                border-radius: 50%;
              }
            }
          }

          .info-right {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 40%;
            height: 100%;
          }
        }
      }

      .state {
        display: flex;
        justify-content: space-between;

        .state-left {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 160px;

          :first-child {
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 23px;
            color: #d5d6d7;
            text-align: center;
          }

          :nth-child(2) {
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 23px;
            color: #00b38b;
            text-align: center;
          }
        }
      }

      .position {
        width: 100%;
        height: 280px;
        margin-top: 28px;
        overflow-y: hidden;
        background: #fff;
        border: 1px solid #d5d6d7;
        border-radius: 10px;

        .scrollbar-demo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 50px;
          margin: 10px;
          color: var(--el-color-primary);
          text-align: center;
          background: var(--el-color-primary-light-9);
          border-radius: 4px;
        }

        .position-list {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #d5d6d7;

          .position-item {
            display: flex;
            width: 70%;
            height: 50px;
            margin: 10px 0;

            .item {
              position: relative;
              display: flex;
              flex-direction: column;
              width: 300px;
              text-align: center;

              .post {
                position: absolute;
                top: 5px;
                left: 15px;
                width: 100%;
              }

              .address {
                position: absolute;
                bottom: 5px;
                left: 15px;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }
          }

          .position-button {
            margin-right: 10px;
          }
        }
      }

      .alert {
        height: 200px;
        margin-top: 40px;
        text-align: center;
        background: #fff;
        border: 1px solid #d5d6d7;
        border-radius: 10px;

        .sentence {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
}
</style>
