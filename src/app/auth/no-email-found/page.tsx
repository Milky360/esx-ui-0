"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, Result } from "antd";

export default function ErrorPage(): JSX.Element {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error") || "403";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Result
        status="403"
        title="No Email found"
        subTitle={
          <p>
            It looks like we couldn't find an email associated with your
            account. Try to Register.
            <br />
          </p>
        }
        extra={
          <>
            <Button
              type="primary"
              onClick={() => {
                router.push("/");
              }}
            >
              Go back
            </Button>
          </>
        }
      />
    </div>
  );
}
