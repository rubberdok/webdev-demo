import { useQuery } from "@apollo/client";
import { TodosDocument } from "../generated/graphql";

export const TodoList: React.FC = () => {
  const { data, loading, error } = useQuery(TodosDocument);

  if (error) return <div>Error!</div>;

  if (loading) return <div>Loading...</div>;

  return (
    <ul>
      {data?.todos?.map((todo) => (
        <li>
          {todo?.text} (by {todo?.author.name})
        </li>
      ))}
    </ul>
  );
};
