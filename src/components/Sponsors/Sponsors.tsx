import React from 'react'
import "./Sponsors.css"
import iotalogo from "../../assets/iota_logo.png"
import Lavazza from "../../assets/Lavazza-Logo.svg.png"
import Deeplink from "../../assets/deeplink-Logo.jpg"
import Imsk from "../../assets/Imsk-Logo.png"

// function Sponsors() {
//   return (
//     <div className='py-40'>
//         <h1 className='text-5xl text-white font-bold text-center'>SPONSORS</h1>
//         <section className=" py-10">
//         <div className="grid grid-cols-4 *:h-[20rem] *:border-y-1 *:border-r-1 *:border-white">
//                 <div className="col-span-1 flex justify-center items-center bg-gray-800">
//                     <div className="">
//                         <img src={iotalogo} alt="" className='w-48'/>
//                     </div>
//                 </div>
//                 <div className="col-span-1  flex justify-center items-center">
//                     <div className="">
//                         <img src={deepLinklogo} alt="" className='w-48'/>
//                     </div>
//                 </div>
//                 <div className="col-span-1 flex justify-center items-center bg-gray-800">
//                     <div className="">
//                         <img src={imsklogo} alt="" className='w-48'/>
//                     </div>
//                 </div>
//                 <div className="col-span-1  flex justify-center items-center">
//                     <div className="">
//                         <img src={lavazzalogo} alt="" className='w-48' />
//                     </div>
//                 </div>
                
//             </div>
//             </section>
//     </div>
//   )
// }
export const Sponsors = () => {
    return (
        
        <div className="bg-black text-neon-yellow p-8 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fc00ff] to-[#00dbde] mb-4 animate-pulse">Our Sponsors</h1>
            <div className="sponsors-holder grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4">
                {[{logo: Lavazza, name: "Lavazza", link: "https://www.lavazza.com/"},
                  {logo: Deeplink, name: "Deeplink", link: "https://deeplink.cloud/"},
                  {logo: Imsk, name: "Imsk", link: "http://imsk.net/"}].map((sponsor, index) => (
                    <div key={index} className="card bg-transparent text-center p-6 rounded-lg shadow-lg transform transition-transform hover:scale-125 transition-2ms ">
                        <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                            <img src={sponsor.logo} alt={`${sponsor.name} Logo`} className="w-48 mb-4" />
                            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fc00ff] to-[#00dbde]">
                                {sponsor.name}
                            </h2>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sponsors