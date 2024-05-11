import request from "@/utils/request.js";
// 提供注册接口的函数
export const userRegisterService = (registerDate) => {
  // 借助UrlSearchParams完成传递,将json转成参数
  const params = new URLSearchParams();
  for (let key in registerDate) {
    params.append(key, registerDate[key]);
  }
  return request.post("/user/register", params);
};

// 提供登录接口的函数
export const userLoginService = (LoginDate) => {
  // 借助UrlSearchParams完成传递,将json转成参数
  const params = new URLSearchParams();
  for (let key in LoginDate) {
    params.append(key, LoginDate[key]);
  }
  return request.post("/user/login", params);
};
export const userInfoService = () => {
  return request.get("/user/userInfo");
}

export const userInfoUpdateService = (data) => {
  return request.put('/user/update', data)
}
export const userAvatarUpdateService = (avatarURL) => {
  const params = new URLSearchParams();
  params.append("avatarUrl", avatarURL)
  return request.patch('/user/updateAvatar', params)
}