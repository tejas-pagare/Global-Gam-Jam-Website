
import Spline from '@splinetool/react-spline';

import './Welcome.css';

export const Welcome = () => {
    return (
        <div className='welcome-super px-4 sm:grid sm:grid-cols-10'>
            <Spline
        scene="https://prod.spline.design/85yhB2pcbHnpgbyu/scene.splinecode" 
      className='z-10 col-span-5 hidden sm:block'/>

            
            <div className="welcome-inner  sm:col-span-5 ">
            <Spline
                scene="https://prod.spline.design/23vIrvSDo-ZotEEX/scene.splinecode" 
            />
            </div>
        </div>
    );
};
