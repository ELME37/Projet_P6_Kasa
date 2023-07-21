import React, { useState } from "react";
import './collapse.scss';

function Collapse({ title, children, styles = '' }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function openCollapse () {
    setIsCollapsed(!isCollapsed)
  };

  return (
    <div className={`collapse ${styles}`}>
      <button className="collapse__header">
        <h3 className="collapse__title">{title}</h3>
        <span className={isCollapsed ? "arrow-up" : "arrow-down"} onClick={openCollapse} ></span>
      </button>

      <div className={isCollapsed ? "collapse__body active" : "collapse__body"}>
        <div className="collapse__content">        
          {children}
        </div>
      </div>

    </div>
  );
}

export default Collapse;
