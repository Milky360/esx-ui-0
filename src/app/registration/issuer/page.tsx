"use client";

import { useEffect } from "react";

import ProgressSteps from "@/components/progress-steps";
import {
  RegistrationStepType,
  useFormProgressStore,
} from "@/store/form-progress-store";

import {
  BasicInformation,
  BusinessPlanStrategy,
  FinancialIssuerPerformance,
  ProfileSetup,
} from "./_components";

const issuerRegistrationSteps: RegistrationStepType[] = [
  {
    title: "Basic Information",
    completed: false,
    subSteps: [
      {
        title: "Company Information",
        href: "company_information",
        completed: false,
      },
      {
        title: "Basic Information Entry",
        href: "basic_information_entry",
        completed: false,
      },
      { title: "Password", href: "password", completed: false },
    ],
    content: <BasicInformation />,
  },
  {
    title: "Profile Setup",
    completed: false,
    subSteps: [
      {
        title: "Business Information",
        href: "business_information",
        completed: false,
      },
      { title: "Business Address", href: "business_address", completed: false },
      {
        title: "Contact Information",
        href: "contact_information",
        completed: false,
      },
      {
        title: "Company Structure",
        href: "company_structure",
        completed: false,
      },
      { title: "File Attachments", href: "file_attachments", completed: false },
    ],
    content: <ProfileSetup />,
  },
  {
    title: "Business Plan Strategy and Template",
    completed: false,
    subSteps: [
      {
        title: "Executive Summary",
        href: "executive_summary",
        completed: false,
      },
      { title: "Market Analysis", href: "market_analysis", completed: false },
      { title: "Target Market", href: "target_market", completed: false },
      {
        title: "Competitive Advantage",
        href: "competitive_advantage",
        completed: false,
      },
      { title: "Growth Strategy", href: "growth_strategy", completed: false },
      {
        title: "Pitch Deck Upload Section",
        href: "pitch_deck_upload_section",
        completed: false,
      },
      {
        title: "Visual Appeal and Clarity",
        href: "visual_appeal_and_clarity",
        completed: false,
      },
      { title: "Appendices", href: "appendices", completed: false },
      { title: "Glossary Section", href: "glossary_section", completed: false },
    ],
    content: <BusinessPlanStrategy />,
  },
  {
    title: "Financial Issuer Performance",
    completed: false,
    subSteps: [
      {
        title: "Upload Financial Statements",
        href: "upload_financial_statements",
        completed: false,
      },
      { title: "Gross Margin", href: "gross_margin", completed: false },
      { title: "Operating Margin", href: "operating_margin", completed: false },
      { title: "Net Margin", href: "net_margin", completed: false },
      {
        title: "Upload Financial Disclosures and Notes",
        href: "upload_financial_disclosures_and_notes",
        completed: false,
      },
    ],
    content: <FinancialIssuerPerformance />,
  },
];

export default function IssueRegistration() {
  const { steps, currentMainStep, updateFormProgressStoreField } =
    useFormProgressStore();

  useEffect(() => {
    updateFormProgressStoreField("steps", issuerRegistrationSteps);
  }, []);

  return (
    <main className="m-auto mb-52 max-w-contentwidth pt-36">
      <h1 className="text-form-title">
        Application Form for{" "}
        <span className="text-form-name">Issuer Registration</span>
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
