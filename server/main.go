package main

import (
	"metudu/backend/database"
	"metudu/backend/routes"
	"metudu/backend/server"

	"github.com/gorilla/mux"
)

func main() {
	db := database.InitDatabase("host=localhost port=6000 dbname=react-database user=postgres password=1234 sslmode=disable connect_timeout=10")
	router := routes.InitRouter(mux.NewRouter())
	router.InitRoutes(db)
	httpServer := server.InitHttpServer(":8080", router.Router)	
	httpServer.StartServer()
}