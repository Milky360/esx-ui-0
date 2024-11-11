import React from "react";
import { Form, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

type DiasporaInvestorFormDataType = {};

export default function DiasporaInvestor() {
  // Handle file upload validation
  const handleFileUpload = (file: File) => {
    const isValidFormat = [
      "application/pdf",
      "image/jpeg",
      "image/png",
    ].includes(file.type);
    const isValidSize = file.size / 1024 / 1024 <= 5; // Max 5MB

    if (!isValidFormat) {
      message.error(
        `${file.name} is not a valid format (PDF, JPEG, PNG only).`
      );
      return Upload.LIST_IGNORE;
    }
    if (!isValidSize) {
      message.error(`${file.name} exceeds the maximum size of 5MB.`);
      return Upload.LIST_IGNORE;
    }
    return false; // Prevent auto-upload; submit files manually on form submission
  };

  // Handle form submission
  const handleSubmit = (values: any) => {};

  return (
    <Form onFinish={handleSubmit} layout="vertical">
      {/* Submission of National ID Section*/}
      <section className="mb-8 rounded-lg border bg-white p-6" id="national_id">
        <Form.Item
          label="National ID"
          name="nationalID"
          valuePropName="fileList"
          getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
          rules={[
            { required: true, message: "Please upload your National ID." },
          ]}
        >
          <Dragger
            name="nationalID"
            beforeUpload={handleFileUpload}
            multiple={false}
            listType="text"
          >
            <p className="ant-upload-drag-icon">
              <UploadOutlined />
            </p>
            <p className="ant-upload-text">
              Drag and drop your National ID here or click to upload (PDF, JPEG,
              PNG)
            </p>
          </Dragger>
        </Form.Item>
      </section>

      {/* Submission of Passport Section*/}
      <section className="mb-8 rounded-lg border bg-white p-6" id="passport">
        <Form.Item
          label="Passport"
          name="passport"
          valuePropName="fileList"
          getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
          rules={[{ required: true, message: "Please upload your Passport." }]}
        >
          <Dragger
            name="passport"
            beforeUpload={handleFileUpload}
            multiple={false}
            listType="text"
          >
            <p className="ant-upload-drag-icon">
              <UploadOutlined />
            </p>
            <p className="ant-upload-text">
              Drag and drop your Passport here or click to upload (PDF, JPEG,
              PNG)
            </p>
          </Dragger>
        </Form.Item>
      </section>

      {/* Submit Button */}
      <Form.Item>
        <Button type="default" htmlType="submit" size="large">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
