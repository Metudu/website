package server

import (
	"net/http"
	"time"

	"github.com/gorilla/mux"
)

type Server struct {
	*http.Server
}

func InitHttpServer(port string, router *mux.Router) *Server {
	return &Server{
		Server: &http.Server{
			Addr:    port,
			Handler: router,
			WriteTimeout: 1 * time.Second,
			ReadTimeout: 1 * time.Second,
		},
	}
}

func (s *Server) StartServer()  {
	s.ListenAndServe()	
}