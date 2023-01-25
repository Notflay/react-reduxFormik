import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

export default function TodoList({ todos, onTodoClick }) {
  return (
    <div>
      <h1>Your TODOs</h1>
      <ul>
        {todos.map((todo, index) => {
          return (
            <Todo key={index} {...todo} onClick={() => onTodoClick(todo.id)} />
          );
        })}
      </ul>
    </div>
  );
}

TodoList.prototypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};
