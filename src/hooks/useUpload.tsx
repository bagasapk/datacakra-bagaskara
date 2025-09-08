import type { UploadChangeParam, UploadFile } from "antd/es/upload";
import { useState } from "react";
import { upload } from "../services/Destinations.service";

const useUpload = () => {
  const [fileList, setFileList] = useState<UploadFile<any>[]>([]);
  
  const normFile = (e: UploadChangeParam<UploadFile<any>>) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const handleUpload = async (files: string | Blob) => {
    const formData = new FormData();
    formData.append("files", files);
    const res = await upload(formData);
    return res;
  };

  return { handleUpload,normFile,fileList,setFileList };
};

export default useUpload;
