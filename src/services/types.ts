/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 5
 */

export interface DeleteAccountinfosP0QueryParams {
  /**
   *
   * 验证码
   */
  verificationCode: string;
}

export interface GetAreaInformationsQueryParams {
  /**
   *
   * 城市
   */
  city: string;
}

export interface GetCompanyinfosP0DeliveryrecordsQueryParams {
  /**
   *
   * 年龄限制{1:18-25,2:25-35,3:35-45,4:45-55,5:55-65}
   */
  age?: string;
  /**
   *
   * 投递日期
   */
  deliveryDate?: string;
  /**
   *
   * 当前页
   */
  page?: number;
  /**
   *
   * 投递职位ID
   */
  positionInfoId?: string;
  /**
   *
   * 搜索内容
   */
  search?: string;
  /**
   *
   * 性别
   */
  sex?: string;
  /**
   *
   * 页大小
   */
  size?: number;
  /**
   *
   * 排序方式
   */
  sort?: string;
  /**
   *
   * 状态{1:待查看,2:已查看,3:通过筛选,4:约面试,5:不合适}
   */
  state?: string;
  /**
   *
   * 工作经验{0:经验不限,1:在校/应届,2:3年及以下,3:3-5年,4:5-10年,5:10年以上}
   */
  workingYears?: string;
}

export interface GetCompanyinfosP0PositioninfosQueryParams {
  /**
   *
   * 领域名数组
   */
  comprehensions?: string;
  /**
   *
   * 细分标签名
   */
  directiontag?: string;
  /**
   *
   * 学历要求枚举数组，{1:不要求,2:大专,3:本科,4:硕士,5:博士}
   */
  educations?: string;
  /**
   *
   * 融资阶段枚举，{1:未融资,2:天使轮,3:A轮,4:B轮,5:C轮,6:D轮及以上,7:上市公司,8:不需要融资}
   */
  financingstages?: string;
  /**
   *
   * 排序类型枚举，{1:推荐,2:最近,3:最新}
   */
  mainorder?: string;
  /**
   *
   * 职位名
   */
  name?: string;
  /**
   *
   * 当前页
   */
  page?: number;
  /**
   *
   * 职位类型枚举数组，{1:全职,2:兼职,3:实习}
   */
  positiontypes?: string;
  /**
   *
   * 薪资范围，(start,end) ，单位K
   */
  salary?: string;
  /**
   *
   * 公司规模枚举数组，{1:少于15人,2:15-50人,3:50-150人,4:150-500人,5:500-2000人,6:2000以上}
   */
  scales?: string;
  /**
   *
   * 页大小
   */
  size?: number;
  /**
   *
   * 排序方式
   */
  sort?: string;
  /**
   *
   * 区县名
   */
  workarea?: string;
  /**
   *
   * 经纬度坐标
   */
  workingplace?: string;
  /**
   *
   * 工作年限枚举数组，{1:经验不限,2:在校/应届,3:3年及以下,4:3-5年,5:5-10年,6:10年以上}
   */
  workingyears?: string;
}

export interface GetCompanyinfosPositioninfosQueryParams {
  /**
   *
   * 领域名数组
   */
  comprehensions?: string;
  /**
   *
   * 细分标签名
   */
  directiontag?: string;
  /**
   *
   * 学历要求枚举数组，{1:不要求,2:大专,3:本科,4:硕士,5:博士}
   */
  educations?: string;
  /**
   *
   * 融资阶段枚举，{1:未融资,2:天使轮,3:A轮,4:B轮,5:C轮,6:D轮及以上,7:上市公司,8:不需要融资}
   */
  financingstages?: string;
  /**
   *
   * 排序类型枚举，{1:推荐,2:最近,3:最新}
   */
  mainorder?: string;
  /**
   *
   * 职位名
   */
  name?: string;
  /**
   *
   * 当前页
   */
  page?: number;
  /**
   *
   * 职位类型枚举数组，{1:全职,2:兼职,3:实习}
   */
  positiontypes?: string;
  /**
   *
   * 薪资范围，(start,end) ，单位K
   */
  salary?: string;
  /**
   *
   * 公司规模枚举数组，{1:少于15人,2:15-50人,3:50-150人,4:150-500人,5:500-2000人,6:2000以上}
   */
  scales?: string;
  /**
   *
   * 页大小
   */
  size?: number;
  /**
   *
   * 排序方式
   */
  sort?: string;
  /**
   *
   * 区县名
   */
  workarea?: string;
  /**
   *
   * 经纬度坐标
   */
  workingplace?: string;
  /**
   *
   * 工作年限枚举数组，{1:经验不限,2:在校/应届,3:3年及以下,4:3-5年,5:5-10年,6:10年以上}
   */
  workingyears?: string;
}

