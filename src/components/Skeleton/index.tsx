import React from "react";
import './styles.scss'

const Skeleton = () => {
  return (
    <div className="skeleton">
      <div className="skeleton-image"></div>
      <div className="skeleton-title"></div>
      <div className="skeleton-release"></div>
    </div>
  );
};

export default Skeleton;
