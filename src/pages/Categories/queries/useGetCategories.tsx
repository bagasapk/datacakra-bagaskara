import { useQuery } from "@tanstack/react-query";
import { API_CATEGORY } from "../../../constants/config";
import { getCategories } from "../../../services/Categories.service";

const useGetCategories = (params?: any) => {
  const { data, isLoading } = useQuery({
    queryKey: [API_CATEGORY, params],
    queryFn: async () => {
      const res = await getCategories(params);
      return res;
    },
  });

  return { data, isLoading };
};

export default useGetCategories;
