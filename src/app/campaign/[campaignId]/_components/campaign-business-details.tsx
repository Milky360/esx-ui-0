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

interface CampaignDetailTabsProps {
  campaignData: CampaignDatas;
  issuerData: Issuer
}

type Props = {
  businessAndCampaignDetails: BusinessAndCampaignDetails;
  businessInformationSummary: BusinessInfoSummary;
};


export default function CampaignBusinessDetails({ campaignData, issuerData }: CampaignDetailTabsProps) {

  const tabCategories = [
    { key: "Trade Name", value: issuerData?.trade_name || "N/A" },
    { key: "Campiagn ID", value: campaignData?.business_info.id || "N/A" },
    { key: "Capital in ETB", value: '' },
    { key: "General Manager Name", value:  issuerData?.general_manager_contact.name || "N/A"},
    { key: "Number of Shareholders", value:issuerData?.number_of_stakeholders || "N/A"},
    { key: "Number of Employees", value: issuerData?.number_of_employees || "N/A"},
    { key: "Field of Business ", value: issuerData?.field_of_business || "N/A"},
    { key: "Business Registration Number", value: issuerData?.business_license_number || "N/A"},
    { key: "Business Address", value: issuerData?.business_address.business_address || "N/A"},
    { key: "Field of Business ", value: issuerData?.business_type || "N/A"},
  ];
  

  const buisnessInfo = [
    { key: "Region", value: issuerData?.business_address.region || "N/A" },
    { key: "Woreda", value: issuerData?.business_address.woreda || "N/A" },
    { key: "Zone/Sub City", value: issuerData?.business_address.zone || "N/A" },
    { key: "Kebele", value:  issuerData?.business_address.kebele || "N/A"},
    { key: "House No", value:issuerData?.business_address.house_number || "N/A" },
    { key: "Geolocation", value: issuerData?.business_address.geo_location || "N/A" },
    { key: "Email ", value: issuerData?.contact_person.email || "N/A" },
    { key: "Tel No", value: issuerData?.contact_person.phone_number || "N/A"},
    { key: "Website", value: issuerData?.website || "N/A"},
    { key: "Year/Date of Establishment ", value: issuerData?.date_of_establishment || "N/A"},
    { key: "Renewal Date", value: issuerData?.renewal_date || "N/A" },
    { key: "TIN", value: issuerData?.tin_number || "N/A"},
    { key: "VAT", value: issuerData?.vat_number || "N/A"},

  ];


  const renderBusinessDetails = () => {
    return tabCategories.map(({ key, value }, index) => (
      <div key={index} className="flex items-center py-2">
        <span className="w-1/3 text-base font-normal">{key}:</span>
        <span className="w-2/3 text-left text-base font-normal">
          {value || "N/A"}
        </span>
      </div>
    ));
  };

  
  const renderBusinessInfoSummary = () => {
    return buisnessInfo.map(({ key, value }) => (
      <div key={key} className="flex flex-col py-2">
        <div className="flex items-center">
          <span className="w-1/3 text-base font-normal">{key}:</span>
          {key === "Website" ? (
            <a
              href={value || "#"} // Provide a fallback for null values
              target="_blank"
              rel="noopener noreferrer"
              className="w-2/3 text-left text-base font-normal text-blue-500 hover:underline"
            >
              {value || "N/A"}
            </a>
          ) : (
            <span className="w-2/3 text-left text-base font-normal">
              {value || "N/A"}
            </span>
          )}
        </div>
        <hr />
      </div>
    ));
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



