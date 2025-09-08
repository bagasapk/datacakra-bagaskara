import { API_COMMENT, API_COMMENT_BY_ID } from "../constants/config";
import type { BaseResponse } from "../constants/interface";
import { apiTravel } from "../lib/api.lib";
import type {
  GetComments,
  RequestPostComment,
  ResponsePostComment,
} from "../types/Comments.type";

export const getComments = async (params?: any) => {
  try {
    const res = await apiTravel.get<BaseResponse<GetComments[]>>(API_COMMENT, {
      params,
    });
    return res.data;
  } catch (error) {
    throw new Error((error as Error)?.message);
  }
};

export const deleteComment = async (id: string, params?: any) => {
  try {
    await apiTravel.delete(API_COMMENT_BY_ID(id), { params });
  } catch (error) {
    throw new Error((error as Error)?.message);
  }
};

export const createComment = async (data: RequestPostComment) => {
  try {
    const res = await apiTravel.post<BaseResponse<ResponsePostComment>>(
      API_COMMENT,
      { data }
    );
    return res.data;
  } catch (error) {
    throw new Error((error as Error)?.message);
  }
};

export const updateComment = async (
  id: string,
  data: Omit<RequestPostComment, "article">
) => {
  try {
    const res = await apiTravel.put<BaseResponse<ResponsePostComment>>(
      API_COMMENT_BY_ID(id),
      { data }
    );
    return res.data;
  } catch (error) {
    throw new Error((error as Error)?.message);
  }
};
