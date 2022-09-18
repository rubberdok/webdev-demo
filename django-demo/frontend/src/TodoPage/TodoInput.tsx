import { useMutation } from "@apollo/client";
import { CreateAuthorDocument, CreateTodoDocument, TodosDocument } from "../generated/graphql";
import { useState } from "react";

export const TodoInput: React.FC = () => {
  const [todoText, setTodoText] = useState("");
  const [authorName, setAuthorName] = useState("");

  const [createAuthor] = useMutation(CreateAuthorDocument);
  const [createTodo] = useMutation(CreateTodoDocument, { refetchQueries: [TodosDocument] });

  const addTodo = async () => {
    const result = await createAuthor({ variables: { authorData: { name: authorName } } });

    const author = result?.data?.createAuthor?.author;
    if (author) {
      createTodo({ variables: { todoData: { text: todoText, authorId: author.id } } });
    }
  };

  return (
    <>
      <input type="text" value={authorName} onChange={(e) => setAuthorName(e.target.value)} placeholder="Author" />
      <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} placeholder="Todo text" />
      <button onClick={addTodo}>Add todo</button>
    </>
  );
};
