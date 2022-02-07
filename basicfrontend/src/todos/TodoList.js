import { deleteTodo } from "./api";

export default function TodoList({ todos, removeTodo, setError }) {
	async function handleDelete(todoId) {
		const response = await deleteTodo({ id: todoId });
		if (response.ok) {
			removeTodo(response.todo);
			setError(undefined);
		} else {
			setError(response.error);
		}
	}

	return (
		<ul>
			{todos.map((todo) => (
				<li key={todo.id}>
					<p>{todo.text}</p>
					<button onClick={() => handleDelete(todo.id)} className="delete">
						Delete
					</button>
				</li>
			))}
		</ul>
	);
}
