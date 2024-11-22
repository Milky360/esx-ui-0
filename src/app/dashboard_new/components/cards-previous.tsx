import React from "react";

const StatsDashboard: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Total Funding Goal */}
      <div className="bg-white rounded-lg p-4 shadow-md flex-1 min-w-[200px]">
        <p className="text-gray-500 text-sm">Total Funding Goal</p>
        <h2 className="text-black text-2xl font-bold">1,200,000,000 ETB</h2>
      </div>

      {/* Total Raised */}
      <div className="bg-white rounded-lg p-4 shadow-md flex-1 min-w-[200px]">
        <p className="text-gray-500 text-sm">Total Raised</p>
        <h2 className="text-black text-2xl font-bold">253,559,000 ETB</h2>
      </div>

      {/* Campaigns Stats */}
      <div className="bg-[#0766AD] text-white rounded-lg p-4 shadow-md flex-1 min-w-[200px]">
        <p className="text-sm mb-2">Campaigns</p>
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-bold">40</h2>
            <p className="text-sm">Active</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">20</h2>
            <p className="text-sm">Pending</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">12</h2>
            <p className="text-sm">In Review</p>
          </div>
        </div>
      </div>

      {/* Investors Stats */}
      <div className="bg-[#0766AD] text-white rounded-lg p-4 shadow-md flex-1 min-w-[200px]">
        <p className="text-sm mb-2">Investors</p>
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-bold">1k</h2>
            <p className="text-sm">Active</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">28</h2>
            <p className="text-sm">Pending</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">7</h2>
            <p className="text-sm">In Review</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsDashboard;
