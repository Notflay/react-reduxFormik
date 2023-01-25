import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from "./constant";

// Incremental ID for Todos
let nextTodoID = 0;
/**
 *
 * @param {string} text
 * @returns action ADD_TODO
 */
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      id: nextTodoID++,
      text,
    },
  };
};

/**
 *
 * @param {number} id
 * @returns action TOGGLE_TODO
 */
export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: {
      id,
    },
  };
};

/**
 *
 * @param {string} filter
 * @returns action SET_VISIBILITY_FILTER
 */
export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: {
      filter,
    },
  };
};
