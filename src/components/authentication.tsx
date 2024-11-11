"use client";

import { DownOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Divider,
  Dropdown,
  Form,
  FormProps,
  Input,
  MenuProps,
  Modal,
  Space,
} from "antd";
import Title from "antd/es/typography/Title";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CustomIcon, GoogleIcon, LinkedInIcon, OrIcon } from "./icons";
import LinkedIn from "next-auth/providers/linkedin";
import { signIn } from "next-auth/react";

const items: MenuProps["items"] = [
  {
    label: (
      <Link href="http://localhost:3000/registration/issuer?stage=1">
        Register as Issuer
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link href="http://localhost:3000/registration/issuer?stage=1">
        Register as Investor
      </Link>
    ),
    key: "1",
  },
  {
    label: (
      <Link href="http://localhost:3000/registration/issuer?stage=1">
        Register as Campaign
      </Link>
    ),
    key: "3",
  },
];

export default function Authentication() {
  const [form] = Form.useForm();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const authParam = searchParams.get("auth");
    setIsOpen(authParam === "signin" ? true : false);
  }, [searchParams]);

  const removeAuthQueryParam = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("auth"); // Remove the "auth" query parameter
    close();

    // Check if the path is "/"
    if (pathname === "/") {
      // If on the root path, remove all query parameters
      router.push(pathname);
    } else {
      // Otherwise, just remove the "auth" parameter and keep others
      router.push(`${pathname}?${params.toString()}`);
    }
  };

  const onFinish = async (formData: any) => {
    console.log("🚀 ~ onFinish ~ formData:", formData);
    const response = await signIn("cred-login", {}, formData);
  };

  return (
    <Modal open={isOpen} onCancel={removeAuthQueryParam} footer={null}>
      <div className="flex items-center justify-center gap-10 my-10">
        <p>Don’t Have Account ?</p>
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Register
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
      <Title level={3} className="text-center">
        Login into your account
      </Title>
      <Form
        name="login_form"
        layout="vertical"
        autoComplete="off"
        className="mt-5"
        form={form}
        onFinish={onFinish}
        initialValues={{ remember: true }}
      >
        <Form.Item
          label="Email or Phone Number"
          name="email_or_phone"
          labelCol={{ className: "text-gray-700 font-[530]" }}
          rules={[
            {
              required: true,
              message: "Please input your Email or Phone Number!",
            },
          ]}
          className="!mb-4"
        >
          <Input className="w-full max-w-[475px] h-[48px] border border-gray-300 rounded" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password className="w-full max-w-[475px] h-[48px] border border-gray-300 rounded" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <div className="flex justify-between items-center w-full">
            <Checkbox className="ml-1 font-medium">Remember me</Checkbox>
            <Link className="text-[#FF0000] hover:underline mr-[5%]" href={""}>
              Forgot Password
            </Link>
          </div>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="w-full"
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
      <Divider style={{ borderColor: "black" }}>or</Divider>
      <Button size="large" className="w-full mb-3 py-3">
        <GoogleIcon />
        Continue with Google
      </Button>
      <Button size="large" className="w-full">
        <LinkedInIcon />
        Continue with Linkedin
      </Button>
    </Modal>
  );
}
