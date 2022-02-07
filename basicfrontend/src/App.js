import TodoPage from "./todos/TodoPage";
import Error from "./Error";
import PageTitle from "./PageTitle";
import { useState } from "react";
import "./styles/base.css";
import "./styles/input.css";
import "./styles/lists.css";

export default function App() {
	const [error, setError] = useState();

	return (
		<div id="main">
			<PageTitle title="Todo List" />
			<Error error={error} />
			<TodoPage setError={setError} />
		</div>
	);
}
