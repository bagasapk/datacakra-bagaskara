import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  API_GET_ARTICLE,
  API_GET_ARTICLE_BY_ID,
} from "../../../constants/config";
import { deleteArticlesById } from "../../../services/Destinations.service";

const useDeleteArticleById = (params?: any) => {
  const qc = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationKey: [API_GET_ARTICLE_BY_ID, params],
    mutationFn: async (id: string) => {
      await deleteArticlesById(id, params);
    },
  });

  const handleDelete = async (id: string) => {
    await mutateAsync(id).then(() => {
      qc.invalidateQueries({ queryKey: [API_GET_ARTICLE] });
    });
  };

  return { mutateAsync, handleDelete };
};

export default useDeleteArticleById;
