import React from "react";
import "./underlinedSectionHeaderTitle.scss";

const UnderlinedSectionHeaderTitle = (props) => {
  return (
    <div className="underlined-section-header">
      <h2>{props.title}</h2>
    </div>
  );
};

export default UnderlinedSectionHeaderTitle;
