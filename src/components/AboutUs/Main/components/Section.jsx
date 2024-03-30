import PropTypes from 'prop-types'
import styles from './Section.module.css'

function Section(props) {
  return(
  <>
    {props.header != null ? <h2 className={styles.section_h2}>{props.header}</h2> : null}
    {props.text != null ? <p className={styles.section_p}>{props.text}</p> : null}
    {props.image != null ? 
    <img className={styles.section_image} src={props.image} alt={props.image_alt} width="100%"/> : null}
  </>);
}

Section.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  image_alt: PropTypes.string
}
export default Section