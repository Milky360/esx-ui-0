"use client";

import React from "react";

import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Select, Upload, message } from "antd";

const { Option } = Select;
const { Dragger } = Upload;

type InvestorBasicInformationFormDataType = {
  stepsPercentagesRatio: number;
  setProgressBy: (counter: number) => void;
  setCurrentStep: (step: number) => void;
};

export default function InvestorBasicInformation() {
  const [form] = Form.useForm();

  const handleSubmit = (values: InvestorBasicInformationFormDataType) => {};

  return (
    <div className="rounded-lg border-none bg-transparent px-10">
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        {/* Basic Information Section*/}
        <section
          className="mb-8 rounded-lg border bg-white p-6"
          id="basicInformation"
        >
          <h2 className="mb-6 text-2xl font-semibold">Basic Information</h2>

          <Form.Item
            label="Investor Type"
            name="investorType"
            rules={[{ required: true, message: "Investor Type is required!" }]}
            hasFeedback
          >
            <Select placeholder="Select Investor Type">
              <Option value="individual">Individual</Option>
              <Option value="corporate">Corporate</Option>
              <Option value="institution">Institution</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              { required: true, message: "Full Name is required!" },
              { min: 3, message: "Must be at least 3 characters!" },
              { max: 100, message: "Cannot exceed 100 characters!" },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter Full Name" />
          </Form.Item>

          <Form.Item
            label="Nationality"
            name="nationality"
            rules={[{ required: true, message: "Nationality is required!" }]}
            hasFeedback
          >
            <Select placeholder="Select Nationality">
              <Option value="ethiopian">Ethiopian</Option>
              <Option value="diaspora">
                Diaspora (Ethiopian Yellow Card Holder)
              </Option>
              <Option value="non-ethiopian">Non-Ethiopian</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Sex"
            name="sex"
            rules={[{ required: true, message: "Sex is required!" }]}
            hasFeedback
          >
            <Select placeholder="Select Sex">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </Form.Item>
        </section>

        {/* File Attachments Section*/}
        <section
          className="mb-8 rounded-lg border bg-white p-6"
          id="fileAttachments"
        >
          <h2 className="mb-6 text-2xl font-semibold">File Attachments</h2>

          <Form.Item
            label="Woreda/Kebele ID"
            name="woredaKebeleIdFile"
            hasFeedback
            rules={[
              { required: true, message: "Woreda/Kebele ID is required!" },
            ]}
          >
            <Dragger
              name="woredaKebeleIdFile"
              multiple={false}
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              onChange={(info) => {
                const { status } = info.file;
                if (status === "done") {
                  message.success(`${info.file.name} uploaded successfully.`);
                } else if (status === "error") {
                  message.error(`${info.file.name} upload failed.`);
                }
              }}
              onDrop={(e) => console.log("Dropped files", e.dataTransfer.files)}
              accept=".pdf,.jpeg,.jpg,.png"
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to upload Woreda/Kebele ID
              </p>
            </Dragger>
          </Form.Item>

          <Form.Item
            label="Passport (Optional)"
            name="passportFile"
            hasFeedback
          >
            <Dragger
              name="passportFile"
              multiple={false}
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              onChange={(info) => {
                const { status } = info.file;
                if (status === "done") {
                  message.success(`${info.file.name} uploaded successfully.`);
                } else if (status === "error") {
                  message.error(`${info.file.name} upload failed.`);
                }
              }}
              onDrop={(e) => console.log("Dropped files", e.dataTransfer.files)}
              accept=".pdf,.jpeg,.jpg,.png"
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to upload Passport
              </p>
            </Dragger>
          </Form.Item>

          <Form.Item
            label="Fayda ID"
            name="faydaIdFile"
            hasFeedback
            rules={[{ required: true, message: "Fayda ID is required!" }]}
          >
            <Dragger
              name="faydaIdFile"
              multiple={false}
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              onChange={(info) => {
                const { status } = info.file;
                if (status === "done") {
                  message.success(`${info.file.name} uploaded successfully.`);
                } else if (status === "error") {
                  message.error(`${info.file.name} upload failed.`);
                }
              }}
              onDrop={(e) => console.log("Dropped files", e.dataTransfer.files)}
              accept=".pdf,.jpeg,.jpg,.png"
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to upload Fayda ID
              </p>
            </Dragger>
          </Form.Item>

          <Form.Item
            label="Yellow Card ID (Required for Diaspora)"
            name="yellowCardIdFile"
            hasFeedback
          >
            <Dragger
              name="yellowCardIdFile"
              multiple={false}
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              onChange={(info) => {
                const { status } = info.file;
                if (status === "done") {
                  message.success(`${info.file.name} uploaded successfully.`);
                } else if (status === "error") {
                  message.error(`${info.file.name} upload failed.`);
                }
              }}
              onDrop={(e) => console.log("Dropped files", e.dataTransfer.files)}
              accept=".pdf,.jpeg,.jpg,.png"
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to upload Yellow Card ID
              </p>
            </Dragger>
          </Form.Item>
        </section>

        {/* Terms & Conditions Section*/}
        <section
          className="mb-8 rounded-lg border bg-white p-6"
          id="termsConditions"
        >
          <h2 className="mb-6 text-2xl font-semibold">Terms & Conditions</h2>

          <Form.Item
            name="agreeToTerms"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error("You must agree to the Terms & Conditions!")
                      ),
              },
            ]}
          >
            <Checkbox>
              I agree to the{" "}
              <a href="/terms" target="_blank" rel="noopener noreferrer">
                Terms & Conditions
              </a>
            </Checkbox>
          </Form.Item>
        </section>

        {/* Submit Section */}
        <div className="mt-20 flex space-x-4">
          <Button type="default" htmlType="submit" size="large">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
