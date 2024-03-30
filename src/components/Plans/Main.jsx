import Section from './components/Section'
import ImageIronOre from './../../assets/iron_ore.jpg'
import ImageGoldOre from './../../assets/gold_ore.jpeg'
import ImageDiamondOre from './../../assets/diamond_ore.jpeg'

function Main(props) {
  return(
    <>
      <Section image={ImageIronOre} package_name='Iron Package' property_1='✅ Unlock one more course' property_2='❌ Ads may appear' property_3='❌ Videos can NOT be downloaded'/>

      <Section image={ImageGoldOre} package_name='Gold Package' property_1='✅ Unlock one more course' property_2='✅ No ads' property_3='❌ Videos can NOT be downloaded'/>

      <Section image={ImageDiamondOre} package_name='Diamond Package' property_1='✅ Unlock ALL courses' property_2='✅ No ads' property_3='✅ Videos can be downloaded'/>
    </>
  );

}

export default Main