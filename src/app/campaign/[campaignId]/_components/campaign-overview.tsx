import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Anchor } from "antd";

import overview from "@/data/campaignDetails/overview.json";

const { Link } = Anchor;

type CampaignOverViewType = {
  about: { aboutUs: string; aboutImage: string };
  visionAndStrategy: {
    visionTitle: string;
    visionDescription: string;
    visionVideo: string;
  };
  strategyForCampaign: Array<{
    key: number;
    title: string;
    description: string;
  }>;
  problemStatement: string;
  solutions: {
    solutionTitle: string;
    solutionsDetails: Array<{ key: number; solution: string }>;
  };
  founders: {
    foundersTitle: string;
    foundersList: Array<{ key: number; founder: string }>;
    founderSummary: string;
    foundersImage: string;
  };
  customers: string;
  tractions: string;
  services: Array<{ key: number; title: string; description: string }>;
  howItWorks: Array<{ key: number; title: string; description: string }>;
  businessModel: Array<{ key: number; title1: string; description: string }>;
};

export default function CampaignOverView() {
  const defaultData: CampaignOverViewType = {
    about: { aboutUs: "No information available", aboutImage: "" },
    visionAndStrategy: {
      visionTitle: "No vision",
      visionDescription: "",
      visionVideo: "",
    },
    strategyForCampaign: [],
    problemStatement: "No statement available",
    solutions: { solutionTitle: "No solutions", solutionsDetails: [] },
    founders: {
      foundersTitle: "No founders",
      foundersList: [],
      founderSummary: "",
      foundersImage: "",
    },
    customers: "No customers information",
    tractions: "No traction information",
    services: [],
    howItWorks: [],
    businessModel: [],
  };

  const resolvedData = (overview as CampaignOverViewType) || defaultData;
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLink, setActiveLink] = useState("#about");

  const handleScroll = () => {
    const sections = [
      { id: "#about", ref: document.getElementById("about") },
      {
        id: "#visionandStrategy",
        ref: document.getElementById("visionandStrategy"),
      },
      {
        id: "#strategyforCampaign",
        ref: document.getElementById("strategyforCampaign"),
      },
      {
        id: "#problemStatement",
        ref: document.getElementById("problemStatement"),
      },
      { id: "#solutions", ref: document.getElementById("solutions") },
      { id: "#founders", ref: document.getElementById("founders") },
      { id: "#customers", ref: document.getElementById("customers") },
      { id: "#tractions", ref: document.getElementById("tractions") },
      { id: "#services", ref: document.getElementById("services") },
      { id: "#howItWorks", ref: document.getElementById("howItWorks") },
      { id: "#businessModel", ref: document.getElementById("businessModel") },
    ].filter((section) => section.ref);

    const scrollPosition = window.scrollY + 100;

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const nextSection = sections[i + 1];

      if (section.ref && scrollPosition >= section.ref.offsetTop) {
        if (
          !nextSection ||
          !nextSection.ref ||
          scrollPosition < nextSection.ref.offsetTop
        ) {
          setActiveLink(section.id);
        }
      }
    }
  };

  const handleAnchorClick = (href: string) => {
    const section = document.getElementById(href.replace("#", ""));
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex w-[65%]">
      {/* Anchor Navigation */}
      <div className="sticky top-0 h-screen overflow-y-auto pr-10">
        <Anchor
          items={[
            {
              key: "about",
              href: "#about",
              title: "About",
            },
            {
              key: "visionandStrategy",
              href: "#visionandStrategy",
              title: "Vision and Strategy",
            },
            {
              key: "strategyforCampaign",
              href: "#strategyforCampaign",
              title: "Strategy for Campaign",
            },
            {
              key: "problemStatement",
              href: "#problemStatement",
              title: "Problem Statement",
            },
            {
              key: "solutions",
              href: "#solutions",
              title: "Solutions",
            },
            {
              key: "founders",
              href: "#founders",
              title: "Founders",
            },
            {
              key: "customers",
              href: "#customers",
              title: "Customers",
            },
            {
              key: "tractions",
              href: "#tractions",
              title: "Tractions",
            },
            {
              key: "services",
              href: "#services",
              title: "Services",
            },
            {
              key: "howItWorks",
              href: "#howItWorks",
              title: "How It Works",
            },
            {
              key: "businessModel",
              href: "#businessModel",
              title: "Business Model",
            },
          ]}
        />
      </div>

      {/* Content Section */}
      <div className="w-3/4 p-4" ref={containerRef}>
        {/* About */}
        <div id="about" className="mb-5 flex flex-col gap-3">
          <Image
            src={resolvedData.about.aboutImage}
            alt="campHero"
            width={200}
            height={200}
            className="h-full w-full object-cover"
          />
          <h2 className="text-2xl font-bold">About</h2>
          <p className="text-justify text-base font-normal">
            {resolvedData.about.aboutUs}
          </p>
        </div>

        {/* Vision */}
        <div id="visionandStrategy" className="mb-5 flex flex-col gap-3">
          <Image
            src={resolvedData.visionAndStrategy.visionVideo}
            alt="campHero"
            width={200}
            height={200}
            className="h-full w-full object-cover"
          />
          <h2 className="text-2xl font-bold">Vision and Strategy</h2>
          <h4 className="text-base font-bold">
            {resolvedData.visionAndStrategy.visionTitle}
          </h4>
          <p className="text-justify text-base font-normal">
            {resolvedData.visionAndStrategy.visionDescription}
          </p>
        </div>

        {/* Strategy for Campaign */}
        <div id="strategyforCampaign" className="mb-5 flex flex-col gap-3">
          <h2 className="text-base font-bold">Strategy for Campaign</h2>
          <ol className="list-decimal pl-5">
            {resolvedData.strategyForCampaign.map((strategy) => (
              <li key={strategy.key}>
                <h3 className="font-semibold">{strategy.title}</h3>
                <p className="text-justify text-base font-normal">
                  {strategy.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Problem */}
        <div id="problemStatement" className="mb-5 flex flex-col gap-3">
          <h2 className="text-2xl font-bold">Problem Statement</h2>
          <p className="text-justify text-base font-normal">
            {resolvedData.problemStatement}
          </p>
        </div>

        {/* Solutions */}
        <div id="solutions" className="mb-5 flex flex-col gap-3">
          <h2 className="text-2xl font-bold">Solutions</h2>
          <h3 className="text-justify text-base font-semibold">
            {resolvedData.solutions.solutionTitle}
          </h3>
          <ul className="list-disc pl-5">
            {resolvedData.solutions.solutionsDetails.map((solution) => (
              <li
                key={solution.key}
                className="text-justify text-base font-normal"
              >
                {solution.solution}
              </li>
            ))}
          </ul>
        </div>

        {/* Founders */}
        <div id="founders" className="mb-5 flex flex-col gap-3">
          <Image
            src={resolvedData.founders.foundersImage}
            alt="campHero"
            width={648}
            height={440}
            className="h-full w-full object-cover"
          />
          <h2 className="text-2xl font-bold">Founders</h2>
          <h3 className="text-justify text-base font-normal">
            {resolvedData.founders.foundersTitle}
          </h3>
          <ul className="list-disc pl-5">
            {resolvedData.founders.foundersList.map((founder) => (
              <li
                key={founder.key}
                className="text-justify text-base font-normal"
              >
                {founder.founder}
              </li>
            ))}
          </ul>
          <p className="text-justify text-base font-normal">
            {resolvedData.founders.founderSummary}
          </p>
        </div>

        {/* Customers */}
        <div id="customers" className="mb-5 flex flex-col gap-3">
          <h2 className="text-2xl font-bold">Customers</h2>
          <p className="text-justify text-base font-normal">
            {resolvedData.customers}
          </p>
        </div>

        {/* Tractions */}
        <div id="tractions" className="mb-5 flex flex-col gap-3">
          <h2 className="text-2xl font-bold">Tractions</h2>
          <p className="text-justify text-base font-normal">
            {resolvedData.tractions}
          </p>
        </div>

        {/* Services */}
        <div id="services" className="mb-5 flex flex-col gap-3">
          <h2 className="text-2xl font-bold">Services</h2>
          <h3 className="text-justify text-base font-normal">
            Our core services include:
          </h3>
          <ol className="list-decimal pl-5">
            {resolvedData.services.map((service) => (
              <li
                key={service.key}
                className="text-justify text-base font-normal"
              >
                <h3 className="font-semibold">{service.title}</h3>
                <p className="text-justify text-base font-normal">
                  {service.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* How It Works */}
        <div id="howItWorks" className="mb-5 flex flex-col gap-3">
          <h2 className="text-2xl font-bold">How It Works</h2>
          <ul className="list-disc pl-5">
            {resolvedData.howItWorks.map((item) => (
              <li key={item.key} className="text-justify text-base font-normal">
                <h3 className="font-semibold">{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Business Model */}
        <div id="businessModel" className="mb-5 flex flex-col gap-3">
          <h2 className="text-2xl font-bold">Business Model</h2>
          {resolvedData.businessModel.map((model) => (
            <div key={model.key} className="text-justify text-base font-normal">
              <h3 className="font-semibold">{model.title1}</h3>
              <p>{model.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
