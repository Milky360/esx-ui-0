"use client";

import React from "react";
import { Card, Progress, Tag } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation

interface CampaignData {
  id: number; // Add id for routing purposes
  title: string;
  description: string;
  raised: string;
  target: string;
  image: string;
  tags?: string[];
}

const CampaignCard: React.FC<CampaignData> = ({
  id, // Destructure id
  title,
  description,
  raised,
  target,
  image,
  tags,
}) => {
  const router = useRouter(); // Initialize router for navigation

  const handleCardClick = () => {
    router.push(`/campaign/${id}`); // Redirect to /campaign/id
  };

  return (
    <Card
      hoverable
      onClick={handleCardClick} // Trigger navigation on click
      style={{
        maxWidth: 352,
        maxHeight: 427,
        width: "100%",
        height: "100%",
        borderRadius: 8,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s ease-in-out",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer", // Make the card look clickable
      }}
      cover={
        <div>
          <Image
            alt={title}
            src={image}
            width={347}
            height={162}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      }
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 8px 20px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 4px 12px rgba(0, 0, 0, 0.1)";
      }}
    >
      <Card.Meta
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          top: "-65px",
        }}
        title={
          <div style={{ whiteSpace: "normal", overflowWrap: "break-word" }}>
            <div className="mb-6 rounded-lg bg-white p-2 text-base shadow-md">
              <div className="flex w-full flex-col justify-between p-1">
                <div className="flex justify-between">
                  <span>Raised</span>
                  <span>Target</span>
                </div>
                <Progress
                  percent={(parseFloat(raised) / parseFloat(target)) * 100}
                  status="active"
                  strokeColor="#16D758"
                  showInfo={false}
                />
                <div className="flex justify-between">
                  <span>
                    <span className="font-bold">{raised}</span>{" "}
                    <span className="text-xs font-semibold">ETB</span>
                  </span>
                  <span>
                    <span className="font-bold">{target}</span>{" "}
                    <span className="text-xs font-semibold">ETB</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-3">{title}</div>
            <hr />
          </div>
        }
        description={description}
      />
      <div className="-mt-9">
        {tags?.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
      </div>
    </Card>
  );
};

export default CampaignCard;
