"use client";

import React from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  DatePicker,
  Upload,
  message,
} from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";

const { Option } = Select;
const { TextArea } = Input;
const { Dragger } = Upload;

type CampaignInformationFormDataType = {
  currentFormCounter: number;
};

export default function CampaignInformationForm() {
  const [form] = Form.useForm();

  const handleSubmit = (values: CampaignInformationFormDataType) => {};

  return (
    <div className="rounded-lg border-none bg-transparent px-10">
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        {/* Business and Project Overview Section*/}
        <section className="registration-form-border mb-8 rounded-lg bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">
            Business and Project Overview
          </h2>

          {/* Business Information */}
          <h3 className="mb-4 text-xl font-semibold">Business Information</h3>
          <Form.Item
            label="Business Overview"
            name="business_overview"
            rules={[
              { required: true, message: "Business Overview is required!" },
            ]}
            hasFeedback
          >
            <TextArea placeholder="Enter Business Overview" rows={4} />
          </Form.Item>

          <Form.Item
            label="Principal Activities"
            name="principal_activities"
            rules={[
              { required: true, message: "Principal Activities are required!" },
            ]}
            hasFeedback
          >
            <TextArea placeholder="Enter Principal Activities" rows={4} />
          </Form.Item>

          <Form.Item
            label="Principal Market"
            name="principalMarket"
            rules={[
              { required: true, message: "Principal Market is required!" },
            ]}
            hasFeedback
          >
            <TextArea placeholder="Enter Principal Market" rows={4} />
          </Form.Item>

          <Form.Item
            label="Auditor"
            name="auditor"
            rules={[{ required: true, message: "Auditor is required!" }]}
            hasFeedback
          >
            <Input placeholder="Enter Auditor's Name" />
          </Form.Item>

          {/* Project Overview */}
          <h3 className="mb-4 text-xl font-semibold">Project Overview</h3>
          <Form.Item
            label="Project Name"
            name="projectName"
            rules={[{ required: true, message: "Project Name is required!" }]}
            hasFeedback
          >
            <Input placeholder="Enter Project Name" />
          </Form.Item>

          <Form.Item
            label="Objectives"
            name="objectives"
            rules={[{ required: true, message: "Objectives are required!" }]}
            hasFeedback
          >
            <TextArea placeholder="Enter Objectives" rows={4} />
          </Form.Item>

          <Form.Item
            label="Summary"
            name="summary"
            rules={[{ required: true, message: "Summary is required!" }]}
            hasFeedback
          >
            <TextArea placeholder="Enter Summary" rows={4} />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Address is required!" }]}
            hasFeedback
          >
            <TextArea
              placeholder="Enter Physical Address and Geolocation"
              rows={4}
            />
          </Form.Item>
        </section>

        {/* Market and Business Model Section*/}
        <section className="registration-form-border mb-8 rounded-lg bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">
            Market and Business Model
          </h2>

          {/* Market Analysis */}
          <h3 className="mb-4 text-xl font-semibold">Market Analysis</h3>
          <Form.Item
            label="Target Market Size"
            name="targetMarketSize"
            rules={[
              { required: true, message: "Target Market Size is required!" },
            ]}
            hasFeedback
          >
            <Input type="number" placeholder="Enter Target Market Size" />
          </Form.Item>

          <Form.Item
            label="Competitor Analysis"
            name="competitorAnalysis"
            rules={[
              { required: true, message: "Competitor Analysis is required!" },
            ]}
            hasFeedback
          >
            <TextArea placeholder="Enter Competitor Analysis" rows={4} />
          </Form.Item>

          {/* Business Model */}
          <h3 className="mb-4 text-xl font-semibold">Business Model</h3>
          <Form.Item
            label="Revenue Streams"
            name="revenueStreams"
            rules={[
              { required: true, message: "Revenue Streams are required!" },
            ]}
            hasFeedback
          >
            <TextArea placeholder="Enter Revenue Streams" rows={4} />
          </Form.Item>

          <Form.Item
            label="Cost Structure"
            name="costStructure"
            rules={[{ required: true, message: "Cost Structure is required!" }]}
            hasFeedback
          >
            <TextArea placeholder="Enter Cost Structure" rows={4} />
          </Form.Item>
        </section>

        {/* Financial Information and Projections Section*/}
        <section className="registration-form-border mb-8 rounded-lg bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">
            Financial Information and Projections
          </h2>

          {/* Financial Information */}
          <h3 className="mb-4 text-xl font-semibold">Financial Information</h3>
          <Form.Item
            label="Total Assets"
            name="totalAssets"
            rules={[{ required: true, message: "Total Assets are required!" }]}
            hasFeedback
          >
            <Input type="number" step="0.01" placeholder="Enter Total Assets" />
          </Form.Item>

          <Form.Item
            label="Total Liabilities"
            name="totalLiabilities"
            rules={[
              { required: true, message: "Total Liabilities are required!" },
            ]}
            hasFeedback
          >
            <Input
              type="number"
              step="0.01"
              placeholder="Enter Total Liabilities"
            />
          </Form.Item>

          <Form.Item
            label="Revenue"
            name="revenue"
            rules={[{ required: true, message: "Revenue is required!" }]}
            hasFeedback
          >
            <Input type="number" step="0.01" placeholder="Enter Revenue" />
          </Form.Item>

          <Form.Item
            label="Net Profit"
            name="netProfit"
            rules={[{ required: true, message: "Net Profit is required!" }]}
            hasFeedback
          >
            <Input type="number" step="0.01" placeholder="Enter Net Profit" />
          </Form.Item>
        </section>

        {/* Funding and Financing Details Section*/}
        <section className="registration-form-border mb-8 rounded-lg bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">
            Funding and Financing Details
          </h2>

          <Form.Item
            label="Total Amount of Funding Needed"
            name="fundingAmount"
            rules={[{ required: true, message: "Funding amount is required!" }]}
            hasFeedback
          >
            <Input type="number" placeholder="Enter total funding amount" />
          </Form.Item>

          <Form.Item
            label="Currency"
            name="currency"
            rules={[
              { required: true, message: "Currency selection is required!" },
            ]}
          >
            <Select placeholder="Select currency">
              <Option value="USD">USD</Option>
              <Option value="EUR">EUR</Option>
              <Option value="ETB">ETB</Option>
              {/* Add more currency options as needed */}
            </Select>
          </Form.Item>

          <Form.Item
            label="Target Date for Financial Close"
            name="financialCloseDate"
            rules={[{ required: true, message: "Date is required!" }]}
            hasFeedback
          >
            <DatePicker
              placeholder="Select target date"
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item
            label="Type of Funding Needed"
            name="fundingType"
            rules={[
              { required: true, message: "Select at least one funding type!" },
            ]}
          >
            <Checkbox.Group>
              <Checkbox value="Equity">Equity</Checkbox>
              <Checkbox value="Debt">Debt</Checkbox>
              <Checkbox value="Other">Other</Checkbox>
            </Checkbox.Group>
          </Form.Item>

          <Form.Item
            label="Own Funds Contribution"
            name="ownFunds"
            rules={[
              {
                required: true,
                message: "Own funds contribution is required!",
              },
            ]}
            hasFeedback
          >
            <Input type="number" placeholder="Enter own funds contribution" />
          </Form.Item>

          <Form.Item
            label="Upload Financial Projections"
            name="financialProjections"
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
            rules={[{ required: true, message: "Upload is required!" }]}
          >
            <Dragger
              action="/upload.do"
              listType="text"
              onChange={(info) => {
                const { status } = info.file;
                if (status === "done") {
                  message.success(`${info.file.name} uploaded successfully.`);
                } else if (status === "error") {
                  message.error(`${info.file.name} upload failed.`);
                }
              }}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
            </Dragger>
          </Form.Item>
        </section>

        {/* Additional Information and Finalization Section*/}
        <section className="registration-form-border mb-8 rounded-lg bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">
            Additional Information and Finalization
          </h2>

          <Form.Item label="Key Assumptions" name="keyAssumptions" hasFeedback>
            <Input.TextArea placeholder="List key assumptions" rows={3} />
          </Form.Item>

          <Form.Item label="Risk Management" name="riskManagement" hasFeedback>
            <Input.TextArea
              placeholder="Describe risk management strategies"
              rows={4}
            />
          </Form.Item>

          <Form.Item
            label="Graphs and Charts"
            name="graphsCharts"
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
          >
            <Dragger accept=".png,.jpg,.jpeg,.svg" listType="picture">
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to upload Graphs and Charts
              </p>
            </Dragger>
          </Form.Item>

          <Form.Item
            label="Post-Campaign Planning: Use of Funds"
            name="postCampaignFunds"
            hasFeedback
          >
            <Input.TextArea
              placeholder="Plan for deploying funds raised"
              rows={4}
            />
          </Form.Item>

          <Form.Item label="Reporting" name="reportingSystem" hasFeedback>
            <Input.TextArea
              placeholder="System for regular updates to investors"
              rows={3}
            />
          </Form.Item>

          <Form.Item>
            <Checkbox>
              I have reviewed and confirm all information provided is accurate.
            </Checkbox>
          </Form.Item>
        </section>

        {/* File Attachments Section Section*/}
        <section
          className="mb-8 rounded-lg border bg-white p-6"
          id="fileAttachments"
        >
          <h2 className="mb-6 text-2xl font-semibold">File Attachments</h2>

          <Form.Item
            label="Business License (Optional)"
            name="businessLicenseFile"
            hasFeedback
          >
            <Dragger
              name="businessLicenseFile"
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
                Click or drag file to upload Business License
              </p>
            </Dragger>
          </Form.Item>

          <Form.Item
            label="Business Registration"
            name="businessRegistrationFile"
            hasFeedback
          >
            <Dragger
              name="businessRegistrationFile"
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
                Click or drag file to upload Business Registration
              </p>
            </Dragger>
          </Form.Item>

          <Form.Item
            label="Memorandum of Association"
            name="memorandumFile"
            hasFeedback
          >
            <Dragger
              name="memorandumFile"
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
                Click or drag file to upload Memorandum of Association
              </p>
            </Dragger>
          </Form.Item>
        </section>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
