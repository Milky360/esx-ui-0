// // "use client"
// // import Image from "next/image";

// // import CampaignSubscribeCard from "@/components/campaign-subscribe-card";
// // import data from "@/data/campaignSubscription.json";
// // import { useParams } from "next/navigation";
// // import { CampaignDetailTabs } from "./_components";

// // export default function CampaignPage() {
// //   // Destructure the investmentDetails data from JSON
// //   const { investmentDetails } = data;
// //   const { campaignId } = useParams(); // Get the campaignId from the URL

// //   // Log the campaignId to the console
// //   console.log("Campaign ID:", campaignId);



// //   return (
// //     <div className="relative m-auto mb-80 mt-12 max-w-contentwidth">
// //       <div className="text-secondary mb-5 flex flex-col gap-4  text-sm">
// //         <div className="flex">
// //           <Image
// //             src="/assets/campaign/verified.svg"
// //             alt="verified"
// //             width={17}
// //             height={17}
// //           />
// //           <h6 className="pl-1 text-sm font-medium" style={{ color: "#A9A9AC" }}>
// //             Lersha Technology S.C. (Verified by ESX)
// //           </h6>
// //         </div>
// //         <h1 className="text-5xl font-bold">Lersha Agri Digital</h1>
// //         <h6 className="pl-1 text-sm font-medium" style={{ color: "#A9A9AC" }}>
// //           Diversified investment portfolio across the GTA targeting 8.5% returns
// //         </h6>
// //       </div>
// //       {/* Main content section with relative positioning */}
// //       <Image
// //         src="/assets/campaign/campHero.svg"
// //         alt="campHero"
// //         width={1300}
// //         height={547}
// //         priority
// //         className="h-full w-full object-cover"
// //       />

// //       {/* Tabs and Side */}
// //       <div>
// //         <CampaignDetailTabs />
// //       </div>

// //       <div className="absolute right-10 top-44 h-[100%]">
// //         <CampaignSubscribeCard data={investmentDetails} />
// //         {/* Pass investmentDetails as a prop */}
// //       </div>
// //     </div>
// //   );
// // }



// // "use client";
// // import { useEffect } from "react";
// // import Image from "next/image";
// // import { useParams } from "next/navigation";
// // import CampaignSubscribeCard from "@/components/campaign-subscribe-card";
// // import data from "@/data/campaignSubscription.json";
// // import { CampaignDetailTabs } from "./_components";
// // import { execute } from "@/utils/django"; // Assuming this is where the execute function is located

// // export default function CampaignPage() {
// //   const { investmentDetails } = data;
// //   const { campaignId } = useParams(); // Get the campaignId from the URL

// //   // Log the campaignId to the console
// //   console.log("Campaign ID:", campaignId);

// //   useEffect(() => {
// //     if (campaignId) {
// //       // Fetch campaign data based on campaignId and log it to the console
// //       execute("GET_CAMPAIGN_BY_ID", { campaignId }, "GET")
// //         .then((data) => console.log("Fetched Campaign Data:", data))
// //         .catch((error) => console.error("Error fetching campaign data:", error));
// //     }
// //   }, [campaignId]);

// //   return (
// //     <div className="relative m-auto mb-80 mt-12 max-w-contentwidth">
// //       <div className="text-secondary mb-5 flex flex-col gap-4 text-sm">
// //         <div className="flex">
// //           <Image
// //             src="/assets/campaign/verified.svg"
// //             alt="verified"
// //             width={17}
// //             height={17}
// //           />
// //           <h6 className="pl-1 text-sm font-medium" style={{ color: "#A9A9AC" }}>
// //             Lersha Technology S.C. (Verified by ESX)
// //           </h6>
// //         </div>
// //         <h1 className="text-5xl font-bold">Lersha Agri Digital</h1>
// //         <h6 className="pl-1 text-sm font-medium" style={{ color: "#A9A9AC" }}>
// //           Diversified investment portfolio across the GTA targeting 8.5% returns
// //         </h6>
// //       </div>
// //       {/* Main content section with relative positioning */}
// //       <Image
// //         src="/assets/campaign/campHero.svg"
// //         alt="campHero"
// //         width={1300}
// //         height={547}
// //         priority
// //         className="h-full w-full object-cover"
// //       />

