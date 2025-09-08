import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { API_COMMENT_BY_ID, API_GET_ARTICLE_BY_ID } from "../constants/config";
import { updateComment } from "../services/Comments.service";
import type { RequestPostComment } from "../types/Comments.type";

const useEditComment = () => {
  const qc = useQueryClient();
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { mutateAsync } = useMutation({
    mutationKey: ["PUT" + API_COMMENT_BY_ID("")],
    mutationFn: async ({
      id,
      data,
    }: {
      id: string;
      data: Omit<RequestPostComment, "article">;
    }) => {
      const res = await updateComment(id ?? "", data);
      return res.data;
    },
  });

  const handleEdit = (
    id: string,
    data: Omit<RequestPostComment, "article">
  ) => {
    setIsLoading(true);
    mutateAsync({ id, data }).finally(() => {
      setIsLoading(false);
      setIsEdit(false);
      qc.invalidateQueries({ queryKey: [API_GET_ARTICLE_BY_ID] });
    });
  };

  return { isEdit, setIsEdit, handleEdit, isLoading };
};

export default useEditComment;
