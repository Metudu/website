import { useContext, useState } from "react"
import styles from "./Main.module.css"
import { useNavigate } from "react-router-dom";
import {LoggedInContext} from "../../App"

export default function Main() {

  const [error, setError] = useState(false);
  const [userName, setUserName] = useState();
  const [userNickname, setUserNickname] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userPasswordAgain, setUserPasswordAgain] = useState();
  const {loggedIn, setLoggedIn} = useContext(LoggedInContext);

  const navigate = useNavigate();

  async function signUpUser() {
    const response = await fetch("http://localhost:8080/signup", {
      method: "POST",
      mode: "cors",
      headers : {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName : `${userName}`,
        userNickname : `${userNickname}`,
        userEmail : `${userEmail}`,
        userPassword : `${userPassword}`
      })
    });
    const result = await response.json();
    
    if (result.success) {
      alert("You have successfully created the user! Redirecting...")
      window.localStorage.setItem(`user`, JSON.stringify({
        userPlan: result.userPlan,
        user: result.user
      }))
      setLoggedIn(true);
      navigate("/dashboard");
    } else {
      alert(`Something went wrong! Error code: ${result.error.Code}`)
    }
  }  

  const signUp = () => {
    if (userPassword != userPasswordAgain) {
      setError(true)
      return 
    }
    else {
      setError(false)
      signUpUser()
    }
  }

  return(
  <>
    <div className={styles.container}>
      <h2>SIGN UP PAGE</h2>
      <div className={styles.background}>
        <div className={styles.section}>
          <label htmlFor="user-name">Name - Surname: </label>
          <input type="text" id="user-name" onChange={e => setUserName(e.target.value)}/>
        </div>

        <div className={styles.section}>
          <label htmlFor="user-nickname">Nickname: </label>
          <input type="text" id="user-nickname" onChange={e => setUserNickname(e.target.value)}/>
        </div>

        <div className={styles.section}>
          <label htmlFor="user-email">E-Mail: </label>
          <input type="email" id="user-email" onChange={e => setUserEmail(e.target.value)}/>
        </div>

        <div className={styles.section}>
          <label htmlFor="user-password">Password: </label>
          <input type="password" id="user-password" onChange={e => setUserPassword(e.target.value)}/>
        </div>

        <div className={styles.section}>
          <label htmlFor="user-password-again">Reenter the password: </label>
          <input type="password" id="user-password-again" onChange={e => setUserPasswordAgain(e.target.value)}/>
        </div>

        {error ? <p className={styles.error}>Passwords don't match!</p> : null}

        <button className={styles.button} onClick={() => {signUp()}}>SIGN UP</button>
      </div>
    </div>
  </>) 
}