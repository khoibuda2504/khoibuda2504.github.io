import React, { useState } from "react";
import PropTypes from 'prop-types'
import Editable from './Editable';

const Todo = ({ onClick, completed, text, onChange}) => {
  //const [task, setTask] = useState(text);
  return (
<li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <Editable
      text={text}
      placeholder="Write a text name"
      type="input"
    >
      <input
        type="text"
        name="text"
        placeholder="Write a task name"
        value={text}
        onChange={onChange}
      />
    </Editable>
  </li>)
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
