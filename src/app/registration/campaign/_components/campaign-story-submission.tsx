"use client";

import React from "react";

import { InboxOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Upload, message } from "antd";
import { UploadProps } from "antd/es/upload";

const { TextArea } = Input;
const { Dragger } = Upload;

type CampaignStorySubmissionFormDataType = {
  stepsPercentagesRatio: number;
};

export default function CampaignStorySubmission() {
  const [form] = Form.useForm();

  const handleSubmit = (values: CampaignStorySubmissionFormDataType) => {};

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
        {/* Campaign Information Section*/}
        <section className="registration-form-border mb-8 rounded-lg bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">Campaign Information</h2>

          <Form.Item
            label="Campaign Title"
            name="campaignTitle"
            rules={[
              { required: true, message: "Campaign Title is required!" },
              { max: 100, message: "Maximum 100 characters allowed!" },
            ]}
          >
            <Input placeholder="Enter Campaign Title" maxLength={100} />
          </Form.Item>

          <Form.Item
            label="Story Summary"
            name="storySummary"
            rules={[
              { required: true, message: "Story Summary is required!" },
              { max: 500, message: "Maximum 500 characters allowed!" },
            ]}
          >
            <Input placeholder="Enter Story Summary" maxLength={500} />
          </Form.Item>

          <Form.Item
            label="Story Body"
            name="storyBody"
            rules={[
              { required: true, message: "Story Body is required!" },
              { max: 10000, message: "Maximum 10,000 characters allowed!" },
            ]}
            tooltip={{
              title:
                "Put the most important information first. Tell a compelling story. Explain why you are raising funds, share details about yourself and your team, and include a budget breakdown for transparency.",
            }}
          >
            <TextArea
              placeholder="Enter Story Body"
              rows={10}
              maxLength={10000}
            />
          </Form.Item>

          <Form.Item
            label="Budget Breakdown"
            name="budgetBreakdown"
            rules={[
              { required: true, message: "Budget Breakdown is required!" },
              { max: 2000, message: "Maximum 2,000 characters allowed!" },
            ]}
          >
            <TextArea
              placeholder="Provide a transparent budget breakdown"
              rows={4}
              maxLength={2000}
            />
          </Form.Item>

          <Form.Item name="proofreadConfirmation" valuePropName="checked">
            <Checkbox>
              I have proofread this story for spelling and grammar.
            </Checkbox>
          </Form.Item>
        </section>

        {/* Add Media to Campaign Story Section*/}
        <section className="registration-form-border mb-8 rounded-lg bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">
            Add Media to Campaign Story
          </h2>

          <Form.Item
            label="Images"
            name="images"
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
            rules={[
              {
                required: true,
                message: "Please upload at least one image!",
              },
            ]}
          >
            <Dragger {...uploadProps} accept=".jpeg,.jpg,.png" maxCount={5}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag to upload images</p>
            </Dragger>
          </Form.Item>

          <Form.Item
            label="Videos"
            name="videos"
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
            rules={[
              {
                required: false,
                message: "Videos are optional but recommended.",
              },
            ]}
          >
            <Dragger {...uploadProps} accept=".mp4" maxCount={2}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag to upload videos</p>
            </Dragger>
          </Form.Item>
        </section>

        <Button type="primary" htmlType="submit" size="large">
          Submit
        </Button>
      </Form>
    </div>
  );
}
