import React from "react";
import { FileOutlined } from "@ant-design/icons";
import data from "@/data/campaignDetails/documents.json";

export default function CampaignDocuments() {
  return data.documents.length > 0 ? (
    <div className="w-[70%] space-y-4 rounded-lg p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-semibold">Campaign Documents</h2>
      {data.documents.map(({ name, preview, resourceLocation, size }) => (
        <a
          key={name}
          href={resourceLocation}
          download
          className="flex cursor-pointer items-center justify-between rounded-lg bg-white p-4 shadow-md transition hover:bg-gray-100"
        >
          <div className="flex space-x-10">
            <div className="flex items-center space-x-4">
              <FileOutlined className="text-3xl" style={{ color: "black" }} />
              <h3 className="text-lg font-semibold text-black">{name}</h3>
            </div>
            <div className="flex items-center space-x-2">
              {preview ? (
                <span className="flex items-center space-x-1">
                  <span className="inline-block h-2 w-2 bg-[#0045FF]"></span>
                  <span className="font-medium text-[#0045FF]">Preview</span>
                </span>
              ) : (
                <span className="text-gray-500">Preview not available</span>
              )}
            </div>
          </div>
          <p className="font-medium text-gray-700">{size}</p>
        </a>
      ))}
    </div>
  ) : (
    <p>No document data available.</p>
  );
}
