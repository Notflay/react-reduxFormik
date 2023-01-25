// Action Types:
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

// Async Action Types
export const API_CALL_REQUEST = "API_CALL_REQUEST"; // Watcher Saga listens
export const API_CALL_SUCCESS = "API_CALL_SUCCESS"; // Dispached by Worker Saga
export const API_CALL_FAILURE = "API_CALL_FAILURE"; // Dispached by Worker Saga
