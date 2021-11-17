import React, { useState } from "react";

function HeaderTabs({ navbar }) {
  const [activeTab, setActiveTab] = useState();
  return (
    <div className={navbar ? "navsearch-active" : "navsearch"}>
      <button className="relative mx-8 group hover:text-gray-300">
        <span>Places to stay</span>
        <div className="absolute w-1 mt-1 transition duration-200 ease-in border-b-2 border-green-900 delay-50 group-hover:border-white left-10"></div>
      </button>
      <button className="relative mx-8 group hover:text-gray-300">
        <span>Experiences</span>
        <div className="absolute w-1 mt-1 transition duration-200 ease-in border-b-2 border-green-900 delay-50 group-hover:border-white left-10"></div>
      </button>
      <button className="relative mx-8 group hover:text-gray-300">
        <span>Online Experiences</span>
        <div className="absolute w-1 mt-1 transition duration-200 ease-in border-b-2 border-green-900 delay-50 group-hover:border-white left-16"></div>
      </button>
    </div>
  );
}

export default HeaderTabs;
