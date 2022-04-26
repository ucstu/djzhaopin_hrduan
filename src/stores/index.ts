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
  hrInformation: HRInformation;
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
    hrInformation: {} as HRInformation,
    accountInformation: {} as AccountInformation,
    companyInformation: {} as CompanyInformation,
    comprise: [],
    positionInformation: {} as PositionInformation,
    deliveryRecord: {} as DeliveryRecord,
  }),
  mutations: {
    setToken(state: State, token: State["token"]) {
      state.token = token;
    },
    setHrInfo(state: State, hrInformation: State["hrInformation"]) {
      state.hrInformation = hrInformation;
    },
    setAccountInfo(
      state: State,
      accountInformation: State["accountInformation"]
    ) {
      state.accountInformation = accountInformation;
    },
    setCompanyInfo(
      state: State,
      companyInformation: State["companyInformation"]
    ) {
      state.companyInformation = companyInformation;
    },
    setCompose(state: State, comprise: State["comprise"]) {
      state.comprise = comprise;
    },
    setPositionInfo(
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
