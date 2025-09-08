import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { API_CATEGORY, API_CATEGORY_BY_ID } from "../constants/config";
import { createCategory, updateCategory } from "../services/Categories.service";
import type { RequestCategory } from "../types/Categories.type";

const usePostCreateCategory = (
  setOpen: (boolean: boolean) => void,
  isEdit?: boolean,
  previousData?: RequestCategory,
  open?: boolean
) => {
  const queryClient = useQueryClient();
  const [form] = useForm<RequestCategory>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isEdit) {
      form.setFieldsValue(previousData!);
    }
  }, [open]);

  const { mutateAsync } = useMutation({
    mutationKey: ["POST" + API_CATEGORY],
    mutationFn: async (data: RequestCategory) => {
      const res = await createCategory(data);

      return res.data;
    },
  });

  const { mutateAsync: putCategory } = useMutation({
    mutationKey: ["PUT" + API_CATEGORY_BY_ID("")],
    mutationFn: async ({ id, data }: { id: string; data: RequestCategory }) => {
      const res = await updateCategory(id ?? "", data);

      return res.data;
    },
  });

  const handleEdit = (id: string, values: RequestCategory) => {
    putCategory({ id, data: values })
      .then(() => {
        setOpen(false);
        queryClient.invalidateQueries({ queryKey: [API_CATEGORY] });
      })
      .finally(() => setIsLoading(false));
  };

  const handleFinish = (values: RequestCategory, id?: string) => {
    setIsLoading(true);
    if (isEdit) return handleEdit(id ?? "", values);
    mutateAsync(values)
      .then(() => {
        setOpen(false);
        queryClient.invalidateQueries({ queryKey: [API_CATEGORY] });
      })
      .finally(() => setIsLoading(false));
  };

  return { form, handleFinish, isLoading };
};

export default usePostCreateCategory;
