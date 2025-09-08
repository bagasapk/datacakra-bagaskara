import { useMutation } from "@tanstack/react-query";
import { API_COMMENT_BY_ID } from "../constants/config";
import { deleteComment } from "../services/Comments.service";
import { message } from "antd";

const useDeleteComment = () => {
  const { mutateAsync } = useMutation({
    mutationKey: [API_COMMENT_BY_ID("")],
    mutationFn: async (id: string) => {
      await deleteComment(id);
    },
  });

  const handleDelete = async (id: string) => {
    await mutateAsync(id).then(() => {
      message.success("Article successfully deleted");
    });
  };

  return { mutateAsync, handleDelete };
};

export default useDeleteComment;
