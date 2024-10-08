import "./Banner.css"
import { NeonGradientCard } from "../magicui/neon-gradient-card"

import BannerImage from '../../assets/Banner.jpg'
function Banner() {
  return (
    
 
    <div className="banner-super py-10 sm:py-40 px-6 sm:px-20 flex justify-center items-center">
      <NeonGradientCard>
        <div className="banner-container rounded-3xl p-4 w-full h-[60%] overflow-hidden">
          <img src={BannerImage} alt="" className="rounded-3xl hidden sm:block w-full" />
          
        </div>
      </NeonGradientCard>
    </div>
    
  )
}

export default Banner