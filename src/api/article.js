import request from "@/utils/request.js";
// import { useTokenStore } from "@/stores/token.js";

//文章分类列表查询
//文章分类列表查询
export const articleCategoryListService = () => {
    //获取token状态
    // const tokenStore = useTokenStore();
    //通过请求头Authorization携带token
    return request.get("/category");
};

export const articleCategoryAddService = (data) => {
    return request.post("/category", data);
}

export const articleCategoryUpdateService = (data) => {
    return request.put("/category", data);
}

export const articleCategoryDeleteService = (id) => {
    return request.delete("/category?id=" + id);
}

//文章列表查询
export const articleListService = (params) => {

    return request.get("/article", { params: params });
}
export const articleAddService = (data) => {
    return request.post("/article", data)
}
export const articleUpdateService = (data2) => {
    return request.put("/article", data2)
}

export const articleDeleteService = (id) => {
    return request.delete("/article?id=" + id)
}
