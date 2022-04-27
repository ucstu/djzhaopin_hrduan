<template>
  <div class="content">
    <div class="main">
      <div class="total">
        <div class="info">
          <div class="info-main">
            <div class="info-left">
              <div class="left-item">
                <span>招聘中</span>
                <div class="circle">{{ jobTypeList?.length }}</div>
              </div>
              <!-- <div class="left-item">
                <span>暂停中</span>
                <div class="circle">{{ 1 }}</div>
              </div>
              <div class="left-item">
                <span>审核中</span>
                <div class="circle">{{ 1 }}</div>
              </div> -->
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
            <span>全部({{ jobTypeList?.length }})</span>
          </div>
          <div>
            <el-input
              v-model="input2"
              class="w-50 m-2"
              placeholder="请输入关键字"
              :suffix-icon="Search"
            />
          </div>
        </div>

        <div class="position">
          <el-scrollbar height="400px">
            <template v-for="position in jobTypeList" :key="position.companyId">
              <div v-if="positionInformationId" class="position-list">
                <div class="position-item">
                  <div class="item">
                    <span>{{ "职位:" + position.name }}</span>
                    <span>{{ "工作地点:" + position.workArea }}</span>
                  </div>
                  <div class="item">
                    <span>{{
                      "经验和学历:" +
                      position.workingYears +
                      "-" +
                      position.education
                    }}</span>
                    <span>{{ "招聘类型:" + position.positionType }}</span>
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
                <div>
                  <el-button
                    type="primary"
                    @click="updatePosition(positionInformationId)"
                    >编辑职位</el-button
                  >
                  <el-button
                    type="danger"
                    @click="deletePosition(positionInformationId)"
                    >删除职位</el-button
                  >
                </div>
              </div>
            </template>
            <el-divider />
          </el-scrollbar>
        </div>
        <div class="alert">
          <h3>温馨提示</h3>
          <div class="sentence">
            <span>
              1、彻底删除:为避免您的资源点或消费损失，请将职位暂停招聘或关闭推广，然后到暂停招聘页面彻底删除职位。</span
            ><span>
              2、取消免费展示:取消职位的免费展示状态，不影响其他商业操作。</span
            ><span>
              3、刷新:相当于新发一条信息，在按时间排序的情况下信息将靠前显示。</span
            ><span>
              4、职位推广:获得更多展示，操作简单，招人更快。推广管理</span
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
  deleteCompanyinfosCompanyinfoidPositioninfosPositioninfoid,
  getCompanyinfosCompanyinfoidPositioninfos,
} from "@/services/services";
import { PositionInformation } from "@/services/types";
import { key } from "@/stores";
import { CirclePlus, Search } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { ref, toRefs } from "vue";
import { useStore } from "vuex";
const store = useStore(key);
const jobTypeList = ref<PositionInformation[]>();
const input2 = ref("");
getCompanyinfosCompanyinfoidPositioninfos(
  store.state.companyInformation.companyInformationId,
  {}
).then((res) => {
  jobTypeList.value = res.data.body;
});
const slution = { 1: "随时入职", 2: "2周内入职", 3: "1月内入职" };
const { positionInformationId } = toRefs(store.state.positionInformation);

const toPublish = () => {
  router.push("/PublishJob");
};

const updatePosition = (id: string) => {
  router.push({
    name: "PublishJob",
    params: { PublishJobId: id },
  });
};
const deletePosition = (id: string) => {
  deleteCompanyinfosCompanyinfoidPositioninfosPositioninfoid(
    store.state.companyInformation.companyInformationId,
    id
  ).then((res) => {
    store.state.positionInformation = res.data.body;
    positionInformationId.value = "";
    ElMessage.success("删除成功");
  });
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
        height: 300px;
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
          justify-content: space-around;
          margin-top: 15px;
          border-bottom: 1px solid #d5d6d7;

          .position-item {
            display: flex;
            width: 50%;

            .item {
              display: flex;
              flex-direction: column;
              width: 100%;
              text-align: center;
            }
          }
        }

        .el-divider {
          width: 80%;
          margin: 0 auto;
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