export interface GetCompanyinfosQueryParams {
  /**
   *
   * 当前页
   */
  page?: number;
  /**
   *
   * 页大小
   */
  size?: number;
  /**
   *
   * 排序方式
   */
  sort?: string;
}

export interface GetDirectiontagsQueryParams {
  /**
   *
   * 职位类型
   */
  positionName: string;
}

export interface GetHrinfosQueryParams {
  /**
   *
   * 当前页
   */
  page?: number;
  /**
   *
   * 页大小
   */
  size?: number;
  /**
   *
   * 排序方式
   */
  sort?: string;
}

export interface GetUserinfosP0AttentionrecordsQueryParams {
  /**
   *
   * 当前页
   */
  page?: number;
  /**
   *
   * 页大小
   */
  size?: number;
  /**
   *
   * 排序方式
   */
  sort?: string;
}

export interface GetUserinfosP0DeliveryrecordsQueryParams {
  /**
   *
   * 投递记录状态{1:待查看,2:已查看,3:通过筛选,4:约面试,5:不合适}
   */
  status: string;
  /**
   *
   * 当前页
   */
  page?: number;
  /**
   *
   * 页大小
   */
  size?: number;
  /**
   *
   * 排序方式
   */
  sort?: string;
}

export interface GetUserinfosP0EduexperiencesQueryParams {
  /**
   *
   * 当前页
   */
  page?: number;
  /**
   *
   * 页大小
   */
  size?: number;
  /**
   *
   * 排序方式
   */
  sort?: string;
}

export interface GetUserinfosP0GarnerrecordsQueryParams {
  /**
   *
   * 当前页
   */
  page?: number;
  /**
   *
   * 页大小
   */
  size?: number;
  /**
   *
   * 排序方式
   */
  sort?: string;
}

export interface GetUserinfosP0InspectionrecordsQueryParams {
  /**
   *
   * 当前页
   */
  page?: number;
  /**
   *
   * 页大小
   */
  size?: number;
  /**
   *
   * 排序方式
   */
  sort?: string;
}

export interface GetUserinfosP0JobexpectationsQueryParams {
  /**
   *
   * 当前页
   */
  page?: number;
  /**
   *
   * 页大小
   */
  size?: number;
  /**
   *
   * 排序方式
   */
  sort?: string;
}

export interface GetUserinfosP0ProjectexperiencesQueryParams {
  /**
   *
   * 当前页
   */
  page?: number;
  /**
   *
   * 页大小
   */
  size?: number;
  /**
   *
   * 排序方式
   */
  sort?: string;
}

export interface GetUserinfosP0WorkexperiencesQueryParams {
  /**
   *
   * 当前页
   */
  page?: number;
  /**
   *
   * 页大小
   */
  size?: number;
  /**
   *
   * 排序方式
   */
  sort?: string;
}

export interface GetUserinfosQueryParams {
  /**
   *
   * 当前页
   */
  page?: number;
  /**
   *
   * 页大小
   */
  size?: number;
  /**
   *
   * 排序方式
   */
  sort?: string;
}

export interface GetVerificationCodeQueryParams {
  /**
   *
   * 手机号码
   */
  phoneNumber: string;
}

export interface AccountInformation {
  /**
   *
   * 账号信息ID
   *
   */
  accountInformationId: string;
  /**
   *
   * 账号类型
   *
   * {1:用户,2:HR}
   * - minimum: 1
   * - max: 2
   */
  accountType: 1 | 2;
  /**
   *
   * 创建时间
   *
   */
  createdAt: string;
  /**
   *
   * HR信息ID
   *
   */
  hrInformationId: string;
  /**
   *
   * 更新时间
   *
   */
  updatedAt: string;
  /**
   *
   * 用户信息ID
   *
   */
  userInformationId: string;
  /**
   *
   * 用户名
   *
   */
  userName: string;
}

