//定制请求的实例
import { useTokenStore } from '@/stores/token.js';
//导入axios  npm install axios
import axios from "axios";
//定义一个变量,记录公共的前缀  ,  baseURL
// api->http://localhost:5173/api
const baseURL = "/api"; //这个是在前端配置同源策略
// const baseURL = 'http://localhost:8080';
const instance = axios.create({ baseURL })
import { ElMessage } from "element-plus";
import router from "@/router/index.js";
// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    //请求前的回调
    //添加token
    const tokenStore = useTokenStore();
    //判断有没有token
    if (tokenStore.token) {
      config.headers.Authorization = tokenStore.token
    }
    return config;
  },
  (err) => {
    //请求错误的回调
    Promise.reject(err)
  }
)

//添加响应拦截器
instance.interceptors.response.use(
  (result) => {
    // 正常
    if (result.data.code === 0) {
      return result.data;
    }
    // 操作失败
    ElMessage.error(result.data.msg ? result.data.msg : "服务异常");
    return Promise.reject(result.err); //异步的状态转化成失败的状态
  },
  (err) => {
    if (err.response.status === 401) {
      ElMessage.error("请先登录");
      router.push("/login");
    }
    else {
      ElMessage.error("服务异常");
      return Promise.reject(err); //异步的状态转化成失败的状态
    }

  }
);

export default instance;
