import { LoadingOutlined } from "@ant-design/icons";
import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import clsx from "clsx";
import { useState } from "react";

const CommentBox = ({
  isEdit,
  className,
  onComment,
  isLoading,
  previousContent,
}: {
  className?: string;
  onComment: (content: string) => void;
  isLoading?: boolean;
  isEdit?: boolean;
  previousContent?: string;
}) => {
  const [comment, setComment] = useState(previousContent ?? "");

  return (
    <div className={clsx("border-b border-[#EBEFF4]", className)}>
      <h2 className="text-sm font-semibold text-basic-4 mb-4">
        {isEdit ? "Edit" : "Your"} Comment
      </h2>
      <TextArea
        rows={4}
        placeholder="Write something..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button
        icon={isLoading ? <LoadingOutlined spin /> : undefined}
        disabled={!comment.length}
        onClick={() => {
          onComment(comment);
          setComment("");
        }}
        type="primary"
        className="mt-4"
      >
        {isEdit ? "Edit" : "Post"} Comment
      </Button>
    </div>
  );
};

export default CommentBox;
