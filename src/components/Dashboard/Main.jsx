import golang from "./../../assets/Home/golang.png"
import python from "./../../assets/Home/python.png"
import terraform from "./../../assets/Home/terraform.png"
import aws from "./../../assets/Home/aws.png"
import { useContext, useEffect } from "react"
import {LoggedInContext} from "../../App"
import { useNavigate } from "react-router-dom";
import styles from "./Main.module.css"
import Section from "./../Index/components/Section"

export default function Main() {
  const {loggedIn} = useContext(LoggedInContext);
  const navigate = useNavigate();
  const user = JSON.parse(window.localStorage.getItem("user"));
  let packageName;

  switch (user.userPlan) {
    case 1:
      packageName = "Basic Plan"; 
      break;

    case 2:
      packageName = "Iron Plan"; 
      break;

    case 3:
      packageName = "Gold Plan"; 
      break;

    case 4:
      packageName = "Diamond Plan"; 
      break;
  
    default:
      break;
  }
  useEffect(() => {
    if(!loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);    
  return (
    <>
      <div className={styles.container}>
        <div className={styles.user_container}>
          <h4>Your Profile</h4>
          <div className={styles.profile_properties}>
            <p>Name: {user.user.userName}</p>
            <p>Nickname: {user.user.userNickname}</p>
          </div>
          <div className={styles.profile_properties}>
            <p>Email: {user.user.userEmail}</p>
            <p>Plan: {packageName}</p>
          </div>
        </div>
        <div className={styles.course_container}>
          <Section 
            language={golang} 
            header="LEARN GOLANG"
            paragraph="Learn golang course by Metudu"
            length="3h 21m"
            download={true}
          />
          {user.userPlan >= 2 ? 
            <Section 
              language={python} 
              header="LEARN PYTHON"
              paragraph="Learn python course by Metudu"
              length="4h 58m"
              download={true}
            />
          : null}
          {user.userPlan >= 3 ? 
            <Section 
              language={aws} 
              header="LEARN AWS"
              paragraph="Learn AWS course by Metudu"
              length="9h 25m"
              download={true}
            />
          : null}
          {user.userPlan >= 4 ? 
            <Section 
              language={terraform} 
              header="LEARN TERRAFORM"
              paragraph="Learn terraform course by Metudu"
              length="1h 47m"
              download={true}
            />
          : null}
        </div>
      </div>
    </>
  ) 
}