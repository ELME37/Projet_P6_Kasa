import React, { useState } from "react";
import './collapse.scss';

function Collapse({ title, content }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function openCollapse () {
    setIsCollapsed(!isCollapsed)
  };

  return (
    <div className="container">
      <button className="collapse__header">
        <h3 className="collapse__title">{title}</h3>
        <span className={isCollapsed ? "arrow-up" : "arrow-down"} onClick={openCollapse} ></span>
      </button>

      {isCollapsed && (
        <div className="collapse__body">
          <p className="collapse__content">{content}</p>
        </div>
      )}
    </div>
  );
}

export default Collapse;
