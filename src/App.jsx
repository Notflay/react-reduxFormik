import { useState } from "react";

import "./App.css";
import TodosContainer from "./components/containers/TodoContainers";
import TodoFormContainer from "./components/containers/TodoFormContainer";
import FilterOption from "./components/pure/FilterOption";

function App() {
  return (
    <div>
      <TodosContainer></TodosContainer>
      <TodoFormContainer></TodoFormContainer>
      <FilterOption></FilterOption>
    </div>
  );
}

export default App;
