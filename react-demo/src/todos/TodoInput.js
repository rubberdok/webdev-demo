import { useState } from "react";

export default function TodoInput({ addTodo }) {
	const [text, setText] = useState("");

	function handleTextChange(event) {
		setText(event.target.value);
	}

	function handleClick() {
		addTodo(text);
	}

	return (
		<>
			<input type="text" value={text} onChange={handleTextChange} />
			<button onClick={handleClick}>Add todo</button>
		</>
	);
}