"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { useMutation } from "@tanstack/react-query";
import { notification } from "antd";

import { verify_email } from "@/actions/auth/action";

export default function Verification() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();
  const [api, contextHolder] = notification.useNotification();

  const { mutate } = useMutation({
    mutationKey: ["verify-email"],
    mutationFn: async (token: string) => {
      const response = await verify_email(token);
      if (!response.ok) throw response;
      return response.message;
    },
    onSuccess: (data) => {
      api.destroy();
      api.info({
        message: data.message,
        placement: "topRight",
      });
      router.push("/?auth=signin");
    },
    onError: (error: any) => {
      api.destroy();
      api.error({
        message: error.message,
        placement: "topRight",
      });
    },
  });

  useEffect(() => {
    if (token) mutate(token);
  }, [token]);

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center overflow-hidden bg-white">
      {contextHolder}
      Verifying Your Email
    </div>
  );
}