// //       {/* Tabs and Side */}
// //       <div>
// //         <CampaignDetailTabs />
// //       </div>

// //       <div className="absolute right-10 top-44 h-[100%]">
// //         <CampaignSubscribeCard data={investmentDetails} />
// //         {/* Pass investmentDetails as a prop */}
// //       </div>
// //     </div>
// //   );
// // }
// "use client"

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { useParams } from "next/navigation";
// import CampaignSubscribeCard from "@/components/campaign-subscribe-card";
// import data from "@/data/campaignSubscription.json";
// import { CampaignDetailTabs } from "./_components";
// import { execute } from "@/utils/django";
// import constants from "@/utils/config";

// export default function CampaignPage() {
//   const { investmentDetails } = data;
//   const [campaignData, setCampaignData] = useState(null); 
//   const [error, setError] = useState(null);  
//   const { campaignId } = useParams(); 

//   console.log("Campaign ID:", campaignId);

//   useEffect(() => {
//     if (campaignId) {
//       // Cast campaignId to string | number explicitly
//       execute("GET_CAMPAIGN_BY_ID", {}, "GET", { id: campaignId as string | number })
//         .then((data) => console.log("Fetched Campaign Data:", data))
//         .catch((error) => console.error("Error fetching campaign data:", error));
//     }
//   }, [campaignId]);
  
  
//   return (
//     <div className="relative m-auto mb-80 mt-12 max-w-contentwidth">
//       <div className="text-secondary mb-5 flex flex-col gap-4 text-sm">
//         <div className="flex">
//           <Image
//             src="/assets/campaign/verified.svg"
//             alt="verified"
//             width={17}
//             height={17}
//           />
//           <h6 className="pl-1 text-sm font-medium" style={{ color: "#A9A9AC" }}>
//             Lersha Technology S.C. (Verified by ESX)
//           </h6>
//         </div>
//         <h1 className="text-5xl font-bold">Lersha Agri Digital</h1>
//         <h6 className="pl-1 text-sm font-medium" style={{ color: "#A9A9AC" }}>
//           Diversified investment portfolio across the GTA targeting 8.5% returns
//         </h6>
//       </div>
//       <Image
//         src="/assets/campaign/campHero.svg"
//         alt="campHero"
//         width={1300}
//         height={547}
//         priority
//         className="h-full w-full object-cover"
//       />
//       <div>
//         <CampaignDetailTabs />
//       </div>
//       <div className="absolute right-10 top-44 h-[100%]">
//         <CampaignSubscribeCard data={investmentDetails} />
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { useParams } from "next/navigation";
// import CampaignSubscribeCard from "@/components/campaign-subscribe-card";
// import data from "@/data/campaignSubscription.json";
// import { CampaignDetailTabs } from "./_components";
// import { execute } from "@/utils/django";
// import constants from "@/utils/config";

// interface CampaignDatas {
//   id: number;
//   name: string;
//   caption: string;
//   sector: string;
//   target_raise: string;
//   raised_funds: string;
//   progress: string;
//   deadline: string;
//   campaign_status: string;
//   cover_image: string;
//   logo: string | null;
//   video_url: string;
//   min_investment: string;
//   max_investment: string;
//   is_verified: boolean;
//   sharia_compliance: boolean;
//   women_owned_led_status: boolean;
//   number_of_investors: number;
//   business_info: {
//     id: number;
//     business_overview: string;
//     principal_activities: string;
//     principal_market: string;
//     auditor: string;
//   };
//   project: {
//     id: number;
//     project_name: string;
//     objectives: string;
//     summary: string;
//     about_the_project: string;
//     problem_being_addressed: string;
//     solution_offered: string;
//     how_it_works: string;
//     product_service_details: string;
//     traction: string;
//     customers: string;
//     business_model: string;
//     vision_and_strategy: string;
//     funding_requirements: string;
//   };
//   financial_info: {
//     id: number;
//     bank_account: string;
//     total_assets: string;
//     total_liabilities: string;
//     revenue: string;
//     net_profit: string;
//   };
//   contact: {
//     id: number;
//     name: string;
//     phone_number: string;
//     email: string;
//     title: string;
//     telegram: string | null;
//     whatsapp: string | null;
//     facebook: string | null;
//     created_at: string;
//   };
// }

