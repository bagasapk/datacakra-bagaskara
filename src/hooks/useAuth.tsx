import { useEffect } from "react";
import { apiTravel } from "../lib/api.lib";
import { ACCESS_TOKEN, URL_LOGIN } from "../constants/config";
import { useNavigate } from "react-router";

const useAuth = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const request = apiTravel.interceptors.request.use(
      async (config) => {
        // console.log(await cookieStore.get(ACCESS_TOKEN));
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${localStorage.getItem(
            ACCESS_TOKEN
          )}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const response = apiTravel.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevReq = error.config;
        if (error?.response?.status === 403 && !prevReq?._retry) {
          prevReq._retry = true;
          try {
            return apiTravel(prevReq);
          } catch (error) {
            console.log(error);
            localStorage.delete(ACCESS_TOKEN);
            navigate(URL_LOGIN);
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      apiTravel.interceptors.request.eject(request);
      apiTravel.interceptors.response.eject(response);
    };
  }, []);
};

export default useAuth;
