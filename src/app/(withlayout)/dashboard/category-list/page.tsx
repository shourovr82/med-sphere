/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { EditOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import dayjs from "dayjs";
import UMBreadCrumb from "@/components/forms/ui/UMBreadCrumb";
import TableList from "@/components/table/TableList";
import ActionBar from "@/components/forms/ui/ActionBar";
import ModalForm from "@/components/forms/modalForm/modalForm";
import Form from "@/components/forms/Forms/Form";
import FormInput from "@/components/forms/Forms/FormInput";
import FormTextArea from "@/components/forms/Forms/FormTextArea";
import {
  useGetAllCategoriesQuery,
  useUpdateCategoryMutation,
} from "@/redux/features/categories/categoryApi";

const CategoryList = () => {
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  // get data
  const {
    data: categoriesResponse,
    isLoading,
    isFetching,
  } = useGetAllCategoriesQuery(query);

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["searchTerm"] = searchTerm;

  // handle edit

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState<any>(null);

  const [updateCategory, { isLoading: updateLoading }] =
    useUpdateCategoryMutation();

  const handleEdit = async (updated: any) => {
    const editedData = {
      categoryName: updated.categoryName,
      description: updated.description,
    };
    console.log(editedData);

    const id = updated.categoryId;

    try {
      const res = await updateCategory({ id, data: editedData }).unwrap();

      if (res) {
        message.success("Blog updated successfully");
        setIsEditModalOpen(false);
      }
    } catch (error: any) {
      console.error(error?.data?.message);
      message.error(error?.data?.message);
    }
  };

  // handle edit end

  // delete

  const columns = [
    {
      title: "Category Name",
      dataIndex: "categoryName",
      //   sorter: true,
    },
    {
      title: "Category Description",
      dataIndex: "description",
      //   sorter: true,
    },

    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      //   sorter: true,
    },

    {
      title: "Action",
      render: function (data: any) {
        return (
          <div className="flex gap-3">
            <Button
              style={{
                margin: "0px 5px",
              }}
              onClick={() => {
                setIsEditModalOpen(true);
                setEditData(data);
              }}
              type="primary"
            >
              <EditOutlined />
            </Button>
            {/* <Button
              onClick={() => deleteHandler(data?.blogId)}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button> */}
          </div>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setPage(1);
    setSize(10);
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  return (
    <>
      <div className="bg-white  p-5 rounded-2xl shadow-lg">
        <UMBreadCrumb
          items={[
            {
              label: "Dashboard",
              link: "/dashboard",
            },
            {
              label: "Category Lists",
              link: "/dashboard/category-list",
            },
          ]}
        />
        <div className="mt-5">
          <ActionBar title="Category Lists">
            <Input
              type="text"
              size="large"
              placeholder="Search by Name or description..."
              style={{
                width: "30%",
              }}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <div>
              <Link href="/dashboard/add-category">
                <Button type="primary">Create</Button>
              </Link>
              {(!!sortBy || !!sortOrder || !!searchTerm) && (
                <Button
                  onClick={resetFilters}
                  type="primary"
                  style={{ margin: "0px 5px" }}
                >
                  <ReloadOutlined />
                </Button>
              )}
            </div>
          </ActionBar>
        </div>
        <TableList
          loading={isLoading || isFetching}
          columns={columns}
          dataSource={categoriesResponse}
          pageSize={size}
          // totalPages="meta?.total"
          showSizeChanger={true}
          onPaginationChange={onPaginationChange}
          onTableChange={onTableChange}
          showPagination={true}
        />
      </div>
      {isEditModalOpen && editData && (
        <ModalForm
          open={isEditModalOpen}
          setOpen={setIsEditModalOpen}
          title="Category"
          isLoading={updateLoading}
        >
          <Form submitHandler={handleEdit} defaultValues={editData}>
            <div
              style={{
                border: "1px solid #d9d9d9",
                borderRadius: "5px",
                padding: "15px",
                marginBottom: "10px",
              }}
            >
              <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                <Col span={24} style={{ margin: "10px 0" }}>
                  <FormInput
                    name="categoryName"
                    label="Category Name"
                    placeholder="Enter Category Name..."
                    size="large"
                    type="text"
                  />
                </Col>

                <Col span={24} style={{ margin: "10px 0" }}>
                  <FormTextArea
                    name="description"
                    label="Category Description"
                    rows={8}
                    placeholder="Enter Category Description..."
                  />
                </Col>
              </Row>
            </div>

            <div className="flex gap-5">
              <Button loading={updateLoading} htmlType="submit">
                Update Category
              </Button>

              <Button
                onClick={() => setIsEditModalOpen(false)}
                htmlType="button"
                type="primary"
                danger
              >
                Cancel
              </Button>
            </div>
          </Form>
        </ModalForm>
      )}
    </>
  );
};

export default CategoryList;
