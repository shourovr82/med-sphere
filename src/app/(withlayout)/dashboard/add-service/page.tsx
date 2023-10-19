"use client";

import Form from "@/components/forms/Forms/Form";
import FormInput from "@/components/forms/Forms/FormInput";
import FormSelectField from "@/components/forms/Forms/FormSelectField";
import FormTextArea from "@/components/forms/Forms/FormTextArea";
import UMBreadCrumb from "@/components/forms/ui/UMBreadCrumb";
import UploadImage from "@/components/forms/ui/UploadImage";
import { ServiceStatus } from "@/constants/common";
import { useGetAllCategoriesQuery } from "@/redux/features/categories/categoryApi";
import { useCreateServiceMutation } from "@/redux/features/services/serviceApi";

import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const AddServicePage = () => {
  const [createService, { isLoading, isError }] = useCreateServiceMutation();
  const query = { limit: 30 };

  const { data: allCategories } = useGetAllCategoriesQuery(query);

  const router = useRouter();

  const serviceOnSubmit = async (data: any) => {
    message.loading("Creating new Service");
    const ServiceData = {
      serviceName: data.serviceName,
      description: data.description,
      serviceImage: data.serviceImage,
      servicePrice: parseInt(data.servicePrice),
      location: data.location,
      serviceStatus: data.serviceStatus,
      categoryId: data.categoryId,
    };

    console.log(ServiceData);
    try {
      const res: any = await createService({ data: ServiceData });

      if (res?.data && !isError) {
        message.success("Service created successfully");
        router.push("/dashboard/service-lists");
      }
    } catch (err: any) {
      console.error(err?.data?.message);
      message.error("something went wrong");
    }
  };

  return (
    <div className="bg-white  p-5 rounded-2xl shadow-lg">
      <UMBreadCrumb
        items={[
          { label: `dashboard`, link: `/dashboard` },
          { label: "Add Service", link: `/dashboard/service/add-service` },
        ]}
      />
      <div className="mt-3">
        <div className="mb-3">
          <h1 className="text-lg text-black/70 font-bold">
            Create New Service
          </h1>
        </div>
        <Form submitHandler={serviceOnSubmit}>
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
              style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}
            >
              Service information
            </p>
            <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
              <Col span={3}>
                <p className="pb-2">Service Image</p>
                <UploadImage name="serviceImage" />
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
                    name="categoryId"
                    label="Category"
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
                    options={ServiceStatus}
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

          <Button htmlType="submit">submit</Button>
        </Form>
        <br />
        <br />

        <br />
      </div>
    </div>
  );
};

export default AddServicePage;
