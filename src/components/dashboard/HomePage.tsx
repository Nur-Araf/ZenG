import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-[#1C2B4A]">Card 1</h2>
        <p className="text-[#6C63FF]">Welcome to the Home page</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-[#1C2B4A]">Card 2</h2>
        <p className="text-[#6C63FF]">Placeholder content</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-[#1C2B4A]">Card 3</h2>
        <p className="text-[#6C63FF]">Placeholder content</p>
      </div>
    </div>
  );
};

export default HomePage;
