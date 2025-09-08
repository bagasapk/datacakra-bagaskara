import type { MessageInstance } from "antd/es/message/interface";
import type { ReactElement } from "react";

export interface BaseResponse<T> {
  data: T;
  meta: BaseResponseMeta;
}

export interface BaseResponseMeta {
  pagination: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
}

export interface StoreInterface {
  user: {
    username: string;
    email: string;
  };
  setUser: (user: { username: string; email: string }) => void;
}
