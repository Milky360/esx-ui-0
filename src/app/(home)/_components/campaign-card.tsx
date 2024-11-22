// import Image from "next/image";
// import { useRouter } from "next/navigation";

// import { Progress, Tag } from "antd";

// interface CampaignData {
//   id: number;
//   title: string;
//   description: string;
//   raised: string;
//   target: string;
//   image: string;
//   tags?: string[];
// }

// export default function CampaignCard({
//   id,
//   title,
//   description,
//   raised,
//   target,
//   image,
//   tags,
// }: CampaignData) {
//   const router = useRouter();

//   const handleCardClick = () => {
//     router.push(`/campaign/${id}`);
//   };

//   const progressPercent =
//     target && parseFloat(target) > 0
//       ? (parseFloat(raised) / parseFloat(target)) * 100
//       : 0;

//   return (
//     <div
//       className="campaignCard cursor-pointer"
//       onClick={handleCardClick}
//       onMouseEnter={(e) => {
//         (e.currentTarget as HTMLElement).style.boxShadow =
//           "0 8px 20px rgba(0, 0, 0, 0.15)";
//       }}
//       onMouseLeave={(e) => {
//         (e.currentTarget as HTMLElement).style.boxShadow =
//           "0 2px 8px rgba(0, 0, 0, 0.1)";
//       }}
//     >
//       {/* Card Image */}
//       <div className="campaignCardImage">
//         <Image
//           width={352}
//           height={182}
//           src={image}
//           alt={title}
//           style={{ objectFit: "cover", width: "100%", height: "100%" }}
//         />
//       </div>

//       {/* Card Body */}
//       <div className="campaignCardBody">
//         {/* Card Progress */}
//         <div className="campaignCardProgress shadow-md">
//           <div className="mb-2 flex justify-between">
//             <span className="campaignCardRaised">Raised</span>
//             <span className="campaignCardTarget">Target</span>
//           </div>
//           <Progress
//             percent={progressPercent > 100 ? 100 : progressPercent}
//             status="active"
//             strokeColor="#16D758"
//             showInfo={false}
//           />
//           <div className="mt-2 flex justify-between">
//             <span>
//               <span className="text-base font-bold">{raised}</span>{" "}
//               <span className="text-xs font-semibold">ETB</span>
//             </span>
//             <span>
//               <span className="font-bold">{target}</span>{" "}
//               <span className="text-xs font-semibold">ETB</span>
//             </span>
//           </div>
//         </div>

//         {/* Card Title and Description */}
//         <div className="campaignCardInfoContainer">
//           <h4 className="campaignCardTitle line-clamp-2 h-7 font-medium">
//             {title}
//           </h4>
//           <p className="campaignCardDescription line-clamp-2">{description}</p>
//         </div>

//         {/* Card Footer with Tags */}
//         <div className="campaignCardFooter">
//           {tags?.map((tag, index) => (
//             <Tag key={index} color="blue">
//               {tag}
//             </Tag>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



// import React from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { Progress, Tag } from "antd";

// interface CampaignData {
//   id: number;
//   name: string;
//   caption: string;
//   sector: string;
//   target_raise: string;
//   raised_funds: string;
//   progress: string;
//   deadline: string;
//   campaign_status: string;
//   cover_image: string | null;
//   logo: string | null;
//   video_url: string | null;
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

// const CampaignCard = ({
//   id,
//   name,
//   caption,
//   raised_funds,
//   target_raise,
//   cover_image,
//   sector,
//   is_verified,
// }: CampaignData) => {
//   const router = useRouter();

//   const handleCardClick = () => {
//     router.push(`/campaign/${id}`);
//   };

//   const progressPercent =
//     target_raise && parseFloat(target_raise) > 0
//       ? (parseFloat(raised_funds) / parseFloat(target_raise)) * 100
//       : 0;

//   return (
//     <div
//       className="campaignCard cursor-pointer"
//       onClick={handleCardClick}
//       onMouseEnter={(e) => {
//         (e.currentTarget as HTMLElement).style.boxShadow =
//           "0 8px 20px rgba(0, 0, 0, 0.15)";
//       }}
//       onMouseLeave={(e) => {
//         (e.currentTarget as HTMLElement).style.boxShadow =
//           "0 2px 8px rgba(0, 0, 0, 0.1)";
//       }}
//     >
//       <div className="campaignCardImage">
//         <Image
//           width={352}
//           height={182}
//           src={cover_image || "/default-cover.jpg"}
//           alt={name}
//           style={{ objectFit: "cover", width: "100%", height: "100%" }}
//         />
//       </div>

