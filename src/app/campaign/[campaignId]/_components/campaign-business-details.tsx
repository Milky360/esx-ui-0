import data from "@/data/campaignDetails/businessdetails.json";

type BusinessAndCampaignDetails = {
  "Trade Name": string;
  "Campaign Id": string;
  "Capital in ETB": number;
  "General Manager Name": string;
  "Number of Shareholders": number;
  "Number of Employees": number;
  "Field of Business1": string;
  "Business Registration Number": string;
  "Business Address": string;
  "Field of Business2": string;
};

type BusinessInfoSummary = {
  Region: string;
  Woreda: string;
  "Zone/Sub City": string;
  Kebele: string;
  "House No": string;
  Geolocation: string;
  Email: string;
  "Tel No": string;
  Website: string;
  "Year/Date of Establishment": string;
  "Renewal Date": string;
  TIN: string;
  VAT: string;
};

type Props = {
  businessAndCampaignDetails: BusinessAndCampaignDetails;
  businessInformationSummary: BusinessInfoSummary;
};

export default function CampaignBusinessDetails() {
  const renderBusinessDetails = () => {
    return Object.entries(data.businessAndCampaignDetails).map(
      ([key, value]) => (
        <>
          <div key={key} className="flex items-center py-2">
            <span className="w-1/3 text-base font-normal">{key}:</span>
            <span className="w-2/3 text-left text-base font-normal">
              {value}
            </span>
          </div>
          <hr />
        </>
      )
    );
  };

  const renderBusinessInfoSummary = () => {
    return Object.entries(data.businessInformationSummary).map(
      ([key, value]) => (
        <>
          <div key={key} className="flex items-center py-2">
            <span className="w-1/3 text-base font-normal">{key}:</span>
            {key === "Website" ? (
              <a
                href={value}
                target="_blank"
                rel="noopener noreferrer"
                className="w-2/3 text-left text-base font-normal text-blue-500 hover:underline"
              >
                {value}
              </a>
            ) : (
              <span className="w-2/3 text-left text-base font-normal">
                {value}
              </span>
            )}
          </div>
          <hr />
        </>
      )
    );
  };

  return (
    <div className="mt-5 w-[75%] rounded-lg p-6">
      <div className="space-y-5">
        <h2 className="text-xl font-medium">Business and Campaign Details</h2>
        {renderBusinessDetails()}
      </div>

      <div className="mt-12 space-y-5">
        <h2 className="text-xl font-medium">Business Information Summary</h2>
        {renderBusinessInfoSummary()}
      </div>
    </div>
  );
}
