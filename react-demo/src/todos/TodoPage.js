import { useState } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

export default function TodoPage() {
	const [todos, setTodos] = useState([]);

	function addTodo(newTodo) {
		const newTodos = [];

		for (const oldTodo of todos) {
			newTodos.push(oldTodo);
		}

		newTodos.push(newTodo);

		setTodos(newTodos);
	}

	return (
		<>
			<h1>Todo List</h1>
			<TodoInput addTodo={addTodo} />
			<TodoList todos={todos} />
		</>
	);
}
