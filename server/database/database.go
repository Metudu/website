package database

import (
	"database/sql"
	_ "github.com/lib/pq"
	"log"
)

type Database struct {
	*sql.DB
}

func InitDatabase(connStr string) *Database {
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal("Database couldn't initialized! Exiting...")
		return nil
	}

	if err := db.Ping(); err != nil {
		log.Fatal(err)
	} else {
		log.Println("Successfully Connected")
	}

	return &Database{
		DB: db,
	}
}
