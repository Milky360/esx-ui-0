import React from "react";

interface ContactProps {
  data: {
    mobileNumber: string;
    phoneNumber: string;
    email: string;
    socialMediaAccounts: string[];
  };
}

const CampaignContact: React.FC<ContactProps> = ({ data }) => {
  return (
    <div className="space-y-4 p-4">
      <h2>Contact Information</h2>
      <p>Mobile Number: {data.mobileNumber}</p>
      <p>Phone Number: {data.phoneNumber}</p>
      <p>Email: {data.email}</p>
      <div>
        <h3>Social Media Accounts:</h3>
        <ul>
          {data.socialMediaAccounts.map((account, index) => (
            <li key={index}>{account}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CampaignContact;
