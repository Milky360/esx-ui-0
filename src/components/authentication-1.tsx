"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";

import { DownOutlined } from "@ant-design/icons";
import type { FormProps, MenuProps } from "antd";
import { Checkbox, Dropdown, Form, Input, Space } from "antd";
import { signIn } from "next-auth/react";

import TextWrapper from "@/components/text-wrapper";
import { ComponentProps, FieldType } from "@/types/IUser";
import { openNotification } from "@/utils/notification";

import CustomButton from "./custom-button";
import { CustomIcon, GoogleIcon, LinkedInIcon, OrIcon } from "./icons";

export default function Authentication({ close }: ComponentProps) {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formRef: any = useRef();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);

  const currentPath = window.location.pathname;
  console.log("path name ===>", currentPath);

  const removeAuthQueryParam = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("auth"); // Remove the "auth" query parameter
    close();

    // Check if the path is "/"
    if (window.location.pathname === "/") {
      // If on the root path, remove all query parameters
      router.push(window.location.pathname);
    } else {
      // Otherwise, just remove the "auth" parameter and keep others
      router.push(`${window.location.pathname}?${params.toString()}`);
    }
  };

  const handleOpenChange = (flag: boolean) => {
    setOpen(flag);
  };

  const onClick: MenuProps["onClick"] = ({ key }) => {
    console.log(" dropdown clicked", key);
    if (key === "1") {
      router.push("/page1");
    } else if (key === "2") {
      router.push("/page2");
    }
  };

  const items: MenuProps["items"] = [
    {
      label: "As an Issuer",
      key: "1",
    },
    {
      label: "As an Investor",
      key: "2",
    },
  ];

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    signIn("cred-login", { callbackUrl: currentPath }, values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    openNotification(
      <TextWrapper text="check" isHeader={true} />,
      <TextWrapper text="Already applied to this Job!" />,
      <CustomIcon type={"success"} />,
      "success"
    );

    console.log("Failed:", errorInfo);
  };
  return (
    <div className="relative z-30 grid min-h-screen items-center justify-items-center bg-black bg-opacity-70">
      <div className="bg-signin_bg shadow-custom-bottom-right flex h-[842px] min-h-[400px] w-[584px] flex-col py-[1%]">
        <div className="mb-[3%] mr-[3%] flex justify-end">
          <Image
            src="/close_icon.svg"
            alt=""
            className="h-4 w-5 cursor-pointer hover:opacity-80"
            onClick={removeAuthQueryParam}
          />
        </div>

        <div className="flex flex-row-reverse pr-[8%]">
          <Dropdown
            menu={{ items, onClick }}
            open={open}
            onOpenChange={handleOpenChange}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space className="text-link_btn ml-[44px] cursor-pointer">
                Register
              </Space>
              <DownOutlined className="ml-2 font-bold" />
            </a>
          </Dropdown>

          <p>{"Don't have an Account?"}</p>
        </div>

        <div className="mt-[64px] flex flex-col items-center">
          <p className="text-center text-[24px] font-bold">
            Login Into Your Account
          </p>

          <Form
            name="login_form"
            layout="vertical"
            className="!mt-12"
            ref={formRef}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
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
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              className="!mb-4"
            >
              <Input.Password className="h-[48px] w-full max-w-[475px] rounded border border-gray-300" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <div className="flex w-full items-center justify-between">
                <Checkbox className="ml-1 font-medium">Remember me</Checkbox>
                <Link
                  className="mr-[5%] text-[#FF0000] hover:underline"
                  href={""}
                >
                  Forgot Password
                </Link>
              </div>
            </Form.Item>

            <Form.Item>
              <CustomButton
                text="Sign In"
                color="!bg-link_btn"
                type="default"
                htmlType="submit"
              />
            </Form.Item>
          </Form>
          <OrIcon />
          <CustomButton
            text="Continue with Google"
            onClick={() => {
              console.log("google button");
              signIn("google", { callbackUrl: currentPath });
            }}
            type="default"
            icon={<GoogleIcon />}
          />
          <CustomButton
            text="Continue with Linkedin"
            onClick={() =>
              signIn("linkedin", { callbackUrl: window.location.pathname })
            }
            type="default"
            icon={<LinkedInIcon />}
          />
        </div>
      </div>
    </div>
  );
}
