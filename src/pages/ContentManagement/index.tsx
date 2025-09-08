import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Flex, Popconfirm, Table } from "antd";
import { useState } from "react";
import CreateModal from "../../components/CreateModal";
import CreateModalCategory from "../../components/CreateModalCategory";
import Heading2 from "../../components/Heading2";
import usePagination from "../../hooks/usePagination";
import { useStore } from "../../stores/stores";
import type { RequestCategory } from "../../types/Categories.type";
import type { RequestPostCreateArticle } from "../../types/Destinations.type";
import useGetCategories from "../Categories/queries/useGetCategories";
import useDeleteCategory from "../CategoryDetail/queries/useDeleteCategory";
import useGetArticles from "../Destinations/queries/useGetArticles";
import useDeleteArticleById from "../DestinationDetail/queries/useDeleteArticleById";

const ContentManagement = () => {
  const { user } = useStore();
  const { page, pageSize, handleOnChange } = usePagination(undefined, 10);
  const {
    page: pageArticle,
    pageSize: pageSizeArticle,
    handleOnChange: handleChangeArticle,
  } = usePagination(undefined, 10);
  const { data, isLoading } = useGetCategories({
    pagination: { page, pageSize },
  });
  const { data: dataArticles, isLoading: isLoadingArticles } = useGetArticles({
    pagination: { page: pageArticle, pageSize: pageSizeArticle },
    populate: { category: "*", user: "*" },
    filters: { user: { username: user.username } },
  });
  const { handleDelete } = useDeleteCategory();
  const { handleDelete: handleDeleteArticle } = useDeleteArticleById();

  const [open, setOpen] = useState(false);
  const [prevData, setPrevData] = useState<RequestCategory & { id: string }>();
  const [openArticle, setOpenArticle] = useState(false);
  const [prevDataArticle, setPrevDataArticle] = useState<
    RequestPostCreateArticle & { id: string }
  >();

  return (
    <div className="p-4 sm:w-3/4 mx-auto">
      <Heading2>Categories</Heading2>
      <Table
        scroll={{ x: 100 }}
        loading={isLoading}
        bordered
        size="small"
        columns={[
          { dataIndex: "name", title: "Name" },
          { dataIndex: "description", title: "Description" },
          {
            dataIndex: "",
            title: "Action",
            render: (_, record) => (
              <Flex gap={16}>
                <Button
                  onClick={() => {
                    setOpen(true);
                    setPrevData({
                      name: record.name,
                      description: record.description,
                      id: record.documentId,
                    });
                  }}
                  icon={<EditOutlined />}
                ></Button>
                <Popconfirm
                  title="Delete the task"
                  description="Are you sure to delete this article?"
                  placement="left"
                  onConfirm={() => handleDelete(record.documentId)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button danger icon={<DeleteOutlined />}></Button>
                </Popconfirm>
              </Flex>
            ),
          },
        ]}
        dataSource={data?.data}
        pagination={{
          current: page,
          pageSize,
          onChange: handleOnChange,
          total: data?.meta.pagination.total,
        }}
      ></Table>
      <Heading2>Articles</Heading2>
      <Table
        loading={isLoadingArticles}
        bordered
        size="small"
        columns={[
          { dataIndex: "title", title: "Title" },
          { dataIndex: "description", title: "Description" },
          {
            dataIndex: "",
            title: "Action",
            render: (_, record) => (
              <Flex gap={16}>
                <Button
                  onClick={() => {
                    console.log(record);
                    setOpenArticle(true);
                    setPrevDataArticle({
                      category: record.category?.id ?? 0,
                      cover_image_url: record.cover_image_url,
                      description: record.description,
                      title: record.title,
                      id: record.documentId,
                    });
                  }}
                  icon={<EditOutlined />}
                ></Button>
                <Popconfirm
                  title="Delete the task"
                  description="Are you sure to delete this article?"
                  placement="left"
                  onConfirm={() => handleDeleteArticle(record.documentId)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button danger icon={<DeleteOutlined />}></Button>
                </Popconfirm>
              </Flex>
            ),
          },
        ]}
        dataSource={dataArticles?.data}
        pagination={{
          current: pageArticle,
          pageSize: pageSizeArticle,
          onChange: handleChangeArticle,
          total: dataArticles?.meta.pagination.total,
        }}
      ></Table>

      <CreateModal
        open={openArticle}
        setOpen={setOpenArticle}
        isEdit
        previousData={prevDataArticle}
      />
      <CreateModalCategory
        open={open}
        setOpen={setOpen}
        isEdit
        previousData={prevData}
      />
    </div>
  );
};

export default ContentManagement;
