import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import VuexPersister from "vuex-persister";
import {
  AccountInformation,
  CompanyInformation,
  DeliveryRecord,
  HRInformation,
  PositionInformation
} from "../services/types";

const vuexPersister = new VuexPersister<State>({});

export interface State {
  token: string;
  accountInfo: AccountInformation;
  hrInfo: HRInformation;
  companyInfo: CompanyInformation;
  comprise: Array<string>;
  positionInfo: PositionInformation;
  deliveryRecord: DeliveryRecord;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: () => ({
    token: "",
    accountInfo: {} as AccountInformation,
    hrInfo: {} as HRInformation,
    companyInfo: {} as CompanyInformation,
    comprise: [],
    positionInfo: {} as PositionInformation,
    deliveryRecord: {} as DeliveryRecord,
  }),
  mutations: {
    setPrise(state: State, payload: State["comprise"]) {
      state.comprise = payload;
    },
    setToken(state: State, token: State["token"]) {
      state.token = token;
    },
    setAccountInfo(state: State, accountInfo: State["accountInfo"]) {
      state.accountInfo = accountInfo;
    },
    setHrInfo(state: State, hrInfo: State["hrInfo"]) {
      state.hrInfo = hrInfo;
    },
    setCompanyInfo(state: State, companyInfo: State["companyInfo"]) {
      state.companyInfo = companyInfo;
    },
    setPositionInfo(state: State, positionInfo: State["positionInfo"]) {
      state.positionInfo = positionInfo;
    },
    setDeliveryRecord(state: State, deliveryRecord: State["deliveryRecord"]) {
      state.deliveryRecord = deliveryRecord;
    },
  },
  getters: {
    token: (state: State) => state.token,
    userName: (state: State) => state.accountInfo.userName,
  },
  modules: {},
  plugins: [vuexPersister.persist],
});
