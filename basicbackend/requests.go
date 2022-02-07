package basicbackend

import (
	"fmt"
	"net/http"
)

// Registers the given handler for the given route.
// Ensures that incoming requests are of the given HTTP method type.
func HandleRequest(method string, route string, handler func(http.ResponseWriter, *http.Request)) {
	wrapper := func(res http.ResponseWriter, req *http.Request) {
		res.Header().Set("Access-Control-Allow-Origin", "*")
		res.Header().Set("Access-Control-Allow-Methods", fmt.Sprintf("%s, OPTIONS", method))

		handler(res, req)
	}

	http.HandleFunc(route, wrapper)
}

// Registers the given handler for the given route.
// Checks that incoming requests are HTTP GET requests.
func HandleGetRequest(route string, handler func(http.ResponseWriter, *http.Request)) {
	HandleRequest(http.MethodGet, route, handler)
}

// Registers the given handler for the given route.
// Checks that incoming requests are HTTP POST requests.
func HandlePostRequest(route string, handler http.HandlerFunc) {
	HandleRequest(http.MethodPost, route, handler)
}
