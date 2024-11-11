"use client";

import { Button, Form, Input, Select, Checkbox } from "antd";
import React, { useState } from "react";

interface InvestorPersonalInformationFormDataType {
  currentFormCounter: number;
}

const { Option } = Select;

export default function InvestorPersonalInformation() {
  const [form] = Form.useForm();
  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasLower: false,
    hasUpper: false,
    hasNumber: false,
    hasSpecial: false,
  });

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

  const handleSubmit = (values: InvestorPersonalInformationFormDataType) => {};

  return (
    <div className="rounded-lg border-none bg-transparent px-10">
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        {/* Personal Information Section*/}
        <section
          id="personalInformation"
          className="mb-8 rounded-lg border bg-white p-6"
        >
          <h2 className="mb-6 text-2xl font-semibold">Personal Information</h2>

          <Form.Item
            id="full_name"
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
            id="email"
            label="Email Address"
            name="email"
            rules={[
              { required: true, message: "Email is required!" },
              { type: "email", message: "Invalid email format!" },
              { min: 5, message: "Must be at least 5 characters!" },
              { max: 100, message: "Cannot exceed 100 characters!" },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter Email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Password is required!" },
              { min: 8, message: "Must be at least 8 characters!" },
              { max: 64, message: "Cannot exceed 64 characters!" },
            ]}
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

        {/* Investor Type and Contact Information Section*/}
        <section
          className="mb-8 rounded-lg border bg-white p-6"
          id="investorTypeContact"
        >
          <h2 className="mb-6 text-2xl font-semibold">
            Investor Type and Contact Information
          </h2>

          <Form.Item
            label="Investor Type"
            name="investorType"
            rules={[{ required: true, message: "Investor Type is required!" }]}
            hasFeedback
          >
            <Select placeholder="Select Investor Type">
              <Option value="corporate">Corporate</Option>
              <Option value="diaspora">Diaspora</Option>
              <Option value="individual">Individual</Option>
              <Option value="nonethiopian">Non ethiopian</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Contact Information (Optional)"
            name="contactInfo"
            rules={[
              {
                pattern: /^\+?[1-9]\d{1,14}$/,
                message: "Enter a valid phone number format!",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter Phone Number (e.g., +251-9xx-xx-xx-xx)" />
          </Form.Item>
        </section>

        {/* Legal Agreements and Form Validation Section*/}
        <section
          className="mb-8 rounded-lg border bg-white p-6"
          id="legalAgreements"
        >
          <h2 className="mb-6 text-2xl font-semibold">
            Legal Agreements and Form Validation
          </h2>

          <Form.Item
            name="agreeToTerms"
            valuePropName="checked"
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
            <Checkbox>
              I agree to the{" "}
              <a href="/terms" target="_blank" rel="noopener noreferrer">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="/privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </Checkbox>
          </Form.Item>
        </section>

        {/* Submit Section */}
        <div className="mt-20 flex space-x-4">
          <Button type="primary" htmlType="submit" size="large">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
