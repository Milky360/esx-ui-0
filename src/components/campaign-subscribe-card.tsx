// components/CampaignSubscribeCard.tsx
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaCompressArrowsAlt,
  FaMoneyBillWave,
  FaUserAlt,
} from "react-icons/fa";

// Define the data prop types
interface InvestmentDetails {
  amountRaised: string;
  investors: number;
  targetPercentage: string;
  projectName: string;
  description: string;
  subscriptionButton: string;
  daysLeft: number;
  sharePrice: string;
  minMaxInvestment: string;
  shariaCompliant: string;
  founders: string;
  womenOwned: string;
}

interface CampaignSubscribeCardProps {
  data: InvestmentDetails;
}

export default function CampaignSubscribeCard({
  data,
}: CampaignSubscribeCardProps) {
  return (
    <div className="sticky top-0 w-[360px] max-w-xs rounded-2xl bg-white p-6 shadow-lg">
      <div className="text-2xl font-bold">{data.amountRaised}</div>
      <div className="mb-4 mt-3 flex items-center justify-between">
        <span className="text-sm text-gray-600">
          {data.investors} Investors
        </span>
        <span className="text-sm text-gray-600">
          {data.targetPercentage} of Target
        </span>
      </div>
      <div className="mb-4 h-2 w-full rounded-full bg-gray-200">
        <div
          className="h-2 rounded-full bg-green-500"
          style={{ width: data.targetPercentage }}
        ></div>
      </div>
      <div className="text-lg font-semibold">{data.projectName}</div>
      <div className="mb-4 text-sm text-gray-500">{data.description}</div>
      <button className="mb-4 w-full rounded-full bg-green-500 px-6 py-2 font-semibold text-white">
        {data.subscriptionButton}
      </button>

      <ul className="space-y-3 text-sm text-gray-700">
        <li className="flex items-center">
          <FaCalendarAlt className="mr-2" />
          {data.daysLeft} days Left
        </li>
        <li className="flex items-center">
          <FaMoneyBillWave className="mr-2" />
          Share Price: {data.sharePrice}
        </li>
        <li className="flex items-center">
          <FaCompressArrowsAlt className="mr-2" />
          Min/Max: {data.minMaxInvestment}
        </li>
        <li className="flex items-center">
          <FaCheckCircle className="mr-2" />
          Sharia Compliant: {data.shariaCompliant}
        </li>
        <li className="flex items-center">
          <FaUserAlt className="mr-2" />
          Founders: {data.founders}
        </li>
        <li className="flex items-center">
          <FaUserAlt className="mr-2" />
          Women owned: {data.womenOwned}
        </li>
      </ul>
    </div>
  );
}
