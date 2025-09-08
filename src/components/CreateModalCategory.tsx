import { Form, Input, Modal, type ModalProps } from "antd";
import TextArea from "antd/es/input/TextArea";
import usePostCreateCategory from "../hooks/usePostCreateCategory";
import type { RequestCategory } from "../types/Categories.type";
import Heading2 from "./Heading2";

const CreateModalCategory = ({
  previousData,
  isEdit,
  setOpen,
  ...props
}: ModalProps & {
  setOpen: (boolean: boolean) => void;
  isEdit?: boolean;
  previousData?: RequestCategory & { id: string };
}) => {
  const { form, handleFinish, isLoading } = usePostCreateCategory(
    setOpen,
    isEdit,
    previousData,
    props.open
  );

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
        name="Create Category"
        layout="vertical"
        requiredMark={false}
        onFinish={(data) => handleFinish(data, previousData?.id)}
      >
        <Heading2 className="text-center">Category Form</Heading2>
        <Form.Item
          name="name"
          label="Title"
          rules={[
            { required: true, message: "Nama lengkap wajib diisi!" },
            { min: 2, message: "Nama minimal 2 karakter!" },
          ]}
        >
          <Input placeholder="Ex: Hotel" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            { required: true, message: "Nama lengkap wajib diisi!" },
            { min: 2, message: "Nama minimal 2 karakter!" },
          ]}
        >
          <TextArea placeholder="Ex: A place to go" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateModalCategory;
