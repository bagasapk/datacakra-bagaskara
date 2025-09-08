import { useQuery } from '@tanstack/react-query';
import { API_COMMENT } from '../../../constants/config';
import { getComments } from '../../../services/Comments.service';

const useGetComments = (params?:any) => {
  const { data, isLoading } = useQuery({
    queryKey: [API_COMMENT,params],
    queryFn: async () => {
      const res = await getComments(params);
      return res;
    },
  });

  return { data, isLoading };
}

export default useGetComments
