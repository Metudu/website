package routes

import (
	"metudu/backend/database"
	"metudu/backend/routes/functions"
	"net/http"

	"github.com/gorilla/mux"
)

type Router struct {
	*mux.Router
}

func InitRouter(m *mux.Router) *Router {
	router := Router{Router: m}
	router.Use(functions.CORSHandler)
	return &router
}

func (r *Router) InitRoutes(db *database.Database) {
	r.HandleFunc("/signup", func(w http.ResponseWriter, r *http.Request) {functions.SignUp(w, r, db)}).Methods(http.MethodPost, http.MethodOptions)
	r.HandleFunc("/login", func(w http.ResponseWriter, r *http.Request) {functions.LogIn(w,r,db)}).Methods(http.MethodPost, http.MethodOptions)
	r.HandleFunc("/changePlan", func(w http.ResponseWriter, r *http.Request) {functions.ChangePlan(w,r,db)}).Methods(http.MethodPost,http.MethodOptions)
}

