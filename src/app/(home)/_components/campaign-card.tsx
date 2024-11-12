import Image from "next/image";
import { useRouter } from "next/navigation";

import { Progress, Tag } from "antd";

interface CampaignData {
  id: number;
  title: string;
  description: string;
  raised: string;
  target: string;
  image: string;
  tags?: string[];
}

export default function CampaignCard({
  id,
  title,
  description,
  raised,
  target,
  image,
  tags,
}: CampaignData) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/campaign/${id}`);
  };

  const progressPercent =
    target && parseFloat(target) > 0
      ? (parseFloat(raised) / parseFloat(target)) * 100
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
        <Image
          width={352}
          height={182}
          src={image}
          alt={title}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
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
              <span className="text-base font-bold">{raised}</span>{" "}
              <span className="text-xs font-semibold">ETB</span>
            </span>
            <span>
              <span className="font-bold">{target}</span>{" "}
              <span className="text-xs font-semibold">ETB</span>
            </span>
          </div>
        </div>

        {/* Card Title and Description */}
        <div className="campaignCardInfoContainer">
          <h4 className="campaignCardTitle line-clamp-2 h-7 font-medium">
            {title}
          </h4>
          <p className="campaignCardDescription line-clamp-2">{description}</p>
        </div>

        {/* Card Footer with Tags */}
        <div className="campaignCardFooter">
          {tags?.map((tag, index) => (
            <Tag key={index} color="blue">
              {tag}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
