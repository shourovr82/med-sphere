"use client";

import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

import { Button, Col, Input, Row, Select, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import dayjs from "dayjs";
import {
  useDeleteReviewMutation,
  useGetMyReviewsQuery,
  useUpdateReviewMutation,
} from "@/redux/features/ratings/ratingApi";
import UMBreadCrumb from "@/components/forms/ui/UMBreadCrumb";
import ActionBar from "@/components/forms/ui/ActionBar";
import TableList from "@/components/table/TableList";
import ModalForm from "@/components/forms/modalForm/modalForm";
import Form from "@/components/forms/Forms/Form";
import FormInput from "@/components/forms/Forms/FormInput";

const MyReviews = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [appointmentStatus, setAppointmentStatus] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["firstName"] = firstName;
  query["appointmentStatus"] = appointmentStatus;

  // get data
  const { data, isLoading } = useGetMyReviewsQuery({ ...query });

  const [deleteData, { isLoading: deleteLoading }] = useDeleteReviewMutation();

  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      //   console.log(data);
      const res = await deleteData(id);
      if (res) {
        message.success("Review Deleted successfully");
      }
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState<any>(null);

  const [updateReview, { isLoading: updateLoading }] =
    useUpdateReviewMutation();

  const handleEdit = async (updated: any) => {
    const editedData = {
      reviewComment: updated.reviewComment,
      reviewRating: updated.reviewRating,
    };

    const id = updated.reviewId;

    try {
      const res = await updateReview({ id, data: editedData }).unwrap();

      if (res) {
        message.success("Review updated successfully");
        setIsEditModalOpen(false);
      }
    } catch (error: any) {
      console.error(error?.data);
      message.error(error?.data);
      // message.error("Slot May be booked");
    }
  };

  const columns = [
    {
      title: "Service",
      dataIndex: "service",
      render: (service: any) => `${service.serviceName}`,
      //   sorter: true,
    },
    {
      title: "Review Comment",
      dataIndex: "reviewComment",
    },
    {
      title: "Rating",
      dataIndex: "reviewRating",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
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
            <Button
              onClick={() => deleteHandler(data?.reviewId)}
              type="primary"
              danger
            >
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
    setFirstName("");
    setAppointmentStatus("");
  };

  return (
    <div className="my-5 bg-white p-5 rounded-2xl">
      <div className="mb-5">
        <UMBreadCrumb
          items={[
            {
              label: "dashboard",
              link: "/dashboard",
            },
            {
              label: "review-list",
              link: "/dashboard/review-list",
            },
          ]}
        />
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

      {isEditModalOpen && editData && (
        <ModalForm
          open={isEditModalOpen}
          setOpen={setIsEditModalOpen}
          title="Blog"
          isLoading={deleteLoading}
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
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  margin: "5px 0px",
                }}
              >
                Review information
              </p>

              <Row gutter={{ xs: 24, xl: 24, lg: 24, md: 24 }}>
                <Col span={8} style={{ margin: "10px 0" }}>
                  <div style={{ margin: "10px 0px" }}>
                    <FormInput
                      size="large"
                      name="service.serviceName"
                      label="Service name"
                      disabled
                    />
                  </div>
                </Col>
                <Col span={8} style={{ margin: "10px 0" }}>
                  <div style={{ margin: "10px 0px" }}>
                    <FormInput
                      size="large"
                      name="reviewComment"
                      label="Comment"
                    />
                  </div>
                </Col>
                <Col span={8} style={{ margin: "10px 0" }}>
                  <div style={{ margin: "10px 0px" }}>
                    <FormInput
                      size="large"
                      type="number"
                      name="reviewRating"
                      label="Rating"
                    />
                  </div>
                </Col>
              </Row>
            </div>

            <Button htmlType="submit">submit</Button>
          </Form>
        </ModalForm>
      )}
    </div>
  );
};

export default MyReviews;
