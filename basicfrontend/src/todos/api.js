const url = "http://localhost:8000";

/**
 * Sends a request with the given method and body to the given endpoint.
 * Returns an object with a boolean 'ok' for whether the request succeeded.
 * If successful, also returns a field 'content' with the response's content.
 * If unsuccessful, also returns a field 'error' with the error message from the server.
 */
async function request(endpoint, method, body) {
	try {
		// Set up request options
		const options = {};
		if (method) options.method = method;
		if (body) options.body = JSON.stringify(body);

		// Call the endpoint
		const response = await fetch(`${url}/${endpoint}`, options);

		// If server does not respond OK, throw the error message
		if (response.status !== 200) {
			const error = await response.text();
			throw new Error(error);
		}

		// Convert the JSON response to an object.
		const todos = await response.json();

		return { ok: true, content: todos };
	} catch (error) {
		return { ok: false, error: error };
	}
}

/**
 * Fetches todos from the backend.
 * Returns a list of todos on success, or an error.
 */
export async function fetchTodos() {
	return request("todos");
}

/**
 * Posts a todo with the given text to the backend.
 * Returns the created todo on success, or an error.
 */
export async function postTodo(todo) {
	return request("createTodo", "POST", todo);
}

/**
 * Requests the backend to delete the given todo.
 * Returns the deleted todo on success, or an error.
 */
export async function deleteTodo(todo) {
	return request("deleteTodo", "POST", todo);
}