// export default function CampaignPage() {
//   const { investmentDetails } = data;
//   const [campaignData, setCampaignData] = useState<CampaignDatas>(); 
//   const [error, setError] = useState<string | null>(null);  
//   const { campaignId } = useParams(); 

//   console.log("Campaign ID:", campaignId);


//   useEffect(() => {
//     if (campaignId) {
//       // Ensure campaignId is a single string or number
//       const id = Array.isArray(campaignId) ? campaignId[0] : campaignId; // Pick the first element if it's an array
  
//       execute(
//         { route: "GET_CAMPAIGN_BY_ID", method: "GET" },  // Updated to the new format
//         {},  // Arguments (empty object here)
//         id  // Passing the id, ensuring it's a string or number
//       )
//         .then((response) => {
//           const [issuerId, setIssuerId] = useState();
//           console.log('Issuer Id before setted', issuerId);
//           // Access the data as per the response structure
//           const fetchedData = response.data.result;
//           console.log("Fetched Campaign Data:", fetchedData);
//           setIssuerId(response.data.result.issuer);
//           console.log('Issuer Id after setted ', issuerId);
//           // Set the campaignData state
//           setCampaignData(fetchedData);
//         })
//         .catch((error) => {
//           console.error("Error fetching campaign data:", error);
//           setError("Failed to fetch campaign data");
//         });
//     }
//   }, [campaignId]);
  



//   console.log('This is the value of the campaing data before sending', campaignData);
  
//   return (
//     <div className="relative m-auto mb-80 mt-12 max-w-contentwidth">
//       <div className="text-secondary mb-5 flex flex-col gap-4 text-sm">
//         <div className="flex">
//           <Image
//             src="/assets/campaign/verified.svg"
//             alt="verified"
//             width={17}
//             height={17}
//           />
//           <h6 className="pl-1 text-sm font-medium" style={{ color: "#A9A9AC" }}>
//             {campaignData?.name} (Verified by ESX)
//           </h6>
//         </div>
//         <h1 className="text-5xl font-bold">{campaignData?.name}</h1>
//         <h6 className="pl-1 text-sm font-medium" style={{ color: "#A9A9AC" }}>
//           Diversified investment portfolio across the GTA targeting 8.5% returns
//         </h6>
//       </div>
//       <Image
//         src="/assets/campaign/campHero.svg"
//         alt="campHero"
//         width={1300}
//         height={547}
//         priority
//         className="h-full w-full object-cover"
//       />
//       <div>
//         <CampaignDetailTabs campaignData={campaignData!} />
//       </div>
//       <div className="absolute right-10 top-44 h-[100%]">
//         <CampaignSubscribeCard data={investmentDetails} />
//       </div>
//     </div>
//   );
// }




// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { useParams } from "next/navigation";
// import CampaignSubscribeCard from "@/components/campaign-subscribe-card";
// import data from "@/data/campaignSubscription.json";
// import { CampaignDetailTabs } from "./_components";
// import { execute } from "@/utils/django";
// import constants from "@/utils/config";

