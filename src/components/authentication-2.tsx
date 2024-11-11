"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { DownOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Divider,
  Dropdown,
  Form,
  Input,
  MenuProps,
  Modal,
  Space,
} from "antd";
import Title from "antd/es/typography/Title";
import { signIn } from "next-auth/react";

import { GoogleIcon, LinkedInIcon } from "./icons";

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = async (formData: any) => {
    await signIn("cred-login", {}, formData);
  };

  return (
    <Modal open={isOpen} onCancel={removeAuthQueryParam} footer={null}>
      <div className="my-10 flex items-center justify-center gap-10">
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
          <Input className="h-[48px] w-full max-w-[475px] rounded border border-gray-300" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password className="h-[48px] w-full max-w-[475px] rounded border border-gray-300" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <div className="flex w-full items-center justify-between">
            <Checkbox className="ml-1 font-medium">Remember me</Checkbox>
            <Link className="mr-[5%] text-[#FF0000] hover:underline" href={""}>
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
      <Button size="large" className="mb-3 w-full py-3">
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
