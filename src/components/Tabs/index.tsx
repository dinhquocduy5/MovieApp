import React, { useState } from 'react';
import { Tab as IFTab } from '../../interfaces/tab';
import Tab from '../Tab';

interface TabsProps {
  tabs: IFTab[];
  onClick: (label: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, onClick }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  const handleTabClick = (label: string) => {
    setActiveTab(label);
    onClick(label);
  };

  return (
    <div className="tabs">
      <div className="tab-list">
        {tabs.map((tab) => (
          <Tab
            key={tab.label}
            tab={tab}
            isActive={activeTab === tab.label}
            onClick={() => handleTabClick(tab.label)}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
