"use server";

import axiosInstance from "../axiosInstance";
import getErrorMessage from "../getErrorMessage";

export async function verify_email(payload: string) {
  try {
    const response = await axiosInstance.patch("verify-email/", {
      token: payload,
    });
    return { ok: true, message: response.data };
  } catch (error: any) {
    return { ok: false, message: getErrorMessage(error) };
  }
}
