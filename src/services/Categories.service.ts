import {
  API_CATEGORY,
  API_CATEGORY_BY_ID
} from "../constants/config";
import type { BaseResponse } from "../constants/interface";
import { apiTravel } from "../lib/api.lib";
import type { GetCategories, RequestCategory } from "../types/Categories.type";

export const getCategories = async (params?: any) => {
  try {
    const res = await apiTravel.get<BaseResponse<GetCategories[]>>(
      API_CATEGORY,
      {
        params,
      }
    );
    return res.data;
  } catch (error) {
    throw new Error((error as Error)?.message);
  }
};

export const getCategoryById = async (id: string, params?: any) => {
  try {
    const res = await apiTravel.get<BaseResponse<GetCategories>>(
      API_CATEGORY_BY_ID(id),
      {
        params,
      }
    );
    return res.data;
  } catch (error) {
    throw new Error((error as Error)?.message);
  }
};

export const deleteCategory = async (id: string, params?: any) => {
  try {
    await apiTravel.delete(API_CATEGORY_BY_ID(id), { params });
  } catch (error) {
    throw new Error((error as Error)?.message);
  }
};

export const createCategory = async (data: RequestCategory) => {
  try {
    const res = await apiTravel.post<BaseResponse<GetCategories>>(
      API_CATEGORY,
      { data }
    );
    return res.data;
  } catch (error) {
    throw new Error((error as Error)?.message);
  }
};

export const updateCategory = async (id: string, data: RequestCategory) => {
  try {
    const res = await apiTravel.put<BaseResponse<GetCategories>>(
      API_CATEGORY_BY_ID(id),
      { data }
    );
    return res.data;
  } catch (error) {
    throw new Error((error as Error)?.message);
  }
};
