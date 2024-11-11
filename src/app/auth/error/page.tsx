"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

import { Button, Result } from "antd";

export default function Error(): JSX.Element {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error") || "Unknown Error";

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Result
        status="500"
        title="500"
        subTitle={
          <span>
            Sorry, something went wrong.
            <br />
            Code: <b>{error}</b>
          </span>
        }
        extra={
          <Button
            type="primary"
            onClick={() => {
              router.push("/");
            }}
          >
            Back Home
          </Button>
        }
      />
    </div>
  );
}
