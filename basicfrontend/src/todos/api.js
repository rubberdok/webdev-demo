const url = "http://localhost:8000";

export async function fetchTodos() {
	try {
		const response = await fetch(`${url}/todos`);
		console.log(response);
		const todos = await response.json();
		return { ok: true, todos: todos };
	} catch (error) {
		return { ok: false, error: error };
	}
}

export async function postTodo(todo) {
	try {
		const response = await fetch(`${url}/createTodo`, {
			method: "POST",
			body: JSON.stringify(todo),
		});

		if (response.status !== 200) {
			const error = await response.text();
			throw new Error(error);
		}

		const newTodo = await response.json();

		return { ok: true, todo: newTodo };
	} catch (error) {
		return { ok: false, error: error.message };
	}
}

export async function deleteTodo(todo) {
	try {
		const response = await fetch(`${url}/deleteTodo`, {
			method: "POST",
			body: JSON.stringify(todo),
		});

		if (response.status !== 200) {
			const error = await response.text();
			throw new Error(error);
		}

		const deletedTodo = await response.json();

		return { ok: true, todo: deletedTodo };
	} catch (error) {
		return { ok: false, error: error.message };
	}
}
