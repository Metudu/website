import styles from "./Main.module.css"
import Section from "./components/Section"
import golang from "./../../assets/Home/golang.png"
import python from "./../../assets/Home/python.png"
import terraform from "./../../assets/Home/terraform.png"
import aws from "./../../assets/Home/aws.png"

export default function Main(props) {
  return(
    <>
      <div className={styles.container}>
        <h3>There are the courses!</h3>
        <p>You must sign in to access these courses. Not every course is available for everyone. If the course you want is not visible after you log in, consider upgrading your plan.</p>
        <Section 
          language={golang} 
          header="LEARN GOLANG"
          paragraph="Learn golang course by Metudu"
          length="3h 21m"
        />
        <Section 
          language={python} 
          header="LEARN PYTHON"
          paragraph="Learn python course by Metudu"
          length="4h 58m"
        />
        <Section 
          language={aws} 
          header="LEARN AWS"
          paragraph="Learn AWS course by Metudu"
          length="9h 25m"
        />
        <Section 
          language={terraform} 
          header="LEARN TERRAFORM"
          paragraph="Learn terraform course by Metudu"
          length="1h 47m"
        />
      </div>
    </>
  ) 
}