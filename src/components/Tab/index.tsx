import React from 'react';
import { Tab as IFTab } from '../../interfaces/tab';
import './styles.scss'
  
interface IFTabProps {
  tab: IFTab;
  isActive: boolean;
  onClick: () => void;
}

const Tab = ({ tab, isActive, onClick }: IFTabProps) => {
  return (
    <button
      className={`tab ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {tab.label}
    </button>
  );
};

export default Tab;
