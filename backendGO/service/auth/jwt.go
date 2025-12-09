package auth

import (
	"fmt"
	"net/http"
	"strings"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

var secretKey = []byte("password123")

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

func GenerateToken(username string) (string, error) {
	claims := jwt.MapClaims{
		"user": username,
		"exp":  time.Now().Add(1 * time.Hour).Unix(),
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString(secretKey)
	if err != nil {
		return " ", err
	}
	return tokenString, nil
}

func verifyToken(tokenString string) (*jwt.MapClaims, error) {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (any, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("SKill iSsue right Here")
		}
		return secretKey, nil
	})
	if err != nil {
		return nil, fmt.Errorf("SKill iSsue right Here")
	}
	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		return &claims, nil
	}
	return nil, fmt.Errorf("skill issue")
}

func ProtectEndPoint(next func(w http.ResponseWriter, r *http.Request)) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		if enableCORS(w, r) {
			return
		}
		authHeader := r.Header.Get("Authorization")
		parts := strings.Split(authHeader, " ")
		if authHeader == "" {
			http.Error(w, "unauthorized access", http.StatusUnauthorized)
			return
		}
		if parts[0] != "Barear" && len(parts) != 2 {
			http.Error(w, "unauthorized access", http.StatusUnauthorized)
			return
		}
		_, err := verifyToken(parts[1])
		if err != nil {
			http.Error(w, "unauthorized access", http.StatusUnauthorized)
			return
		}
		next(w, r)
	}
}
