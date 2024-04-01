import styles from "./Section.module.css"
import { IoMdDownload } from "react-icons/io";

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
        {props.download ? <IoMdDownload className={styles.icon}/>: null}
      </div> 
    </>
  ); 
}