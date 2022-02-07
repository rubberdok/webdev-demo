import { useState } from "react";
import { postTodo } from "./api";

/**
 * Displays an input field and a button for creating todos.
 * Calls the given addTodo function on successful createTodo request,
 * or the given setError function on failure.
 */
export default function TodoInput({ addTodo, setError }) {
	const [text, setText] = useState("");

	function handleTextChange(event) {
		setText(event.target.value);
	}

	async function handleAdd() {
		// Send a request to the backend to create the todo
		const response = await postTodo({ text: text });

		if (response.ok) {
			addTodo(response.content);

			// Reset the error on success
			setError(undefined);
		} else {
			setError(response.error);
		}

		// Reset the text input field
		setText("");
	}

	return (
		<div className="input-container">
			<input type="text" value={text} onChange={handleTextChange} />
			<button onClick={handleAdd}>Add todo</button>
		</div>
	);
}
