import React, { useRef } from "react";
import PropTypes from "prop-types";

export default function TodoForm({ submit }) {
  const newText = useRef();

  return (
    <div>
      <h2>Create your todo</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit(newText.current.value);
          newText.current.value = "";
        }}
      >
        <input type={"text"} ref={newText}  />

        <button type="submit">Create todo</button>
      </form>
    </div>
  );
}

TodoForm.PropTypes = {
  submit: PropTypes.func.isRequired,
};
