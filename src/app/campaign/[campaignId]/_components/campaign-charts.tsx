import Image from "next/image";
import data from "@/data/campaignDetails/charts.json";

export default function CampaignCharts() {
  return (
    <div className="mt-10 w-[65%]">
      <div className="m-auto mb-6 flex w-[50%] justify-center bg-white p-3 rounded-lg">
        <h2 className="text-lg font-medium">
          Investment Highlights and Charts
        </h2>
      </div>
      <div className="flex flex-col">
        {data.investmentHighlightsAndCharts.map((chart) => (
          <div
            key={chart.key}
            className="mb-20 rounded-lg bg-white p-3 shadow-md"
          >
            {chart.image ? (
              <Image
                src={chart.image}
                alt="verified"
                width={748}
                height={290}
              />
            ) : (
              <p>No chart image available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