export type AreaInformations = {
  /**
   *
   * 地域
   *
   */
  areas: string[];
  /**
   *
   * 区县名
   *
   */
  countyName: string;
}[];

export interface AttentionRecord {
  /**
   *
   * 关注记录ID
   *
   */
  attentionRecordId: string;
  /**
   *
   * 公司信息ID
   *
   */
  companyInformationId: string;
  /**
   *
   * 创建时间
   *
   */
  createdAt: string;
  /**
   *
   * 更新时间
   *
   */
  updatedAt: string;
  /**
   *
   * 用户信息ID
   *
   */
  userInformationId: string;
}

export type CityInformations = {
  /**
   *
   * 城市
   *
   */
  cities: string[];
  /**
   *
   * 省名
   *
   */
  provinceName: string;
}[];

export interface CompanyInformation {
  /**
   *
   * 扩展信息
   *
   */
  about: string;
  /**
   *
   * 详细地址
   *
   */
  address: string;
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
   * 公司信息ID
   *
   */
  companyInformationId: string;
  /**
   *
   * 公司名称
   *
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
   * 创建时间
   *
   */
  createdAt: string;
  /**
   *
   * 成立时间
   *
   * - pattern: /^(\d{4})-(\d{2})-(\d{2})/
   */
  establishmentTime: string;
  /**
   *
   * 融资阶段
   *
   * {1:未融资,2:天使轮,3:A轮,4:B轮,5:C轮,6:D轮及以上,7:上市公司,8:不需要融资}
   * - minimum: 1
   * - max: 8
   */
  financingStage: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  /**
   *
   * 公司全称
   *
   */
  fullName: string;
  /**
   *
   * HR信息ID
   *
   */
  hrInformationId: string;
  /**
   *
   * 法定代表人
   *
   */
  legalRepresentative: string;
  /**
   *
   * LOGO地址
   *
   */
  logoUrl: string;
  /**
   *
   * 机构类型
   *
   */
  organizationType: string;
  /**
   *
   * 在招职位
   *
   */
  recruitmentPosition: number;
  /**
   *
   * 注册资本
   *
   */
  registeredCapital: string;
  /**
   *
   * 公司规模
   *
   * {1:少于15人,2:15-50人,3:50-150人,4:150-500人,5:500-2000人,6:2000以上}
   * - minimum: 1
   * - max: 6
   */
  scale: 1 | 2 | 3 | 4 | 5 | 6;
  /**
   *
   * 更新时间
   *
   */
  updatedAt: string;
}

export interface DeliveryRecord {
  /**
   *
   * 创建时间
   *
   */
  createdAt: string;
  /**
   *
   * 投递记录ID
   *
   */
  deliveryRecordId: string;
  /**
   *
   * 面试时间
   *
   * - pattern: /^(\d{4})-(\d{2})-(\d{2})/
   */
  interviewTime: string;
  /**
   *
   * 职位信息ID
   *
   */
  jobInformationId: string;
  /**
   *
   * 投递状态
   *
   * {1:待查看,2:已查看,3:通过筛选,4:约面试,5:不合适}
   * - minimum: 1
   * - max: 5
   */
  state: 1 | 2 | 3 | 4 | 5;
  /**
   *
   * 更新时间
   *
   */
  updatedAt: string;
  /**
   *
   * 用户信息ID
   *
   */
  userInformationId: string;
}

export type DirectionTags = {
  /**
   *
   * 分类名
   *
   */
  classificationName: string;
  /**
   *
   * 细分标签
   *
   */
  subdivisionLabels: string[];
}[];

export interface EducationExperience {
  /**
   *
   * 入学时间
   *
   * - pattern: /^(\d{4})-(\d{2})-(\d{2})/
   */
  admissionTime: string;
  /**
   *
   * 创建时间
   *
   */
  createdAt: string;
  /**
   *
   * 学历层次
   *
   * {1:大专,2:本科,3:硕士,4:博士}
   * - minimum: 1
   * - max: 4
   */
  education: 1 | 2 | 3 | 4;
  /**
   *
   * 教育经历ID
   *
   */
  educationExperienceId: string;
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
  /**
   *
   * 更新时间
   *
   */
  updatedAt: string;
}

