import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  Modal,
  Select,
  Upload,
  type ModalProps,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import usePostCreateArticle from "../hooks/usePostCreateArticle";
import useUpload from "../hooks/useUpload";
import useGetCategories from "../pages/Categories/queries/useGetCategories";
import type { RequestPostCreateArticle } from "../types/Destinations.type";
import Heading2 from "./Heading2";

const CreateModal = ({
  previousData,
  isEdit,
  setOpen,
  ...props
}: ModalProps & {
  setOpen: (boolean: boolean) => void;
  isEdit?: boolean;
  previousData?: Partial<RequestPostCreateArticle & { id: string }>;
}) => {
  const { handleUpload, fileList, setFileList, normFile } = useUpload();
  const { form, handleFinish, isLoading } = usePostCreateArticle(
    setOpen,
    setFileList,
    props.open,
    isEdit,
    previousData,
  );
  const { data, isLoading: isLoadingCategory } = useGetCategories();

  return (
    <Modal
      onOk={() => form.submit()}
      okButtonProps={{ disabled: isLoading }}
      okText={!isLoading ? "Submit" : "Submitting..."}
      onCancel={() => {
        setOpen(false);
        form.resetFields();
      }}
      {...props}
    >
      <Form
        form={form}
        name="Create Article"
        layout="vertical"
        requiredMark={false}
        onFinish={(data) => handleFinish(data, previousData?.id)}
      >
        <Heading2 className="text-center">Article Form</Heading2>
        <Form.Item
          name="title"
          label="Title"
          rules={[
            { required: true, message: "Nama lengkap wajib diisi!" },
            { min: 2, message: "Nama minimal 2 karakter!" },
          ]}
        >
          <Input placeholder="Ex: Seminyak Hotel" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            { required: true, message: "Nama lengkap wajib diisi!" },
            { min: 2, message: "Nama minimal 2 karakter!" },
          ]}
        >
          <TextArea placeholder="Ex: A beauty hotel located at Seminyak" />
        </Form.Item>
        <Form.Item
          name={"cover_image_url"}
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload
            customRequest={({ file, onSuccess }) => {
              handleUpload(file).then(onSuccess);
            }}
            listType="picture"
            fileList={fileList}
            onChange={(info) => {
              setFileList(info.fileList);
            }}
          >
            <Button
              disabled={!!fileList.length}
              type="primary"
              icon={<UploadOutlined />}
            >
              Upload
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item name="category" label="Category">
          <Select
            loading={isLoadingCategory}
            placeholder={"Select category"}
            options={data?.data.map((item) => ({
              label: item.name,
              value: item.id,
            }))}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateModal;
