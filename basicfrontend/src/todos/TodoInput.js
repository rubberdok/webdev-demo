import { useState } from "react";
import { postTodo } from "./api";

export default function TodoInput({ addTodo, setError }) {
	const [text, setText] = useState("");

	function handleTextChange(event) {
		setText(event.target.value);
	}

	async function handleClick() {
		const response = await postTodo({ text: text });
		if (response.ok) {
			addTodo(response.todo);
			setError(undefined);
			setText("");
		} else {
			setError(response.error);
			setText("");
		}
	}

	return (
		<div className="input-container">
			<input type="text" value={text} onChange={handleTextChange} />
			<button onClick={handleClick}>Add todo</button>
		</div>
	);
}
