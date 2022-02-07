import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import { fetchTodos } from "./api";

/**
 * Displays a page with a list of todos, and input for creating new todos.
 * Calls the given setError function if todo fetching failed.
 */
export default function TodoPage({ setError }) {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		// Define an inner async function, since useEffect function cannot be async
		async function getTodos() {
			// Fetch list of todos from the backend
			const response = await fetchTodos();

			if (response.ok) {
				setTodos(response.content);

				// Reset the error on success
				setError(undefined);
			} else {
				setError(response.error);
			}
		}

		getTodos();
	}, [setError]);

	/** Updates the todos state with the given todo. */
	function addTodo(newTodo) {
		const newTodos = [];

		for (const oldTodo of todos) {
			newTodos.push(oldTodo);
		}

		newTodos.push(newTodo);

		setTodos(newTodos);
	}

	/** Removes the given todo from the todos state. */
	function removeTodo(removedTodo) {
		const newTodos = [];

		for (const oldTodo of todos) {
			if (oldTodo.id !== removedTodo.id) {
				newTodos.push(oldTodo);
			}
		}

		setTodos(newTodos);
	}

	return (
		<div className="content">
			<TodoInput addTodo={addTodo} setError={setError} />
			<TodoList todos={todos} removeTodo={removeTodo} />
		</div>
	);
}