// interface CampaignDatas {
//   id: number;
//   name: string;
//   caption: string;
//   sector: string;
//   target_raise: string;
//   raised_funds: string;
//   progress: string;
//   deadline: string;
//   campaign_status: string;
//   cover_image: string;
//   logo: string | null;
//   video_url: string;
//   min_investment: string;
//   max_investment: string;
//   is_verified: boolean;
//   sharia_compliance: boolean;
//   women_owned_led_status: boolean;
//   number_of_investors: number;
//   business_info: {
//     id: number;
//     business_overview: string;
//     principal_activities: string;
//     principal_market: string;
//     auditor: string;
//   };
//   project: {
//     id: number;
//     project_name: string;
//     objectives: string;
//     summary: string;
//     about_the_project: string;
//     problem_being_addressed: string;
//     solution_offered: string;
//     how_it_works: string;
//     product_service_details: string;
//     traction: string;
//     customers: string;
//     business_model: string;
//     vision_and_strategy: string;
//     funding_requirements: string;
//   };
//   financial_info: {
//     id: number;
//     bank_account: string;
//     total_assets: string;
//     total_liabilities: string;
//     revenue: string;
//     net_profit: string;
//   };
//   contact: {
//     id: number;
//     name: string;
//     phone_number: string;
//     email: string;
//     title: string;
//     telegram: string | null;
//     whatsapp: string | null;
//     facebook: string | null;
//     created_at: string;
//   };
// }



// interface GeneralManagerContact {
//   id: number;
//   name: string;
//   phone_number: string;
//   email: string;
//   title: string;
//   telegram: string | null;
//   whatsapp: string | null;
//   facebook: string | null;
//   created_at: string;
// }

// interface ContactPerson {
//   id: number;
//   name: string;
//   phone_number: string;
//   email: string;
//   title: string;
//   telegram: string | null;
//   whatsapp: string | null;
//   facebook: string | null;
//   created_at: string;
// }

// interface BusinessAddress {
//   id: number;
//   business_address: string;
//   region: string;
//   zone: string;
//   woreda: string;
//   kebele: string;
//   house_number: string;
//   geo_location: string | null;
//   created_at: string;
// }

// interface Document {
//   document_id: number;
//   document_type: string;
//   document_name: string;
//   document_path: string;
//   uploaded_by: number;
//   uploaded_at: string;
//   status: string;
//   verified_by: number | null;
//   verified_at: string | null;
// }

// interface Issuer {
//   id: number;
//   general_manager_contact: GeneralManagerContact;
//   contact_person: ContactPerson;
//   business_address: BusinessAddress;
//   documents: Document[];
//   user: number;
//   trade_name: string;
//   company_name: string;
//   company_type: string;
//   business_name: string;
//   business_type: string;
//   business_license_number: string;
//   business_description: string;
//   field_of_business: string;
//   number_of_stakeholders: number;
//   number_of_employees: number;
//   tin_number: string;
//   vat_number: string;
//   website: string;
//   capital: string;
//   date_of_establishment: string;
//   renewal_date: string | null;
//   is_verified: boolean;
//   terms_and_condition: boolean;
//   form_data: any | null;
//   created_at: string;
// }


// export default function CampaignPage() {
//   const { investmentDetails } = data;
//   const [campaignData, setCampaignData] = useState<CampaignDatas>(); 
//   const [issuerData, setIssuerData] = useState<Issuer>();
//   const [issuerId, setIssuerId] = useState<string | null>(null); // Correct issuerId state
//   const [error, setError] = useState<string | null>(null);  
//   const { campaignId } = useParams(); 

//   console.log("Campaign ID:", campaignId);

//   useEffect(() => {
//     if (campaignId) {
//       // Ensure campaignId is a single string or number
//       const id = Array.isArray(campaignId) ? campaignId[0] : campaignId; // Pick the first element if it's an array
  
//       execute(
//         { route: "GET_CAMPAIGN_BY_ID", method: "GET" },  // Updated to the new format
//         {},  // Arguments (empty object here)
//         id  // Passing the id, ensuring it's a string or number
//       )
//         .then((response) => {
//           // Access the data as per the response structure
//           const fetchedData = response.data.result;
//           console.log("Fetched Campaign Data:", fetchedData);

