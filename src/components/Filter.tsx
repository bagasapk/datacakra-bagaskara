import { Button, Select } from "antd";
import Search from "antd/es/input/Search";
import { useEffect } from "react";
import { useSearchParams } from "react-router";
import useFilter from "../hooks/useFilter";
import useGetCategories from "../pages/Categories/queries/useGetCategories";

const Filter = ({
  onChange,
}: {
  onChange: (search: string | undefined, selected: number | undefined) => void;
}) => {
  const { search, selected, setSearch, setSelected } = useFilter();
  const { data, isLoading } = useGetCategories();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    onChange?.(search, selected);
  }, [search, selected]);

  useEffect(() => {
    if (searchParams.get("category")) {
      setSelected(
        data?.data.find((cat) => cat.name === searchParams.get("category"))?.id
      );
    }
  }, [searchParams, data]);

  return (
    <div className="grid sm:grid-cols-10 p-4 gap-4 items-center shadow-filter rounded mt-4 sm:sticky top-16 z-10 bg-white">
      <Search
        className="sm:col-span-3"
        placeholder="Search title"
        suffix={<></>}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <div className="sm:col-span-3">
        <Select
          loading={isLoading}
          className="w-full"
          placeholder="Select category"
          styles={{ root: { margin: 0 } }}
          onChange={setSelected}
          value={selected}
          options={data?.data.map((item) => ({
            label: item.name,
            value: item.id,
          }))}
        />
      </div>
      <Button
        onClick={() => {
          setSearch(undefined);
          setSelected(undefined);
        }}
        className="sm:col-start-10"
        type="primary"
      >
        Clear
      </Button>
    </div>
  );
};

export default Filter;
