import { Pagination } from "antd";
import { useState } from "react";
import CreateButton from "../../components/CreateButton";
import CreateModal from "../../components/CreateModal";
import Filter from "../../components/Filter";
import Heading from "../../components/Heading";
import LoadingLayout from "../../components/LoadingLayout";
import TravelCard from "../../components/TravelCard";
import useFilter from "../../hooks/useFilter";
import usePagination from "../../hooks/usePagination";
import { debounce } from "../../utils/function.helper";
import useGetArticles from "./queries/useGetArticles";

const Destinations = () => {
  const { page, handleOnChange, pageSize } = usePagination();
  const { search, selected, handleFilter } = useFilter();
  const { data, isLoading } = useGetArticles({
    pagination: { page, pageSize },
    filters: {
      title: search,
      category: selected,
    },
  });

  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <section className="px-4 sm:px-20 py-10">
        <Heading>Destinations</Heading>
        <Filter onChange={debounce(handleFilter, 700)} />
        <LoadingLayout isEmpty={!data?.data.length} isLoading={isLoading}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 mt-4 gap-4">
            {data?.data?.map((articles) => (
              <TravelCard
                title={articles.title}
                imageUrl={articles.cover_image_url}
                description={articles.description}
                documentId={articles.documentId}
              />
            ))}
          </div>
          <Pagination
            className="mt-4!"
            align="end"
            current={page}
            onChange={handleOnChange}
            total={data?.meta.pagination.total}
          />
        </LoadingLayout>
        <CreateButton onClick={() => setOpen(true)} label="Create Article" />
        <CreateModal
          open={open}
          onCancel={() => setOpen(false)}
          setOpen={setOpen}
        />
      </section>
    </div>
  );
};

export default Destinations;
