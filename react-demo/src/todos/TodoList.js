export const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo}</li>
      ))}
    </ul>
  );
};
