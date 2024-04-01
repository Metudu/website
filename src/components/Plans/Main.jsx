import Section from './components/Section'
import ImageIronOre from './../../assets/iron_ore.jpg'
import ImageGoldOre from './../../assets/gold_ore.jpeg'
import ImageDiamondOre from './../../assets/diamond_ore.jpeg'
import styles from "./Main.module.css"
import { useContext } from 'react'
import { LoggedInContext } from '../../App'

function Main() {
  const {loggedIn} = useContext(LoggedInContext);

  return(
    <>
      { loggedIn ?  
      <>
        { JSON.parse(window.localStorage.getItem("user")).userPlan < 2 ? 
          <>
            <Section planId={2} image={ImageIronOre} package_name='Iron Package' property_1='✅ Unlock one more course' property_2='❌ Ads may appear' property_3='❌ Videos can NOT be downloaded'/>
          </> : null } 
        { JSON.parse(window.localStorage.getItem("user")).userPlan < 3 ?
          <>
            <Section planId={3} image={ImageGoldOre} package_name='Gold Package' property_1='✅ Unlock one more course' property_2='✅ No ads' property_3='❌ Videos can NOT be downloaded'/>
          </> : null
        }
        { JSON.parse(window.localStorage.getItem("user")).userPlan < 4 ?
          <>
            <Section planId={4} image={ImageDiamondOre} package_name='Diamond Package' property_1='✅ Unlock ALL courses' property_2='✅ No ads' property_3='✅ Videos can be downloaded'/>
          </> : <></>
        }
        { JSON.parse(window.localStorage.getItem("user")).userPlan == 4 ?
          <>
            <h4 className={styles.h4}>You have the best package available!</h4>
          </> : <></>
        }
        
      </>
      : 
      <>
        <Section planId={2} image={ImageIronOre} package_name='Iron Package' property_1='✅ Unlock one more course' property_2='❌ Ads may appear' property_3='❌ Videos can NOT be downloaded'/>

        <Section planId={3} image={ImageGoldOre} package_name='Gold Package' property_1='✅ Unlock one more course' property_2='✅ No ads' property_3='❌ Videos can NOT be downloaded'/>

        <Section planId={4} image={ImageDiamondOre} package_name='Diamond Package' property_1='✅ Unlock ALL courses' property_2='✅ No ads' property_3='✅ Videos can be downloaded'/>
      </>
      }
    </>
  );
}

export default Main