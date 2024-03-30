import styles from "./Section.module.css"

export default function Section(props) {

  return(
    <>
      <div className={styles.container}>
        <img src={props.language} alt="course"/>
        <div className={styles.info}>
          <h4>{props.header}</h4>
          <p>{props.paragraph}</p>
          <p>{props.length}</p>
        </div>
      </div> 
    </>
  ); 
}