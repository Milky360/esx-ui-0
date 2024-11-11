// CampaignCardContainer.tsx
import React, { useEffect, useState } from "react";

import { Pagination } from "antd";

import CampaignCard from "./campaign-card";
import SearchInput from "./search-input";

interface CampaignData {
  id: number;
  title: string;
  description: string;
  raised: string;
  target: string;
  image: string;
  tags?: string[];
}

interface Props {
  campaigns: CampaignData[];
}

export default function CampaignCardContainer({ campaigns }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [filteredCampaigns, setFilteredCampaigns] =
    useState<CampaignData[]>(campaigns);

  useEffect(() => {
    // Filter campaigns based on search query and selected filter
    const filtered = campaigns.filter((campaign) => {
      const matchesSearch = campaign.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesFilter = !filter || campaign.tags?.includes(filter);
      return matchesSearch && matchesFilter;
    });
    setFilteredCampaigns(filtered);
  }, [searchQuery, filter, campaigns]);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <>
      <div className="py-12">
        <SearchInput onSearch={setSearchQuery} onFilter={setFilter} />
      </div>
      <div
        className="grid grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-3"
        style={{ gap: "48px" }}
      >
        {filteredCampaigns
          .slice((currentPage - 1) * pageSize, currentPage * pageSize)
          .map((campaign) => (
            <CampaignCard key={campaign.id} {...campaign} />
          ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredCampaigns.length}
          onChange={onPageChange}
          showSizeChanger={false}
          hideOnSinglePage={filteredCampaigns.length <= pageSize}
        />
      </div>
    </>
  );
}
