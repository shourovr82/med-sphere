"use client";

import { EditOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import dayjs from "dayjs";

import Image from "next/image";
import {
  useGetAllServicesQuery,
  useUpdateServiceMutation,
} from "@/redux/features/services/serviceApi";
import UMBreadCrumb from "@/components/forms/ui/UMBreadCrumb";
import ActionBar from "@/components/forms/ui/ActionBar";
import TableList from "@/components/table/TableList";
import ModalForm from "@/components/forms/modalForm/modalForm";
import Form from "@/components/forms/Forms/Form";
import UploadImage from "@/components/forms/ui/UploadImage";
import FormInput from "@/components/forms/Forms/FormInput";
import FormSelectField from "@/components/forms/Forms/FormSelectField";
import FormTextArea from "@/components/forms/Forms/FormTextArea";
import { useGetAllCategoriesQuery } from "@/redux/features/categories/categoryApi";
import { ServiceStatus } from "@/constants/common";

const ServiceList = () => {
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
  query["searchTerm"] = searchTerm;

  // get data
  const { data, isLoading } = useGetAllServicesQuery({ ...query });
  // handle edit
  const { data: allCategories, isLoading: isCategoryLoading } =
    useGetAllCategoriesQuery(undefined);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState<any>(null);

  const [updateService, { isLoading: deleteLoading }] =
    useUpdateServiceMutation();

  const handleEdit = async (updated: any) => {
    const editedData = {
      serviceName: updated.serviceName,
      description: updated.description,
      serviceImage: updated.serviceImage,
      servicePrice: parseInt(updated.servicePrice),
      location: updated.location,
      serviceStatus: updated.serviceStatus,
      categoryId: updated.category.categoryId,
    };

    const id = updated.serviceId;

    try {
      const res = await updateService({ id, data: editedData }).unwrap();
      if (res) {
        message.success("Service updated successfully");
        setIsEditModalOpen(false);
      }
    } catch (error: any) {
      console.error(error?.data?.message);
      message.error(error?.data?.message);
    }
  };

  // handle edit end

  const columns = [
    {
      title: "Image",
      render: function (data: any) {
        return data?.serviceImage ? (
          <Image
            src={data?.serviceImage}
            alt=""
            width={50}
            className=" object-cover object-center rounded-full border h-[50px] w-[50px]"
            height={50}
          />
        ) : (
          "---"
        );
      },
      //   sorter: true,
    },
    {
      title: "Service Name",
      dataIndex: "serviceName",
      //   sorter: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      //   sorter: true,
    },
    {
      title: "Price",
      dataIndex: "servicePrice",
      //   sorter: true,
    },
    {
      title: "Location",
      dataIndex: "location",
      //   sorter: true,
    },
    {
      title: "Status",
      dataIndex: "serviceStatus",
      //   sorter: true,
    },
    {
      title: "Category",
      render: function (data: any) {
        return data?.category ? <p>{data?.category?.categoryName}</p> : "---";
      },
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
    <>
      <div className="bg-white  p-5 rounded-2xl shadow-lg">
        <UMBreadCrumb
          items={[
            {
              label: "Dashboard",
              link: "/dashboard",
            },
            {
              label: "Service Lists",
              link: "/dashboard/service-list",
            },
          ]}
        />
        <div className="mt-5">
          <ActionBar title="Service Lists">
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
              <Link href="/dashboard/service/add-service">
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
      {isEditModalOpen && editData && (
        <ModalForm
          open={isEditModalOpen}
          setOpen={setIsEditModalOpen}
          title="Service"
          isLoading={deleteLoading}
        >
          <Form submitHandler={handleEdit} defaultValues={editData}>
            {/* faculty information */}
            <div
              style={{
                border: "1px solid #d9d9d9",
                borderRadius: "5px",
                padding: "15px",
              }}
            >
              <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                <Col span={24}>
                  <p className="pb-2">Service Image</p>
                  <UploadImage
                    defaultImage={editData?.serviceImage}
                    name="serviceImage"
                  />
                </Col>{" "}
              </Row>

              <Row gutter={{ xs: 24, xl: 24, lg: 24, md: 24 }}>
                <Col span={12}>
                  <div>
                    <FormInput
                      size="large"
                      name="serviceName"
                      label="Service Name"
                    />
                  </div>
                </Col>
                <Col span={12}>
                  <div>
                    <FormInput
                      size="large"
                      name="servicePrice"
                      type="number"
                      label="Price"
                    />
                  </div>
                </Col>
              </Row>
              <Row gutter={{ xs: 24, xl: 12, lg: 12, md: 24 }}>
                <Col span={8}>
                  <div>
                    <FormInput size="large" name="location" label="Location" />
                  </div>
                </Col>
                <Col span={8}>
                  <div>
                    <FormSelectField
                      name="category.categoryId"
                      label="Category"
                      loading={isCategoryLoading}
                      options={allCategories?.map((category: any) => ({
                        label: category.categoryName,
                        value: category.categoryId,
                      }))}
                    />
                  </div>
                </Col>
                <Col span={8}>
                  <div>
                    <FormSelectField
                      name="serviceStatus"
                      label="Service Status"
                      options={ServiceStatus.map((c) => ({
                        label: c.label,
                        value: c.value,
                      }))}
                    />
                  </div>
                </Col>
              </Row>
              <Row gutter={{ xs: 24, xl: 12, lg: 12, md: 24 }}>
                <Col span={24}>
                  <div>
                    <FormTextArea
                      name="description"
                      label="Service Description"
                      rows={8}
                    />
                  </div>
                </Col>
              </Row>
            </div>

            <div className="flex mt-3 gap-3">
              <Button htmlType="submit">submit</Button>
              <Button onClick={() => setIsEditModalOpen(false)} danger>
                Cancel
              </Button>
            </div>
          </Form>
        </ModalForm>
      )}
    </>
  );
};

export default ServiceList;
