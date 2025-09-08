import { useState } from "react";

const usePagination = (page_?:number,pageSize_?:number) => {
  const [page, setPage] = useState(page_ ?? 1);
  const [pageSize, setPageSize] = useState(pageSize_ ?? 10);
  const handleOnChange = (page: number, pageSize: number) => {
    setPage(page);
    setPageSize(pageSize);
  };
  return { page, pageSize, handleOnChange };
};

export default usePagination;
