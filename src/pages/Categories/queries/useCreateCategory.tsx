import { useState } from "react";

const useCreateCategory = () => {
  const [open, setOpen] = useState(false);
  return { open, setOpen };
};

export default useCreateCategory;
