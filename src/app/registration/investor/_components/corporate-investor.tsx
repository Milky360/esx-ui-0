"use client";

import { InboxOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Select, message } from "antd";
import Dragger from "antd/es/upload/Dragger";
import type { UploadFile } from "antd/es/upload/interface";

const { Option } = Select;
const { TextArea } = Input;

type CorporateInvestorFormDataType = { placeholder: string };

export default function CorporateInvestor() {
  const [form] = Form.useForm();

  const nationalityOptions = [
    "Ethiopian",
    "Diaspora (Ethiopian Yellow Card Holder)",
    "Other",
  ];
  const regionOptions = ["Region 1", "Region 2", "Region 3"];

  const handleFileUpload = (file: UploadFile) => false; // Prevent auto-upload

  const handleSubmit = (values: CorporateInvestorFormDataType) => {};

  return (
    <div className="rounded-lg border-none bg-transparent px-10">
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        {/* Registration Form Section*/}
        <section
          id="registration_form"
          className="mb-8 rounded-lg border bg-white p-6"
        >
          <h2 className="mb-6 text-2xl font-semibold">Registration Form</h2>
          <Form.Item
            label="Full Name"
            name="fullName"
            hasFeedback
            rules={[
              { required: true, message: "Full name is required!" },
              {
                min: 3,
                max: 100,
                message: "Must be between 3 and 100 characters",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Nationality"
            name="nationality"
            hasFeedback
            rules={[
              { required: true, message: "Please select your nationality!" },
            ]}
          >
            <Select placeholder="Select Nationality">
              {nationalityOptions.map((nationality) => (
                <Option key={nationality} value={nationality}>
                  {nationality}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Sex"
            name="sex"
            hasFeedback
            rules={[{ required: true, message: "Please select your sex!" }]}
          >
            <Select placeholder="Select Sex">
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
            </Select>
          </Form.Item>
        </section>

        {/* Identity Verification Section*/}
        <section
          id="identity_verification"
          className="mb-8 rounded-lg border bg-white p-6"
        >
          <h2 className="mb-6 text-2xl font-semibold">Identity Verification</h2>

          <Form.Item
            label="Woreda/Kebele ID"
            name="woredaKebeleID"
            hasFeedback
            rules={[
              { required: true, message: "Woreda/Kebele ID is required!" },
            ]}
          >
            <Dragger
              name="woredaKebeleID"
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
            label="Fayda ID"
            name="faydaID"
            hasFeedback
            rules={[{ required: true, message: "Fayda ID is required!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Passport (Optional for Diaspora)"
            name="passport"
            hasFeedback
          >
            <Input />
          </Form.Item>
        </section>

        {/* Business Information Section*/}
        <section
          id="business_information"
          className="mb-8 rounded-lg border bg-white p-6"
        >
          <h2 className="mb-6 text-2xl font-semibold">Business Information</h2>

          <Form.Item
            label="Business Name"
            name="businessName"
            hasFeedback
            rules={[
              { required: true, message: "Business name is required!" },
              {
                min: 3,
                max: 100,
                message: "Must be between 3 and 100 characters",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Trade Name"
            name="tradeName"
            hasFeedback
            rules={[
              { required: true, message: "Trade name is required!" },
              {
                min: 3,
                max: 100,
                message: "Must be between 3 and 100 characters",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="General Manager Name"
            name="generalManagerName"
            hasFeedback
            rules={[
              { required: true, message: "General Manager Name is required!" },
              {
                min: 3,
                max: 100,
                message: "Must be between 3 and 100 characters",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </section>

        {/* Business Location Section*/}
        <section
          id="business_location"
          className="mb-8 rounded-lg border bg-white p-6"
        >
          <h2 className="mb-6 text-2xl font-semibold">Business Location</h2>

          <Form.Item
            label="Business Address"
            name="businessAddress"
            hasFeedback
            rules={[
              { required: true, message: "Business address is required!" },
              {
                min: 10,
                max: 250,
                message: "Must be between 10 and 250 characters",
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            label="Region"
            name="region"
            hasFeedback
            rules={[{ required: true, message: "Please select a region!" }]}
          >
            <Select placeholder="Select Region">
              {regionOptions.map((region) => (
                <Option key={region} value={region}>
                  {region}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Woreda"
            name="woreda"
            hasFeedback
            rules={[
              { required: true, message: "Woreda is required!" },
              {
                min: 2,
                max: 50,
                message: "Must be between 2 and 50 characters",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="House No"
            name="houseNo"
            hasFeedback
            rules={[
              { required: true, message: "House number is required!" },
              {
                min: 1,
                max: 10,
                message: "Must be between 1 and 10 characters",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Zone/Sub City"
            name="zoneOrSubCity"
            hasFeedback
            rules={[
              { required: true, message: "Zone/Sub City is required!" },
              {
                min: 3,
                max: 100,
                message: "Must be between 3 and 100 characters",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Kebele"
            name="kebele"
            hasFeedback
            rules={[
              { required: true, message: "Kebele is required!" },
              {
                min: 2,
                max: 50,
                message: "Must be between 2 and 50 characters",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Geolocation" name="geolocation" hasFeedback>
            <Input placeholder="Enter Coordinates (Optional)" />
          </Form.Item>
        </section>

        {/* Contact Information Section*/}
        <section
          id="contact_information"
          className="mb-8 rounded-lg border bg-white p-6"
        >
          <h2 className="mb-6 text-2xl font-semibold">Contact Information</h2>

          <Form.Item
            label="Tel No"
            name="telephone"
            hasFeedback
            rules={[
              { required: true, message: "Telephone number is required!" },
              {
                pattern: /^\+?[1-9]\d{1,14}$/,
                message: "Enter a valid phone number format!",
              },
              { min: 10, max: 15, message: "Must be between 10 and 15 digits" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Alternative Tel No (Optional)"
            name="alternativeTelNo"
            hasFeedback
            rules={[
              {
                pattern: /^\+?[1-9]\d{1,14}$/,
                message: "Enter a valid phone number format!",
              },
              { min: 10, max: 15, message: "Must be between 10 and 15 digits" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email Address"
            name="email"
            hasFeedback
            rules={[
              { required: true, message: "Email is required!" },
              { type: "email", message: "Enter a valid email!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Alternative Email Address (Optional)"
            name="alternativeEmail"
            hasFeedback
            rules={[{ type: "email", message: "Enter a valid email!" }]}
          >
            <Input />
          </Form.Item>
        </section>

        {/* Terms and Conditions Section*/}
        <section
          id="terms_and_conditions"
          className="mb-8 rounded-lg border bg-white p-6"
        >
          <Form.Item
            name="termsAndConditions"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error("Accept the terms and conditions")
                      ),
              },
            ]}
          >
            <Checkbox>I agree to the Terms and Conditions</Checkbox>
          </Form.Item>
        </section>

        {/* File Attachments Section*/}
        <section
          id="file_attachments"
          className="mb-8 rounded-lg border bg-white p-6"
        >
          <h2 className="mb-6 text-2xl font-semibold">File Attachments</h2>

          {[
            { label: "Business License", name: "businessLicense" },
            { label: "Business Registration", name: "businessRegistration" },
            {
              label: "Memorandum of Association",
              name: "memorandumOfAssociation",
            },
            {
              label: "Minutes of Decision to Invest",
              name: "minutesOfDecision",
            },
            { label: "Other Relevant Files", name: "otherFiles" },
          ].map((doc) => (
            <Form.Item
              key={doc.name}
              label={doc.label}
              name={doc.name}
              valuePropName="fileList"
              getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
              rules={[
                { required: true, message: `${doc.label} is required.` },
                {
                  validator: (_, value) =>
                    value && value[0].size / 1024 / 1024 <= 5
                      ? Promise.resolve()
                      : Promise.reject(new Error("File must be under 5MB!")),
                },
              ]}
            >
              <Dragger
                name={doc.name}
                multiple={false}
                beforeUpload={handleFileUpload}
                accept=".pdf,.jpeg,.jpg,.png"
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag {doc.label} to upload
                </p>
              </Dragger>
            </Form.Item>
          ))}
        </section>

        <Form.Item>
          <Button type="default" htmlType="submit" size="large">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
