package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	//lint:ignore ST1001 Using dot import to simplify example
	. "github.com/rubberdok/webdev-demo/backend-demo/basicbackend"
	"gorm.io/gorm"
)

// Todo model.
type Todo struct {
	ID   uint   `gorm:"primaryKey" json:"id"`
	Text string `json:"text"`
}

var database *gorm.DB

func main() {
	// Set up database
	database, _ = OpenDatabase()

	// Migrate the model schema to the database
	database.AutoMigrate(&Todo{})

	database.Create(&Todo{Text: "test todo"})

	// Set up endpoint for getting todos
	HandleGetRequest("/todos", getTodos)

	// Set up endpoint for creating todos
	HandlePostRequest("/createTodo", createTodo)

	// Set up endpoint for deleting todos
	HandlePostRequest("/deleteTodo", deleteTodo)

	// Start the server on port 8000
	StartServer("8000")

	// Close the database when server stops
	CloseDatabase(database)
}

// Handler for the /todos endpoint, returning a list of all todos in the database.
func getTodos(response http.ResponseWriter, request *http.Request) {
	var todos []Todo

	// Get all todos from database
	// SQL equivalent: SELECT * FROM todos;
	database.Find(&todos)

	// Convert the todos to JSON format
	jsonResponse, _ := json.Marshal(&todos)

	// Send the JSON response
	response.Write(jsonResponse)
}

// Handler for the /createTodo endpoint, which lets users create todos.
// Checks that the request body contains the text for the todo to create.
func createTodo(response http.ResponseWriter, request *http.Request) {
	var newTodo Todo

	// Decode the JSON body of the POST request
	error := json.NewDecoder(request.Body).Decode(&newTodo)

	// Validate the decoded request body
	if error != nil || newTodo.Text == "" {
		http.Error(response, "Invalid request to create todo.", http.StatusBadRequest)
		return
	}

	// Store the validated todo in the database
	// SQL equivalent: INSERT INTO todos VALUES ([newTodo.ID], [newTodo.Text]);
	database.Create(&newTodo)

	// Respond to request
	response.Write([]byte("Todo created."))
}

// Handler for the /deleteTodo endpoint, which lets users delete todos.
// Checks that the request body contains the ID for the todo to delete.
func deleteTodo(response http.ResponseWriter, request *http.Request) {
	var todoToDelete Todo

	// Decode the JSON body of the POST request
	error := json.NewDecoder(request.Body).Decode(&todoToDelete)

	// Validate the decoded request body
	if error != nil || todoToDelete.ID == 0 {
		http.Error(response, "Invalid request to delete todo.", http.StatusBadRequest)
		return
	}

	// Delete the todo with the ID given in request
	// SQL equivalnt: DELETE FROM todos WHERE id = [todoToDelete.ID]
	database.Delete(&todoToDelete)

	// Respond to request
	response.Write([]byte(fmt.Sprint("Todo with ID", todoToDelete.ID, "deleted")))
}
