import Section from "./components/Section"
import styles from "./Main.module.css"
import image from "./../../../assets/image.jpg"

function Main(){
  return (
  <>
    <div className={styles.container}>
      <Section 
      header="Who are we?" 
      text="We are Meducation! Our main purpose is to make great courses for you in order to entertain you while teaching! We also guarantee that you will learn lots of different topics so fast, like an F1 car! If these words amazed you, let's join us!"
      image={image}
      image_alt="image"/>
    </div>
  </>);
}

export default Main