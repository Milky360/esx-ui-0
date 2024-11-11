"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { InboxOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  message,
  notification,
} from "antd";
import Dragger from "antd/es/upload/Dragger";
import type { UploadFile } from "antd/es/upload/interface";
import dayjs from "dayjs";

import { update_issuer_basic_information } from "@/actions/issuers/action";
import { useFormProgressStore } from "@/store/form-progress-store";
import { useIssuerRegistrationStore } from "@/store/issuer-registration-form-store";

const { Option } = Select;
const { TextArea } = Input;

type ProfileInformationType = {
  business_description: string;
  website: string;
  capital: number;
  business_license_number: string;
  number_of_stakeholders: number;
  number_of_employees: number;
  date_of_establishment: string;
  renewal_date: string;
  "business_address.business_address": string;
  "business_address.region": string;
  "business_address.zone": string;
  "business_address.woreda": string;
  "business_address.kebele": string;
  "business_address.house_number": string;
  "business_address.geo_location": string;
  telephone: string;
  email: string;
  business_license_file?: UploadFile;
  business_registration_file?: UploadFile;
  memorandum_file?: UploadFile;
};

const DATE_FORMAT = "YYYY-MM-DD";

export default function ProfileSetup() {
  const { stage_1, stage_2, updateIssueRegistrationFormField } =
    useIssuerRegistrationStore();
  const { completeMainStep, currentMainStep, updateFormProgressStoreField } =
    useFormProgressStore();

  const searchParams = useSearchParams();
  const stage = searchParams.get("stage");
  const [api, contextHolder] = notification.useNotification();

  const { mutate } = useMutation({
    mutationKey: ["create_issuer_basic_information"],
    mutationFn: async () => {
      const response = await update_issuer_basic_information(stage_2);
      if (!response.ok) throw response;
      return response.message;
    },
    onMutate: () => {
      api.destroy();
      api.info({
        message: "Setting up issuer profile",
        placement: "topRight",
      });
    },
    onSuccess: (data) => {
      api.destroy();
      api.success({
        message: "Profile created successfully!",
        placement: "topRight",
      });
      console.log("data:", data);
      completeMainStep(currentMainStep);
      updateFormProgressStoreField("currentMainStep", currentMainStep + 1);
    },
    onError: (error: any) => {
      api.destroy();
      api.error({
        message: error.message,
        placement: "topRight",
      });
    },
  });

  useEffect(() => {
    if (stage)
      updateFormProgressStoreField("currentMainStep", Number(stage) - 1);
  }, [stage, updateFormProgressStoreField]);

  const [form] = Form.useForm();

  const fieldOfBusinessOptions = [
    "Retail",
    "Wholesale",
    "Manufacturing",
    "Services",
    "Agriculture",
    "Construction",
  ];
  const regionOptions = ["Region 1", "Region 2", "Region 3"];

  const handleFileUpload = (file: UploadFile) => false;

  const handleSubmit = async (values: ProfileInformationType) => {
    for (const [key, value] of Object.entries(values)) {
      updateIssueRegistrationFormField(
        "stage_2",
        key,
        value as string | boolean
      );
    }
    mutate();
  };

  return (
    <div className="rounded-lg border-none bg-transparent px-10">
      {contextHolder}
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        {/* Business Information Section */}
        <section
          id="business_information"
          className="mb-8 rounded-lg border bg-white p-6"
        >
          <h2 className="mb-6 text-2xl font-semibold">Business Information</h2>

          <Form.Item
            label="Business Name"
            name="business_name"
            initialValue={stage_1.business_name}
            hasFeedback
          >
            <Input readOnly />
          </Form.Item>

          <Form.Item
            label="Trade Name"
            name="trade_name"
            initialValue={stage_1.trade_name}
            hasFeedback
          >
            <Input readOnly />
          </Form.Item>

          <Form.Item
            label="Field of Business"
            name="field_of_business"
            initialValue={stage_1.field_of_business}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please select at least one field of business!",
              },
            ]}
          >
            <Select
              mode="multiple"
              placeholder="Select Field of Business"
              allowClear
            >
              {fieldOfBusinessOptions.map((business) => (
                <Option key={business} value={business}>
                  {business}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Business Description"
            name="business_description"
            initialValue={stage_2.business_description}
            hasFeedback
            rules={[
              { required: true, message: "Business description is required!" },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            label="Website"
            name="website"
            initialValue={stage_2.website}
            hasFeedback
            rules={[
              { type: "url", message: "Enter a valid URL" },
              { required: true, message: "Website is required" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Capital in ETB"
            name="capital"
            initialValue={stage_2.capital}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please enter your business capital!",
              },
              {
                type: "number",
                min: 0,
                message: "Capital must be a positive number",
              },
            ]}
          >
            <InputNumber min={0} step={0.01} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="TIN"
            name="tin_number"
            initialValue={stage_1.tin_number}
            hasFeedback
            rules={[
              { required: true, message: "TIN is required!" },
              { len: 10, message: "TIN must be exactly 10 characters" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="VAT (Optional)"
            name="vat_number"
            initialValue={stage_1.vat_number}
            hasFeedback
            rules={[
              {
                validator: (_, value) =>
                  value && value.length !== 10
                    ? Promise.reject(
                        new Error("VAT must be exactly 10 characters")
                      )
                    : Promise.resolve(),
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Business License/Registration Number"
            name="business_license_number"
            initialValue={stage_2.business_license_number}
            hasFeedback
            rules={[
              {
                required: true,
                message: "License/Registration Number is required!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Date of Establishment"
            name="date_of_establishment"
            initialValue={dayjs(stage_2.date_of_establishment, DATE_FORMAT)}
            hasFeedback
            rules={[
              { required: true, message: "Date of establishment is required!" },
            ]}
          >
            <DatePicker format={DATE_FORMAT} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Renewal Date"
            name="renewal_date"
            initialValue={dayjs(stage_2.renewal_date, DATE_FORMAT)}
            hasFeedback
            rules={[{ required: true, message: "Renewal date is required!" }]}
          >
            <DatePicker format={DATE_FORMAT} style={{ width: "100%" }} />
          </Form.Item>
        </section>

        {/* Business Address Section */}
        <section
          className="mb-8 rounded-lg border bg-white p-6"
          id="business_address"
        >
          <h2 className="mb-6 text-2xl font-semibold">Business Address</h2>

          <Form.Item
            label="Business Address"
            name="business_address.business_address"
            initialValue={stage_2.business_address.business_address}
            hasFeedback
            rules={[
              { required: true, message: "Business address is required!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Region"
            name="business_address.region"
            initialValue={stage_2.business_address.region}
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
            label="Zone/Sub City"
            name="business_address.zone"
            initialValue={stage_2.business_address.zone}
            hasFeedback
            rules={[{ required: true, message: "Zone/Sub City is required!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Woreda"
            name="business_address.woreda"
            initialValue={stage_2.business_address.woreda}
            hasFeedback
            rules={[{ required: true, message: "Woreda is required!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Kebele"
            name="business_address.kebele"
            initialValue={stage_2.business_address.kebele}
            hasFeedback
            rules={[{ required: true, message: "Kebele is required!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="House No"
            name="business_address.house_number"
            initialValue={stage_2.business_address.house_number}
            hasFeedback
            rules={[{ required: true, message: "House number is required!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Geolocation"
            name="business_address.geo_location"
            initialValue={stage_2.business_address.geo_location}
            hasFeedback
          >
            <Input placeholder="Enter Coordinates" />
          </Form.Item>
        </section>

        {/* Contact Information Section */}
        <section
          className="mb-8 rounded-lg border bg-white p-6"
          id="contact_information"
        >
          <h2 className="mb-6 text-2xl font-semibold">Contact Information</h2>

          <Form.Item
            label="Telephone Number"
            name="telephone"
            hasFeedback
            rules={[
              { required: true, message: "Telephone number is required!" },
              {
                pattern: /^\+?[1-9]\d{1,14}$/,
                message: "Enter a valid phone number format!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            hasFeedback
            rules={[
              {
                required: true,
                type: "email",
                message: "Valid email is required!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </section>

        {/* Company Structure Section */}
        <section
          className="mb-8 rounded-lg border bg-white p-6"
          id="company_structure"
        >
          <h2 className="mb-6 text-2xl font-semibold">Company Structure</h2>

          <Form.Item
            label="General Manager Name"
            name="general_manager_contact.name"
            initialValue={stage_1.general_manager_contact.name}
            hasFeedback
            rules={[
              { required: true, message: "General Manager Name is required!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Number of Shareholders"
            name="number_of_stakeholders"
            initialValue={stage_2.number_of_stakeholders}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Number of shareholders is required!",
              },
              {
                type: "number",
                min: 1,
                message: "Must be at least 1 shareholder",
              },
            ]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Number of Employees"
            name="number_of_employees"
            initialValue={stage_2.number_of_employees}
            hasFeedback
            rules={[
              { required: true, message: "Number of employees is required!" },
              {
                type: "number",
                min: 1,
                message: "Must be at least 1 employee",
              },
            ]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>
        </section>

        {/* File Attachments Section */}
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

        {/* Submit Button */}
        <div className="mt-20 flex space-x-4">
          <Button type="primary" htmlType="submit" size="large">
            Continue
          </Button>
        </div>
      </Form>
    </div>
  );
}
