import { Button, Card } from "antd";

export default function ReadyToGetStarted() {
  return (
    <div className="m-auto flex w-full max-w-contentwidth flex-col items-center gap-8 p-4 pt-20">
      <h2 className="text-2xl font-bold text-black">Ready to Get Started?</h2>

      <div className="flex w-full justify-center gap-8 space-x-40 pt-10">
        {/* Raise Capital Card */}
        <Card
          className="h-[430px] w-[521px] rounded-xl shadow-md"
          bordered={false}
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
          headStyle={{
            backgroundColor: "#F3F6FF",
            padding: "16px 0",
            borderBottom: "none",
          }}
          title={
            <h2 className="text-center text-lg font-semibold text-black">
              Raise Capital
            </h2>
          }
        >
          <ul className="divide-y divide-gray-200 text-gray-700">
            <li className="p-3 text-center text-base font-semibold">
              Create a Compelling Campaign
            </li>
            <li className="p-3 text-center text-base font-semibold">
              Launch the Campaign
            </li>
            <li className="p-3 text-center text-base font-semibold">
              Track Progress and Engage
            </li>
            <li className="p-3 text-center text-base font-semibold">
              Post-Campaign Responsibilities
            </li>
            <li className="divide-y-0 p-3 text-center text-base font-semibold">
              Follow-Up and Scale
            </li>
            <li></li>
          </ul>
          <div className="mt-6 text-center">
            <Button
              type="primary"
              className="h-[52px] w-[376px] rounded-full px-6 py-4"
              style={{
                background: "linear-gradient(90deg, #2090FF, #0045FF)",
                border: "none",
                fontWeight: "bold",
                borderRadius: "30px",
              }}
            >
              Discover More
            </Button>
          </div>
        </Card>

        {/* Start Investing Card */}
        <Card
          className="h-[430px] w-[521px] rounded-xl shadow-md"
          bordered={false}
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
          headStyle={{
            backgroundColor: "#F3F6FF",
            padding: "16px 0",
            borderBottom: "none",
          }}
          title={
            <h2 className="text-center text-lg font-semibold text-black">
              Start Investing
            </h2>
          }
        >
          <ul className="divide-y divide-gray-200 text-gray-700">
            <li className="p-3 text-center text-base font-semibold">
              Browse Available Investment Opportunities
            </li>
            <li className="p-3 text-center text-base font-semibold">
              Make an Investment on Campaigns
            </li>
            <li className="p-3 text-center text-base font-semibold">
              Track Investment Progress
            </li>
            <li className="p-3 text-center text-base font-semibold">
              Receive Returns
            </li>
            <li className="divide-y-0 p-3 text-center text-base font-semibold">
              Monitor Investment Performance
            </li>
            <li></li>
          </ul>
          <div className="mt-6 text-center">
            <Button
              type="primary"
              className="h-[52px] w-[376px] rounded-full px-6 py-4"
              style={{
                background: "linear-gradient(90deg, #2090FF, #0045FF)",
                border: "none",
                fontWeight: "bold",
                borderRadius: "30px",
              }}
            >
              Discover More
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
