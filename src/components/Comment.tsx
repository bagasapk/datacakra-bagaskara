import { MoreOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown } from "antd";
import useDeleteComment from "../hooks/useDeleteComment";
import useEditComment from "../hooks/useEditComment";
import { useStore } from "../stores/stores";
import { formatTimeAgo } from "../utils/date.helper";
import CommentBox from "./CommentBox";

const Comment = ({
  createdAt,
  description,
  documentId,
  username,
}: {
  createdAt: string;
  description: string;
  documentId: string;
  username?: string;
}) => {
  const { mutateAsync } = useDeleteComment();
  const { isEdit, setIsEdit, handleEdit, isLoading } = useEditComment();
  const { user } = useStore();

  return (
    <div className="bg-secondary p-3 relative rounded-lg mt-2 shadow">
      <div className="flex items-center gap-3 mb-2 ">
        <Avatar className="bg-blue!" size={32}>
          {username?.slice(0, 1).toLocaleUpperCase()}
        </Avatar>
        <div className="grid">
          <span className="font-medium text-xs text-basic-2">{username}</span>
          <span className="text-basic-6 font-medium text-[12px]">
            {formatTimeAgo(createdAt)}
          </span>
        </div>
      </div>
      {isEdit ? (
        <CommentBox
          isLoading={isLoading}
          previousContent={description}
          onComment={(comment) => handleEdit(documentId, { content: comment })}
          isEdit
        />
      ) : (
        <p className="text-basic-2 font-medium">{description}</p>
      )}

      {user.username === username && (
        <Dropdown
          className="absolute! top-4 right-4"
          menu={{
            items: [
              {
                key: "1",
                label: <span>Edit</span>,
                onClick: () => setIsEdit(true),
              },
              {
                key: "2",
                label: <span>Delete</span>,
                onClick: () => mutateAsync(documentId),
                danger: true,
              },
            ],
          }}
        >
          <Button
            type="text"
            icon={<MoreOutlined />}
            className="bg-white! text-dark"
          />
        </Dropdown>
      )}
    </div>
  );
};

export default Comment;
