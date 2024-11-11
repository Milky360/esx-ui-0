"use client";

import { useEffect, useState } from "react";

import ProgressSteps from "@/components/progress-steps";
import {
  RegistrationStepType,
  useFormProgressStore,
} from "@/store/form-progress-store";

import {
  CorporateInvestor,
  DiasporaInvestor,
  IndividualInvestor,
  InvestorPersonalInformation,
  InvestorsProfileSetup,
  NonEthiopianInvestor,
} from "./_components";

type InvestorType = "corporate" | "diaspora" | "individual" | "nonethiopian";

const getInvestorRegistrationSteps = (
  investorType: InvestorType
): RegistrationStepType[] => {
  return [
    {
      title: "Investor Registration",
      completed: false,
      subSteps: [
        { title: "Full Name", href: "full_name", completed: false },
        { title: "Email Address", href: "email_address", completed: false },
        { title: "Password", href: "password", completed: false },
      ],
      content: <InvestorPersonalInformation />,
    },
    {
      title: "Investor Basic Information",
      completed: false,
      subSteps:
        investorType === "corporate"
          ? [
              {
                title: "Registration Form",
                href: "registration_form",
                completed: false,
              },
              {
                title: "Identity Verification",
                href: "identity_verification",
                completed: false,
              },
              {
                title: "Business Information",
                href: "business_information",
                completed: false,
              },
              {
                title: "Business Location",
                href: "business_location",
                completed: false,
              },
              {
                title: "Contact Information",
                href: "contact_information",
                completed: false,
              },
              {
                title: "Terms and Conditions",
                href: "terms_and_conditions",
                completed: false,
              },
              {
                title: "File Attachments",
                href: "file_attachments",
                completed: false,
              },
            ]
          : investorType === "diaspora"
            ? [
                { title: "National ID", href: "national_id", completed: false },
                { title: "Passport", href: "passport", completed: false },
              ]
            : investorType === "individual"
              ? [
                  {
                    title: "Registration Form",
                    href: "registration_form",
                    completed: false,
                  },
                  {
                    title: "Identity Verification",
                    href: "identity_verification",
                    completed: false,
                  },
                  {
                    title: "Business Information",
                    href: "business_information",
                    completed: false,
                  },
                  {
                    title: "Business Location",
                    href: "business_location",
                    completed: false,
                  },
                  {
                    title: "Contact Information",
                    href: "contact_information",
                    completed: false,
                  },
                  {
                    title: "Registration Details",
                    href: "registration_details",
                    completed: false,
                  },
                  {
                    title: "File Attachments",
                    href: "file_attachments",
                    completed: false,
                  },
                ]
              : investorType === "nonethiopian"
                ? [
                    {
                      title: "Registration Form",
                      href: "registration_form",
                      completed: false,
                    },
                    {
                      title: "Identity Verification",
                      href: "identity_verification",
                      completed: false,
                    },
                    {
                      title: "Business Information",
                      href: "business_information",
                      completed: false,
                    },
                    {
                      title: "Business Location",
                      href: "business_location",
                      completed: false,
                    },
                    {
                      title: "Contact Information",
                      href: "contact_information",
                      completed: false,
                    },
                    {
                      title: "Registration Details",
                      href: "registration_details",
                      completed: false,
                    },
                    {
                      title: "File Attachments",
                      href: "file_attachments",
                      completed: false,
                    },
                  ]
                : [],
      content:
        investorType === "corporate" ? (
          <CorporateInvestor />
        ) : investorType === "diaspora" ? (
          <DiasporaInvestor />
        ) : investorType === "individual" ? (
          <IndividualInvestor />
        ) : investorType === "nonethiopian" ? (
          <NonEthiopianInvestor />
        ) : null,
    },
    {
      title: "Profile Setup",
      completed: false,
      subSteps: [
        {
          title: "Profile Setup Form",
          href: "profile_setup_form",
          completed: false,
        },
        {
          title: "Refund Bank Account Details",
          href: "refund_bank_account_details",
          completed: false,
        },
      ],
      content: <InvestorsProfileSetup />,
    },
  ];
};

export default function InvestorRegistration() {
  const [investorType] = useState<InvestorType>("nonethiopian");
  const { steps, currentMainStep, updateFormProgressStoreField } =
    useFormProgressStore();

  useEffect(() => {
    updateFormProgressStoreField(
      "steps",
      getInvestorRegistrationSteps(investorType)
    );
  }, [investorType, updateFormProgressStoreField]);

  const handleInvestorType = () => {
    switch (investorType) {
      case "corporate":
        return "Corporate";
      case "diaspora":
        return "Diaspora";
      case "individual":
        return "Individual";
      case "nonethiopian":
        return "Non Ethiopian";
      default:
        return null;
    }
  };
  return (
    <main className="m-auto mb-52 max-w-contentwidth pt-36">
      <h1 className="text-form-title">
        Application Form for{" "}
        <span className="text-form-name">
          individual
          {`${handleInvestorType()} Investor Registration`}
        </span>
      </h1>

      <div className="flex">
        <aside className="sticky top-28 flex h-[100%] space-y-10">
          <ProgressSteps />
        </aside>
        <article className="flex-1">
          {steps.length ? steps[currentMainStep].content : null}
        </article>
      </div>
    </main>
  );
}
