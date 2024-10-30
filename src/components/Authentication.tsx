"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { CustomButton } from "./CustomButton";
import { CustomIcon, GoogleIcon, LinkedInIcon, OrIcon } from "./icons";
import type { FormProps, MenuProps } from "antd";
import { Checkbox, Form, Input, Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { openNotification } from "@src/utils/notification";
import TextWrapper from "@src/components/TextWrapper";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { ComponentProps, FieldType } from "@src/types/IUser";

const Authentication: React.FC<ComponentProps> = ({ close, token }) => {
  const router = useRouter();
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
    <div className=" relative grid items-center justify-items-center min-h-screen z-30 bg-black bg-opacity-70">
      <div className="flex flex-col w-[584px] h-[842px] min-h-[400px] bg-signin_bg shadow-custom-bottom-right py-[1%]">
        <div className="flex justify-end mb-[3%] mr-[3%]">
          <img
            className="w-5 h-4 cursor-pointer hover:opacity-80"
            src="/close_icon.svg"
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
              <DownOutlined className=" font-bold ml-2" />
            </a>
          </Dropdown>

          <p>Don't have an Account?</p>
        </div>

        <div className="flex flex-col mt-[64px] items-center">
          <p className="text-[24px] font-bold text-center">
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
              <Input className="w-full max-w-[475px] h-[48px] border border-gray-300 rounded" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              className="!mb-4"
            >
              <Input.Password className="w-full max-w-[475px] h-[48px] border border-gray-300 rounded" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <div className="flex justify-between items-center w-full">
                <Checkbox className="ml-1 font-medium">Remember me</Checkbox>
                <Link
                  className="text-[#FF0000] hover:underline mr-[5%]"
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
};

export default Authentication;
