package basicbackend

import (
	"fmt"
	"net/http"
)

// Listens and serves on the given port, and prints status to the console.
func StartServer(port string) {
	fmt.Println("Listening on port", port, "...")
	http.ListenAndServe(fmt.Sprintf(":%s", port), nil)
}
