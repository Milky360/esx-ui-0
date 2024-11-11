"use client";

import React from "react";
import {
  Form,
  Input,
  Button,
  Upload,
  DatePicker,
  InputNumber,
  Checkbox,
  Select,
  message,
} from "antd";
import { UploadProps } from "antd/es/upload";
import { InboxOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Option } = Select;
const { Dragger } = Upload;

type PublicCampaignProfileSetupFormDataType = {};

export default function PublicCampaignProfileSetup() {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {};

  const uploadProps: UploadProps = {
    name: "file",
    multiple: false,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info) {
      const { status } = info.file;
      if (status === "done") {
        message.success(`${info.file.name} uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} upload failed.`);
      }
    },
  };

  return (
    <div className="rounded-lg border-none bg-transparent px-10">
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        {/* Campaign Basic Information Section*/}
        <section className="mb-8 rounded-lg border bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">
            Campaign Basic Information
          </h2>

          <Form.Item
            label="Subtitle"
            name="subtitle"
            rules={[{ required: true, message: "Subtitle is required!" }]}
          >
            <Input placeholder="Enter Subtitle" />
          </Form.Item>

          <Form.Item
            label="Sector"
            name="sector"
            rules={[{ required: true, message: "Sector is required!" }]}
          >
            <Select placeholder="Select Sector">
              <Option value="technology">Technology</Option>
              <Option value="healthcare">Healthcare</Option>
              {/* Add more options as needed */}
            </Select>
          </Form.Item>

          <Form.Item
            label="Target Investment"
            name="targetInvestment"
            rules={[
              { required: true, message: "Target Investment is required!" },
            ]}
          >
            <InputNumber placeholder="Enter Target Investment" min={0} />
          </Form.Item>

          <Form.Item label="Progress (%)" name="progress">
            <InputNumber placeholder="Calculated Progress" disabled />
          </Form.Item>

          <Form.Item
            label="Deadline"
            name="deadline"
            rules={[{ required: true, message: "Deadline is required!" }]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="Number of Investors"
            name="numInvestors"
            rules={[
              { required: true, message: "Number of Investors is required!" },
            ]}
          >
            <InputNumber placeholder="Enter Number of Investors" min={0} />
          </Form.Item>

          <Form.Item label="Average Investment" name="averageInvestment">
            <InputNumber placeholder="Calculated Average Investment" disabled />
          </Form.Item>
        </section>

        {/* Deal Terms Section*/}
        <section className="mb-8 rounded-lg border bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">Deal Terms</h2>

          <Form.Item
            label="Minimum Investment"
            name="minInvestment"
            rules={[
              { required: true, message: "Minimum Investment is required!" },
            ]}
          >
            <InputNumber placeholder="Enter Minimum Investment" min={0} />
          </Form.Item>

          <Form.Item
            label="Maximum Investment"
            name="maxInvestment"
            rules={[
              { required: true, message: "Maximum Investment is required!" },
            ]}
          >
            <InputNumber placeholder="Enter Maximum Investment" min={0} />
          </Form.Item>

          <Form.Item
            label="Target Raise"
            name="targetRaise"
            rules={[{ required: true, message: "Target Raise is required!" }]}
          >
            <InputNumber placeholder="Enter Target Raise" min={0} />
          </Form.Item>

          <Form.Item label="Share Price" name="sharePrice">
            <InputNumber placeholder="Enter Share Price" min={0} />
          </Form.Item>

          <Form.Item
            label="Start Date"
            name="startDate"
            rules={[{ required: true, message: "Start Date is required!" }]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="End Date"
            name="endDate"
            rules={[{ required: true, message: "End Date is required!" }]}
          >
            <DatePicker />
          </Form.Item>
        </section>

        {/* Category 2: Bank Details Section*/}
        <section className="mb-8 rounded-lg border bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">Bank Details</h2>

          <Form.Item
            label="Bank Account Information"
            name="bankAccountInfo"
            rules={[
              {
                required: true,
                message: "Bank Account Information is required!",
              },
            ]}
          >
            <Input placeholder="Enter Bank Account Information" />
          </Form.Item>

          <Form.Item label="Bank Letter" name="bankLetter">
            <Dragger {...uploadProps} accept=".pdf,.jpg,.jpeg">
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to upload Bank Letter
              </p>
            </Dragger>
          </Form.Item>

          <Form.Item label="Blocked Account Confirmation">
            <Input placeholder="Coming Soon" disabled />
          </Form.Item>

          {/* Custodian Bank Details */}
          <h3 className="mb-4 mt-4 text-xl">Custodian Bank Details</h3>
          <Form.Item
            label="Custodian Bank Name"
            name="custodianBankName"
            rules={[{ max: 100, message: "Maximum 100 characters allowed!" }]}
          >
            <Input placeholder="Enter Custodian Bank Name" maxLength={100} />
          </Form.Item>

          <Form.Item
            label="Account Number"
            name="accountNumber"
            rules={[{ max: 20, message: "Maximum 20 characters allowed!" }]}
          >
            <Input placeholder="Enter Account Number" maxLength={20} />
          </Form.Item>

          <Form.Item
            label="Bank Branch Name"
            name="bankBranchName"
            rules={[{ max: 100, message: "Maximum 100 characters allowed!" }]}
          >
            <Input placeholder="Enter Bank Branch Name" maxLength={100} />
          </Form.Item>

          <Form.Item
            label="Bank Address"
            name="bankAddress"
            rules={[{ max: 200, message: "Maximum 200 characters allowed!" }]}
          >
            <TextArea placeholder="Enter Bank Address" maxLength={200} />
          </Form.Item>

          <Form.Item label="Attachment" name="attachment">
            <Dragger {...uploadProps} accept=".pdf,.png,.jpeg" maxCount={1}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to upload attachment
              </p>
            </Dragger>
          </Form.Item>
        </section>

        {/* Remaining Categories (Campaign Overview and Visual Branding, Support Information, etc.) should be similarly structured */}

        <Button type="primary" htmlType="submit" size="large">
          Submit
        </Button>
      </Form>
    </div>
  );
}
