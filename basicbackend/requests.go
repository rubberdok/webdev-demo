package basicbackend

import (
	"fmt"
	"net/http"
)

// Registers the given handler for the given route.
// Checks that incoming requests are of the given HTTP method type.
func HandleRequest(method string, route string, handler func(http.ResponseWriter, *http.Request)) {
	wrapper := func(res http.ResponseWriter, req *http.Request) {
		if req.Method != method {
			errMsg := fmt.Sprintf("This endpoint only takes %s requests.", method)
			http.Error(res, errMsg, http.StatusMethodNotAllowed)
			return
		}

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