//       <div className="campaignCardBody">
//         <div className="campaignCardProgress shadow-md">
//           <div className="mb-2 flex justify-between">
//             <span className="campaignCardRaised">Raised</span>
//             <span className="campaignCardTarget">Target</span>
//           </div>
//           <Progress
//             percent={progressPercent > 100 ? 100 : progressPercent}
//             status="active"
//             strokeColor="#16D758"
//             showInfo={false}
//           />
//           <div className="mt-2 flex justify-between">
//             <span>
//               <span className="text-base font-bold">{raised_funds}</span>{" "}
//               <span className="text-xs font-semibold">ETB</span>
//             </span>
//             <span>
//               <span className="text-base font-bold">{target_raise}</span>{" "}
//               <span className="text-xs font-semibold">ETB</span>
//             </span>
//           </div>
//         </div>
//         <div className="flex flex-wrap gap-2 py-2">
//           <Tag className="sectorTag">{sector}</Tag>
//           {is_verified && <Tag color="green">Verified</Tag>}
//         </div>
//         <h4>{name}</h4>
//         <p>{caption}</p>
//       </div>
//     </div>
//   );
// };

// export default CampaignCard;




import Image from "next/image";
import { useRouter } from "next/navigation";

import { Progress, Tag } from "antd";

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
  cover_image: string | null;
  logo: string | null;
  video_url: string | null;
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
interface CampaignData {
  id: number;
  title: string;
  description: string;
  raised: string;
  target: string;
  image: string;
  tags?: string[];
}

export default function CampaignCards({
  id,
  name,
  target_raise,
  raised_funds,
  cover_image,
  caption
  
}: CampaignDatas) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/campaign/${id}`);
  };

  const progressPercent =
  target_raise && parseFloat(target_raise) > 0
      ? (parseFloat(raised_funds) / parseFloat(target_raise)) * 100
      : 0;

  return (
    <div
      className="campaignCard cursor-pointer"
      onClick={handleCardClick}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 8px 20px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 2px 8px rgba(0, 0, 0, 0.1)";
      }}
    >
      {/* Card Image */}
      <div className="campaignCardImage">
        {/* <Image
          width={352}
          height={182}
          src={cover_image}
          alt={name}
          style={{ objectFit: "cover", width: "100%", height: "100%", maxHeight: "190px" }}
        />
        
        */}


{cover_image ? (
  <Image
    width={352}
    height={182}
    src={cover_image}
    alt={name || "Default Name"}
    style={{
      objectFit: "cover",
      width: "100%",
      height: "100%",
      maxHeight: "190px",
    }}
  />
) : (
  <div
    style={{
      width: "100%",
      height: "100%",
      maxHeight: "190px",
      backgroundColor: "#f0f0f0", // Placeholder background
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "14px",
      color: "#888",
    }}
  >
    No image available
  </div>
)}

      </div>

      {/* Card Body */}
      <div className="campaignCardBody">
        {/* Card Progress */}
        <div className="campaignCardProgress shadow-md">
          <div className="mb-2 flex justify-between">
            <span className="campaignCardRaised">Raised</span>
            <span className="campaignCardTarget">Target</span>
          </div>
          <Progress
            percent={progressPercent > 100 ? 100 : progressPercent}
            status="active"
            strokeColor="#16D758"
            showInfo={false}
          />
          <div className="mt-2 flex justify-between">
            <span>
              <span className="text-base font-bold">
  {raised_funds.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
</span>
{" "}
              <span className="text-xs font-semibold">ETB</span>
            </span>
            <span>
              <span className="text-base font-bold">
  {target_raise.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
</span>{" "}

              <span className="text-xs font-semibold">ETB</span>
            </span>
          </div>
        </div>

        {/* Card Title and Description */}
        <div className="campaignCardInfoContainer">
          <h4 className="campaignCardTitle line-clamp-2 h-7 font-medium">
            {name}
          </h4>
          <p className="campaignCardDescription line-clamp-2">{caption}</p>
        </div>

        {/* Card Footer with Tags */}
        {/* <div className="campaignCardFooter">
          {tags?.map((tag, index) => (
            <Tag key={index} color="blue">
              {tag}
            </Tag>
          ))}
        </div> */}
      </div>
    </div>
  );
}
