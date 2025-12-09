package login

import (
	"backendgo/database/logindatabase"
	"backendgo/service/auth"
	"encoding/json"
	"fmt"
	"net/http"
)

type SiginingClient struct {
	Name     string `json:"name"`
	Password string `json:"password"`
}

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

func HandleLoginRequest(w http.ResponseWriter, r *http.Request) {
	if enableCORS(w, r) {
		return
	}
	if r.Method != http.MethodPost {
		http.Error(w, "Bad Method Request", http.StatusBadRequest)
		return
	}
	if r.Header.Get("Content-Type") != "application/json" {
		http.Error(w, "Unsportted Media type", http.StatusUnsupportedMediaType)
		return
	}
	var loginModel SiginingClient
	decode := json.NewDecoder(r.Body)
	if err := decode.Decode(&loginModel); err != nil {
		http.Error(w, "Invalid JSON", http.StatusBadRequest)
		return
	}

	fmt.Println(loginModel.Name)
	fmt.Println(loginModel.Password)
	if _, err := logindatabase.LoginIntoServer(loginModel.Name, loginModel.Password); err != nil {
		http.Error(w, "Invalid username or password", http.StatusUnauthorized)
		return
	}

	token, err3 := auth.GenerateToken(loginModel.Name)
	if err3 != nil {
		http.Error(w, "Invalid username or password", http.StatusUnauthorized)
		return
	}
	sendData := map[string]string{"token": token}
	encode := json.NewEncoder(w)
	encode.Encode(sendData)

}
