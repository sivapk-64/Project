import Laptop from '../Datafull/Laptop'
import Stove from '../Datafull/Stove'
import ImageSlider from '../Datafull/ImageSlider'
import { SliderData } from '../Datafull/SliderData'
const HomeContent = () => {
  return (
    <div>
     
       <ImageSlider slides={SliderData}/>;
       <Stove/> 
      <Laptop/>

    </div>
   
  )
}
export default HomeContent