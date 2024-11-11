import { create } from "zustand";

import {
  BasicInformationFormType,
  ProfileSetupFormType,
} from "@/types/issuer-type";

const stage_1_initial_data: BasicInformationFormType = {
  business_name: "",
  business_type: "Share Company",
  trade_name: "",
  field_of_business: "Construction",
  tin_number: "",
  vat_number: "",
  terms_and_condition: false,
  general_manager_contact: {
    name: "",
    email: "",
    phone_number: "",
  },
  administrator: {
    user: {
      full_name: "",
      email: "",
      phone_number: "",
      password: "",
      user_type: "Issuer",
    },
    title: "",
  },
  business_description: "",
  website: "",
  capital: 0,
  business_license_number: "",
  number_of_stakeholders: 0,
  number_of_employees: 0,
  date_of_establishment: "",
  renewal_date: "",
  business_address: {
    business_address: "",
    region: "",
    zone: "",
    woreda: "",
    kebele: "",
    house_number: "",
    geo_location: "",
  },
};

const stage_2_initial_data: ProfileSetupFormType = {
  business_description: "",
  website: "",
  capital: 0,
  business_license_number: "",
  number_of_stakeholders: 0,
  number_of_employees: 0,
  date_of_establishment: "",
  renewal_date: "",
  business_address: {
    business_address: "",
    region: "",
    zone: "",
    woreda: "",
    kebele: "",
    house_number: "",
    geo_location: "",
  },
};

const stage_1_sample_data: BasicInformationFormType = {
  business_name: "Elite Construction Co",
  business_type: "Share Company",
  trade_name: "Elite Builders",
  field_of_business: "Construction",
  tin_number: "123456789",
  vat_number: "123456789",
  terms_and_condition: true,

  general_manager_contact: {
    name: "Samuel Getachew",
    email: "samuel.getachew@example.com",
    phone_number: "+251912345678",
  },

  administrator: {
    user: {
      full_name: "Yeabsera",
      email: "yeabsera@360ground.com",
      phone_number: "+251931470920",
      password: "password",
      user_type: "Issuer",
    },
    title: "Admin Officer",
  },
  business_description:
    "Leading provider of IT solutions and consulting services.",
  website: "https://www.examplebusiness.com",
  capital: 5000000,
  business_license_number: "BLN123456",
  date_of_establishment: "2020-11-29",
  renewal_date: "2024-11-29",

  business_address: {
    business_address: "123 Innovation Avenue",
    region: "Addis Ababa",
    zone: "Central",
    woreda: "04",
    kebele: "12",
    house_number: "56A",
    geo_location: "9.0221, 38.7469",
  },

  number_of_stakeholders: 3,
  number_of_employees: 50,
};

const stage_2_sample_data: ProfileSetupFormType = {
  business_description:
    "Leading provider of IT solutions and consulting services.",
  website: "https://www.examplebusiness.com",
  capital: 5000000,
  business_license_number: "BLN123456",
  date_of_establishment: "2020-11-29",
  renewal_date: "2024-11-29",

  business_address: {
    business_address: "123 Innovation Avenue",
    region: "Addis Ababa",
    zone: "Central",
    woreda: "04",
    kebele: "12",
    house_number: "56A",
    geo_location: "9.0221, 38.7469",
  },

  number_of_stakeholders: 3,
  number_of_employees: 50,
};

export type IssuerRegistrationFormStoreType = {
  stage_1: BasicInformationFormType;
  stage_2: ProfileSetupFormType;
};

export type IssuerRegistrationFormStoreActions = {
  updateIssueRegistrationFormField: (
    stage: keyof IssuerRegistrationFormStoreType,
    path: string,
    value: string | boolean
  ) => void;
};

export const useIssuerRegistrationStore = create<
  IssuerRegistrationFormStoreType & IssuerRegistrationFormStoreActions
>()((set) => ({
  stage_1: stage_1_sample_data,
  stage_2: stage_2_sample_data,

  updateIssueRegistrationFormField: (stage, path, value) =>
    set((state) => {
      // Clone the specific stage's data
      const stageData = { ...state[stage] };

      // Split path by dot to handle nested fields
      const keys = path.split(".");
      const lastKey = keys.pop() as string;

      // Drill down to the right level for nested properties
      let current: any = stageData;
      keys.forEach((key, index) => {
        // Only skip on the first key if it doesn't exist in `state[stage]`
        if (index === 1 && key in state[stage]) {
          if (!current[key]) {
            current[key] = {};
          }

          current = current[key];

          // Set the value for the last key
          current[lastKey] = value;

          return { [stage]: stageData };
        }
      });

      return { [stage]: stageData };
    }),
}));
