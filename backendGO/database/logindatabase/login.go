package logindatabase

import (
	"backendgo/database/global"
	"fmt"
)

type SiginingClient struct {
	Name     string `json:"name"`
	Password string `json:"password"`
}

func LoginIntoServer(name, password string) (*SiginingClient, error) {
	query := "SELECT name, password FROM Client WHERE name = ? AND password = ?"

	var client SiginingClient
	err := global.DB.QueryRow(query, name, password).Scan(&client.Name, &client.Password)
	if err != nil {
		return nil, fmt.Errorf("invalid credentials: %v", err)
	}

	return &client, nil
}