export interface FilterInformation {
  /**
   *
   * 公司规模
   *
   */
  companySize: string[];
  /**
   *
   * 学历
   *
   */
  education: string[];
  /**
   *
   * 期望薪资
   *
   */
  expectedSalary: string[];
  /**
   *
   * 融资阶段
   *
   */
  financingStage: string[];
  /**
   *
   * 行业领域
   *
   */
  industryField: string[];
  /**
   *
   * 工作性质
   *
   */
  natureWork: string[];
  /**
   *
   * 细分方向
   *
   */
  occupationalBreakdown: string[];
  /**
   *
   * 工作经历
   *
   */
  workExperience: string[];
}

export interface GarnerRecord {
  /**
   *
   * 创建时间
   *
   */
  createdAt: string;
  /**
   *
   * 收藏记录ID
   *
   */
  garnerRecordId: string;
  /**
   *
   * 职位信息ID
   *
   */
  jobInformationId: string;
  /**
   *
   * 更新时间
   *
   */
  updatedAt: string;
  /**
   *
   * 用户信息ID
   *
   */
  userInformationId: string;
}

export interface HrInformation {
  /**
   *
   * 电子邮箱
   *
   */
  acceptEmail: string;
  /**
   *
   * 头像地址
   *
   */
  avatarUrl: string;
  /**
   *
   * 公司信息ID
   *
   */
  companyInformationId: string;
  /**
   *
   * 创建时间
   *
   */
  createdAt: string;
  /**
   *
   * HR信息ID
   *
   */
  hrInformationId: string;
  /**
   *
   * HR姓名
   *
   */
  hrName: string;
  /**
   *
   * 手机号码
   *
   */
  phoneNumber: string;
  /**
   *
   * 职位名称
   *
   */
  postName: string;
  /**
   *
   * 更新时间
   *
   */
  updatedAt: string;
}

export interface InspectionRecord {
  /**
   *
   * 创建时间
   *
   */
  createdAt: string;
  /**
   *
   * 查看记录ID
   *
   */
  inspectionRecordId: string;
  /**
   *
   * 职位信息ID
   *
   */
  positionInformationId: string;
  /**
   *
   * 更新时间
   *
   */
  updatedAt: string;
  /**
   *
   * 用户信息ID
   *
   */
  userInformationId: string;
}

export interface JobExpectation {
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
   * 创建时间
   *
   */
  createdAt: string;
  /**
   *
   * 细分标签
   *
   */
  directionTags: string[];
  /**
   *
   * 求职期望ID
   *
   */
  jobExpectationId: string;
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
   * - minimum: 1
   * - max: 3
   */
  positionType: 1 | 2 | 3;
  /**
   *
   * 起始薪资
   *
   * 单位K
   */
  startingSalary: number;
  /**
   *
   * 更新时间
   *
   */
  updatedAt: string;
}

export interface MessageRecord {
  /**
   *
   * 消息内容
   *
   */
  content: string;
  /**
   *
   * 创建时间
   *
   */
  createdAt: string;
  /**
   *
   * 发起用户ID
   *
   */
  initiateId: string;
  /**
   *
   * 消息记录ID
   *
   */
  messageRecordId: string;
  /**
   *
   * 接收用户ID
   *
   */
  serviceId: string;
  /**
   *
   * 消息类型
   *
   * {1:文字,2:图片,3:语音,4:文件}
   * - minimum: 1
   * - max: 4
   */
  type: 1 | 2 | 3 | 4;
  /**
   *
   * 更新时间
   *
   */
  updatedAt: string;
}

