package global

import (
	"database/sql"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

var DB *sql.DB

func InitDB() {
	dsn := "root:MaMameriem02@tcp(127.0.0.1:3306)/train"
	var err error
	DB, err = sql.Open("mysql", dsn)
	if err != nil {
		log.Fatal("Mahdi U have skill issue")
	}
	if err := DB.Ping(); err != nil {
		log.Fatal("Second Skill Issue")
	}
}
