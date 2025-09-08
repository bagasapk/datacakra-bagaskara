import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API_COMMENT, API_GET_ARTICLE_BY_ID } from "../../../constants/config";
import { createComment } from "../../../services/Comments.service";
import type { RequestPostComment } from "../../../types/Comments.type";

const useCreateComment = (id: number) => {
  const qc = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationKey: ["POST" + API_COMMENT],
    mutationFn: async (data: RequestPostComment) => {
      const res = await createComment(data);
      return res.data;
    },
  });

  const handleComment = (comment: string) => {
    mutateAsync({ article: Number(id), content: comment }).then(() =>
      qc.invalidateQueries({ queryKey: [API_GET_ARTICLE_BY_ID] })
    );
  };

  return { handleComment };
};

export default useCreateComment;
