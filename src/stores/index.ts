import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import VuexPersister from "vuex-persister";
import {
    AccountInformation,
    CompanyInformation,
    HRInformation
} from "../services/types";

const vuexPersister = new VuexPersister<State>({});

export interface State {
  token: string;
  accountInfo: AccountInformation;
  hrInfo: HRInformation;
  companyInfo: CompanyInformation;
  comprise: Array<string>;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: () => ({
    token: "",
    accountInfo: {} as AccountInformation,
    hrInfo: {} as HRInformation,
    companyInfo: {} as CompanyInformation,
    comprise: [],
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
  },
  modules: {},
  plugins: [vuexPersister.persist],
});
