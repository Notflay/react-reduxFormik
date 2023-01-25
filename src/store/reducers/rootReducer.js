import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";

import { todosReducer } from "./todosReducer";
import { userReducer } from "./useReducer";

export default combineReducers({
  todosReducer,
  filterReducer,
  userState: userReducer,
});
