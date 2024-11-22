import { FileOutlined } from "@ant-design/icons";

import data from "@/data/campaignDetails/documents.json";
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


interface CampaignDocumentsProps {
  issuerData: Issuer
}

export default function CampaignDocuments({issuerData}: CampaignDocumentsProps) {
  console.log('The data passed to CampaignDocumetn is this ', issuerData);
//   return data.documents.length > 0 ? (
//     <div className="w-[70%] space-y-4 rounded-lg p-6 shadow-sm">
//       <h2 className="mb-4 text-2xl font-semibold">Campaign Documents</h2>
//       {data.documents.map(({ name, preview, resourceLocation, size }) => (
//         <a
//           key={name}
//           href={resourceLocation}
//           download
//           className="flex cursor-pointer items-center justify-between rounded-lg bg-white p-4 shadow-md transition hover:bg-gray-100"
//         >
//           <div className="flex space-x-10">
//             <div className="flex items-center space-x-4">
//               <FileOutlined className="text-3xl" style={{ color: "black" }} />
//               <h3 className="text-lg font-semibold text-black">{name}</h3>
//             </div>
//             <div className="flex items-center space-x-2">
//               {preview ? (
//                 <span className="flex items-center space-x-1">
//                   <span className="inline-block h-2 w-2 bg-[#0045FF]"></span>
//                   <span className="font-medium text-[#0045FF]">Preview</span>
//                 </span>
//               ) : (
//                 <span className="text-gray-500">Preview not available</span>
//               )}
//             </div>
//           </div>
//           <p className="font-medium text-gray-700">{size}</p>
//         </a>
//       ))}
//     </div>
//   ) : (
//     <p>No document data available.</p>
//   );
// }



return issuerData.documents.length > 0 ? (
  <div className="w-[70%] space-y-4 rounded-lg p-6 shadow-sm">
    <h2 className="mb-4 text-2xl font-semibold">Campaign Documents</h2>
    {issuerData.documents.map((document) => (
      <a
        key={document.document_id}
        href={document.document_path} // Dynamic path for download
        download
        className="flex cursor-pointer items-center justify-between rounded-lg bg-white p-4 shadow-md transition hover:bg-gray-100"
      >
        <div className="flex space-x-10">
          <div className="flex items-center space-x-4">
            <FileOutlined className="text-3xl" style={{ color: "black" }} />
            <h3 className="text-lg font-semibold text-black">
              {document.document_type || "Unnamed Document"}
            </h3>
          </div>
          <div className="flex items-center space-x-2">
            {document.document_path ? (
              <span className="flex items-center space-x-1">
                <span className="inline-block h-2 w-2 bg-[#0045FF]"></span>
                <span className="font-medium text-[#0045FF]">Preview</span>
              </span>
            ) : (
              <span className="text-gray-500">Preview not available</span>
            )}
          </div>
        </div>
        <p className="font-medium text-gray-700">Size</p>
      </a>
    ))}
  </div>
) : (
  <p>No document data available.</p>
);
}