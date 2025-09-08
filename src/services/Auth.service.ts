import { API_LOGIN, API_ME, API_REGISTER } from "../constants/config";
import { apiTravel } from "../lib/api.lib";
import type {
  LoginInterface,
  MeInterface,
  RegisterInterface,
  ResponseRegister,
} from "../types/Auth.type";

export const postRegister = (data: RegisterInterface) => {
  try {
    const res = apiTravel.post<ResponseRegister>(API_REGISTER, data);
    return res;
  } catch (error) {
    throw new Error((error as Error)?.message);
  }
};

export const postLogin = (data: LoginInterface) => {
  try {
    const res = apiTravel.post<ResponseRegister>(API_LOGIN, data);
    return res;
  } catch (error) {
    throw new Error((error as Error)?.message);
  }
};

export const getMe = () => {
  try {
    const res = apiTravel.get<MeInterface>(API_ME);
    return res;
  } catch (error) {
    throw new Error((error as Error)?.message);
  }
};
