/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 5
 */

export interface DeleteAccountsAccountidQueryParams {
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

export interface GetCompanyinfosCompanyinfoidDeliveryrecordsQueryParams {
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
   * 投递职位
   */
  jobId?: string;
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
   * 状态{1:待查看,2:已查看,3:通过筛选,4:约面试,5:不合适}
   */
  state?: string;
  /**
   *
   * 工作经验{0:经验不限,1:在校/应届,2:3年及以下,3:3-5年,4:5-10年,5:10年以上}
   */
  workingYears?: string;
}

export interface GetCompanyinfosCompanyinfoidPositioninfosQueryParams {
  /**
   *
   * 领域名数组
   */
  comprehension?: string;
  /**
   *
   * 细分标签名
   */
  directiontags?: string;
  /**
   *
   * 学历要求枚举数组，{0:不要求,1:大专,2:本科,3:硕士,4:博士}
   */
  education?: string;
  /**
   *
   * 融资阶段枚举，{1:未融资,2:天使轮,3:A轮,4:B轮,5:C轮,6:D轮及以上,7:上市公司,8:不需要融资}
   */
  financingstage?: string;
  /**
   *
   * 职位名
   */
  name?: string;
  /**
   *
   * 排序类型枚举，{1:推荐,2:最近,3:最新}
   */
  order?: string;
  /**
   *
   * 职位类型枚举数组，{1:全职,2:兼职,3:实习}
   */
  positiontype?: string;
  /**
   *
   * 薪资范围，(start,end) ，单位K
   */
  salary?: string;
  /**
   *
   * 公司规模枚举数组，{1:少于15人,2:15-50人,3:50-150人,4:150-500人,5:500-2000人,6:2000以上}
   */
  scale?: string;
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
   * 工作年限枚举数组，{0:经验不限,1:在校/应届,2:3年及以下,3:3-5年,4:5-10年,5:10年以上}
   */
  workingyears?: string;
}

export interface GetDirectiontagsQueryParams {
  /**
   *
   * 职位类型
   */
  positionName: string;
}

export interface GetUserinfosUserinfoidDeliveryrecordsQueryParams {
  /**
   *
   * 投递记录状态{1:待查看,2:已查看,3:通过筛选,4:约面试,5:不合适}
   */
  status: string;
}

export interface GetVerificationCodeQueryParams {
  /**
   *
   * 手机号码
   */
  phoneNumber: string;
}

export interface HRInformation {
  /**
   *
   * 邮箱
   *
   * 接受简历的邮箱
   */
  acceptEmail: string;
  /**
   *
   * 头像
   *
   */
  avatar: string;
  /**
   *
   * 公司ID
   *
   */
  companyInfoId: string;
  /**
   *
   * 创建时间
   *
   */
  createdAt: string;
  /**
   *
   * HRID
   *
   */
  hrId: string;
  /**
   *
   * 姓名
   *
   */
  name: string;
  /**
   *
   * 手机号码
   *
   */
  phoneNumber: string;
  /**
   *
   * 职位
   *
   */
  post: string;
  /**
   *
   * 更新时间
   *
   */
  updatedAt: string;
}

export interface AccountInformation {
  /**
   *
   * 账号ID
   *
   */
  accountId: string;
  /**
   *
   * 账号类型
   *
   * {1:用户,2:HR}
   */
  accountType: "1" | "2";
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
  hrInfoId: string;
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
  userInfoId: string;
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
   * 公司ID
   *
   */
  companyId: string;
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
   * 用户ID
   *
   */
  userId: string;
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
   * 信息
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
   * 福利
   *
   */
  benefits: string[];
  /**
   *
   * 所在城市
   *
   */
  city: string;
  /**
   *
   * 公司ID
   *
   */
  companyId: string;
  /**
   *
   * 领域
   *
   */
  comprehension: string;
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
   */
  establishmentTime: string;
  /**
   *
   * 融资阶段
   *
   * {1:未融资,2:天使轮,3:A轮,4:B轮,5:C轮,6:D轮及以上,7:上市公司,8:不需要融资}
   */
  financingStage: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
  /**
   *
   * 全称
   *
   */
  fullName: string;
  /**
   *
   * HRID
   *
   */
  hrId: string;
  /**
   *
   * 法定代表人
   *
   */
  legalRepresentative: string;
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
   * 机构类型
   *
   */
  organizatioType: string;
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
   * 规模
   *
   * {1:少于15人,2:15-50人,3:50-150人,4:150-500人,5:500-2000人,6:2000以上}
   */
  scale: "1" | "2" | "3" | "4" | "5" | "6";
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
   */
  state: "1" | "2" | "3" | "4" | "5";
  /**
   *
   * 更新时间
   *
   */
  updatedAt: string;
  /**
   *
   * 用户ID
   *
   */
  userId: string;
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
   * 创建时间
   *
   */
  createdAt: string;
  /**
   *
   * 学历层次
   *
   * {1:大专,2:本科,3:硕士,4:博士}
   */
  education: "1" | "2" | "3" | "4";
  /**
   *
   * 教育经历ID
   *
   */
  educationExperienceId: string;
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
  /**
   *
   * 更新时间
   *
   */
  updatedAt: string;
}

export interface ErrorInformation {
  /**
   *
   * 错误代码
   *
   */
  eno: number;
  /**
   *
   * 错误消息
   *
   */
  msg: string;
}

export interface FilterInformation {
  /**
   *
   * 行业领域
   *
   */
  IndustryField: string[];
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
   * 用户ID
   *
   */
  userId: string;
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
   * 从ID
   *
   */
  from: string;
  /**
   *
   * 查看记录ID
   *
   */
  inspectionRecordId: string;
  /**
   *
   * 到ID
   *
   */
  to: string;
  /**
   *
   * 更新时间
   *
   */
  updatedAt: string;
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
  city: string;
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
   * 职位类型
   *
   * {1:全职,2:兼职,3:实习}
   */
  positionType: "1" | "2" | "3";
  /**
   *
   * 职位名
   *
   */
  positonName: string;
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
   * 来源用户ID
   *
   */
  from: string;
  /**
   *
   * 消息记录ID
   *
   */
  messageRecordId: string;
  /**
   *
   * 去向用户ID
   *
   */
  to: string;
  /**
   *
   * 消息类型
   *
   * {1:文字,2:图片,3:语音,4:文件}
   */
  type: "1" | "2" | "3" | "4";
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
   * 公司ID
   *
   */
  companyId: string;
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
  department: string;
  /**
   *
   * 职位描述
   *
   */
  description: string;
  /**
   *
   * 细化标签
   *
   */
  directionTags: string[];
  /**
   *
   * 学历
   *
   * {0:不要求,1:大专,2:本科,3:硕士,4:博士}
   */
  education: "0" | "1" | "2" | "3" | "4";
  /**
   *
   * 职位亮点
   *
   */
  highlights: string[];
  /**
   *
   * HRID
   *
   */
  hrId: string;
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
   * 职位名称
   *
   */
  name: string;
  /**
   *
   * 职位信息ID
   *
   */
  positionInformationId: string;
  /**
   *
   * 职位类型
   *
   * {1:全职,2:兼职,3:实习}
   */
  positionType: "1" | "2" | "3";
  /**
   *
   * 发布日期
   *
   */
  releaseDate: string;
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
   * {1周末双休:,2:周末单休,3:大小周}
   */
  weekendReleseTime: "1" | "2" | "3";
  /**
   *
   * 工作地区
   *
   */
  workArea: string;
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
   * {0:经验不限,1:在校/应届,2:3年及以下,3:3-5年,4:5-10年,5:10年以上}
   */
  workingYears: "0" | "1" | "2" | "3" | "4" | "5";
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
   * 头像
   *
   */
  avatar: string;
  /**
   *
   * 所在城市
   *
   */
  city: string;
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
   */
  dateOfBirth: string;
  /**
   *
   * 学历
   *
   * {1:大专,2:本科,3:硕士,4:博士}
   */
  education: "1" | "2" | "3" | "4";
  /**
   *
   * 邮箱
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
   */
  jobStatus: "1" | "2" | "3";
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
   */
  privacySettings: "1" | "2";
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
   * 用户ID
   *
   */
  userId: string;
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
