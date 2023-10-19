/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import { Button, Col, Input, Modal, Row, message } from "antd";
const { confirm } = Modal;
import Link from "next/link";
import { useState } from "react";
import dayjs from "dayjs";
import {
  useDeleteFeedbackMutation,
  useGetFeedBacksQuery,
  useUpdateFeedbackMutation,
} from "@/redux/features/feedback/feedbackApi";
import UMBreadCrumb from "@/components/forms/ui/UMBreadCrumb";
import ActionBar from "@/components/forms/ui/ActionBar";
import TableList from "@/components/table/TableList";
import ModalForm from "@/components/forms/modalForm/modalForm";
import Form from "@/components/forms/Forms/Form";
import FormInput from "@/components/forms/Forms/FormInput";
import FormTextArea from "@/components/forms/Forms/FormTextArea";

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
  const { data, isLoading } = useGetFeedBacksQuery({ ...query });
  // handle edit

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState<any>(null);

  console.log(editData);

  const [updateFeedback, { isLoading: deleteLoading }] =
    useUpdateFeedbackMutation();

  const handleEdit = async (updated: any) => {
    const editedData = {
      feedbackComment: updated.feedbackComment,
      userName: updated.userName,
      email: updated.email,
      contactNumber: updated.contactNumber,
    };
    console.log(editedData);

    const id = updated.feedbackId;

    try {
      const res = await updateFeedback({ id, data: editedData }).unwrap();

      if (res) {
        message.success("FeedBack updated successfully");
        setIsEditModalOpen(false);
      }
    } catch (error: any) {
      console.error(error?.data?.message);
      message.error(error?.data?.message);
    }
  };

  // handle edit end

  // delete
  const [deleteFeedback, { isError }] = useDeleteFeedbackMutation();

  const deleteHandler = async (id: string) => {
    confirm({
      title: "Do you Want to delete this  FeedBack?",
      icon: <ExclamationCircleFilled />,
      content: "Please confirm your action!",
      async onOk() {
        try {
          const res: any = await deleteFeedback(id);
          console.log(res);
          if (res && res?.success) {
            message.success("Service Deleted successfully");
          }
        } catch (err: any) {
          console.error(err.data?.message);
          message.error(err.data?.message || "Something went wrong!");
        }
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const columns = [
    {
      title: "User Name",
      dataIndex: "userName",
      //   sorter: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      //   sorter: true,
    },
    {
      title: "Contact Number",
      dataIndex: "contactNumber",
      //   sorter: true,
    },
    {
      title: "FeedBack Message",
      dataIndex: "feedbackComment",
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
            <Button
              onClick={() => deleteHandler(data?.feedbackId)}
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
    <>
      <div className="bg-white  p-5 rounded-2xl shadow-lg">
        <UMBreadCrumb
          items={[
            {
              label: "Dashboard",
              link: "/dashboard",
            },
            {
              label: "Feedback Lists",
              link: "/dashboard/feedback-list",
            },
          ]}
        />
        <div className="mt-5">
          <ActionBar title="Feedback List"></ActionBar>
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
          title="Blog"
          isLoading={deleteLoading}
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
                Feedback information
              </p>

              <Row gutter={{ xs: 24, xl: 24, lg: 24, md: 24 }}>
                <Col span={12} style={{ margin: "10px 0" }}>
                  <div style={{ margin: "10px 0px" }}>
                    <FormInput size="large" name="userName" label="Name" />
                  </div>
                </Col>
                <Col span={12} style={{ margin: "10px 0" }}>
                  <div style={{ margin: "10px 0px" }}>
                    <FormInput size="large" name="email" label="Email" />
                  </div>
                </Col>
              </Row>
              <Row gutter={{ xs: 24, xl: 12, lg: 12, md: 24 }}>
                <Col span={8} style={{ margin: "10px 0" }}>
                  <div style={{ margin: "10px 0px" }}>
                    <FormInput
                      size="large"
                      name="contactNumber"
                      label="Contact Number"
                    />
                  </div>
                </Col>
              </Row>
              <Row gutter={{ xs: 24, xl: 12, lg: 12, md: 24 }}>
                <Col span={24} style={{ margin: "10px 0" }}>
                  <div style={{ margin: "10px 0px" }}>
                    <FormTextArea
                      name="feedbackComment"
                      label="FeedBack Comment"
                      rows={8}
                    />
                  </div>
                </Col>
              </Row>
            </div>

            <Button htmlType="submit">submit</Button>
          </Form>
        </ModalForm>
      )}
    </>
  );
};

export default ServiceList;
