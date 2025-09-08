import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { message } from "antd";
import { API_CATEGORY, API_CATEGORY_BY_ID } from "../../../constants/config";
import { deleteCategory } from "../../../services/Categories.service";

const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationKey: [API_CATEGORY_BY_ID("")],
    mutationFn: async (id: string) => {
      await deleteCategory(id ?? "");
    },
  });

  const handleDelete = async (id: string) => {
    await mutateAsync(id).then(() => {
      queryClient.invalidateQueries({ queryKey: [API_CATEGORY] });
      message.success("Category successfully deleted");
    });
  };

  return { handleDelete };
};

export default useDeleteCategory;
