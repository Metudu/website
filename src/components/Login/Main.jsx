import { useState } from "react"
import styles from "./Main.module.css"

export default function Main(props) {

  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();

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

        <button className={styles.button}>LOG IN</button>
      </div>
    </div>
  </>) 
}