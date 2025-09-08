import { useMutation } from "@tanstack/react-query";
import { useForm } from "antd/es/form/Form";
import type { UploadFile } from "antd/es/upload";
import { useEffect, useState } from "react";
import {
  API_GET_ARTICLE,
  API_GET_ARTICLE_BY_ID
} from "../constants/config";
import { createArticle, updateArticle } from "../services/Destinations.service";
import type { RequestPostCreateArticle } from "../types/Destinations.type";

const usePostCreateArticle = (
  setOpen: (boolean: boolean) => void,
  setFileList: (fileList: UploadFile[]) => void,
  open?: boolean,
  isEdit?: boolean,
  previousData?: Partial<RequestPostCreateArticle>
) => {
  const [form] = useForm<RequestPostCreateArticle>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    form.setFieldsValue({
      title: previousData?.title,
      category: previousData?.category,
      description: previousData?.description,
    });
  }, [isEdit, open, previousData]);

  const { mutateAsync } = useMutation({
    mutationKey: ["POST" + API_GET_ARTICLE],
    mutationFn: async (data: RequestPostCreateArticle) => {
      const res = await createArticle(data);
      return res.data;
    },
  });
  const { mutateAsync: putArticle } = useMutation({
    mutationKey: ["PUT" + API_GET_ARTICLE_BY_ID("")],
    mutationFn: async ({
      id,
      data,
    }: {
      id: string;
      data: RequestPostCreateArticle;
    }) => {
      const res = await updateArticle(id ?? "", data);
      return res.data;
    },
  });

  const handleEdit = (id: string, values: RequestPostCreateArticle) => {
    let payload = values as RequestPostCreateArticle;
    const currentImg = (values.cover_image_url as UploadFile[])?.[0].response;
    if (currentImg !== previousData?.cover_image_url)
      payload.cover_image_url = currentImg;

    putArticle({ id, data: payload })
      .then(() => {
        setOpen(false);
      })
      .finally(() => setIsLoading(false));
  };

  const handleFinish = (values: RequestPostCreateArticle, id?: string) => {
    setIsLoading(true);
    if (isEdit) return handleEdit(id ?? "", values);
    const currentImg = (values.cover_image_url as UploadFile[])?.[0].response;
    let payload = values as RequestPostCreateArticle;
    payload.cover_image_url =
      typeof values.cover_image_url === "string"
        ? values.cover_image_url
        : currentImg;

    mutateAsync(payload)
      .then(() => {
        setOpen(false);
        setFileList([]);
        window.location.reload();
        form.resetFields();
      })
      .finally(() => setIsLoading(false));
  };

  return { form, handleFinish, isLoading };
};

export default usePostCreateArticle;
