import { useState } from "react";

const useFilter = () => {
  const [search, setSearch] = useState<string>();
  const [selected, setSelected] = useState<number>();

  const handleFilter = (
    search: string | undefined,
    selected: number | undefined
  ) => {
    setSearch(!search?.length ? undefined : search);
    setSelected(!selected ? undefined : selected);
  };

  return {
    search,
    selected,
    setSearch,
    setSelected,
    handleFilter,
  };
};

export default useFilter;
