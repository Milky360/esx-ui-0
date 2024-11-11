"use server";

import {
  BasicInformationFormType,
  ProfileSetupFormType,
} from "@/types/issuer-type";

import axiosInstance from "../axios-instance";
import getErrorMessage from "../get-error-message";

export async function create_issuer_basic_information(
  payload: BasicInformationFormType
) {
  try {
    const response = await axiosInstance.post("issuers/", payload);

    console.log("response:", response.data);

    return { ok: true, message: response.data };
  } catch (error: any) {
    return { ok: false, message: getErrorMessage(error) };
  }
}

export async function update_issuer_basic_information(
  payload: ProfileSetupFormType
) {
  try {
    const response = await axiosInstance.put("issuers/", payload);

    console.log("response:", response.data);

    return { ok: true, message: response.data };
  } catch (error: any) {
    return { ok: false, message: getErrorMessage(error) };
  }
}
