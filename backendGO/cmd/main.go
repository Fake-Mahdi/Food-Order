package main

import (
	"backendgo/controller/login"
	"backendgo/controller/signup"
	"backendgo/database/global"
	"database/sql"
	"fmt"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
)

func initDB() {
	dsn := "root:MaMameriem02@tcp(127.0.0.1:3306)/train"
	var err error
	db, err := sql.Open("mysql", dsn)
	if err != nil {
		log.Fatal("Mahdi U have skill issue")
	}
	if err := db.Ping(); err != nil {
		log.Fatal("Second Skill Issue")
	}
}
func main() {
	global.InitDB()
	mux := http.NewServeMux()
	fmt.Println("The Go Server Is Lestining on Port : 6474")
	mux.HandleFunc("/Signup", signup.SignupClient)
	mux.HandleFunc("/Login", login.HandleLoginRequest)
	http.ListenAndServe("0.0.0.0:6747", mux)
}
