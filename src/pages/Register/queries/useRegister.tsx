import { useMutation } from "@tanstack/react-query";
import { useForm } from "antd/es/form/Form";
import {
  ACCESS_TOKEN,
  API_REGISTER,
  URL_DASHBOARD,
} from "../../../constants/config";
import { postRegister } from "../../../services/Auth.service";
import type { RegisterInterface } from "../../../types/Auth.type";
import { useNavigate } from "react-router";
import { useState } from "react";

const useRegister = () => {
  const navigate = useNavigate();
  const [form] = useForm<RegisterInterface>();
  const [isLoading, setIsLoading] = useState(false);

  const { mutateAsync } = useMutation({
    mutationFn: async (data: RegisterInterface) => {
      const res = await postRegister(data);
      return res.data;
    },
    mutationKey: [API_REGISTER],
  });

  const validateConfirmPassword = (_: any, value: string) => {
    if (!value || form.getFieldValue("password") === value) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("Confirm password not match!"));
  };

  const handleFinish = (values: RegisterInterface) => {
    setIsLoading(true);
    mutateAsync({
      email: values.email,
      username: values.username,
      password: values.password,
    })
      .then((res) => {
        localStorage.setItem(ACCESS_TOKEN, res.jwt);
        navigate(URL_DASHBOARD);
      })
      .finally(() => setIsLoading(false));
  };

  return { form, handleFinish, validateConfirmPassword, isLoading };
};

export default useRegister;
