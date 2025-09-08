import { Carousel } from "antd";
import { useState } from "react";
import Comment from "../../components/Comment";
import CommentBox from "../../components/CommentBox";
import CreateModal from "../../components/CreateModal";
import Loading from "../../components/Loading";
import { formatTimeAgo } from "../../utils/date.helper";
import useCreateComment from "./queries/useCreateComment";
import useGetArticleById from "./queries/useGetArticleById";

const DestinationDetail = () => {
  const { data, isLoading } = useGetArticleById({
    populate: { comments: { populate: { user: "*" } } },
  });
  const { handleComment } = useCreateComment(data?.id ?? 0);

  const [open, setOpen] = useState(false);

  if (isLoading) return <Loading />;
  return (
    <div className="relative">
      <Carousel autoplay>
        <img
          className="h-[80vh] w-[100vw] object-cover"
          alt={data?.title}
          src={data?.cover_image_url}
        ></img>
        <img
          className="h-[80vh] w-[100vw] object-cover"
          alt={data?.title}
          src={data?.cover_image_url}
        ></img>
      </Carousel>
      <div className="absolute flex justify-between items-center font-amarante top-[65vh] px-40 py-5 text-white bg-dark/30 w-full">
        <div>
          <h1 className="text-6xl text-shadow-2xs">{data?.title}</h1>
          <p>Last Update: {formatTimeAgo(data?.updatedAt ?? "")}</p>
        </div>
      </div>
      <article className="px-60 py-10 min-h-[50vh] first-letter:text-4xl first-letter:text-dark relative text-justify">
        {data?.description}
      </article>
      <section className="px-60 py-10">
        <h2 className="text-2xl font-amarante text-shadow-2xs mb-4">
          Comments
        </h2>
        {data?.comments?.map((comment) => (
          <Comment
            createdAt={comment.updatedAt ?? ""}
            description={comment.content}
            documentId={comment.documentId}
            username={comment.user?.username}
          />
        ))}
        <CommentBox className="mt-10" onComment={handleComment} />
      </section>
      <CreateModal
        previousData={{
          title: data?.title ?? "",
          cover_image_url: data?.cover_image_url,
          description: data?.description ?? "",
        }}
        title={"Edit Article"}
        open={open}
        setOpen={setOpen}
        isEdit
      />
    </div>
  );
};

export default DestinationDetail;
