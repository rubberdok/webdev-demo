import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import { fetchTodos } from "./api";

export default function TodoPage({ setError }) {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		async function getTodos() {
			const response = await fetchTodos();
			if (response.ok) {
				setTodos(response.todos);
				setError(undefined);
			} else {
				setError(response.error);
			}
		}
		getTodos();
	}, [setError]);

	function addTodo(newTodo) {
		const newTodos = [];

		for (const oldTodo of todos) {
			newTodos.push(oldTodo);
		}

		newTodos.push(newTodo);

		setTodos(newTodos);
	}

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
