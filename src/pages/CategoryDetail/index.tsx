import { Button, Carousel } from "antd";
import { useState } from "react";
import CreateButton from "../../components/CreateButton";
import CreateModal from "../../components/CreateModal";
import Heading from "../../components/Heading";
import Heading2 from "../../components/Heading2";
import Loading from "../../components/Loading";
import TravelCard from "../../components/TravelCard";
import useGetCategoryById from "./queries/useGetCategoryById";
import { useNavigate } from "react-router";
import { URL_DESTINATION } from "../../constants/config";

const CategoryDetail = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetCategoryById({
    populate: { articles: "*" },
  });
  const [open, setOpen] = useState(false);

  if (isLoading) return <Loading />;

  return (
    <section>
      <div className="mx-auto">
        <div className="sm:grid sm:grid-cols-3 items-center-safe gap-10 bg-secondary shadow-lg z-10 relative">
          <div className="sm:col-span-1 p-10">
            <Heading className="mb-1 text-start">{data?.name}</Heading>
            <p>{data?.description}</p>
          </div>
          <Carousel rootClassName="sm:col-span-2" autoplay slidesToShow={3}>
            {data?.articles?.map((articles) => (
              <img
                className="h-[50vh] object-cover"
                src={articles.cover_image_url}
              ></img>
            ))}
          </Carousel>
        </div>
      </div>
      <section className="bg-primary py-10">
        <div className="w-3/4 mx-auto">
          <Heading2 className="text-center">
            Find Your Perfect "{data?.name}"
          </Heading2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center">
            {data?.articles?.slice(0, 4)?.map((item) => (
              <TravelCard
                title={item.title}
                imageUrl={item.cover_image_url}
                description={item.description}
                documentId={item.documentId}
              />
            ))}
          </div>
          <div className="w-full text-center">
            <Button
              onClick={() =>
                navigate(URL_DESTINATION + "?category=" + data?.name)
              }
              type="primary"
              className="my-4 text-center font-medium"
            >
              Show All Destinations
            </Button>
          </div>
        </div>
      </section>
      <CreateButton onClick={() => setOpen(true)} label="Create Article" />
      <CreateModal
        open={open}
        onCancel={() => setOpen(false)}
        setOpen={setOpen}
        previousData={{ category: data?.id }}
      />
    </section>
  );
};

export default CategoryDetail;
