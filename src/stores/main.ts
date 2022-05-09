import {
  AccountInformation,
  CompanyInformation,
  HrInformation,
  MessageRecord
} from "@/services/types";
import { defineStore } from "pinia";

interface withReadStateMessageRecord extends MessageRecord {
  haveRead: boolean;
}
export const useMainStore = defineStore("main", {
  state: () => ({
    jsonWebToken: null as unknown as string,
    hrInformation: null as unknown as HrInformation,
    accountInformation: null as unknown as AccountInformation,
    companyInformation: null as unknown as CompanyInformation,
    messages: {} as { [key: string]: withReadStateMessageRecord[] },
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
