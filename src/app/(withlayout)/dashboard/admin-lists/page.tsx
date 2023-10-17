/* eslint-disable @next/next/no-img-element */
"use client";

import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

import { Button, Col, Input, Row, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import dayjs from "dayjs";

import { Modal } from "antd";
const { confirm } = Modal;
import { ExclamationCircleFilled } from "@ant-design/icons";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useUpdateUserInfoMutation,
} from "@/redux/features/users/userApi";
import UMBreadCrumb from "@/components/forms/ui/UMBreadCrumb";
import ActionBar from "@/components/forms/ui/ActionBar";
import TableList from "@/components/table/TableList";
import ModalForm from "@/components/forms/modalForm/modalForm";
import Form from "@/components/forms/Forms/Form";
import FormInput from "@/components/forms/Forms/FormInput";
import FormSelectField from "@/components/forms/Forms/FormSelectField";
import UploadImage from "@/components/forms/ui/UploadImage";
import { bloodGroup } from "@/constants/common";

const AdminLists = () => {
  const roles = [
    {
      label: "USER",
      value: "USER",
    },
    {
      label: "ADMIN",
      value: "ADMIN",
    },

    {
      label: "SUPER_ADMIN",
      value: "SUPER_ADMIN",
    },
  ];

  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // get data
  const { data, isLoading } = useGetAllUsersQuery(searchTerm);

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["searchTerm"] = searchTerm;

  // handle edit

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState<any>(null);

  const [updateUser, { isLoading: updateLoading }] =
    useUpdateUserInfoMutation();

  const handleEdit = async (data: any) => {
    const updateData = {
      email: data?.email,
      firstName: data?.profile?.firstName,
      lastName: data?.profile?.lastName,
      profileImage: data?.profileImage ?? editData?.profile?.profileImage,
      contactNumber: data?.profile?.contactNumber,
      address: data?.profile?.address,
      bloodGroup: data?.profile?.bloodGroup,
      role: data?.profile?.role,
    };

    const id = data?.profile?.profileId;

    try {
      const res = await updateUser({ id, body: updateData }).unwrap();

      console.log(res);

      if (res?.message) {
        message.success(res.message || "Successfully Updated Admin");
        setIsEditModalOpen(false);
      }
    } catch (error: any) {
      console.error(error?.data?.message);
      message.error(error?.data?.message);
    }
  };

  // handle edit end

  // delete
  const [deleteUser] = useDeleteUserMutation();

  const deleteHandler = async (id: string) => {
    confirm({
      title: "Do you Want to delete these items?",
      icon: <ExclamationCircleFilled />,
      content: "Please confirm your action!",
      async onOk() {
        try {
          const res: any = await deleteUser(id);

          if (res?.data?.success) {
            message.success("User Deleted successfully");
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

  // delete end

  const columns = [
    {
      title: "Full Name",
      dataIndex: "profile",
      render: function (data: Record<string, string>) {
        const fullName = `${data?.firstName} ${data?.lastName}`;
        return (
          <div className="flex gap-2 items-center">
            <img
              src={
                data?.profileImage ??
                "https://www.smaroadsafety.com/wp-content/uploads/2022/06/no-pic.png"
              }
              alt={fullName}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
            {fullName}
          </div>
        );
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
      dataIndex: "profile",
      render: function (data: Record<string, string>) {
        return <>{data?.address ?? "-"}</>;
      },
    },
    {
      title: "Contact No",
      dataIndex: "profile",
      render: function (data: Record<string, string>) {
        return <>{data?.contactNumber ?? "-"}</>;
      },
      //   sorter: true,
    },
    {
      title: "Blood Group",
      dataIndex: "profile",
      render: function (data: Record<string, string>) {
        return <>{data?.bloodGroup ?? "-"}</>;
      },
      //   sorter: true,
    },
    {
      title: "Role",
      dataIndex: "profile",
      render: function (data: Record<string, string>) {
        return <>{data?.role ?? "-"}</>;
      },
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
            <Button type="primary" danger>
              <DeleteOutlined />
            </Button>
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
    <>
      <div className="container rounded bg-white mt-1 mb-5 p-4">
        <UMBreadCrumb
          items={[
            {
              label: "dashboard",
              link: "/dashboard",
            },
            {
              label: "admin-Lists",
              link: "/dashboard/admin-lists",
            },
          ]}
        />

        <div className="mt-5">
          <ActionBar title="Admin Lists">
            <Input
              type="text"
              size="large"
              placeholder="Search by name, email, role..."
              style={{
                width: "30%",
              }}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <div>
              <Link href="/dashboard/add-admin">
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
          loading={isLoading}
          columns={columns}
          dataSource={data?.data}
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
          title="FAQ"
          isLoading={updateLoading}
        >
          <Form submitHandler={handleEdit} defaultValues={editData}>
            {/* faculty information */}
            <div
              style={{
                border: "1px solid #d9d9d9",
                borderRadius: "5px",
                padding: "15px",
                marginBottom: "10px",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  margin: "5px 0px",
                }}
              >
                Profile information
              </p>
              <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                <Col span={12} style={{ margin: "10px 0" }}>
                  <FormInput
                    name="email"
                    label="Email"
                    type="email"
                    size="large"
                    placeholder="Enter email"
                    disabled
                  />
                </Col>

                <Col span={12} style={{ margin: "10px 0" }}>
                  <FormSelectField
                    name="profile.role"
                    label="User Role"
                    options={roles}
                    size="large"
                    placeholder="Select Role"
                  />
                </Col>
                <Col span={12} style={{ margin: "10px 0" }}>
                  <FormSelectField
                    name="profile.bloodGroup"
                    label="Blood Group"
                    options={bloodGroup}
                    size="large"
                    placeholder="Select Blood Group"
                  />
                </Col>
              </Row>
            </div>
            {/* basic information  */}
            <div
              style={{
                border: "1px solid #d9d9d9",
                borderRadius: "5px",
                padding: "15px",
                marginBottom: "10px",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  margin: "5px 0px",
                }}
              >
                Basic information
              </p>
              <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                <Col span={24} style={{ margin: "10px 0" }}>
                  <label htmlFor="image">Profile Image</label>
                  <UploadImage
                    name="profileImage"
                    key="file"
                    defaultImage={editData?.profile?.profileImage}
                  />
                </Col>
                <Col span={12} style={{ margin: "10px 0" }}>
                  <FormInput
                    name="profile.firstName"
                    label="First Name"
                    size="large"
                    placeholder="Enter First Name"
                  />
                </Col>
                <Col span={12} style={{ margin: "10px 0" }}>
                  <FormInput
                    name="profile.lastName"
                    label="Last Name."
                    size="large"
                    placeholder="Enter Last Name"
                  />
                </Col>{" "}
                <Col span={12} style={{ margin: "10px 0" }}>
                  <FormInput
                    name="profile.contactNumber"
                    label="Contact Number"
                    size="large"
                    placeholder="Enter Contract Number"
                  />
                </Col>
                <Col span={12} style={{ margin: "10px 0" }}>
                  <FormInput
                    name="profile.address"
                    label="Address"
                    size="large"
                    placeholder="Enter Address"
                  />
                </Col>{" "}
              </Row>
            </div>

            <div className="flex gap-5">
              <Button
                htmlType="submit"
                loading={updateLoading}
                disabled={updateLoading}
              >
                Update Admin
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

export default AdminLists;
