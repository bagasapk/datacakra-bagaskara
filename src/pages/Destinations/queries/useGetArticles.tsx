import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../../../services/Destinations.service";
import { API_GET_ARTICLE } from "../../../constants/config";

const useGetArticles = (params?:any) => {
  const { data, isLoading } = useQuery({
    queryKey: [API_GET_ARTICLE,params],
    queryFn: async () => {
      const res = await getArticles(params);
      return res;
    },
  });

  return { data, isLoading };
};

export default useGetArticles;
