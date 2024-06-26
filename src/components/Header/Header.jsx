import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedInContext } from "../../App";

function Header() {
  const {loggedIn, setLoggedIn} = useContext(LoggedInContext);
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2>Meducation</h2>
          <p>To get better</p>
        </div>
        <nav className={styles.options}>
          <ul className={styles.option_list}>
            {loggedIn ?  
            <Link to="/dashboard" style={{ textDecoration: 'none', color: 'white' }}>
              <li className={styles.option}>DASHBOARD</li>
            </Link>
            : 
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <li className={styles.option}>HOME</li>
            </Link>
            }
            {loggedIn ? null : 
            <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>
              <li className={styles.option}>ABOUT US</li>
            </Link>
            }
            <Link to="/plans" style={{ textDecoration: 'none', color: 'white' }}>
              <li className={styles.option}>PLANS</li>
            </Link>
          </ul>
        </nav>

        {loggedIn ? 
        <div className={styles.profile}>
          <p>Welcome, {JSON.parse(window.localStorage.getItem("user")).user.userNickname}!</p>
          <button className={styles.button} onClick={() => {
            window.localStorage.removeItem("user");
            setLoggedIn(false);
            navigate("/");
          }}>LOG OUT</button>
        </div>
        : 
        <div className={styles.enroll}>
          <Link to="/login">
            <button className={styles.button}>LOG IN</button>
          </Link>
          <Link to="/signup">
            <button className={styles.button}>SIGN UP</button>
          </Link>
        </div>
        }
      </div>
    </>);
}

export default Header