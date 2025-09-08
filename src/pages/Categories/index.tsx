import { Button, Pagination } from "antd";
import Search from "antd/es/input/Search";
import { useState } from "react";
import { useNavigate } from "react-router";
import CardDashboard from "../../components/CardDashboard";
import CreateButton from "../../components/CreateButton";
import CreateModalCategory from "../../components/CreateModalCategory";
import Heading from "../../components/Heading";
import LoadingLayout from "../../components/LoadingLayout";
import usePagination from "../../hooks/usePagination";
import { debounce } from "../../utils/function.helper";
import useCreateCategory from "./queries/useCreateCategory";
import useGetCategories from "./queries/useGetCategories";

const Categories = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState<string>();

  const { page, pageSize, handleOnChange } = usePagination(undefined, 12);
  const { data, isLoading } = useGetCategories({
    pagination: { page, pageSize },
    filters: { name: search },
  });
  const { open, setOpen } = useCreateCategory();

  return (
    <div className="relative bg-secondary">
      <section className="px-4 sm:px-20 py-10">
        <div className="text-center font-amarante">
          <Heading>Explore by Category</Heading>
          <p className="text-lg text-blue">
            "Discover the Travel Style That Fits You"
          </p>
        </div>
        <div className="flex flex-wrap gap-4 bg-primary p-4 items-center-safe justify-between my-10 rounded">
          <Search
            onChange={debounce(
              (e) => setSearch(e.target.value ? e.target.value : undefined),
              700
            )}
            className="mt-1! sm:w-1/4!"
            placeholder="Search Category"
            allowClear
            value={search}
          />
          <Button
            onClick={() => {
              setSearch(undefined);
            }}
            type="primary"
          >
            Clear
          </Button>
        </div>
        <LoadingLayout isLoading={isLoading} isEmpty={!data?.data.length}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 mt-4 gap-4">
            {data?.data?.map((category) => (
              <CardDashboard
                onClick={() =>
                  navigate("/category/" + category.documentId + "/detail")
                }
                className="h-fit hover:bg-blue/50!"
              >
                <h2 className="font-bold text-xl">{category.name}</h2>
                <p>{category.description}</p>
              </CardDashboard>
            ))}
          </div>
        </LoadingLayout>

        <Pagination
          className="my-5!"
          align="end"
          current={page}
          pageSize={pageSize}
          pageSizeOptions={[12, 24, 36, 48]}
          onChange={handleOnChange}
          total={data?.meta.pagination.total}
        />
      </section>
      <CreateButton onClick={() => setOpen(true)} label="Create Category" />
      <CreateModalCategory open={open} setOpen={setOpen} />
    </div>
  );
};

export default Categories;
