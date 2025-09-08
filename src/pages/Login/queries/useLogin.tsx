import { useMutation } from "@tanstack/react-query";
import { useForm } from "antd/es/form/Form";
import { useNavigate } from "react-router";
import {
  ACCESS_TOKEN,
  API_LOGIN,
  URL_DASHBOARD,
} from "../../../constants/config";
import { postLogin } from "../../../services/Auth.service";
import type { LoginInterface } from "../../../types/Auth.type";
import { useState } from "react";

const useLogin = () => {
  const navigate = useNavigate();
  const [form] = useForm<LoginInterface>();
  const [isLoading, setIsLoading] = useState(false);

  const { mutateAsync } = useMutation({
    mutationFn: async (data: LoginInterface) => {
      const res = await postLogin(data);
      return res.data;
    },
    mutationKey: [API_LOGIN],
  });

  const handleFinish = (values: LoginInterface) => {
    setIsLoading(true);
    mutateAsync(values)
      .then((res) => {
        localStorage.setItem(ACCESS_TOKEN, res.jwt);
        navigate(URL_DASHBOARD);
      })
      .finally(() => setIsLoading(false));
  };

  return { form, handleFinish,isLoading };
};

export default useLogin;
