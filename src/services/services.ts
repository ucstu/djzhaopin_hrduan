/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 5
 */

import { AxiosRequestConfig } from "axios";
import { SwaggerResponse } from "./config";
import { Http } from "./httpRequest";
import {
  AccountInformation, AreaInformations, AttentionRecord, CityInformations, CompanyInformation, DeleteAccountinfosP0QueryParams, DeliveryRecord, DirectionTags, EducationExperience, FilterInformation, GarnerRecord, GetAreaInformationsQueryParams,
  GetCompanyinfosP0DeliveryrecordsQueryParams, GetCompanyinfosP0PositioninfosQueryParams, GetCompanyinfosPositioninfosQueryParams, GetCompanyinfosQueryParams, GetDirectiontagsQueryParams, GetHrinfosQueryParams, GetUserinfosP0AttentionrecordsQueryParams, GetUserinfosP0DeliveryrecordsQueryParams, GetUserinfosP0EduexperiencesQueryParams, GetUserinfosP0GarnerrecordsQueryParams, GetUserinfosP0InspectionrecordsQueryParams, GetUserinfosP0JobexpectationsQueryParams, GetUserinfosP0ProjectexperiencesQueryParams, GetUserinfosP0WorkexperiencesQueryParams, GetUserinfosQueryParams, GetVerificationCodeQueryParams, HrInformation, InspectionRecord, JobExpectation, MessageRecord, PositionInformation, PositionTypes, ProjectExperience, UserInformation, WorkExperience
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
export const deleteAccountinfosP0 = (
  /**
   *
   * 账号ID
   */
  accountinfoid: string,
  queryParams: DeleteAccountinfosP0QueryParams,
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
    template(deleteAccountinfosP0.key, { accountinfoid }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteAccountinfosP0.key = "/accountinfos/{accountinfoid}";

/**
 *
 * 删除职位信息
 */
export const deleteCompanyinfosP0PositioninfosP1 = (
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
    template(deleteCompanyinfosP0PositioninfosP1.key, {
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
deleteCompanyinfosP0PositioninfosP1.key =
  "/companyinfos/{companyinfoid}/positioninfos/{positioninfoid}";

/**
 *
 * 删除关注记录
 */
export const deleteUserinfosP0AttentionrecordsP1 = (
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
    template(deleteUserinfosP0AttentionrecordsP1.key, {
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
deleteUserinfosP0AttentionrecordsP1.key =
  "/userinfos/{userinfoid}/attentionrecords/{attentionrecordid}";

/**
 *
 * 删除投递记录
 */
export const deleteUserinfosP0DeliveryrecordsP1 = (
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
    template(deleteUserinfosP0DeliveryrecordsP1.key, {
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
deleteUserinfosP0DeliveryrecordsP1.key =
  "/userinfos/{userinfoid}/deliveryrecords/{deliveryrecordid}";

/**
 *
 * 删除教育经历
 */
export const deleteUserinfosP0EduexperiencesP1 = (
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
    template(deleteUserinfosP0EduexperiencesP1.key, {
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
deleteUserinfosP0EduexperiencesP1.key =
  "/userinfos/{userinfoid}/eduexperiences/{eduexperienceid}";

/**
 *
 * 删除收藏记录
 */
export const deleteUserinfosP0GarnerrecordsP1 = (
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
    template(deleteUserinfosP0GarnerrecordsP1.key, {
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
deleteUserinfosP0GarnerrecordsP1.key =
  "/userinfos/{userinfoid}/garnerrecords/{garnerrecordid}";

/**
 *
 * 删除查看记录
 */
export const deleteUserinfosP0InspectionrecordsP1 = (
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
    template(deleteUserinfosP0InspectionrecordsP1.key, {
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
deleteUserinfosP0InspectionrecordsP1.key =
  "/userinfos/{userinfoid}/inspectionrecords/{inspectionrecordid}";

/**
 *
 * 删除求职期望
 */
export const deleteUserinfosP0JobexpectationsP1 = (
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
    template(deleteUserinfosP0JobexpectationsP1.key, {
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
deleteUserinfosP0JobexpectationsP1.key =
  "/userinfos/{userinfoid}/jobexpectations/{jobexpectationid}";

/**
 *
 * 删除项目经历
 */
export const deleteUserinfosP0ProjectexperiencesP1 = (
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
    template(deleteUserinfosP0ProjectexperiencesP1.key, {
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
deleteUserinfosP0ProjectexperiencesP1.key =
  "/userinfos/{userinfoid}/projectexperiences/{projectexperienceid}";

/**
 *
 * 删除工作经历
 */
export const deleteUserinfosP0WorkexperiencesP1 = (
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
    template(deleteUserinfosP0WorkexperiencesP1.key, {
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
deleteUserinfosP0WorkexperiencesP1.key =
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
export const getCityinformations = (
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
    getCityinformations.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCityinformations.key = "/cityinformations";

/**
 *
 * 查询所有公司信息
 */
export const getCompanyinfos = (
  queryParams: GetCompanyinfosQueryParams,
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
    queryParams,
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
export const getCompanyinfosP0 = (
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
    template(getCompanyinfosP0.key, { companyinfoid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyinfosP0.key = "/companyinfos/{companyinfoid}";

/**
 *
 * 查询所有投递记录
 */
export const getCompanyinfosP0Deliveryrecords = (
  companyinfoid: string,
  queryParams: GetCompanyinfosP0DeliveryrecordsQueryParams,
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
    template(getCompanyinfosP0Deliveryrecords.key, { companyinfoid }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyinfosP0Deliveryrecords.key =
  "/companyinfos/{companyinfoid}/deliveryrecords";

/**
 *
 * 查询所有职位信息
 */
export const getCompanyinfosP0Positioninfos = (
  /**
   *
   * 公司信息ID
   */
  companyinfoid: string,
  queryParams: GetCompanyinfosP0PositioninfosQueryParams,
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
    template(getCompanyinfosP0Positioninfos.key, { companyinfoid }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyinfosP0Positioninfos.key =
  "/companyinfos/{companyinfoid}/positioninfos";

/**
 *
 * 查询职位信息
 */
export const getCompanyinfosP0PositioninfosP1 = (
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
    template(getCompanyinfosP0PositioninfosP1.key, {
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
getCompanyinfosP0PositioninfosP1.key =
  "/companyinfos/{companyinfoid}/positioninfos/{positioninfoid}";

/**
 *
 * 查询所有职位信息
 */
export const getCompanyinfosPositioninfos = (
  queryParams: GetCompanyinfosPositioninfosQueryParams,
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
    getCompanyinfosPositioninfos.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyinfosPositioninfos.key = "/companyinfos/positioninfos";

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
export const getFilterinformation = (
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
    getFilterinformation.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getFilterinformation.key = "/filterinformation";

/**
 *
 * 查询所有HR信息
 */
export const getHrinfos = (
  queryParams: GetHrinfosQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * HR信息
     *
     */
    body: HrInformation[];
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
    getHrinfos.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getHrinfos.key = "/hrinfos";

/**
 *
 * 查询HR信息
 */
export const getHrinfosP0 = (
  /**
   *
   * 公司信息ID
   */
  hrinfoid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: HrInformation;
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
    template(getHrinfosP0.key, { hrinfoid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getHrinfosP0.key = "/hrinfos/{hrinfoid}";

/**
 *
 * 查询所有消息
 */
export const getMessagerecords = (
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
    getMessagerecords.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getMessagerecords.key = "/messagerecords";

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
    body: number;
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
     * 用户信息ID
     *
     */
    body: string[];
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
  queryParams: GetUserinfosQueryParams,
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
    queryParams,
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
export const getUserinfosP0 = (
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
    template(getUserinfosP0.key, { userinfoid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosP0.key = "/userinfos/{userinfoid}";

/**
 *
 * 查询所有关注记录
 */
export const getUserinfosP0Attentionrecords = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  queryParams: GetUserinfosP0AttentionrecordsQueryParams,
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
    template(getUserinfosP0Attentionrecords.key, { userinfoid }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosP0Attentionrecords.key = "/userinfos/{userinfoid}/attentionrecords";

/**
 *
 * 查询关注记录
 */
export const getUserinfosP0AttentionrecordsP1 = (
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
    template(getUserinfosP0AttentionrecordsP1.key, {
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
getUserinfosP0AttentionrecordsP1.key =
  "/userinfos/{userinfoid}/attentionrecords/{attentionrecordid}";

/**
 *
 * 查询所有投递记录
 */
export const getUserinfosP0Deliveryrecords = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  queryParams: GetUserinfosP0DeliveryrecordsQueryParams,
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
    template(getUserinfosP0Deliveryrecords.key, { userinfoid }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosP0Deliveryrecords.key = "/userinfos/{userinfoid}/deliveryrecords";

/**
 *
 * 查询投递记录
 */
export const getUserinfosP0DeliveryrecordsP1 = (
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
    template(getUserinfosP0DeliveryrecordsP1.key, {
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
getUserinfosP0DeliveryrecordsP1.key =
  "/userinfos/{userinfoid}/deliveryrecords/{deliveryrecordid}";

/**
 *
 * 查询所有教育经历
 */
export const getUserinfosP0Eduexperiences = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  queryParams: GetUserinfosP0EduexperiencesQueryParams,
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
    template(getUserinfosP0Eduexperiences.key, { userinfoid }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosP0Eduexperiences.key = "/userinfos/{userinfoid}/eduexperiences";

/**
 *
 * 查询教育经历
 */
export const getUserinfosP0EduexperiencesP1 = (
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
    template(getUserinfosP0EduexperiencesP1.key, {
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
getUserinfosP0EduexperiencesP1.key =
  "/userinfos/{userinfoid}/eduexperiences/{eduexperienceid}";

/**
 *
 * 查询所有收藏记录
 */
export const getUserinfosP0Garnerrecords = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  queryParams: GetUserinfosP0GarnerrecordsQueryParams,
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
    template(getUserinfosP0Garnerrecords.key, { userinfoid }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosP0Garnerrecords.key = "/userinfos/{userinfoid}/garnerrecords";

/**
 *
 * 查询收藏记录
 */
export const getUserinfosP0GarnerrecordsP1 = (
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
    template(getUserinfosP0GarnerrecordsP1.key, { userinfoid, garnerrecordid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosP0GarnerrecordsP1.key =
  "/userinfos/{userinfoid}/garnerrecords/{garnerrecordid}";

/**
 *
 * 查询所有查看记录
 */
export const getUserinfosP0Inspectionrecords = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  queryParams: GetUserinfosP0InspectionrecordsQueryParams,
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
    template(getUserinfosP0Inspectionrecords.key, { userinfoid }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosP0Inspectionrecords.key =
  "/userinfos/{userinfoid}/inspectionrecords";

/**
 *
 * 查询查看记录
 */
export const getUserinfosP0InspectionrecordsP1 = (
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
    template(getUserinfosP0InspectionrecordsP1.key, {
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
getUserinfosP0InspectionrecordsP1.key =
  "/userinfos/{userinfoid}/inspectionrecords/{inspectionrecordid}";

/**
 *
 * 查询所有求职期望
 */
export const getUserinfosP0Jobexpectations = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  queryParams: GetUserinfosP0JobexpectationsQueryParams,
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
    template(getUserinfosP0Jobexpectations.key, { userinfoid }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosP0Jobexpectations.key = "/userinfos/{userinfoid}/jobexpectations";

/**
 *
 * 查询求职期望
 */
export const getUserinfosP0JobexpectationsP1 = (
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
    template(getUserinfosP0JobexpectationsP1.key, {
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
getUserinfosP0JobexpectationsP1.key =
  "/userinfos/{userinfoid}/jobexpectations/{jobexpectationid}";

/**
 *
 * 查询所有项目经历
 */
export const getUserinfosP0Projectexperiences = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  queryParams: GetUserinfosP0ProjectexperiencesQueryParams,
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
    template(getUserinfosP0Projectexperiences.key, { userinfoid }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosP0Projectexperiences.key =
  "/userinfos/{userinfoid}/projectexperiences";

/**
 *
 * 查询项目经历
 */
export const getUserinfosP0ProjectexperiencesP1 = (
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
    template(getUserinfosP0ProjectexperiencesP1.key, {
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
getUserinfosP0ProjectexperiencesP1.key =
  "/userinfos/{userinfoid}/projectexperiences/{projectexperienceid}";

/**
 *
 * 查询所有工作经历
 */
export const getUserinfosP0Workexperiences = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  queryParams: GetUserinfosP0WorkexperiencesQueryParams,
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
    template(getUserinfosP0Workexperiences.key, { userinfoid }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosP0Workexperiences.key = "/userinfos/{userinfoid}/workexperiences";

/**
 *
 * 查询工作经历
 */
export const getUserinfosP0WorkexperiencesP1 = (
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
    template(getUserinfosP0WorkexperiencesP1.key, {
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
getUserinfosP0WorkexperiencesP1.key =
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
export const postAccountinfos = (
  requestBody: {
    /**
     *
     * 账号类型
     *
     * {1:用户,2:HR}
     */
    accountType: 1 | 2;
    /**
     *
     * 密码
     *
     */
    password: string;
    /**
     *
     * 用户名
     *
     */
    userName: string;
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
    postAccountinfos.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postAccountinfos.key = "/accountinfos";

/**
 *
 * 登录账号
 */
export const postAccountinfosLogin = (
  requestBody: {
    /**
     *
     * 密码
     *
     */
    password: string;
    /**
     *
     * 用户名
     *
     */
    userName: string;
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
  return Http.postRequest(
    postAccountinfosLogin.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postAccountinfosLogin.key = "/accountinfos/login";

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
     * @example
     *   file://C:\Users\19790\Pictures\Default.jpg
     */
    avatar: string;
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
     * 公司福利
     *
     */
    benefits: string[];
    /**
     *
     * 所在城市
     *
     */
    cityName: string;
    /**
     *
     * 公司名称
     *
     * {1:未融资,2:天使轮,3:A轮,4:B轮,5:C轮,6:D轮及以上,7:上市公司,8:不需要融资}
     */
    companyName: string;
    /**
     *
     * 领域名称
     *
     */
    comprehensionName: string;
    /**
     *
     * 融资阶段
     *
     * {1:未融资,2:天使轮,3:A轮,4:B轮,5:C轮,6:D轮及以上,7:上市公司,8:不需要融资}
     * - max: 8
     */
    financingStage: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    /**
     *
     * HR信息ID
     *
     * {1:少于15人,2:15-50人,3:50-150人,4:150-500人,5:500-2000人,6:2000以上}
     */
    hrInformationId: string;
    /**
     *
     * LOGO地址
     *
     */
    logoUrl: string;
    /**
     *
     * 在招职位
     *
     */
    recruitmentPosition: number;
    /**
     *
     * 公司规模
     *
     * {1:少于15人,2:15-50人,3:50-150人,4:150-500人,5:500-2000人,6:2000以上}
     * - max: 6
     */
    scale: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /**
     *
     * 扩展信息
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
     * 成立时间
     *
     * - pattern: /^(\d{4})-(\d{2})-(\d{2})/
     */
    establishmentTime?: string;
    /**
     *
     * 公司全称
     *
     */
    fullName?: string;
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
    organizationType?: string;
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
export const postCompanyinfosP0Positioninfos = (
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
     * 公司信息ID
     *
     */
    companyInformationId: string;
    /**
     *
     * 职位描述
     *
     */
    description: string;
    /**
     *
     * 学历要求
     *
     * {1:不要求,2:大专,3:本科,4:硕士,5:博士}
     * - max: 5
     */
    education: 0 | 1 | 2 | 3 | 4 | 5;
    /**
     *
     * HR信息ID
     *
     */
    hrInformationId: string;
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
     * - max: 3
     */
    positionType: 0 | 1 | 2 | 3;
    /**
     *
     * 起始薪资
     *
     * 单位K
     */
    startingSalary: number;
    /**
     *
     * 工作地区
     *
     */
    workAreaName: string;
    /**
     *
     * 工作城市
     *
     */
    workCityName: string;
    /**
     *
     * 工作年限
     *
     * {1:经验不限,2:在校/应届,3:3年及以下,4:3-5年,5:5-10年,6:10年以上}
     * - max: 6
     */
    workingYears: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /**
     *
     * 所属部门
     *
     */
    departmentName?: string;
    /**
     *
     * 细分标签
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
       * - minimum: 1
       * - max: 4
       */
      illustrate: 1 | 2 | 3 | 4;
      /**
       *
       * 面试形式
       *
       * {1:现场面试,2:视频面试,3:电话面试}
       * - minimum: 1
       * - max: 3
       */
      situation: 1 | 2 | 3;
      /**
       *
       * 面试时长
       *
       * {1:一天内完成,2:分多次完成}
       * - minimum: 1
       * - max: 2
       */
      time: 1 | 2;
      /**
       *
       * 面试轮数
       *
       * {1:1-2轮次,2:3-4轮次,3:5-6轮次,4:暂不确定}
       * - minimum: 1
       * - max: 4
       */
      wheel: 1 | 2 | 3 | 4;
    };
    /**
     *
     * 下班时间
     *
     */
    overTime?: string;
    /**
     *
     * 发布日期
     *
     * {1:周末双休:,2:周末单休,3:大小周}
     * - max: 3
     */
    weekendReleseTime?: 0 | 1 | 2 | 3;
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
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postCompanyinfosP0Positioninfos.key, { companyinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postCompanyinfosP0Positioninfos.key =
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
     * @example
     *   file://C:\Users\19790\Downloads\东江人才招聘.md
     */
    file: string;
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
export const postUserinfosP0Attentionrecords = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  requestBody: {
    /**
     *
     * 公司信息ID
     *
     */
    companyInformationId: string;
    /**
     *
     * 用户信息ID
     *
     */
    userInformationId: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postUserinfosP0Attentionrecords.key, { userinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserinfosP0Attentionrecords.key =
  "/userinfos/{userinfoid}/attentionrecords";

/**
 *
 * 增加投递记录
 */
export const postUserinfosP0Deliveryrecords = (
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
    /**
     *
     * 用户信息ID
     *
     */
    userInformationId: string;
    /**
     *
     * 面试时间
     *
     * - pattern: /^(\d{4})-(\d{2})-(\d{2})/
     */
    interviewTime?: string;
    /**
     *
     * 投递状态
     *
     * {1:待查看,2:已查看,3:通过筛选,4:约面试,5:不合适}
     * - max: 5
     */
    state?: 0 | 1 | 2 | 3 | 4 | 5;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postUserinfosP0Deliveryrecords.key, { userinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserinfosP0Deliveryrecords.key = "/userinfos/{userinfoid}/deliveryrecords";

/**
 *
 * 增加教育经历
 */
export const postUserinfosP0Eduexperiences = (
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
     * - pattern: /^(\d{4})-(\d{2})-(\d{2})/
     */
    admissionTime: string;
    /**
     *
     * 学历层次
     *
     * {1:大专,2:本科,3:硕士,4:博士}
     * - max: 4
     */
    education: 0 | 1 | 2 | 3 | 4;
    /**
     *
     * 毕业时间
     *
     * - pattern: /^(\d{4})-(\d{2})-(\d{2})/
     */
    graduationTime: string;
    /**
     *
     * 专业名称
     *
     */
    majorName: string;
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
    template(postUserinfosP0Eduexperiences.key, { userinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserinfosP0Eduexperiences.key = "/userinfos/{userinfoid}/eduexperiences";

/**
 *
 * 增加收藏记录
 */
export const postUserinfosP0Garnerrecords = (
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
    /**
     *
     * 用户信息ID
     *
     */
    userInformationId: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postUserinfosP0Garnerrecords.key, { userinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserinfosP0Garnerrecords.key = "/userinfos/{userinfoid}/garnerrecords";

/**
 *
 * 增加求职期望
 */
export const postUserinfosP0Jobexpectations = (
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
    cityName: string;
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
     * - max: 3
     */
    positionType: 0 | 1 | 2 | 3;
    /**
     *
     * 起始薪资
     *
     * 单位K
     */
    startingSalary: number;
    /**
     *
     * 细分标签
     *
     */
    directionTags?: string[];
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postUserinfosP0Jobexpectations.key, { userinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserinfosP0Jobexpectations.key = "/userinfos/{userinfoid}/jobexpectations";

/**
 *
 * 增加项目经历
 */
export const postUserinfosP0Projectexperiences = (
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
     * - pattern: /^(\d{4})-(\d{2})-(\d{2})/
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
     * - pattern: /^(\d{4})-(\d{2})-(\d{2})/
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
    template(postUserinfosP0Projectexperiences.key, { userinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserinfosP0Projectexperiences.key =
  "/userinfos/{userinfoid}/projectexperiences";

/**
 *
 * 增加工作经历
 */
export const postUserinfosP0Workexperiences = (
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
     * 部门名称
     *
     */
    departmentName: string;
    /**
     *
     * 离职时间
     *
     * - pattern: /^(\d{4})-(\d{2})-(\d{2})/
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
     * - max: 3
     */
    positionType: 0 | 1 | 2 | 3;
    /**
     *
     * 就职时间
     *
     * - pattern: /^(\d{4})-(\d{2})-(\d{2})/
     */
    startTime: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postUserinfosP0Workexperiences.key, { userinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserinfosP0Workexperiences.key = "/userinfos/{userinfoid}/workexperiences";

/**
 *
 * 忘记密码
 */
export const putAccountinfosForget = (
  requestBody: {
    /**
     *
     * 密码
     *
     */
    password: string;
    /**
     *
     * 用户名
     *
     */
    userName: string;
    /**
     *
     * 验证码
     *
     */
    verificationCode: string;
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
    putAccountinfosForget.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putAccountinfosForget.key = "/accountinfos/forget";

/**
 *
 * 修改密码
 */
export const putAccountinfosP0 = (
  accountinfoid: string,
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
    verificationCode: string;
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
    template(putAccountinfosP0.key, { accountinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putAccountinfosP0.key = "/accountinfos/{accountinfoid}";

/**
 *
 * 修改公司信息
 */
export const putCompanyinfosP0 = (
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
    template(putCompanyinfosP0.key, { companyinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putCompanyinfosP0.key = "/companyinfos/{companyinfoid}";

/**
 *
 * 修改职位信息
 */
export const putCompanyinfosP0PositioninfosP1 = (
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
    template(putCompanyinfosP0PositioninfosP1.key, {
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
putCompanyinfosP0PositioninfosP1.key =
  "/companyinfos/{companyinfoid}/positioninfos/{positioninfoid}";

/**
 *
 * 修改HR信息
 */
export const putHrinfosP0 = (
  /**
   *
   * HR信息ID
   */
  hrinfoid: string,
  requestBody: HrInformation,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: HrInformation;
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
    template(putHrinfosP0.key, { hrinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putHrinfosP0.key = "/hrinfos/{hrinfoid}";

/**
 *
 * 修改用户信息
 */
export const putUserinfosP0 = (
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
    template(putUserinfosP0.key, { userinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserinfosP0.key = "/userinfos/{userinfoid}";

/**
 *
 * 修改关注记录
 */
export const putUserinfosP0AttentionrecordsP1 = (
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
    template(putUserinfosP0AttentionrecordsP1.key, {
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
putUserinfosP0AttentionrecordsP1.key =
  "/userinfos/{userinfoid}/attentionrecords/{attentionrecordid}";

/**
 *
 * 修改投递记录
 */
export const putUserinfosP0DeliveryrecordsP1 = (
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
    template(putUserinfosP0DeliveryrecordsP1.key, {
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
putUserinfosP0DeliveryrecordsP1.key =
  "/userinfos/{userinfoid}/deliveryrecords/{deliveryrecordid}";

/**
 *
 * 修改教育经历
 */
export const putUserinfosP0EduexperiencesP1 = (
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
    template(putUserinfosP0EduexperiencesP1.key, {
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
putUserinfosP0EduexperiencesP1.key =
  "/userinfos/{userinfoid}/eduexperiences/{eduexperienceid}";

/**
 *
 * 修改收藏记录
 */
export const putUserinfosP0GarnerrecordsP1 = (
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
    template(putUserinfosP0GarnerrecordsP1.key, { userinfoid, garnerrecordid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserinfosP0GarnerrecordsP1.key =
  "/userinfos/{userinfoid}/garnerrecords/{garnerrecordid}";

/**
 *
 * 修改求职期望
 */
export const putUserinfosP0JobexpectationsP1 = (
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
    template(putUserinfosP0JobexpectationsP1.key, {
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
putUserinfosP0JobexpectationsP1.key =
  "/userinfos/{userinfoid}/jobexpectations/{jobexpectationid}";

/**
 *
 * 修改项目经历
 */
export const putUserinfosP0ProjectexperiencesP1 = (
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
    template(putUserinfosP0ProjectexperiencesP1.key, {
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
putUserinfosP0ProjectexperiencesP1.key =
  "/userinfos/{userinfoid}/projectexperiences/{projectexperienceid}";

/**
 *
 * 修改工作经历
 */
export const putUserinfosP0WorkexperiencesP1 = (
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
    template(putUserinfosP0WorkexperiencesP1.key, {
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
putUserinfosP0WorkexperiencesP1.key =
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
