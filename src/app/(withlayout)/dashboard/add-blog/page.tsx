/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import Form from "@/components/forms/Forms/Form";

import UMBreadCrumb from "@/components/forms/ui/UMBreadCrumb";
import UploadImage from "@/components/forms/ui/UploadImage";
import { Button, Col, Row, message } from "antd";
import FormTextArea from "@/components/forms/Forms/FormTextArea";
import { useCreateBlogMutation } from "@/redux/features/blogs/blogApi";
import { useRouter } from "next/navigation";

const AddBlogPage = () => {
  const [createBlog, { isLoading, isError }] = useCreateBlogMutation();
  // submit
  const router = useRouter();
  const blogOnSubmit = async (data: any) => {
    message.loading("Creating new Blog");
    const bloData = {
      blogTitle: data.blogTitle,
      blogDescription: data.blogDescription,
      blogImage: data.blogImage,
    };
    try {
      const res = await createBlog(bloData);

      // @ts-ignore
      if (res?.data && !isError) {
        message.success("Blog created successfully");
        router.push("/dashboard/blog-lists");
      }
    } catch (err: any) {
      console.error(err?.data?.message);
      message.error("something went wrong");
    }
  };
  const base = "super-admin";
  return (
    <div className="bg-white  p-5 rounded-2xl shadow-lg">
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/dashboard` },
          { label: "add-blog", link: `/dashboard/add-blog` },
        ]}
      />
      <div className="mt-3">
        <div className="mb-3">
          <h1 className="text-lg text-black/70 font-bold">Create New Blog</h1>
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
              Blog information
            </p>
            <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
              <Col span={3} style={{ margin: "10px 0" }}>
                <p className="pb-2">Blog Image</p>
                <UploadImage name="blogImage" />
              </Col>{" "}
              <Col span={21} style={{ margin: "10px 0" }}>
                <FormTextArea name="blogTitle" label="Blog Title" rows={4} />
              </Col>
              <Col span={24} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="blogDescription"
                  label="Blog Description"
                  rows={8}
                />
              </Col>{" "}
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

export default AddBlogPage;
