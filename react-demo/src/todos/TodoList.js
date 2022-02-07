export default function TodoList({ todos }) {
	return (
		<ul>
			{todos.map((todo) => (
				<li>{todo}</li>
			))}
		</ul>
	);
}
