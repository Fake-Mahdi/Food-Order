package signupdatabase

import (
	"backendgo/database/global"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

type RegisterClient struct {
	Name     string `json:"name"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

func SavedintoDatabase(name string, email string, password string) error {
	query := "INSERT INTO Client (name, email, password) VALUES (?, ?, ?)"
	result, err := global.DB.Exec(query, name, email, password)
	if err != nil {
		fmt.Println("Database insertion error:", err)
		return fmt.Errorf("unable to save in database")
	}

	affectedRow, err := result.RowsAffected()
	if err != nil {
		fmt.Println("Error getting affected rows:", err)
	} else {
		fmt.Println("Rows inserted:", affectedRow)
	}

	return nil
}
