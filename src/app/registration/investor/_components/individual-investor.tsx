import React from "react";
import { Button, Form, Input, Select, Checkbox, DatePicker } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import Dragger from "antd/es/upload/Dragger";

const { Option } = Select;
const { TextArea } = Input;

type IndividualInvestorFormDataType = {};

export default function IndividualInvestor() {
  const [form] = Form.useForm();

  const handleSubmit = (values: IndividualInvestorFormDataType) => {};

  return (
    <div className="rounded-lg border-none bg-transparent px-10">
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        {/* Registration Form Section */}
        <section
          id="registration_form"
          className="mb-8 rounded-lg border bg-white p-6"
        >
          <h2 className="mb-6 text-2xl font-semibold">Registration Form</h2>

          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              { required: true, message: "Full Name is required!" },
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
            rules={[{ required: true, message: "Nationality is required!" }]}
          >
            <Select placeholder="Select Nationality">
              <Option value="Ethiopian">Ethiopian</Option>
              <Option value="Diaspora">
                Diaspora (Ethiopian Yellow Card Holder)
              </Option>
              {/* Add more countries as needed */}
            </Select>
          </Form.Item>

          <Form.Item
            label="Sex"
            name="sex"
            rules={[{ required: true, message: "Sex is required!" }]}
          >
            <Select placeholder="Select Sex">
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
            </Select>
          </Form.Item>
        </section>

        {/* Identity Verification Section */}
        <section
          id="identity_verification"
          className="mb-8 rounded-lg border bg-white p-6"
        >
          <h2 className="mb-6 text-2xl font-semibold">Identity Verification</h2>

          <Form.Item
            label="Woreda/Kebele ID"
            name="woredaID"
            rules={[
              { required: true, message: "Woreda/Kebele ID is required!" },
            ]}
          >
            <Dragger accept=".pdf,.jpeg,.jpg,.png" maxCount={1}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to upload</p>
            </Dragger>
          </Form.Item>

          <Form.Item
            label="Fayda ID"
            name="faydaID"
            rules={[{ required: true, message: "Fayda ID is required!" }]}
          >
            <Dragger accept=".pdf,.jpeg,.jpg,.png" maxCount={1}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to upload</p>
            </Dragger>
          </Form.Item>

          <Form.Item label="Passport (Optional)" name="passport">
            <Dragger accept=".pdf,.jpeg,.jpg,.png" maxCount={1}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to upload</p>
            </Dragger>
          </Form.Item>
        </section>

        {/* Business Information Section */}
        <section
          id="business_information"
          className="mb-8 rounded-lg border bg-white p-6"
        >
          <h2 className="mb-6 text-2xl font-semibold">Business Information</h2>

          <Form.Item
            label="Business Name"
            name="businessName"
            rules={[
              { required: true, message: "Business Name is required!" },
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
            rules={[
              { required: true, message: "Trade Name is required!" },
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

        {/* Business Location Section */}
        <section
          id="business_location"
          className="mb-8 rounded-lg border bg-white p-6"
        >
          <h2 className="mb-6 text-2xl font-semibold">Business Location</h2>

          <Form.Item
            label="Business Address"
            name="businessAddress"
            rules={[
              { required: true, message: "Business Address is required!" },
              {
                min: 10,
                max: 250,
                message: "Must be between 10 and 250 characters",
              },
            ]}
          >
            <TextArea rows={3} />
          </Form.Item>

          <Form.Item
            label="Region"
            name="region"
            rules={[{ required: true, message: "Region is required!" }]}
          >
            <Select placeholder="Select Region">
              <Option value="Region1">Region 1</Option>
              <Option value="Region2">Region 2</Option>
              {/* Add more regions as needed */}
            </Select>
          </Form.Item>

          <Form.Item
            label="Woreda"
            name="woreda"
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
            rules={[
              { required: true, message: "House No is required!" },
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
            name="zone"
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

          <Form.Item label="Geolocation" name="geolocation">
            <Input placeholder="Latitude, Longitude" />
          </Form.Item>
        </section>

        {/* Contact Information Section */}
        <section
          id="contact_information"
          className="mb-8 rounded-lg border bg-white p-6"
        >
          <h2 className="mb-6 text-2xl font-semibold">Contact Information</h2>

          <Form.Item
            label="Tel No"
            name="telNo"
            rules={[
              { required: true, message: "Tel No is required!" },
              {
                min: 10,
                max: 15,
                message: "Must be between 10 and 15 characters",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Valid email is required!",
              },
              { max: 100, message: "Email cannot exceed 100 characters" },
            ]}
          >
            <Input />
          </Form.Item>
        </section>

        {/* Registration Details Section */}
        <section
          id="registration_details"
          className="mb-8 rounded-lg border bg-white p-6"
        >
          <h2 className="mb-6 text-2xl font-semibold">Registration Details</h2>

          <Form.Item
            label="Business License Renewal Date"
            name="licenseRenewalDate"
            rules={[{ required: true, message: "Renewal Date is required!" }]}
          >
            <DatePicker format="YYYY-MM-DD" style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Business License/Registration Number"
            name="businessLicenseNumber"
            rules={[
              { required: true, message: "License Number is required!" },
              {
                min: 6,
                max: 50,
                message: "Must be between 6 and 50 characters",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Tax Identification Number (TIN)"
            name="tin"
            rules={[
              {
                min: 9,
                max: 15,
                message: "Must be between 9 and 15 characters",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Year/Date of Establishment"
            name="establishmentDate"
          >
            <DatePicker format="YYYY-MM-DD" style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="Website" name="website">
            <Input type="url" />
          </Form.Item>
        </section>

        {/* File Attachments Section */}
        <section
          id="file_attachments"
          className="mb-8 rounded-lg border bg-white p-6"
        >
          <h2 className="mb-6 text-2xl font-semibold">File Attachments</h2>

          <Form.Item
            label="Business License"
            name="businessLicense"
            rules={[
              { required: true, message: "Business License is required!" },
            ]}
          >
            <Dragger accept=".pdf,.jpeg,.jpg,.png" maxCount={1}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to upload</p>
            </Dragger>
          </Form.Item>

          <Form.Item
            label="Business Registration"
            name="businessRegistration"
            rules={[
              { required: true, message: "Business Registration is required!" },
            ]}
          >
            <Dragger accept=".pdf,.jpeg,.jpg,.png" maxCount={1}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to upload</p>
            </Dragger>
          </Form.Item>

          <Form.Item label="Memorandum of Association" name="memorandum">
            <Dragger accept=".pdf,.jpeg,.jpg,.png" maxCount={1}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to upload</p>
            </Dragger>
          </Form.Item>

          <Form.Item
            label="Minutes of Decision to Invest"
            name="minutesOfDecision"
          >
            <Dragger accept=".pdf,.jpeg,.jpg,.png" maxCount={1}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to upload</p>
            </Dragger>
          </Form.Item>

          <Form.Item label="Other Relevant Files" name="otherFiles">
            <Dragger accept=".pdf,.jpeg,.jpg,.png" maxCount={5}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag files to upload</p>
            </Dragger>
          </Form.Item>
        </section>

        {/* Terms and Conditions Section */}
        <section id="" className="mb-8 rounded-lg border bg-white p-6">
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Agreement required")),
              },
            ]}
          >
            <Checkbox>
              I agree to the <a href="#terms">Terms and Conditions</a> and{" "}
              <a href="#privacy">Privacy Policy</a>
            </Checkbox>
          </Form.Item>
        </section>

        <Button type="primary" htmlType="submit" size="large">
          Register
        </Button>
      </Form>
    </div>
  );
}
