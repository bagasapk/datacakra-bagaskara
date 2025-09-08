import { useQuery } from "@tanstack/react-query";
import { API_ME } from "../constants/config";
import { getMe } from "../services/Auth.service";
import { useStore } from "../stores/stores";

const useGetMe = () => {
  const { setUser } = useStore();
  const { data, isLoading } = useQuery({
    queryKey: [API_ME],
    queryFn: async () => {
      const res = await getMe();
      setUser({ email: res.data.email, username: res.data.username });
      return res.data;
    },
  });

  return { data, isLoading };
};

export default useGetMe;
