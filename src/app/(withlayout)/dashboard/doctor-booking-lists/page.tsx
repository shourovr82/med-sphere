"use client";

import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

import { Button, Input } from "antd";
import Link from "next/link";
import { useState } from "react";
import dayjs from "dayjs";
import UMBreadCrumb from "@/components/forms/ui/UMBreadCrumb";
import ActionBar from "@/components/forms/ui/ActionBar";
import TableList from "@/components/table/TableList";

const BookingList = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  // query["searchTerm"] = searchTerm;

  //   const courses = data?.courses;
  //   const meta = data?.meta;

  const deleteHandler = async (id: string) => {
    //   message.loading("Deleting.....");
    //   try {
    //     //   console.log(data);
    //     const res = await deleteCourse(id);
    //     if (res) {
    //       message.success("Course Deleted successfully");
    //     }
    //   } catch (err: any) {
    //     //   console.error(err.message);
    //     message.error(err.message);
    //   }
  };

  const dataSource = [
    {
      email: "shafinur512@gmail.com",
      firstName: "Shafinur",
      lastName: "Rahman",
      role: "ADMIN",
      contactNumber: "01745296294",
      address: "Thakurgoan",
      bloodGroup: "O+",
    },
  ];

  const columns = [
    {
      title: "Full Name",

      render: function (data: Record<string, string>) {
        const fullName = `${data?.firstName} ${data?.lastName}`;
        return <>{fullName}</>;
      },
      //   sorter: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      //   sorter: true,
    },
    {
      title: "Address",
      dataIndex: "address",
      //   sorter: true,
    },
    {
      title: "Contact No",
      dataIndex: "contactNumber",
      //   sorter: true,
    },
    {
      title: "Blood Group",
      dataIndex: "contactNumber",
      //   sorter: true,
    },
    {
      title: "Role",
      dataIndex: "role",
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
          <>
            <div className="flex gap-2 items-center">
              <Link href={`/admin/course/edit/${data?.id}`}>
                <Button
                  style={{
                    margin: "0px 5px",
                  }}
                  onClick={() => console.log(data)}
                  type="primary"
                >
                  <EditOutlined />
                </Button>
              </Link>
              <Button
                onClick={() => deleteHandler(data?.id)}
                type="primary"
                danger
              >
                <DeleteOutlined />
              </Button>
            </div>
          </>
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
    <div className="container rounded bg-white mt-1 mb-5 p-4">
      <UMBreadCrumb
        items={[
          {
            label: "booking-Lists",
            link: "/dashboard/booking-lists",
          },
        ]}
      />

      <div className="mt-5">
        <ActionBar title="Booking Lists">
          <Input
            type="text"
            size="large"
            placeholder="Search by name, email, role..."
            style={{
              width: "300px",
            }}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <div>
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
        dataSource={dataSource}
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

export default BookingList;