//           // Set the campaignData and issuerId states
//           setCampaignData(fetchedData);
//           setIssuerId(fetchedData.issuer);
//           console.log("Issuer ID:", fetchedData.issuer);
//           console.log('The Id of the ISSUER is ', fetchedData.issuer);

//           execute(
//             { route: "GET_ISSUER_BY_ID", method: "GET" },  // Updated to the new format
//             {},  // Arguments (empty object here)
//             fetchedData.issuer  // Passing the id, ensuring it's a string or number
//           )
//           .then((response) => {
//             console.log('Second Request Response is below');
//             console.log(response.data.result);
//             console.log('This is hte value of the issuer before setted');
//             console.log(issuerData);
//             setIssuerData(response.data.result);
//             console.log('This is the value of the issuer after being setted');
//             console.log(issuerData);
//           })
//         })
//         .catch((error) => {
//           console.error("Error fetching campaign data:", error);
//           setError("Failed to fetch campaign data");
//         });
//     }
//   }, [campaignId]);

//   console.log("This is the value of the campaign data before sending:", campaignData);
  
//   return (
//     <div className="relative m-auto mb-80 mt-12 max-w-contentwidth">
//       <div className="text-secondary mb-5 flex flex-col gap-4 text-sm">
//         <div className="flex">
//           <Image
//             src="/assets/campaign/verified.svg"
//             alt="verified"
//             width={17}
//             height={17}
//           />
//           <h6 className="pl-1 text-sm font-medium" style={{ color: "#A9A9AC" }}>
//             {campaignData?.name} (Verified by ESX)
//           </h6>
//         </div>
//         <h1 className="text-5xl font-bold">{campaignData?.name}</h1>
//         <h6 className="pl-1 text-sm font-medium" style={{ color: "#A9A9AC" }}>
//           Diversified investment portfolio across the GTA targeting 8.5% returns
//         </h6>
//       </div>
//       <Image
//         src="/assets/campaign/campHero.svg"
//         alt="campHero"
//         width={1300}
//         height={547}
//         priority
//         className="h-full w-full object-cover"
//       />
//       <div>
//         <CampaignDetailTabs campaignData={campaignData!} />
//       </div>
//       <div className="absolute right-10 top-44 h-[100%]">
//         <CampaignSubscribeCard data={investmentDetails} />
//       </div>
//     </div>
//   );
// }





"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import CampaignSubscribeCard from "@/components/campaign-subscribe-card";
import data from "@/data/campaignSubscription.json";
import { CampaignDetailTabs } from "./_components";
import { execute } from "@/utils/django";

interface CampaignDatas {
  id: number;
  name: string;
  caption: string;
  sector: string;
  target_raise: string;
  raised_funds: string;
  progress: string;
  deadline: string;
  campaign_status: string;
  cover_image: string;
  logo: string | null;
  video_url: string;
  min_investment: string;
  max_investment: string;
  is_verified: boolean;
  sharia_compliance: boolean;
  women_owned_led_status: boolean;
  number_of_investors: number;
  business_info: {
    id: number;
    business_overview: string;
    principal_activities: string;
    principal_market: string;
    auditor: string;
  };
  project: {
    id: number;
    project_name: string;
    objectives: string;
    summary: string;
    about_the_project: string;
    problem_being_addressed: string;
    solution_offered: string;
    how_it_works: string;
    product_service_details: string;
    traction: string;
    customers: string;
    business_model: string;
    vision_and_strategy: string;
    funding_requirements: string;
  };
  financial_info: {
    id: number;
    bank_account: string;
    total_assets: string;
    total_liabilities: string;
    revenue: string;
    net_profit: string;
  };
  contact: {
    id: number;
    name: string;
    phone_number: string;
    email: string;
    title: string;
    telegram: string | null;
    whatsapp: string | null;
    facebook: string | null;
    created_at: string;
  };
}

interface GeneralManagerContact {
  id: number;
  name: string;
  phone_number: string;
  email: string;
  title: string;
  telegram: string | null;
  whatsapp: string | null;
  facebook: string | null;
  created_at: string;
}

