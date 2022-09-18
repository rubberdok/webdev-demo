import { TodoList } from "./TodoList";
import { TodoInput } from "./TodoInput";

export const TodoPage: React.FC = () => {
  return (
    <>
      <h1>Todo List</h1>
      <TodoInput />
      <TodoList />
    </>
  );
};
