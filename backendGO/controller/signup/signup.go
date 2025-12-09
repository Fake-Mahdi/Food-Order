package signup

import (
	"backendgo/database/signupdatabase"
	"encoding/json"
	"fmt"
	"net/http"
)

func enableCORS(w http.ResponseWriter, r *http.Request) bool {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return true
	}
	return false
}

func SignupClient(w http.ResponseWriter, r *http.Request) {
	if enableCORS(w, r) {
		return
	}
	if r.Method != http.MethodPost {
		http.Error(w, "Unathorized Method", http.StatusMethodNotAllowed)
		return
	}
	if r.Header.Get("Content-Type") != "application/json" {
		http.Error(w, "Skill issUe", http.StatusUnsupportedMediaType)
		return
	}
	var modelClient signupdatabase.RegisterClient
	decoder := json.NewDecoder(r.Body)
	if err := decoder.Decode(&modelClient); err != nil {
		http.Error(w, "Invalid JSON", http.StatusBadRequest)
		return
	}
	err := signupdatabase.SavedintoDatabase(modelClient.Name, modelClient.Email, modelClient.Password)
	if err != nil {
		http.Error(w, "Failed to register client", http.StatusInternalServerError)
		return
	}
	fmt.Println("Received Client Data:")
	fmt.Println("Name:", modelClient.Name)
	fmt.Println("Email:", modelClient.Email)
	fmt.Println("Password:", modelClient.Password)
	w.WriteHeader(http.StatusCreated)
	w.Write([]byte("Client registered successfully"))

}
