import { useContext } from 'react'
import styles from './Section.module.css'
import {LoggedInContext} from "../../../App"
import { useNavigate } from 'react-router-dom';

function Section(props) {
  const {loggedIn} = useContext(LoggedInContext);
  const planId = props.planId;
  const navigate = useNavigate();
  let packageName;

  switch (planId) {
    case 2:
      packageName = "Iron Package"; 
      break;

    case 3:
      packageName = "Gold Package"; 
      break;

    case 4:
      packageName = "Diamond Package"; 
      break;
  
    default:
      break;
  }

  async function changePlan() {
    const response = await fetch("http://localhost:8080/changePlan", {
      method: 'POST',
      mode: 'cors',
      headers : {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        userId: JSON.parse(window.localStorage.getItem("user")).user.userId,
        planId: planId 
      })
    });
    const result = await response.json();
    if (result.success) {
      const user = JSON.parse(window.localStorage.getItem("user")); 
      user.userPlan = planId;
      window.localStorage.setItem("user", JSON.stringify(user))
      alert(`You have successfully change to the ${packageName}!`)
      navigate("/plans");
    } else {
      alert(`Something went wrong!`)
    }
  }

  return(
    <>
      <div className={styles.container}>
        <img className={styles.package_image} src={props.image} alt={props.package_name}/>
        <h4 className={styles.package_name}>{props.package_name}</h4>
        <nav className={styles.properties}>
          <ul className={styles.list}>
            <li className={styles.property}>{props.property_1}</li>
            <li className={styles.property}>{props.property_2}</li>
            <li className={styles.property}>{props.property_3}</li>
          </ul>
        </nav>
        {loggedIn ? <button onClick={() => {changePlan()}}>BUY NOW</button> : null}
      </div>
    </>
  ) 
}
export default Section