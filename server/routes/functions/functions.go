package functions

import (
	"encoding/json"
	"log"
	"metudu/backend/database"
	"net/http"
)

func CORSHandler(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Set CORS headers to allow all origins, methods, and headers
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "*")
		w.Header().Set("Access-Control-Allow-Headers", "*")

		if r.Method == http.MethodOptions {
			return
		}

		// Continue handling the request
		next.ServeHTTP(w, r)
	})
}

func SignUp(w http.ResponseWriter, r *http.Request, db *database.Database) {
	type user struct {
		UserName     string `json:"userName"`
		UserNickname string `json:"userNickname"`
		UserEmail    string `json:"userEmail"`
		UserPassword string `json:"userPassword"`
	}

	type return_to_user struct {
		Success  int   `json:"success"`
		Error    error `json:"error"`
		UserId   int   `json:"userId"`
		UserPlan int   `json:"userPlan"`
		User     user  `json:"user"`
	}

	var requested_user user
	var response return_to_user
	if err := json.NewDecoder(r.Body).Decode(&requested_user); err != nil {
		log.Println("Received an error while decoding json: ", err)
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(return_to_user{Success: 0, Error: err})
	}

	if err := db.QueryRow(`INSERT INTO "user"(user_name, user_nickname, user_email, user_password) VALUES ($1,$2,$3,$4) RETURNING user_id`, requested_user.UserName, requested_user.UserNickname, requested_user.UserEmail, requested_user.UserPassword).Scan(&response.UserId); err != nil {
		log.Println("Received an error while adding data to database: ", err)
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(return_to_user{Success: 0, Error: err})
		return
	}

	if _, err := db.Exec(`INSERT INTO "user_plan" values ($1,$2)`,response.UserId, 1); err != nil {
		log.Println("Received an error while adding data to database: ", err)
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(return_to_user{Success: 0, Error: err})
	}

	response.User = requested_user
	response.Success = 1
	response.UserPlan = 1
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	if err := json.NewEncoder(w).Encode(&response); err != nil {
		log.Println("Received an error while encoding json: ", err)
	}
}
