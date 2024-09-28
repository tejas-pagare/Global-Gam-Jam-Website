// // import React from 'react'
// // import LaptopMockup from "../../assets/LaptopMockup.png"
// // import Spline from '@splinetool/react-spline'

// // function Eventdetails() {
// //   return (
  
// //     <div className="w-full h-screen bg-gradient-to-b flex items-center justify-center">
// //   <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
    
// //     {/* First Section */}
// //     <div className="flex justify-center items-center">
// //       <div className="relative w-[90%] sm:w-[80%] md:w-[90%] lg:w-[90%] h-[450px] bg-black flex flex-col justify-end p-6 sm:p-8 gap-6 rounded-lg text-white shadow-lg transform transition-all duration-700 hover:scale-105 hover:shadow-[0_0_30px_10px_rgba(232,28,255,0.7)]">
// //         {/* Gradient Border */}
// //         <div className="absolute inset-0 left-[-5px] w-[102%] h-[102%] rounded-lg -z-10 pointer-events-none transition-all duration-700 transform hover:rotate-[-90deg] hover:scale-[1.1]"></div>

// //         {/* Blur Effect */}
// //         <div className="absolute inset-0 transform scale-95 blur-[20px] -z-10 transition-all duration-700 hover:blur-[40px]"></div>
// //         <div className="w-[500px] overflow-hidden absolute top-[20%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 ">
// //           <Spline scene="https://prod.spline.design/WivV5Th5aeDa6HXS/scene.splinecode" />
// //         </div>

// //         <div className="">
// //           <div className="flex flex-col gap-4 sm:gap-6">
// //             {/* Event Title */}
// //             <p className="font-bold text-center text-3xl sm:text-4xl lg:text-5xl text-[#e81cff] glow">
// //               Event Details
// //             </p>

// //             {/* Schedule Section */}
// //             <div className="flex flex-col gap-3">
// //               {/* Schedule Title */}
// //               <div className="flex flex-col">
// //                 <p className="text-2xl sm:text-3xl font-bold text-center text-[#e81cff] glow">
// //                   Schedule
// //                 </p>
// //               </div>

// //               {/* Venue */}
// //               <div className="flex items-center gap-2 justify-center">
// //                 <i className="fa-solid fa-location-dot text-[#e81cff]"></i>
// //                 <p className="text-xl sm:text-2xl font-semibold text-center text-[#e81cff] glow">
// //                   Venue: IIIT Sricity
// //                 </p>
// //               </div>

// //               {/* Date */}
// //               <div className="flex justify-center">
// //                 <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-semibold text-center text-[#e81cff] glow">
// //                   Date: 26th - 28th Jan 2024
// //                 </p>
// //               </div>

// //               {/* Timings */}
// //               <div className="flex justify-center">
// //                 <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-semibold text-center text-[#e81cff] glow">
// //                   Timings: 5 PM onwards
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>

// //     {/* Second Section */}
// //     <div className="flex flex-col items-center justify-center">
// //       <div className="w-[60%] mx-auto py-20 flex justify-center items-center">
// //         <img src={LaptopMockup} alt="" className="w-full" />
// //       </div>
// //       <h1 className="text-3xl font-bold text-white text-center">
// //         EVENT DETAILS
// //       </h1>
// //     </div>

// //   </div>
// // </div>

// //   )
// // }

// // export default Eventdetails




// "use client";
// import {
//   useMotionValueEvent,
//   useScroll,
//   useTransform,
//   motion,
// } from "framer-motion";
// import React, { useEffect, useRef, useState } from "react";

// interface TimelineEntry {
//   title: string;
//   content: React.ReactNode;
// }

// const Eventdetails = ({ data }: { data: TimelineEntry[] }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [height, setHeight] = useState(0);

//   useEffect(() => {
//     if (ref.current) {
//       const rect = ref.current.getBoundingClientRect();
//       setHeight(rect.height);
//     }
//   }, [ref]);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 10%", "end 50%"],
//   });

//   const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
//   const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

//   return (
//     <div
//       className="w-full bg-dark font-sans md:px-10"
//       ref={containerRef}
//     >
//       <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
//         <h2 className="text-sm md:text-4xl mb-4 font-bold text-black dark:text-white max-w-4xl">
//           Global Gam Jam
//         </h2>
//         <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm max-w-sm">
//         Join developers, designers, and creators from around the world in this epic hackathon as part of the Global Game Jam! Over the course of two thrilling days, participants will collaborate to build innovative, creative, and engaging games from scratch
//         </p>
//       </div>

//       <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className="flex justify-start pt-10 md:pt-40 md:gap-10"
//           >
//             <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
//               <div className="h-8 absolute left-3 md:left-3 w-8 rounded-full bg-white dark:bg-black flex items-center justify-center">
//                 <div className="h-3 w-3 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-1" />
//               </div>
//               <h3 className="hidden md:block text-sm md:pl-20 md:text-3xl font-bold text-neutral-500 dark:text-neutral-500">
//                 {item.title}
//               </h3>
//             </div>

//             <div className="relative pl-20 pr-4 md:pl-4 w-full">
//               <h3 className="md:hidden block text-xs mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
//                 {item.title}
//               </h3>
//               <div className="text-xs md:text-sm">{item.content}</div>
//             </div>
//           </div>
//         ))}

//         <div
//           style={{
//             height: height + "px",
//           }}
//           className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
//         >
//           <motion.div
//             style={{
//               height: heightTransform,
//               opacity: opacityTransform,
//             }}
//             className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Eventdetails;


"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  image: string; // Include image URL
}

const Eventdetails = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-dark font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-sm md:text-4xl mb-4 font-bold text-black dark:text-white max-w-4xl">
          Global Gam Jam
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm max-w-sm">
          Join developers, designers, and creators from around the world in this
          epic hackathon as part of the Global Game Jam! Over the course of two
          thrilling days, participants will collaborate to build innovative,
          creative, and engaging games from scratch.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-start pt-10 md:pt-40 md:gap-10"
          >
            {/* Left Section: Timeline marker and title */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-8 absolute left-3 md:left-3 w-8 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-1" />
              </div>
              <h3 className="hidden md:block text-lg md:pl-20 md:text-3xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            {/* Right Section: Image, content */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-lg mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>

              {/* Image Section */}
              { item.image !="" &&<div className="w-full md:w-1/3 mx-auto mb-4 px-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>}

              {/* Content Section */}
              <div className="text-xs md:text-sm">{item.content}</div>
            </div>
          </div>
        ))}

        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Eventdetails;
