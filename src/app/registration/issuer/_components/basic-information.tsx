"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { useMutation } from "@tanstack/react-query";
import { Button, Checkbox, Form, Input, Select, notification } from "antd";
import type { NotificationArgsProps } from "antd";

import { create_issuer_basic_information } from "@/actions/issuers/action";
import { useFormProgressStore } from "@/store/form-progress-store";
import { useIssuerRegistrationStore } from "@/store/issuer-registration-form-store";

const { Option } = Select;

type BasicInformationType = {
  business_name: string;
  business_type: string;
  trade_name: string;
  field_of_business: string[];
  tin_number: string;
  vat_number: string;
  "general_manager.name": string;
  "general_manager.email": string;
  "general_manager.mobile": string;
  "administrator.user.full_name": string;
  "administrator.title": string;
  "administrator.user.email": string;
  "administrator.user.phone_number": string;
  "administrator.user.password": string;
  terms_and_condition: boolean;
  password: string;
  confirmPassword: string;
};

export default function BasicInformation() {
  const { stage_1, updateIssueRegistrationFormField } =
    useIssuerRegistrationStore();
  const { completeMainStep, currentMainStep, updateFormProgressStoreField } =
    useFormProgressStore();
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const searchParams = useSearchParams();
  const stage = searchParams.get("stage");

  useEffect(() => {
    if (stage)
      updateFormProgressStoreField("currentMainStep", Number(stage) - 1);
  }, [stage]);

  const { mutate } = useMutation({
    mutationKey: ["create_issuer_basic_information"],
    mutationFn: async () => {
      const response = await create_issuer_basic_information(stage_1);
      if (!response.ok) throw response;
      return response.message;
    },
    onMutate: () => {
      api.destroy();
      api.info({
        message: "Creating issuer basic information",
        placement: "topRight",
      });
    },
    onSuccess: (data) => {
      api.destroy();
      api.success({
        message:
          "Thank you for registering! Please proceed to complete your profile.",
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

  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasLower: false,
    hasUpper: false,
    hasNumber: false,
    hasSpecial: false,
  });

  const fieldOfBusinessOptions = [
    "Retail",
    "Wholesale",
    "Manufacturing",
    "Services",
    "Agriculture",
    "Construction",
  ];

  const handlePasswordValidation = (value: string) => {
    const validations = {
      minLength: value.length >= 8,
      hasLower: /[a-z]/.test(value),
      hasUpper: /[A-Z]/.test(value),
      hasNumber: /\d/.test(value),
      hasSpecial: /[@$!%*?&]/.test(value),
    };
    setPasswordValidation(validations);
  };

  const handleSubmit = async (values: BasicInformationType) => {
    for (const [key, value] of Object.entries(values)) {
      updateIssueRegistrationFormField(
        "stage_1",
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
        {/* Company Information Section */}
        <section
          className="registration-form-border mb-8 rounded-lg bg-white p-6"
          id="company_information"
        >
          <h2 className="mb-6 text-2xl font-semibold">Company Information</h2>

          <Form.Item
            label="Business Name"
            name="business_name"
            initialValue={stage_1.business_name}
            rules={[
              { required: true, message: "Business Name is required!" },
              { max: 100, message: "Cannot exceed 100 characters!" },
              {
                pattern: /^[A-Za-z\s]+$/,
                message: "Must contain only letters and spaces!",
              },
            ]}
            hasFeedback
          >
            <Input type="text" placeholder="Enter Business Name" />
          </Form.Item>

          <Form.Item
            label="Trade Name"
            name="trade_name"
            initialValue={stage_1.trade_name}
            rules={[
              { required: true, message: "Trade Name is required!" },
              { max: 100, message: "Cannot exceed 100 characters!" },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter Trade Name" />
          </Form.Item>

          <Form.Item
            label="Field of Business"
            name="field_of_business"
            initialValue={stage_1.field_of_business}
            rules={[
              { required: true, message: "Please select a field of business!" },
            ]}
            hasFeedback
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
            label="TIN (Tax Identification Number)"
            name="tin_number"
            initialValue={stage_1.tin_number}
            rules={[
              { required: true, message: "TIN is required!" },
              { max: 15, message: "Cannot exceed 15 characters!" },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter TIN" />
          </Form.Item>

          <Form.Item
            label="VAT Number"
            name="vat_number"
            initialValue={stage_1.vat_number}
            rules={[
              { required: true, message: "VAT Number is required!" },
              { max: 15, message: "Cannot exceed 15 characters!" },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter VAT Number" />
          </Form.Item>

          {/* <Form.Item label="Business Name" name="business_name" hasFeedback>
            <Input placeholder="Enter Business Name (Optional)" />
          </Form.Item> */}

          <Form.Item
            label="Business Type"
            name="business_type"
            initialValue={stage_1.business_type}
            rules={[{ required: true, message: "Business Type is required!" }]}
          >
            <Input readOnly />
          </Form.Item>
        </section>

        {/* Basic Information Section */}
        <section
          className="registration-form-border mb-8 rounded-lg bg-white p-6"
          id="basic_information_entry"
        >
          <h2 className="mb-6 text-2xl font-semibold">
            Basic Information Entry
          </h2>

          <Form.Item
            label="General Manager or CEO Full Name"
            name="general_manager_contact.name"
            initialValue={stage_1.general_manager_contact.name}
            rules={[
              { required: true, message: "Full Name is required!" },
              { max: 100, message: "Cannot exceed 100 characters!" },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter Full Name" />
          </Form.Item>

          <Form.Item
            label="General Manager Email"
            name="general_manager_contact.email"
            initialValue={stage_1.general_manager_contact.email}
            rules={[
              { required: true, message: "Email is required!" },
              { type: "email", message: "Invalid email format!" },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter Email" />
          </Form.Item>

          <Form.Item
            label="General Manager Phone Number"
            name="general_manager_contact.phone_number"
            initialValue={stage_1.general_manager_contact.phone_number}
            rules={[
              { required: true, message: "Phone Number is required!" },
              { max: 15, message: "Cannot exceed 15 characters!" },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter Phone Number" />
          </Form.Item>

          <Form.Item
            label="Administrator Person Full Name"
            name="administrator.user.full_name"
            initialValue={stage_1.administrator.user.full_name}
            rules={[
              { required: true, message: "Full Name is required!" },
              { max: 100, message: "Cannot exceed 100 characters!" },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter Full Name" />
          </Form.Item>

          <Form.Item
            label="Administrator Person Title within the Company"
            name="administrator.title"
            initialValue={stage_1.administrator.title}
            rules={[
              { required: true, message: "Title is required!" },
              { max: 50, message: "Cannot exceed 50 characters!" },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter Title" />
          </Form.Item>

          <Form.Item
            label="Administrator Person Phone Number"
            name="administrator.user.phone_number"
            initialValue={stage_1.administrator.user.phone_number}
            rules={[
              { required: true, message: "Phone Number is required!" },
              { max: 15, message: "Cannot exceed 15 characters!" },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter Phone Number" />
          </Form.Item>

          <Form.Item
            label="Administrator Person Primary Email"
            name="administrator.user.email"
            initialValue={stage_1.administrator.user.email}
            rules={[
              { required: true, message: "Email is required!" },
              { type: "email", message: "Invalid email format!" },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter Email" />
          </Form.Item>
        </section>

        {/* Password Section */}
        <section
          className="registration-form-border mb-8 rounded-lg bg-white p-6"
          id="password"
        >
          <h2 className="mb-6 text-xl font-semibold">Password</h2>

          <Form.Item
            label="Password"
            name="password"
            initialValue={stage_1.administrator.user.password}
            rules={[{ required: true, message: "Password is required!" }]}
            hasFeedback
          >
            <Input.Password
              placeholder="Enter Password"
              onChange={(e) => handlePasswordValidation(e.target.value)}
            />
          </Form.Item>

          <ul className="mb-4 list-inside list-disc">
            <li
              className={
                passwordValidation.minLength ? "text-green-600" : "text-red-600"
              }
            >
              At least 8 characters
            </li>
            <li
              className={
                passwordValidation.hasLower ? "text-green-600" : "text-red-600"
              }
            >
              At least 1 lowercase letter
            </li>
            <li
              className={
                passwordValidation.hasUpper ? "text-green-600" : "text-red-600"
              }
            >
              At least 1 uppercase letter
            </li>
            <li
              className={
                passwordValidation.hasNumber ? "text-green-600" : "text-red-600"
              }
            >
              At least 1 number
            </li>
            <li
              className={
                passwordValidation.hasSpecial
                  ? "text-green-600"
                  : "text-red-600"
              }
            >
              At least 1 special character (@$!%*?&)
            </li>
          </ul>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Confirm Password is required!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>
        </section>

        {/* Terms and Conditions Section */}
        <Form.Item
          name="terms_and_condition"
          valuePropName="checked"
          initialValue={stage_1.terms_and_condition}
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error("You must agree to the terms and conditions!")
                    ),
            },
          ]}
        >
          <Checkbox>I agree to the terms and conditions</Checkbox>
        </Form.Item>

        {/* Submit Section */}
        <div className="mt-20 flex space-x-4">
          <Button type="primary" htmlType="submit" size="large">
            Continue
          </Button>
          <Button type="default" htmlType="submit" size="large">
            Save & Continue Later
          </Button>
        </div>
      </Form>
    </div>
  );
}