export interface PositionInformation {
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
   * 创建时间
   *
   */
  createdAt: string;
  /**
   *
   * 所属部门
   *
   */
  departmentName: string;
  /**
   *
   * 职位描述
   *
   */
  description: string;
  /**
   *
   * 细分标签
   *
   */
  directionTags: string[];
  /**
   *
   * 学历要求
   *
   * {1:不要求,2:大专,3:本科,4:硕士,5:博士}
   * - minimum: 1
   * - max: 5
   */
  education: 1 | 2 | 3 | 4 | 5;
  /**
   *
   * 职位亮点
   *
   */
  highlights: string[];
  /**
   *
   * HR信息ID
   *
   */
  hrInformationId: string;
  /**
   *
   * 面试信息
   *
   */
  interviewInfo: {
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
  overTime: string;
  /**
   *
   * 职位信息ID
   *
   */
  positionInformationId: string;
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
   * - minimum: 1
   * - max: 3
   */
  positionType: 1 | 2 | 3;
  /**
   *
   * 起始薪资
   *
   * 单位K
   */
  startingSalary: number;
  /**
   *
   * 更新时间
   *
   */
  updatedAt: string;
  /**
   *
   * 周末休息时间
   *
   * {1:周末双休:,2:周末单休,3:大小周}
   * - minimum: 1
   * - max: 3
   */
  weekendReleseTime: 1 | 2 | 3;
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
   * 上班时间
   *
   */
  workTime: string;
  /**
   *
   * 工作地点
   *
   */
  workingPlace: {
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
   * {1:经验不限,2:在校/应届,3:3年及以下,4:3-5年,5:5-10年,6:10年以上}
   * - minimum: 1
   * - max: 6
   */
  workingYears: 1 | 2 | 3 | 4 | 5 | 6;
}

export type PositionTypes = {
  /**
   *
   * 方向
   *
   */
  directions: {
    /**
     *
     * 方向名
     *
     */
    directionName: string;
    /**
     *
     * 职位
     *
     */
    positions: string[];
  }[];
  /**
   *
   * 领域名
   *
   */
  fieldName: string;
}[];

export interface ProjectExperience {
  /**
   *
   * 我的成就
   *
   */
  achievement: string;
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
   * 项目经历ID
   *
   */
  projectExperienceId: string;
  /**
   *
   * 项目链接
   *
   */
  projectLink: string;
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
   * 创建时间
   *
   */
  createdAt?: string;
  /**
   *
   * 更新时间
   *
   */
  updatedAt?: string;
}

export interface UserInformation {
  /**
   *
   * 年龄
   *
   */
  age: number;
  /**
   *
   * 头像地址
   *
   */
  avatarUrl: string;
  /**
   *
   * 所在城市
   *
   */
  cityName: string;
  /**
   *
   * 创建时间
   *
   */
  createdAt: string;
  /**
   *
   * 生日
   *
   * - pattern: /^(\d{4})-(\d{2})-(\d{2})/
   */
  dateOfBirth: string;
  /**
   *
   * 学历状态
   *
   * {1:大专,2:本科,3:硕士,4:博士}
   * - minimum: 1
   * - max: 4
   */
  education: 1 | 2 | 3 | 4;
  /**
   *
   * 电子邮箱
   *
   */
  email: string;
  /**
   *
   * 姓
   *
   */
  firstName: string;
  /**
   *
   * 求职状态
   *
   * {1:随时入职,2:2周内入职,3:1月内入职}
   * - minimum: 1
   * - max: 3
   */
  jobStatus: 1 | 2 | 3;
  /**
   *
   * 名
   *
   */
  lastName: string;
  /**
   *
   * 个人优势
   *
   */
  personalAdvantage: string;
  /**
   *
   * 电话号码
   *
   */
  phoneNumber: string;
  /**
   *
   * 图片作品
   *
   */
  pictureWorks: string[];
  /**
   *
   * 隐私设置
   *
   * {1:实名,2:匿名}
   * - minimum: 1
   * - max: 2
   */
  privacySettings: 1 | 2;
  /**
   *
   * 性别
   *
   */
  sex: string;
  /**
   *
   * 社交主页
   *
   */
  socialHomepage: string;
  /**
   *
   * 更新时间
   *
   */
  updatedAt: string;
  /**
   *
   * 用户信息ID
   *
   */
  userInformationId: string;
  /**
   *
   * 工作年限
   *
   */
  workingYears: number;
}

export interface WorkExperience {
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
   * 创建时间
   *
   */
  createdAt: string;
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
   * - minimum: 1
   * - max: 3
   */
  positionType: 1 | 2 | 3;
  /**
   *
   * 就职时间
   *
   * - pattern: /^(\d{4})-(\d{2})-(\d{2})/
   */
  startTime: string;
  /**
   *
   * 更新时间
   *
   */
  updatedAt: string;
  /**
   *
   * 工作经历ID
   *
   */
  workExperienceId: string;
}
