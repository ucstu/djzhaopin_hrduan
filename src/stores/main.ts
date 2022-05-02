import {
  AccountInformation,
  CompanyInformation,
  DeliveryRecord,
  HrInformation,
  PositionInformation,
} from "@/services/types";
import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    jsonWebToken: null as unknown as string,
    hrInformation: null as unknown as HrInformation,
    deliveryRecord: null as unknown as DeliveryRecord,
    accountInformation: null as unknown as AccountInformation,
    companyInformation: null as unknown as CompanyInformation,
    positionInformation: null as unknown as PositionInformation,
  }),
  persist: {
    enabled: true,
    strategies: [
      {
        key: "pinia-main",
      },
    ],
  },
});

export const useCompriseStore = defineStore("comprise", {
  state: () => ({
    comprise: [] as Array<string>,
  }),
  persist: {
    enabled: true,
    strategies: [
      {
        key: "pinia-comprise",
        storage: localStorage,
      },
    ],
  },
});
