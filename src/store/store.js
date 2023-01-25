import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers/rootReducer";
import { userReducer } from "./reducers/useReducer";
import { watcherSaga } from "./sagas/saga";

const sagaMidleware = createSagaMiddleware();

/* export const store = configureStore({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  reducer: rootReducer,
}); */

const storeAsync = configureStore({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  reducer: rootReducer,
  middleware: () => [sagaMidleware],
});

sagaMidleware.run(watcherSaga);

export default storeAsync;
