import React from "react";
import { Form, Input, Button, Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

export default function FinancialIssuerPerformance() {
  const [form] = Form.useForm();

  // Validation for file upload
  const validateFile = (file: File) => {
    const isValidType =
      file.type === "application/pdf" ||
      file.type === "application/vnd.ms-excel" ||
      file.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      file.type === "application/msword" ||
      file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

    if (!isValidType) {
      message.error(
        "Invalid file type. Only PDF, Excel, and Word files are allowed."
      );
    }

    const isValidSize = file.size / 1024 / 1024 < 10;
    if (!isValidSize) {
      message.error("File must be smaller than 10MB!");
    }

    return isValidType && isValidSize;
  };

  const handleSubmit = (values: any) => {};

  return (
    <div className="rounded-lg border-none bg-transparent px-10">
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="mx-auto max-w-2xl rounded-md bg-white p-20"
      >
        {/* File Upload: Financial Statements */}
        <div className="registration-form-border mb-8 rounded-lg bg-white p-6">
          <h2 className="mb-4 text-lg font-semibold">Financial Performance</h2>
          <Form.Item
            id="upload_financial_statements"
            label="Upload Financial Statements"
            name="financialStatements"
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
            rules={[
              {
                required: true,
                message: "Please upload your financial statements.",
              },
            ]}
          >
            <Dragger
              name="file"
              beforeUpload={(file) => {
                const isValid = validateFile(file);
                return !isValid;
              }}
              maxCount={1}
              accept=".pdf,.xls,.xlsx,.doc,.docx"
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Choose a file or drag it here</p>
              <p className="ant-upload-hint">
                Supports PDF, Excel, and Word formats, with a maximum file size
                of 10MB
              </p>
            </Dragger>
          </Form.Item>

          {/* Gross Margin */}
          <Form.Item
            id="gross_margin"
            label="Gross Margin (%)"
            name="grossMargin"
            rules={[
              {
                required: true,
                message: "Please enter a valid gross margin percentage.",
              },
              {
                type: "number",
                message: "Please enter a valid number",
                transform: (value) => parseFloat(value),
              },
            ]}
          >
            <Input placeholder="e.g., 45.5" type="number" step="0.1" />
          </Form.Item>

          {/* Operating Margin */}
          <Form.Item
            id="operating_margin"
            label="Operating Margin (%)"
            name="operatingMargin"
            rules={[
              {
                required: true,
                message: "Please enter a valid operating margin percentage.",
              },
              {
                type: "number",
                message: "Please enter a valid number",
                transform: (value) => parseFloat(value),
              },
            ]}
          >
            <Input placeholder="e.g., 30.0" type="number" step="0.1" />
          </Form.Item>

          {/* Net Margin */}
          <Form.Item
            id="net_margin"
            label="Net Margin (%)"
            name="netMargin"
            rules={[
              {
                required: true,
                message: "Please enter a valid net margin percentage.",
              },
              {
                type: "number",
                message: "Please enter a valid number",
                transform: (value) => parseFloat(value),
              },
            ]}
          >
            <Input placeholder="e.g., 15.2" type="number" step="0.1" />
          </Form.Item>

          {/* File Upload: Disclosures and Notes */}
          <Form.Item
            id="upload_financial_disclosures_and_notes"
            label="Upload Financial Disclosures and Notes"
            name="disclosuresAndNotes"
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
          >
            <Dragger
              name="file"
              beforeUpload={(file) => {
                const isValid = validateFile(file);
                return !isValid;
              }}
              maxCount={1}
              accept=".pdf,.xls,.xlsx,.doc,.docx"
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Choose a file or drag it here</p>
              <p className="ant-upload-hint">
                Supports PDF, Excel, and Word formats, with a maximum file size
                of 10MB
              </p>
            </Dragger>
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              size="large"
            >
              Save & Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
