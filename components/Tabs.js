import React, { useState } from "react";

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="hidden w-full mx-12 sm:block">
      <h2 className="py-4 text-2xl font-bold text-center sm:text-left">
        Inspiration for future getaways
      </h2>
      <ul
        className="flex flex-row gap-6 text-sm text-gray-500 list-none border-b "
      >
        {children.map((tab) => (
          <li
            key={tab.props.label}
            className={tab.props.label === activeTab ? "currentTab" : ""}
          >
            <button onClick={(e) => handleClick(e, tab.props.label)}>
              {tab.props.label}
            </button>
          </li>
        ))}
      </ul>
      <div>
        {children.map((item) => {
          if (item.props.label === activeTab) {
            return <div key={item.props.label}>{item.props.children}</div>;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default Tabs;
