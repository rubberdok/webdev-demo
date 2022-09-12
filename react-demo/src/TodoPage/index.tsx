import { useState } from "react";
import { TodoList } from "./TodoList";
import { TodoInput } from "./TodoInput";
import { Todo } from "./types";

export const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (newTodo: Todo) => {
    const newTodos = [];

    for (const oldTodo of todos) {
      newTodos.push(oldTodo);
    }

    newTodos.push(newTodo);

    setTodos(newTodos);
  };

  return (
    <>
      <h1>Todo List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} />
    </>
  );
};
