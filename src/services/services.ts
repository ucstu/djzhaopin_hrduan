/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 5
 */

import { AxiosRequestConfig } from "axios";
import { SwaggerResponse } from "./config";
import { Http } from "./httpRequest";
import {
  GetVerificationCodeQueryParams,
  GetCompanyinfosCompanyinfoidPositioninfosQueryParams,
  GetAreaInformationsQueryParams,
  GetCompanyinfosCompanyinfoidDeliveryrecordsQueryParams,
  DeleteAccountsAccountidQueryParams,
  GetDirectiontagsQueryParams,
  PositionInformation,
  AreaInformations,
  AttentionRecord,
  GarnerRecord,
  PositionTypes,
  JobExpectation,
  WorkExperience,
  CityInformations,
  UserInformation,
  AccountInformation,
  HRInformation,
  MessageRecord,
  ProjectExperience,
  InspectionRecord,
  CompanyInformation,
  EducationExperience,
  DirectionTags,
  FilterInformation,
  DeliveryRecord,
} from "./types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const __DEV__ = process.env.NODE_ENV !== "production";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function overrideConfig(
  config?: AxiosRequestConfig,
  configOverride?: AxiosRequestConfig
): AxiosRequestConfig {
  return {
    ...config,
    ...configOverride,
    headers: {
      ...config?.headers,
      ...configOverride?.headers,
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function template(path: string, obj: { [x: string]: any } = {}) {
  Object.keys(obj).forEach((key) => {
    const re = new RegExp(`{${key}}`, "i");
    path = path.replace(re, obj[key]);
  });

  return path;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function objToForm(requestBody: object) {
  const formData = new FormData();

  Object.entries(requestBody).forEach(([key, value]) => {
    value && formData.append(key, value);
  });

  return formData;
}

/**
 *
 * 注销账号
 */
export const deleteAccountsAccountid = (
  /**
   *
   * 账号ID
   */
  accountid: string,
  queryParams: DeleteAccountsAccountidQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountInformation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteAccountsAccountid.key, { accountid }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteAccountsAccountid.key = "/accounts/{accountid}";

/**
 *
 * 删除职位信息
 */
export const deleteCompanyinfosCompanyinfoidPositioninfosPositioninfoid = (
  /**
   *
   * 公司信息ID
   */
  companyinfoid: string,
  /**
   *
   * 职位信息ID
   */
  positioninfoid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: PositionInformation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteCompanyinfosCompanyinfoidPositioninfosPositioninfoid.key, {
      companyinfoid,
      positioninfoid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteCompanyinfosCompanyinfoidPositioninfosPositioninfoid.key =
  "/companyinfos/{companyinfoid}/positioninfos/{positioninfoid}";

/**
 *
 * 删除关注记录
 */
export const deleteUserinfosUserinfoidAttentionrecordsAttentionrecordid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 关注记录ID
   */
  attentionrecordid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AttentionRecord;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteUserinfosUserinfoidAttentionrecordsAttentionrecordid.key, {
      userinfoid,
      attentionrecordid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserinfosUserinfoidAttentionrecordsAttentionrecordid.key =
  "/userinfos/{userinfoid}/attentionrecords/{attentionrecordid}";

/**
 *
 * 删除投递记录
 */
export const deleteUserinfosUserinfoidDeliveryrecordsDeliveryrecordid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 投递记录ID
   */
  deliveryrecordid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: DeliveryRecord;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteUserinfosUserinfoidDeliveryrecordsDeliveryrecordid.key, {
      userinfoid,
      deliveryrecordid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserinfosUserinfoidDeliveryrecordsDeliveryrecordid.key =
  "/userinfos/{userinfoid}/deliveryrecords/{deliveryrecordid}";

/**
 *
 * 删除教育经历
 */
export const deleteUserinfosUserinfoidEduexperiencesEduexperienceid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 教育经历ID
   */
  eduexperienceid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: EducationExperience;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteUserinfosUserinfoidEduexperiencesEduexperienceid.key, {
      userinfoid,
      eduexperienceid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserinfosUserinfoidEduexperiencesEduexperienceid.key =
  "/userinfos/{userinfoid}/eduexperiences/{eduexperienceid}";

/**
 *
 * 删除收藏记录
 */
export const deleteUserinfosUserinfoidGarnerrecordsGarnerrecordid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 收藏记录ID
   */
  garnerrecordid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: GarnerRecord;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteUserinfosUserinfoidGarnerrecordsGarnerrecordid.key, {
      userinfoid,
      garnerrecordid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserinfosUserinfoidGarnerrecordsGarnerrecordid.key =
  "/userinfos/{userinfoid}/garnerrecords/{garnerrecordid}";

/**
 *
 * 删除查看记录
 */
export const deleteUserinfosUserinfoidInspectionrecordsInspectionrecordid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 查看记录ID
   */
  inspectionrecordid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: InspectionRecord;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteUserinfosUserinfoidInspectionrecordsInspectionrecordid.key, {
      userinfoid,
      inspectionrecordid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserinfosUserinfoidInspectionrecordsInspectionrecordid.key =
  "/userinfos/{userinfoid}/inspectionrecords/{inspectionrecordid}";

/**
 *
 * 删除求职期望
 */
export const deleteUserinfosUserinfoidJobexpectationsJobexpectationid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 求职期望ID
   */
  jobexpectationid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: JobExpectation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteUserinfosUserinfoidJobexpectationsJobexpectationid.key, {
      userinfoid,
      jobexpectationid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserinfosUserinfoidJobexpectationsJobexpectationid.key =
  "/userinfos/{userinfoid}/jobexpectations/{jobexpectationid}";

/**
 *
 * 删除项目经历
 */
export const deleteUserinfosUserinfoidProjectexperiencesProjectexperienceid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 项目经历ID
   */
  projectexperienceid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: ProjectExperience;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(
      deleteUserinfosUserinfoidProjectexperiencesProjectexperienceid.key,
      { userinfoid, projectexperienceid }
    ),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserinfosUserinfoidProjectexperiencesProjectexperienceid.key =
  "/userinfos/{userinfoid}/projectexperiences/{projectexperienceid}";

/**
 *
 * 删除工作经历
 */
export const deleteUserinfosUserinfoidWorkexperiencesWorkexperienceid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 工作经历ID
   */
  workexperienceid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: WorkExperience;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteUserinfosUserinfoidWorkexperiencesWorkexperienceid.key, {
      userinfoid,
      workexperienceid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserinfosUserinfoidWorkexperiencesWorkexperienceid.key =
  "/userinfos/{userinfoid}/workexperiences/{workexperienceid}";

/**
 *
 * 查询地区信息
 */
export const getAreaInformations = (
  queryParams: GetAreaInformationsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AreaInformations;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getAreaInformations.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getAreaInformations.key = "/areaInformations";

/**
 *
 * 查询城市信息
 */
export const getCityinfos = (
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: CityInformations;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getCityinfos.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCityinfos.key = "/cityinfos";

/**
 *
 * 查询所有公司信息
 */
export const getCompanyinfos = (
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 公司信息列表
     *
     */
    body: CompanyInformation[];
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getCompanyinfos.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyinfos.key = "/companyinfos";

/**
 *
 * 查询公司信息
 */
export const getCompanyinfosCompanyinfoid = (
  /**
   *
   * 公司信息ID
   */
  companyinfoid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: CompanyInformation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getCompanyinfosCompanyinfoid.key, { companyinfoid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyinfosCompanyinfoid.key = "/companyinfos/{companyinfoid}";

/**
 *
 * 查询所有投递记录
 */
export const getCompanyinfosCompanyinfoidDeliveryrecords = (
  companyinfoid: string,
  queryParams: GetCompanyinfosCompanyinfoidDeliveryrecordsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 投递记录列表
     *
     */
    body: DeliveryRecord[];
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getCompanyinfosCompanyinfoidDeliveryrecords.key, {
      companyinfoid,
    }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyinfosCompanyinfoidDeliveryrecords.key =
  "/companyinfos/{companyinfoid}/deliveryrecords";

/**
 *
 * 查询所有职位信息
 */
export const getCompanyinfosCompanyinfoidPositioninfos = (
  /**
   *
   * 公司信息ID
   */
  companyinfoid: string,
  queryParams: GetCompanyinfosCompanyinfoidPositioninfosQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 职位信息列表
     *
     */
    body: PositionInformation[];
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getCompanyinfosCompanyinfoidPositioninfos.key, { companyinfoid }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyinfosCompanyinfoidPositioninfos.key =
  "/companyinfos/{companyinfoid}/positioninfos";

/**
 *
 * 查询职位信息
 */
export const getCompanyinfosCompanyinfoidPositioninfosPositioninfoid = (
  /**
   *
   * 公司信息ID
   */
  companyinfoid: string,
  /**
   *
   * 职位信息ID
   */
  positioninfoid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: PositionInformation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getCompanyinfosCompanyinfoidPositioninfosPositioninfoid.key, {
      companyinfoid,
      positioninfoid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyinfosCompanyinfoidPositioninfosPositioninfoid.key =
  "/companyinfos/{companyinfoid}/positioninfos/{positioninfoid}";

/**
 *
 * 查询细分标签
 */
export const getDirectiontags = (
  queryParams: GetDirectiontagsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: DirectionTags;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getDirectiontags.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getDirectiontags.key = "/directiontags";

/**
 *
 * 查询筛选信息
 */
export const getFilterinfos = (
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: FilterInformation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getFilterinfos.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getFilterinfos.key = "/filterinfos";

/**
 *
 * 查询HR信息
 */
export const getHrinfosHrinfoid = (
  /**
   *
   * 公司信息ID
   */
  hrinfoid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: HRInformation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getHrinfosHrinfoid.key, { hrinfoid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getHrinfosHrinfoid.key = "/hrinfos/{hrinfoid}";

/**
 *
 * 查询所有消息
 */
export const getMessages = (
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 消息列表
     *
     */
    body: MessageRecord[];
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getMessages.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getMessages.key = "/messages";

/**
 *
 * 查询新版本
 */
export const getNewversion = (
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 版本信息
     *
     */
    body: {
      /**
       *
       * 新版本号
       *
       */
      newVersion: string;
    };
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getNewversion.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getNewversion.key = "/newversion";

/**
 *
 * 查询职位类型
 */
export const getPositiontypes = (
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: PositionTypes;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getPositiontypes.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getPositiontypes.key = "/positiontypes";

/**
 *
 * 查询推荐人才
 */
export const getRecommendations = (
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 人才列表
     *
     */
    body: {
      jobExpectation: JobExpectation;
      userInformation: UserInformation;
    }[];
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getRecommendations.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getRecommendations.key = "/recommendations";

/**
 *
 * 查询所有用户信息
 */
export const getUserinfos = (
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 用户信息列表
     *
     */
    body: UserInformation[];
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getUserinfos.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfos.key = "/userinfos";

/**
 *
 * 查询用户信息
 */
export const getUserinfosUserinfoid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: UserInformation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserinfosUserinfoid.key, { userinfoid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoid.key = "/userinfos/{userinfoid}";

/**
 *
 * 查询所有关注记录
 */
export const getUserinfosUserinfoidAttentionrecords = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 关注记录列表
     *
     */
    body: AttentionRecord[];
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidAttentionrecords.key, { userinfoid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidAttentionrecords.key =
  "/userinfos/{userinfoid}/attentionrecords";

/**
 *
 * 查询关注记录
 */
export const getUserinfosUserinfoidAttentionrecordsAttentionrecordid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 关注记录ID
   */
  attentionrecordid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AttentionRecord;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidAttentionrecordsAttentionrecordid.key, {
      userinfoid,
      attentionrecordid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidAttentionrecordsAttentionrecordid.key =
  "/userinfos/{userinfoid}/attentionrecords/{attentionrecordid}";

/**
 *
 * 查询所有投递记录
 */
export const getUserinfosUserinfoidDeliveryrecords = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 投递记录列表
     *
     */
    body: DeliveryRecord[];
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidDeliveryrecords.key, { userinfoid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidDeliveryrecords.key =
  "/userinfos/{userinfoid}/deliveryrecords";

/**
 *
 * 查询投递记录
 */
export const getUserinfosUserinfoidDeliveryrecordsDeliveryrecordid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 投递记录ID
   */
  deliveryrecordid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: DeliveryRecord;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidDeliveryrecordsDeliveryrecordid.key, {
      userinfoid,
      deliveryrecordid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidDeliveryrecordsDeliveryrecordid.key =
  "/userinfos/{userinfoid}/deliveryrecords/{deliveryrecordid}";

/**
 *
 * 查询所有教育经历
 */
export const getUserinfosUserinfoidEduexperiences = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 教育经历列表
     *
     */
    body: EducationExperience[];
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidEduexperiences.key, { userinfoid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidEduexperiences.key =
  "/userinfos/{userinfoid}/eduexperiences";

/**
 *
 * 查询教育经历
 */
export const getUserinfosUserinfoidEduexperiencesEduexperienceid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 教育经历ID
   */
  eduexperienceid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: EducationExperience;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidEduexperiencesEduexperienceid.key, {
      userinfoid,
      eduexperienceid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidEduexperiencesEduexperienceid.key =
  "/userinfos/{userinfoid}/eduexperiences/{eduexperienceid}";

/**
 *
 * 查询所有收藏记录
 */
export const getUserinfosUserinfoidGarnerrecords = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 收藏记录列表
     *
     */
    body: GarnerRecord[];
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidGarnerrecords.key, { userinfoid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidGarnerrecords.key =
  "/userinfos/{userinfoid}/garnerrecords";

/**
 *
 * 查询收藏记录
 */
export const getUserinfosUserinfoidGarnerrecordsGarnerrecordid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 收藏记录ID
   */
  garnerrecordid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: GarnerRecord;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidGarnerrecordsGarnerrecordid.key, {
      userinfoid,
      garnerrecordid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidGarnerrecordsGarnerrecordid.key =
  "/userinfos/{userinfoid}/garnerrecords/{garnerrecordid}";

/**
 *
 * 查询所有查看记录
 */
export const getUserinfosUserinfoidInspectionrecords = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 查看记录列表
     *
     */
    body: InspectionRecord[];
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidInspectionrecords.key, { userinfoid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidInspectionrecords.key =
  "/userinfos/{userinfoid}/inspectionrecords";

/**
 *
 * 查询查看记录
 */
export const getUserinfosUserinfoidInspectionrecordsInspectionrecordid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 查看记录ID
   */
  inspectionrecordid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: InspectionRecord;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidInspectionrecordsInspectionrecordid.key, {
      userinfoid,
      inspectionrecordid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidInspectionrecordsInspectionrecordid.key =
  "/userinfos/{userinfoid}/inspectionrecords/{inspectionrecordid}";

/**
 *
 * 查询所有求职期望
 */
export const getUserinfosUserinfoidJobexpectations = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 求职期望列表
     *
     */
    body: JobExpectation[];
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidJobexpectations.key, { userinfoid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidJobexpectations.key =
  "/userinfos/{userinfoid}/jobexpectations";

/**
 *
 * 查询求职期望
 */
export const getUserinfosUserinfoidJobexpectationsJobexpectationid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 求职期望ID
   */
  jobexpectationid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: JobExpectation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidJobexpectationsJobexpectationid.key, {
      userinfoid,
      jobexpectationid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidJobexpectationsJobexpectationid.key =
  "/userinfos/{userinfoid}/jobexpectations/{jobexpectationid}";

/**
 *
 * 查询所有项目经历
 */
export const getUserinfosUserinfoidProjectexperiences = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 项目经历列表
     *
     */
    body: ProjectExperience[];
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidProjectexperiences.key, { userinfoid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidProjectexperiences.key =
  "/userinfos/{userinfoid}/projectexperiences";

/**
 *
 * 查询项目经历
 */
export const getUserinfosUserinfoidProjectexperiencesProjectexperienceid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 项目经历ID
   */
  projectexperienceid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body?: ProjectExperience;
    /**
     *
     * 状态描述
     *
     */
    message?: string;
    /**
     *
     * 响应状态
     *
     */
    status?: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp?: string;
  }>
> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidProjectexperiencesProjectexperienceid.key, {
      userinfoid,
      projectexperienceid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidProjectexperiencesProjectexperienceid.key =
  "/userinfos/{userinfoid}/projectexperiences/{projectexperienceid}";

/**
 *
 * 查询所有工作经历
 */
export const getUserinfosUserinfoidWorkexperiences = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 工作经历列表
     *
     */
    body: WorkExperience[];
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidWorkexperiences.key, { userinfoid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidWorkexperiences.key =
  "/userinfos/{userinfoid}/workexperiences";

/**
 *
 * 查询工作经历
 */
export const getUserinfosUserinfoidWorkexperiencesWorkexperienceid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 工作经历ID
   */
  workexperienceid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: WorkExperience;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidWorkexperiencesWorkexperienceid.key, {
      userinfoid,
      workexperienceid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidWorkexperiencesWorkexperienceid.key =
  "/userinfos/{userinfoid}/workexperiences/{workexperienceid}";

/**
 *
 * 发送验证码
 */
export const getVerificationCode = (
  queryParams: GetVerificationCodeQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 发送状态
     *
     */
    body: {
      /**
       *
       * 状态内容
       *
       */
      msg: string;
    };
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getVerificationCode.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getVerificationCode.key = "/verificationCode";

/**
 *
 * 注册账号
 */
export const postAccounts = (
  requestBody: {
    /**
     *
     * 账号类型
     *
     * {1:用户,2:HR}
     */
    accountType: "1" | "2";
    /**
     *
     * 密码
     *
     */
    password: string;
    /**
     *
     * 手机号码
     *
     */
    phoneNumber: string;
    /**
     *
     * 短信验证码
     *
     */
    verificationCode: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postAccounts.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postAccounts.key = "/accounts";

/**
 *
 * 上传头像
 */
export const postAvatars = (
  requestBody: {
    /**
     *
     * 头像
     * - Format: binary
     */
    avatar?: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postAvatars.key,
    undefined,
    objToForm(requestBody),
    undefined,
    overrideConfig(_CONSTANT1, configOverride)
  );
};

/** Key is end point string without base url */
postAvatars.key = "/avatars";

/**
 *
 * 增加公司信息
 */
export const postCompanyinfos = (
  requestBody: {
    /**
     *
     * 融资阶段
     *
     * {1:未融资,2:天使轮,3:A轮,4:B轮,5:C轮,6:D轮及以上,7:上市公司,8:不需要融资}
     */
    financingStage: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
    /**
     *
     * LOGO
     *
     */
    logo: string;
    /**
     *
     * 名称
     *
     */
    name: string;
    /**
     *
     * 规模
     *
     * {1:少于15人,2:15-50人,3:50-150人,4:150-500人,5:500-2000人,6:2000以上}
     */
    scale: "1" | "2" | "3" | "4" | "5" | "6";
    /**
     *
     * 信息
     *
     */
    about?: string;
    /**
     *
     * 详细地址
     *
     */
    address?: string;
    /**
     *
     * 福利
     *
     */
    benefits?: string[];
    /**
     *
     * 所在城市
     *
     */
    city?: string;
    /**
     *
     * 领域
     *
     */
    comprehension?: string;
    /**
     *
     * 成立时间
     *
     */
    establishmentTime?: string;
    /**
     *
     * 全称
     *
     */
    fullName?: string;
    /**
     *
     * HRID
     *
     */
    hrId?: string;
    /**
     *
     * 法定代表人
     *
     */
    legalRepresentative?: string;
    /**
     *
     * 机构类型
     *
     */
    organizatioType?: string;
    /**
     *
     * 在招职位
     *
     */
    recruitmentPosition?: number;
    /**
     *
     * 注册资本
     *
     */
    registeredCapital?: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postCompanyinfos.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postCompanyinfos.key = "/companyinfos";

/**
 *
 * 增加职位信息
 */
export const postCompanyinfosCompanyinfoidPositioninfos = (
  /**
   *
   * 公司信息ID
   */
  companyinfoid: string,
  requestBody: {
    /**
     *
     * 上限薪资
     *
     * 单位K
     */
    ceilingSalary: number;
    /**
     *
     * 公司ID
     *
     */
    companyId: string;
    /**
     *
     * 职位描述
     *
     */
    description: string;
    /**
     *
     * 学历
     *
     * {0:不要求,1:大专,2:本科,3:硕士,4:博士}
     */
    education: "0" | "1" | "2" | "3" | "4";
    /**
     *
     * HRID
     *
     */
    hrId: string;
    /**
     *
     * 职位名称
     *
     */
    name: string;
    /**
     *
     * 职位类型
     *
     * {1:全职,2:兼职,3:实习}
     */
    positionType: "1" | "2" | "3";
    /**
     *
     * 起始薪资
     *
     * 单位K
     */
    startingSalary: number;
    /**
     *
     * 所属部门
     *
     */
    department?: string;
    /**
     *
     * 细化标签
     *
     */
    directionTags?: string[];
    /**
     *
     * 职位亮点
     *
     */
    highlights?: string[];
    /**
     *
     * 面试信息
     *
     */
    interviewInfo?: {
      /**
       *
       * 面试说明
       *
       * {1:可周末面试,2:包含笔试,3:可下班面试,4:包含面试作业}
       */
      illustrate: "1" | "2" | "3" | "4";
      /**
       *
       * 面试形式
       *
       * {1:现场面试,2:视频面试,3:电话面试}
       */
      situation: "1" | "2" | "3";
      /**
       *
       * 面试时长
       *
       * {1:一天内完成,2:分多次完成}
       */
      time: "1" | "2";
      /**
       *
       * 面试轮数
       *
       * {1:1-2轮次,2:3-4轮次,3:5-6轮次,4:暂不确定}
       */
      wheel: "1" | "2" | "3" | "4";
    };
    /**
     *
     * 发布日期
     *
     */
    releaseDate?: string;
    /**
     *
     * 周末休息时间
     *
     * {1周末双休:,2:周末单休,3:大小周}
     */
    weekendReleseTime?: "1" | "2" | "3";
    /**
     *
     * 工作地区
     *
     */
    workArea?: string;
    /**
     *
     * 上班时间
     *
     */
    workTime?: string;
    /**
     *
     * 工作地点
     *
     */
    workingPlace?: {
      /**
       *
       * 纬度
       *
       */
      latitude: number;
      /**
       *
       * 经度
       *
       */
      longitude: number;
    };
    /**
     *
     * 工作年限
     *
     * {0:经验不限,1:在校/应届,2:3年及以下,3:3-5年,4:5-10年,5:10年以上}
     */
    workingYears?: "0" | "1" | "2" | "3" | "4" | "5";
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postCompanyinfosCompanyinfoidPositioninfos.key, { companyinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postCompanyinfosCompanyinfoidPositioninfos.key =
  "/companyinfos/{companyinfoid}/positioninfos";

/**
 *
 * 上传文件
 */
export const postFiles = (
  requestBody: {
    /**
     *
     * 文件
     * - Format: binary
     */
    file?: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postFiles.key,
    undefined,
    objToForm(requestBody),
    undefined,
    overrideConfig(_CONSTANT1, configOverride)
  );
};

/** Key is end point string without base url */
postFiles.key = "/files";

/**
 *
 * 增加关注记录
 */
export const postUserinfosUserinfoidAttentionrecords = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  requestBody: {
    /**
     *
     * 公司ID
     *
     */
    companyId: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postUserinfosUserinfoidAttentionrecords.key, { userinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserinfosUserinfoidAttentionrecords.key =
  "/userinfos/{userinfoid}/attentionrecords";

/**
 *
 * 增加投递记录
 */
export const postUserinfosUserinfoidDeliveryrecords = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  requestBody: {
    /**
     *
     * 职位信息ID
     *
     */
    jobInformationId: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postUserinfosUserinfoidDeliveryrecords.key, { userinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserinfosUserinfoidDeliveryrecords.key =
  "/userinfos/{userinfoid}/deliveryrecords";

/**
 *
 * 增加教育经历
 */
export const postUserinfosUserinfoidEduexperiences = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  requestBody: {
    /**
     *
     * 入学时间
     *
     */
    admissionTime: string;
    /**
     *
     * 毕业时间
     *
     */
    araduationTime: string;
    /**
     *
     * 学历层次
     *
     * {1:大专,2:本科,3:硕士,4:博士}
     */
    education: "1" | "2" | "3" | "4";
    /**
     *
     * 专业
     *
     */
    major: string;
    /**
     *
     * 学校名称
     *
     */
    schoolName: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postUserinfosUserinfoidEduexperiences.key, { userinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserinfosUserinfoidEduexperiences.key =
  "/userinfos/{userinfoid}/eduexperiences";

/**
 *
 * 增加收藏记录
 */
export const postUserinfosUserinfoidGarnerrecords = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  requestBody: {
    /**
     *
     * 职位信息ID
     *
     */
    jobInformationId: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postUserinfosUserinfoidGarnerrecords.key, { userinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserinfosUserinfoidGarnerrecords.key =
  "/userinfos/{userinfoid}/garnerrecords";

/**
 *
 * 增加求职期望
 */
export const postUserinfosUserinfoidJobexpectations = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  requestBody: {
    /**
     *
     * 上限薪资
     *
     * 单位K
     */
    ceilingSalary: number;
    /**
     *
     * 期望城市
     *
     */
    city: string;
    /**
     *
     * 细分标签
     *
     */
    directionTags: string[];
    /**
     *
     * 职位类型
     *
     * {1:全职,2:兼职,3:实习}
     */
    positionType: "1" | "2" | "3";
    /**
     *
     * 起始薪资
     *
     * 单位K
     */
    startingSalary: number;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postUserinfosUserinfoidJobexpectations.key, { userinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserinfosUserinfoidJobexpectations.key =
  "/userinfos/{userinfoid}/jobexpectations";

/**
 *
 * 增加项目经历
 */
export const postUserinfosUserinfoidProjectexperiences = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  requestBody: {
    /**
     *
     * 结束时间
     *
     */
    endTime: string;
    /**
     *
     * 项目描述
     *
     */
    projectDescription: string;
    /**
     *
     * 项目名称
     *
     */
    projectName: string;
    /**
     *
     * 开始时间
     *
     */
    startTime: string;
    /**
     *
     * 工作经历ID
     *
     */
    workExperienceId: string;
    /**
     *
     * 我的成就
     *
     */
    achievement?: string;
    /**
     *
     * 项目链接
     *
     */
    projectLink?: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postUserinfosUserinfoidProjectexperiences.key, { userinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserinfosUserinfoidProjectexperiences.key =
  "/userinfos/{userinfoid}/projectexperiences";

/**
 *
 * 增加工作经历
 */
export const postUserinfosUserinfoidWorkexperiences = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  requestBody: {
    /**
     *
     * 公司领域
     *
     */
    companyIndustry: string;
    /**
     *
     * 公司名称
     *
     */
    corporateName: string;
    /**
     *
     * 所属部门
     *
     */
    department: string;
    /**
     *
     * 离职时间
     *
     */
    endTime: string;
    /**
     *
     * 工作内容
     *
     */
    jobContent: string;
    /**
     *
     * 职位名称
     *
     */
    positionName: string;
    /**
     *
     * 职位类型
     *
     * {1:全职,2:兼职,3:实习}
     */
    positionType: "1" | "2" | "3";
    /**
     *
     * 就职时间
     *
     */
    startTime: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postUserinfosUserinfoidWorkexperiences.key, { userinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserinfosUserinfoidWorkexperiences.key =
  "/userinfos/{userinfoid}/workexperiences";

/**
 *
 * 登录账号
 */
export const putAccounts = (
  requestBody: {
    /**
     *
     * 密码
     *
     */
    password: string;
    /**
     *
     * 手机号码
     *
     */
    phoneNumber: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 账号信息
     *
     */
    body: {
      accountInfo: AccountInformation;
      /**
       *
       * TOKEN
       *
       */
      token: string;
    };
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    putAccounts.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putAccounts.key = "/accounts";

/**
 *
 * 忘记密码
 */
export const putAccounts0 = (
  requestBody: {
    /**
     *
     * 密码
     *
     */
    password: string;
    /**
     *
     * 手机号
     *
     */
    phoneNumber: string;
    /**
     *
     * 验证码
     *
     */
    verificationCode: number;
  },
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountInformation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    putAccounts0.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putAccounts0.key = "/accounts/0";

/**
 *
 * 修改密码
 */
export const putAcocuntsAccountid = (
  accountid: string,
  requestBody: {
    /**
     *
     * 密码
     *
     */
    password: string;
    /**
     *
     * 验证码
     *
     */
    verificationCode: number;
  },
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountInformation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putAcocuntsAccountid.key, { accountid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putAcocuntsAccountid.key = "/acocunts/{accountid}";

/**
 *
 * 修改公司信息
 */
export const putCompanyinfosCompanyinfoid = (
  /**
   *
   * 公司信息ID
   */
  companyinfoid: string,
  requestBody: CompanyInformation,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: CompanyInformation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putCompanyinfosCompanyinfoid.key, { companyinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putCompanyinfosCompanyinfoid.key = "/companyinfos/{companyinfoid}";

/**
 *
 * 修改职位信息
 */
export const putCompanyinfosCompanyinfoidPositioninfosPositioninfoid = (
  /**
   *
   * 公司信息ID
   */
  companyinfoid: string,
  /**
   *
   * 职位信息ID
   */
  positioninfoid: string,
  requestBody: PositionInformation,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: PositionInformation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putCompanyinfosCompanyinfoidPositioninfosPositioninfoid.key, {
      companyinfoid,
      positioninfoid,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putCompanyinfosCompanyinfoidPositioninfosPositioninfoid.key =
  "/companyinfos/{companyinfoid}/positioninfos/{positioninfoid}";

/**
 *
 * 修改HR信息
 */
export const putHrinfosHrinfoid = (
  /**
   *
   * HR信息ID
   */
  hrinfoid: string,
  requestBody: HRInformation,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: HRInformation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putHrinfosHrinfoid.key, { hrinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putHrinfosHrinfoid.key = "/hrinfos/{hrinfoid}";

/**
 *
 * 修改用户信息
 */
export const putUserinfosUserinfoid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  requestBody: UserInformation,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: UserInformation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putUserinfosUserinfoid.key, { userinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserinfosUserinfoid.key = "/userinfos/{userinfoid}";

/**
 *
 * 修改关注记录
 */
export const putUserinfosUserinfoidAttentionrecordsAttentionrecordid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 关注记录ID
   */
  attentionrecordid: string,
  requestBody: AttentionRecord,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AttentionRecord;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putUserinfosUserinfoidAttentionrecordsAttentionrecordid.key, {
      userinfoid,
      attentionrecordid,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserinfosUserinfoidAttentionrecordsAttentionrecordid.key =
  "/userinfos/{userinfoid}/attentionrecords/{attentionrecordid}";

/**
 *
 * 修改投递记录
 */
export const putUserinfosUserinfoidDeliveryrecordsDeliveryrecordid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 投递记录ID
   */
  deliveryrecordid: string,
  requestBody: DeliveryRecord,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: DeliveryRecord;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putUserinfosUserinfoidDeliveryrecordsDeliveryrecordid.key, {
      userinfoid,
      deliveryrecordid,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserinfosUserinfoidDeliveryrecordsDeliveryrecordid.key =
  "/userinfos/{userinfoid}/deliveryrecords/{deliveryrecordid}";

/**
 *
 * 修改教育经历
 */
export const putUserinfosUserinfoidEduexperiencesEduexperienceid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 教育经历ID
   */
  eduexperienceid: string,
  requestBody: EducationExperience,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: EducationExperience;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putUserinfosUserinfoidEduexperiencesEduexperienceid.key, {
      userinfoid,
      eduexperienceid,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserinfosUserinfoidEduexperiencesEduexperienceid.key =
  "/userinfos/{userinfoid}/eduexperiences/{eduexperienceid}";

/**
 *
 * 修改收藏记录
 */
export const putUserinfosUserinfoidGarnerrecordsGarnerrecordid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 收藏记录ID
   */
  garnerrecordid: string,
  requestBody: GarnerRecord,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: GarnerRecord;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putUserinfosUserinfoidGarnerrecordsGarnerrecordid.key, {
      userinfoid,
      garnerrecordid,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserinfosUserinfoidGarnerrecordsGarnerrecordid.key =
  "/userinfos/{userinfoid}/garnerrecords/{garnerrecordid}";

/**
 *
 * 修改求职期望
 */
export const putUserinfosUserinfoidJobexpectationsJobexpectationid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 求职期望ID
   */
  jobexpectationid: string,
  requestBody: JobExpectation,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: JobExpectation;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putUserinfosUserinfoidJobexpectationsJobexpectationid.key, {
      userinfoid,
      jobexpectationid,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserinfosUserinfoidJobexpectationsJobexpectationid.key =
  "/userinfos/{userinfoid}/jobexpectations/{jobexpectationid}";

/**
 *
 * 修改项目经历
 */
export const putUserinfosUserinfoidProjectexperiencesProjectexperienceid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 项目经历ID
   */
  projectexperienceid: string,
  requestBody: ProjectExperience,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: ProjectExperience;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putUserinfosUserinfoidProjectexperiencesProjectexperienceid.key, {
      userinfoid,
      projectexperienceid,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserinfosUserinfoidProjectexperiencesProjectexperienceid.key =
  "/userinfos/{userinfoid}/projectexperiences/{projectexperienceid}";

/**
 *
 * 修改工作经历
 */
export const putUserinfosUserinfoidWorkexperiencesWorkexperienceid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 工作经历ID
   */
  workexperienceid: string,
  requestBody: WorkExperience,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: WorkExperience;
    /**
     *
     * 状态描述
     *
     */
    message: string;
    /**
     *
     * 响应状态
     *
     */
    status: number;
    /**
     *
     * 处理时间
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putUserinfosUserinfoidWorkexperiencesWorkexperienceid.key, {
      userinfoid,
      workexperienceid,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserinfosUserinfoidWorkexperiencesWorkexperienceid.key =
  "/userinfos/{userinfoid}/workexperiences/{workexperienceid}";
export const _CONSTANT0 = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
export const _CONSTANT1 = {
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
};
