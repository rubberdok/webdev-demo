import { useState } from "react";

export const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    addTodo(text);
  };

  return (
    <>
      <input type="text" value={text} onChange={handleTextChange} />
      <button onClick={handleClick}>Add todo</button>
    </>
  );
};
