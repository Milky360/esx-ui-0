import React from "react";

import { MessageOutlined } from "@ant-design/icons";
import { Result } from "antd";

export default function ErrorPage(): JSX.Element {
  return (
    <div className="flex h-auto min-h-[calc(100vh-70px)] w-full flex-row items-center justify-center transition-all duration-500">
      <div className="flex w-full min-w-[350px] max-w-lg flex-col items-center justify-center rounded-lg border p-10 shadow-lg">
        <Result
          icon={<MessageOutlined />}
          title="Great, we've sent an email"
          subTitle="Check your email for a link. You might want to look in your spam folder too."
        />
      </div>
    </div>
  );
}
