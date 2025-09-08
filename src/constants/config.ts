export const BASE_URL = "https://extra-brooke-yeremiadio-46b2183e.koyeb.app";

export const API_GET_ARTICLE = "/api/articles";
export const API_GET_ARTICLE_BY_ID = (id?: string) => "/api/articles/" + id;
export const API_UPLOAD = "/api/upload";

export const API_COMMENT = "/api/comments";
export const API_COMMENT_BY_ID = (id: string) => "/api/comments/" + id;

export const API_CATEGORY = "/api/categories";
export const API_CATEGORY_BY_ID = (id?: string) => "/api/categories/" + id;

export const API_REGISTER = "/api/auth/local/register";
export const API_LOGIN = "/api/auth/local";

export const API_ME = "/api/users/me";

export const URL_DASHBOARD = "/";
export const URL_REGISTER = "/register";
export const URL_LOGIN = "/login";
export const URL_CATEGORY = "/category";
export const URL_CATEGORY_DETAIl = "/category/:id/detail";
export const URL_DESTINATION = "/destination";
export const URL_DESTINATION_DETAIL = "/destination/:id/detail";
export const URL_CONTENT_MANAGEMENT = "/content";

export const ACCESS_TOKEN = "accessToken";
