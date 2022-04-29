import {
  AccountInformation,
  CompanyInformation,
  DeliveryRecord,
  HrInformation,
  PositionInformation
} from "@/services/types";
import { ElMessage } from "element-plus";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import VuexPersister from "vuex-persister";

const vuexPersister = new VuexPersister<State>({});

export interface State {
  token: string;
  hrInformation: HrInformation;
  accountInformation: AccountInformation;
  companyInformation: CompanyInformation;
  comprise: Array<string>;
  positionInformation: PositionInformation;
  deliveryRecord: DeliveryRecord;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: () => ({
    token: "",
    hrInformation: {} as HrInformation,
    accountInformation: {} as AccountInformation,
    companyInformation: {} as CompanyInformation,
    comprise: [],
    positionInformation: {} as PositionInformation,
    deliveryRecord: {} as DeliveryRecord,
  }),
  actions: {
    AddCompanyRerecruit(context, add: number) {
      if (context.state.companyInformation.recruitmentPosition <= 20) {
        context.commit("addCompanyRerecruit", add);
      } else {
        ElMessage.warning("招聘人数已达上限");
      }
    },
  },
  mutations: {
    setToken(state: State, token: State["token"]) {
      state.token = token;
    },
    setHrInformation(state: State, hrInformation: State["hrInformation"]) {
      state.hrInformation = hrInformation;
    },
    setAccountInformation(
      state: State,
      accountInformation: State["accountInformation"]
    ) {
      state.accountInformation = accountInformation;
    },
    setCompanyInformation(
      state: State,
      companyInformation: State["companyInformation"]
    ) {
      state.companyInformation = companyInformation;
    },
    addCompanyRerecruit(state: State, add: number) {
      state.companyInformation.recruitmentPosition += add;
    },
    decreaseCompanyRerecruit(state: State, decrease: number) {
      state.companyInformation.recruitmentPosition -= decrease;
    },

    setComprise(state: State, comprise: State["comprise"]) {
      state.comprise = comprise;
    },
    setPositionInformation(
      state: State,
      positionInformation: State["positionInformation"]
    ) {
      state.positionInformation = positionInformation;
    },
    setDeliveryRecord(state: State, deliveryRecord: State["deliveryRecord"]) {
      state.deliveryRecord = deliveryRecord;
    },
  },
  getters: {
    token: (state: State) => state.token,
    userName: (state: State) => state.accountInformation.userName,
  },
  modules: {},
  plugins: [vuexPersister.persist],
});
