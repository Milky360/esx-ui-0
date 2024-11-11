import data from "@/data/campaignDetails/contact.json";

export default function CampaignContact() {
  return (
    <div className="space-y-4 p-4">
      <h2>Contact Information</h2>
      <p>Mobile Number: {data.contactInfo.mobileNumber}</p>
      <p>Phone Number: {data.contactInfo.phoneNumber}</p>
      <p>Email: {data.contactInfo.email}</p>
      <div>
        <h3>Social Media Accounts:</h3>
        <ul>
          {data.contactInfo.socialMediaAccounts.map((account, index) => (
            <li key={index}>{account}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
