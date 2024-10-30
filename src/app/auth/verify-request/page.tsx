import React from "react";
import { Result } from "antd";
import { MessageOutlined } from "@ant-design/icons";

export default function ErrorPage(): JSX.Element {
  return (
    <div className="w-full h-auto flex flex-row min-h-[calc(100vh-70px)] justify-center items-center transition-all duration-500">
      <div className="w-full max-w-lg min-w-[350px] flex flex-col items-center justify-center p-10 border rounded-lg shadow-lg">
        <Result
          icon={<MessageOutlined />}
          title="Great, we've sent an email"
          subTitle="Check your email for a link. You might want to look in your spam folder too."
        />
      </div>
    </div>
  );
}
