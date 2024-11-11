"use client";

import { useEffect } from "react";

import ProgressSteps from "@/components/progress-steps";
import {
  RegistrationStepType,
  useFormProgressStore,
} from "@/store/form-progress-store";

import {
  CampaignInformationForm,
  CampaignStorySubmission,
  PublicCampaignProfileSetup,
} from "./_components";

const campaignRegistrationSteps: RegistrationStepType[] = [
  {
    title: "Campaign Information",
    completed: false,
    subSteps: [
      {
        title: "Business and Project Overview",
        href: "business_and_project_overview",
        completed: false,
      },
      {
        title: "Market and Business Model",
        href: "market_and_business_model",
        completed: false,
      },
      {
        title: "Financial Information and Projections",
        href: "financial_information_and_projections",
        completed: false,
      },
      {
        title: "Funding and Financing Details",
        href: "funding_and_financing_details",
        completed: false,
      },
      {
        title: "Additional Information and Finalization",
        href: "additional_information_and_finalization",
        completed: false,
      },
    ],
    content: <CampaignInformationForm />,
  },
  {
    title: "Campaign Story Submission",
    completed: false,
    subSteps: [
      {
        title: "Campaign Information",
        href: "campaign_information",
        completed: false,
      },
      {
        title: "Add Media to Campaign Story",
        href: "add_media_to_campaign_story",
        completed: false,
      },
      {
        title: "Preview and Save Story",
        href: "preview_and_save_story",
        completed: false,
      },
    ],
    content: <CampaignStorySubmission />,
  },
  {
    title: "Public Campaign Profile Setup",
    completed: false,
    subSteps: [
      {
        title: "Campaign Basic Information",
        href: "campaign_basic_information",
        completed: false,
      },
      {
        title: "Bank Details",
        href: "bank_details",
        completed: false,
      },
      {
        title: "Campaign Overview and Visual Branding",
        href: "campaign_overview_and_visual_branding",
        completed: false,
      },
      {
        title: "Support Information",
        href: "support_information",
        completed: false,
      },
    ],
    content: <PublicCampaignProfileSetup />,
  },
];

export default function CampaignRegistration() {
  const { steps, currentMainStep, updateFormProgressStoreField } =
    useFormProgressStore();

  useEffect(() => {
    updateFormProgressStoreField("steps", campaignRegistrationSteps);
  }, []);
  return (
    <main className="m-auto mb-52 max-w-contentwidth pt-36">
      <h1 className="text-form-title">
        Application Form for{" "}
        <span className="text-form-name">Campaign Registration</span>
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
