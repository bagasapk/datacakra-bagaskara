import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { API_CATEGORY_BY_ID } from "../../../constants/config";
import { getCategoryById } from "../../../services/Categories.service";

const useGetCategoryById = (params?: any) => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: [API_CATEGORY_BY_ID, params, id],
    queryFn: async () => {
      const res = await getCategoryById(id ?? "", params);
      return res.data;
    },
    enabled: !!id,
  });

  return { data, isLoading: isLoading };
};

export default useGetCategoryById;
