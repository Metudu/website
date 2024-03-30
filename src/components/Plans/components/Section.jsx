import styles from './Section.module.css'

function Section(props) {
  return(
    <>
      <div className={styles.container}>
        <img className={styles.package_image} src={props.image} alt='image'/>
        <h4 className={styles.package_name}>{props.package_name}</h4>
        <nav className={styles.properties}>
          <ul className={styles.list}>
            <li className={styles.property}>{props.property_1}</li>
            <li className={styles.property}>{props.property_2}</li>
            <li className={styles.property}>{props.property_3}</li>
          </ul>
        </nav>
      </div>
    </>
  ) 
}
export default Section