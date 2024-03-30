import { useContext, useEffect, useState } from "react"
import styles from "./Main.module.css"
import {LoggedInContext} from "../../App"
import { useNavigate } from "react-router-dom";

export default function Main(props) {
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const {loggedIn, setLoggedIn} = useContext(LoggedInContext);
  const navigate = useNavigate();

  async function logIn() {
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: userEmail,
        userPassword: userPassword
      })
    })

    const result = await response.json();
    if (result.success) {
      window.localStorage.setItem("user", JSON.stringify({
        userPlan: result.userPlan,
        user: result.user
      }))
      setLoggedIn(true);
    }
  }

  useEffect(() => {
    if (loggedIn) navigate("/dashboard");
  }, [loggedIn]);

  return(
  <>
    <div className={styles.container}>
      <h2>LOGIN PAGE</h2>
      <div className={styles.background}>
        <div className={styles.section}>
          <label htmlFor="user-email">E-Mail: </label>
          <input type="email" id="user-email" onChange={e => setUserEmail(e.target.value)}/>
        </div>

        <div className={styles.section}>
          <label htmlFor="user-password">Password: </label>
          <input type="password" id="user-password" onChange={e => setUserPassword(e.target.value)}/>
        </div>

        <button className={styles.button} onClick={() => {logIn()}}>LOG IN</button>
      </div>
    </div>
  </>) 
}