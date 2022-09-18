import { useState } from "react";
import { Todo } from "./types";

type Props = {
  addTodo: (todo: Todo) => void;
};

export const TodoInput: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState("");

  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => addTodo({ text: text })}>Add todo</button>
    </>
  );
};
