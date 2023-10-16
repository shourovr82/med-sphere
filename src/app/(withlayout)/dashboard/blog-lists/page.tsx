"use client";

import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import { Button, Input, Modal, message } from "antd";
const { confirm } = Modal;
import Link from "next/link";
import { useState } from "react";
import dayjs from "dayjs";
import UMBreadCrumb from "@/components/forms/ui/UMBreadCrumb";
import TableList from "@/components/table/TableList";
import ActionBar from "@/components/forms/ui/ActionBar";
import {
  useDeleteBlogMutation,
  useGetBlogsQuery,
  useUpdateBlogMutation,
} from "@/redux/features/blogs/blogApi";

const BlogLists = () => {
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  // get data
  const { data, isLoading } = useGetBlogsQuery(query);

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["searchTerm"] = searchTerm;

  // handle edit

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState<any>(null);

  const [updateBlog, { isLoading: deleteLoading }] = useUpdateBlogMutation();

  const handleEdit = async (data: any) => {
    const editData = {
      faqTitle: data.faqTitle,
      faqDescription: data.faqDescription,
    };

    const id = data.blogId;

    try {
      const res = await updateBlog({ id, data: editData }).unwrap();

      if (res) {
        message.success("FAQ updated successfully");
        setIsEditModalOpen(false);
      }
    } catch (error: any) {
      console.error(error?.data?.message);
      message.error(error?.data?.message);
    }
  };

  // handle edit end

  // delete
  const [deleteBlog, { isError }] = useDeleteBlogMutation();

  const deleteHandler = async (id: string) => {
    confirm({
      title: "Do you Want to delete these items?",
      icon: <ExclamationCircleFilled />,
      content: "Please confirm your action!",
      async onOk() {
        try {
          const res: any = await deleteBlog(id);
          if (res && !isError) {
            message.success("Course Deleted successfully");
          }
        } catch (err: any) {
          console.error(err.data?.message);
          message.error(err.data?.message);
        }
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  const columns = [
    {
      title: "Image",
      dataIndex: "blogImage",

      //   sorter: true,
    },
    {
      title: "Blog Title",
      dataIndex: "blogTitle",
      //   sorter: true,
    },
    {
      title: "Blog Description",
      dataIndex: "blogDescription",
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
      title: "Author Name",
      dataIndex: "profile",
      render: function (data: Record<any, any>) {
        const fullName = `${data?.firstName!} ${data?.lastName}`;
        return <>{fullName}</>;
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
            <Button
              onClick={() => deleteHandler(data?.blogId)}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
          </div>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
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
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  //   console.log(dataSource);

  return (
    <div className="bg-white  p-5 rounded-2xl shadow-lg">
      <UMBreadCrumb
        items={[
          {
            label: "Dashboard",
            link: "/dashboard",
          },
          {
            label: "Blog Lists",
            link: "/dashboard/blog-lists",
          },
        ]}
      />
      <div className="mt-5">
        <ActionBar title="Blog Lists">
          <Input
            type="text"
            size="large"
            placeholder="Search by title or description..."
            style={{
              width: "30%",
            }}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <div>
            <Link href="/admin/course/create">
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
        // loading={isLoading}
        columns={columns}
        dataSource={data}
        pageSize={size}
        // totalPages="meta?.total"
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default BlogLists;
