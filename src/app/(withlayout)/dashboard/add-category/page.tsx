/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import Form from "@/components/forms/Forms/Form";

import UMBreadCrumb from "@/components/forms/ui/UMBreadCrumb";

import { Button, Col, Row, message } from "antd";
import FormTextArea from "@/components/forms/Forms/FormTextArea";
import { useRouter } from "next/navigation";
import FormInput from "@/components/forms/Forms/FormInput";
import { useCreateCategoryMutation } from "@/redux/features/categories/categoryApi";

const AddCategoryPage = () => {
  const [createCategory, { isLoading, isError }] = useCreateCategoryMutation();
  // submit
  const router = useRouter();
  const blogOnSubmit = async (data: any) => {
    message.loading("Creating new Category");
    const categoryData = {
      categoryName: data.categoryName,
      description: data.description,
    };
    try {
      const res = await createCategory(categoryData);

      // @ts-ignore
      if (res?.data && !isError) {
        message.success("Category created successfully");
        router.push("/dashboard/category-list");
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
          { label: `Dashboard`, link: `/dashboard` },
          { label: "add-Category", link: `/dashboard/add-category` },
        ]}
      />
      <div className="mt-3">
        <div className="mb-3">
          <h1 className="text-lg text-black/70 font-bold">
            Create New Category
          </h1>
        </div>
        <Form submitHandler={blogOnSubmit}>
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
              Category information
            </p>
            <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
              <Col span={24} style={{ margin: "10px 0" }}>
                <FormInput name="categoryName" label="Category Name" />
              </Col>
              <Col span={24} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="description"
                  label="Category Description"
                  rows={8}
                />
              </Col>
            </Row>
            <Button type="default" htmlType="submit">
              submit
            </Button>
          </div>
        </Form>
        <br />
        <br />

        <br />
      </div>
    </div>
  );
};

export default AddCategoryPage;
