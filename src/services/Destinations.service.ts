import {
  API_GET_ARTICLE,
  API_GET_ARTICLE_BY_ID,
  API_UPLOAD,
} from "../constants/config";
import type { BaseResponse } from "../constants/interface";
import { apiTravel } from "../lib/api.lib";
import {
  type RequestPostCreateArticle,
  type ResponseGetArticles,
  type ResponseUpload
} from "../types/Destinations.type";

export const getArticles = async (params?: any) => {
  try {
    const res = await apiTravel.get<BaseResponse<ResponseGetArticles[]>>(
      API_GET_ARTICLE,
      { params }
    );
    return res.data;
  } catch (error) {
    throw new Error((error as Error)?.message);
  }
};

export const createArticle = async (data: RequestPostCreateArticle) => {
  try {
    const res = await apiTravel.post<BaseResponse<ResponseGetArticles>>(
      API_GET_ARTICLE,
      { data }
    );
    return res.data;
  } catch (error) {
    throw new Error((error as Error)?.message);
  }
};

export const updateArticle = async (
  id: string,
  data: RequestPostCreateArticle
) => {
  try {
    const res = await apiTravel.put<BaseResponse<ResponseGetArticles>>(
      API_GET_ARTICLE_BY_ID(id),
      { data }
    );
    return res.data;
  } catch (error) {
    throw new Error((error as Error)?.message);
  }
};

export const getArticlesById = async (id: string, params?: any) => {
  try {
    const res = await apiTravel.get<BaseResponse<ResponseGetArticles>>(
      API_GET_ARTICLE_BY_ID(id),
      { params }
    );
    return res.data;
  } catch (error) {
    throw new Error((error as Error)?.message);
  }
};

export const deleteArticlesById = async (id: string, params?: any) => {
  try {
    await apiTravel.delete(API_GET_ARTICLE_BY_ID(id), { params });
  } catch (error) {
    throw new Error((error as Error)?.message);
  }
};

export const upload = async (files: FormData) => {
  try {
    const res = await apiTravel.post<ResponseUpload[]>(API_UPLOAD, files, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data[0].url;
  } catch (error) {
    throw new Error((error as Error)?.message);
  }
};
