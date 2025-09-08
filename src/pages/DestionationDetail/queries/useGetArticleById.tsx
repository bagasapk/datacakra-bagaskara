import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { API_GET_ARTICLE_BY_ID } from "../../../constants/config";
import { getArticlesById } from "../../../services/Destinations.service";

const useGetArticleById = (params?: any) => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: [API_GET_ARTICLE_BY_ID, params, id],
    queryFn: async () => {
      const res = await getArticlesById(id ?? "", params);
      return res.data;
    },
    enabled: !!id,
  });

  return { data, isLoading: isLoading };
};

export default useGetArticleById;
