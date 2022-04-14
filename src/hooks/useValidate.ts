// import { ref } from "vue";
// const useValidate = (params: Object) => {
//     interface IValidate {
//         avatar: string,
//         name: string,
//         post: string,
//         fullName: string,
//         acceptEmail: string,
//         hrId: string,
//         phoneNumber: string,
//         [key: string]: boolean | string,
//     }
//     //判断对象内是否有属性值为空
//     const getValidate = (params: IValidate) => {
//         let flag = false;
//         for (let key in params) {
//             if (params[key] === "") {
//                 flag = true;
//                 break;
//             }
//         }
//     }
//     return { getValidate }
// }
// export default useValidate;
// Vue.prototype.paramsValidate = function (params) {
//     let flag = true;
//     for (var key in params) {
//         if (params[key] != '0' && !params[key]) {
//             this.$vux.toast.text('请完善数据!', 'middle');
//             return false; // 终止程序
//         }
//     }

//     return flag;
// }