interface ContactPerson {
  id: number;
  name: string;
  phone_number: string;
  email: string;
  title: string;
  telegram: string | null;
  whatsapp: string | null;
  facebook: string | null;
  created_at: string;
}

interface BusinessAddress {
  id: number;
  business_address: string;
  region: string;
  zone: string;
  woreda: string;
  kebele: string;
  house_number: string;
  geo_location: string | null;
  created_at: string;
}

interface Document {
  document_id: number;
  document_type: string;
  document_name: string;
  document_path: string;
  uploaded_by: number;
  uploaded_at: string;
  status: string;
  verified_by: number | null;
  verified_at: string | null;
}

interface Issuer {
  id: number;
  general_manager_contact: GeneralManagerContact;
  contact_person: ContactPerson;
  business_address: BusinessAddress;
  documents: Document[];
  user: number;
  trade_name: string;
  company_name: string;
  company_type: string;
  business_name: string;
  business_type: string;
  business_license_number: string;
  business_description: string;
  field_of_business: string;
  number_of_stakeholders: number;
  number_of_employees: number;
  tin_number: string;
  vat_number: string;
  website: string;
  capital: string;
  date_of_establishment: string;
  renewal_date: string | null;
  is_verified: boolean;
  terms_and_condition: boolean;
  form_data: any | null;
  created_at: string;
}

export default function CampaignPage() {
  const { investmentDetails } = data;
  const [campaignData, setCampaignData] = useState<CampaignDatas | null>(null);
  const [issuerData, setIssuerData] = useState<Issuer | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { campaignId } = useParams();

  console.log("Campaign ID:", campaignId);

  useEffect(() => {
    if (campaignId) {
      const id = Array.isArray(campaignId) ? campaignId[0] : campaignId;

      execute({ route: "GET_CAMPAIGN_BY_ID", method: "GET" }, {}, id)
        .then((response) => {
          const fetchedData = response.data.result;
          console.log("Fetched Campaign Data:", fetchedData);

          setCampaignData(fetchedData);

          if (fetchedData.issuer) {
            execute(
              { route: "GET_ISSUER_BY_ID", method: "GET" },
              {},
              fetchedData.issuer
            )
              .then((issuerResponse) => {
                console.log("Fetched Issuer Data:", issuerResponse.data.result);
                setIssuerData(issuerResponse.data.result);
              })
              .catch((issuerError) => {
                console.error("Error fetching issuer data:", issuerError);
                setError("Failed to fetch issuer data");
              });
          }
        })
        .catch((campaignError) => {
          console.error("Error fetching campaign data:", campaignError);
          setError("Failed to fetch campaign data");
        });
    }
  }, [campaignId]);

  console.log("Campaign Data:", campaignData);
  console.log("Issuer Data:", issuerData);

  return (
    <div className="relative m-auto mb-80 mt-12 max-w-contentwidth">
      <div className="text-secondary mb-5 flex flex-col gap-4 text-sm">
        <div className="flex">
          <Image
            src="/assets/campaign/verified.svg"
            alt="verified"
            width={17}
            height={17}
          />
          <h6 className="pl-1 text-sm font-medium" style={{ color: "#A9A9AC" }}>
            {campaignData?.name} (Verified by ESX)
          </h6>
        </div>
        <h1 className="text-5xl font-bold">{campaignData?.name}</h1>
        <h6 className="pl-1 text-sm font-medium" style={{ color: "#A9A9AC" }}>
          Diversified investment portfolio across the GTA targeting 8.5% returns
        </h6>
      </div>
      <Image
        src="/assets/campaign/campHero.svg"
        alt="campHero"
        width={1300}
        height={547}
        priority
        className="h-full w-full object-cover"
      />
      <div>
        <CampaignDetailTabs campaignData={campaignData!} issuerData={issuerData!} />
      </div>
      <div className="absolute right-10 top-44 h-[100%]">
        <CampaignSubscribeCard data={investmentDetails} />
      </div>
    </div>
  );
}
