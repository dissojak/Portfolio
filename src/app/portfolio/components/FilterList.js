import { IonIcon } from "@ionic/react";
import { chevronDown } from "ionicons/icons";
import React from "react";

const FilterList = ({ activeFilter, setActiveFilter }) => {
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <>
      <ul className="filter-list">
        {["All", "Web design", "Applications", "Web development"].map((filter) => (
          <li className="filter-item" key={filter}>
            <button
              className={activeFilter === filter ? "active" : ""}
              onClick={() => handleFilterClick(filter)}
              data-filter-btn
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>

      <div className="filter-select-box">
        <button className="filter-select" data-select>
          <div className="select-value" data-selecct-value>
            {activeFilter}
          </div>
          <div className="select-icon">
            <IonIcon icon={chevronDown} />
          </div>
        </button>

        <ul className="select-list">
          {["All", "Web design", "Applications", "Web development"].map((filter) => (
            <li className="select-item" key={filter}>
              <button onClick={() => handleFilterClick(filter)} data-select-item>
                {filter}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FilterList;
