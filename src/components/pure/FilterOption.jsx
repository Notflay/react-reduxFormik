import React from "react";

import FilterContainer from "../containers/FilterContainer";

const FilterOption = () => {
  return (
    <div className="filters">
      {/* Filter containers */}
      <FilterContainer filter="SHOW_ALL"> ALL </FilterContainer>
      <FilterContainer filter="SHOW_ACTIVE"> ACTIVE </FilterContainer>
      <FilterContainer filter="SHOW_COMPLETED"> COMPLETED </FilterContainer>
    </div>
  );
};

export default FilterOption;
