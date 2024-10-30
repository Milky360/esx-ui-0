"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, Result } from "antd";

export default function Error(): JSX.Element {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error") || "Unknown Error";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
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
