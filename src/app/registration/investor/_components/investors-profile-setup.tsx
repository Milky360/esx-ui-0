import { useState } from "react";

import { InboxOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Radio, Select, Upload } from "antd";

const { Option } = Select;
const { Dragger } = Upload;

type InvestorsProfileSetupFormDataType = { placeholder: string };

export default function InvestorsProfileSetup() {
  const [isLicensed, setIsLicensed] = useState(false);
  const [form] = Form.useForm();

  const handleLicensedChange = (e: any) => {
    setIsLicensed(e.target.value === "Yes");
  };

  const handleSubmit = (values: InvestorsProfileSetupFormDataType) => {};

  return (
    <div className="rounded-lg border-none bg-transparent px-10">
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        {/* Profile Setup Form Section */}
        <section
          id="profile_setup_form"
          className="mb-8 rounded-lg border bg-white p-6"
        >
          <h2 className="mb-6 text-2xl font-semibold">Profile Setup Form</h2>

          <Form.Item
            label="Are you a licensed investment professional?"
            name="licensedProfessional"
            rules={[{ required: true, message: "This field is required!" }]}
          >
            <Radio.Group onChange={handleLicensedChange}>
              <Radio value="Yes">Yes</Radio>
              <Radio value="No">No</Radio>
            </Radio.Group>
          </Form.Item>

          {isLicensed && (
            <Form.Item
              label="Upload a copy of the investment license"
              name="investmentLicense"
              rules={[
                { required: true, message: "License upload is required!" },
              ]}
            >
              <Dragger accept=".pdf,.jpeg,.jpg,.png" maxCount={1}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to upload</p>
              </Dragger>
            </Form.Item>
          )}

          <Form.Item
            label="Net Income"
            name="netIncome"
            rules={[{ required: true, message: "Net Income is required!" }]}
          >
            <Input type="number" prefix="$" />
          </Form.Item>

          <Form.Item
            label="Investment Percentage"
            name="investmentPercentage"
            rules={[
              { required: true, message: "Investment Percentage is required!" },
            ]}
          >
            <Input type="number" suffix="%" />
          </Form.Item>
        </section>

        {/* Refund Bank Account Details Section */}
        <section
          id="refund_bank_account_details"
          className="mb-8 rounded-lg border bg-white p-6"
        >
          <h2 className="mb-6 text-2xl font-semibold">
            Refund Bank Account Details
          </h2>

          <Form.Item
            label="Select Bank"
            name="selectBank"
            rules={[{ required: true, message: "Bank selection is required!" }]}
          >
            <Select placeholder="Select Bank">
              <Option value="CBE">CBE</Option>
              <Option value="TeleBirr">TeleBirr</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Bank Account Number"
            name="bankAccountNumber"
            rules={[
              { required: true, message: "Bank Account Number is required!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Account Holder Name"
            name="accountHolderName"
            rules={[
              { required: true, message: "Account Holder Name is required!" },
            ]}
          >
            <Input />
          </Form.Item>
        </section>

        {/* Terms and Conditions Section */}
        <section id="" className="mb-8 rounded-lg border bg-white p-6">
          <Form.Item
            name="verification"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Verification is required")),
              },
            ]}
          >
            <Checkbox>I verify the information is correct</Checkbox>
          </Form.Item>
        </section>

        <Button type="primary" htmlType="submit" size="large">
          Submit
        </Button>
      </Form>
    </div>
  );
}
