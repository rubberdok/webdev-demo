import { deleteTodo } from "./api";

/**
 * Displays the given todos as a list.
 * Shows a delete button for each todo, that calls the todo deletion endpoint.
 * If deletion succeeds, calls the given removeTodo function.
 * If it failed, calls the given setError function.
 */
export default function TodoList({ todos, removeTodo, setError }) {
	async function handleDelete(todoId) {
		// Request the backend to delete the chosen todo
		const response = await deleteTodo({ id: todoId });

		if (response.ok) {
			removeTodo(response.content);

			// Reset the error on success
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
