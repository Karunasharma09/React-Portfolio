import React from "react";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const Education = () => {
  return (
    <section id="education" className=" font-custumfont pt-4 pb-24  ">
      
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          
          <span className="font-semibold text-4xl ">
            Edu
          </span><span className="font-semibold text-4xl text-red">cation</span>
          <LineGradient width="1/3"></LineGradient>
        </motion.div>
      </div>
      
      {/* <!-- component --> */}
<div class="container mt-10">
  
<motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay:0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          
          <div
            class="flex flex-col md:grid grid-cols-9 mx-auto p-2 "
          >
            
            {/* <!-- left --> */}
            <div class="flex flex-row-reverse  md:contents">
              <div
                class=" hover:bg-amber-300 hover:scale-105 transition duration-500 cursor-pointer  bg-yellow col-start-1 col-end-5 p-4   my-4 ml-auto shadow-md"
              >
                <div class=" text-slate-900 font-semibold text-base mb-1">Indian Institute of Information Technology Guwahati </div>
                <div className=" text-slate-800 font-semibold text-sm">B.Tech in Computer Science Engineering</div>
                <p class="leading-tight text-sm font-medium text-slate-700">
                  Expected Graduation : June 2024
                </p>
                <p className="text-sm font-medium text-slate-700">Current GPA: 8.86/10 </p>
              </div>
              <div class=" col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="  h-full w-6 flex items-center justify-center">
                  <div class="bg-slate-300 h-full w-1 pointer-events-none"></div>
                </div>
                <div
                  class=" bg-slate-500 w-3 h-3 left-[6px] absolute top-1/2 -mt-3 rounded-full shadow"
                ></div>
              </div>
            </div>
            {/* <!-- right --> */}
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class=" h-full w-6 flex items-center justify-center">
                  <div class=" bg-slate-300 h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  class=" bg-slate-500 w-3 h-3 left-[6px] absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
              <div
                class=" hover:bg-pink-500 hover:scale-105 transition duration-500 bg-red col-start-6 col-end-10 p-4   my-4 mr-auto shadow-md"
              >
                <div class=" text-slate-900 font-semibold text-base mb-1">Kendriya Vidyalaya No 3, Air Force
Station, Vadodara</div>
                <div className=" text-slate-800 font-semibold text-sm">Higher Secondary (Class 12th)</div>
                <p class="leading-tight text-sm font-medium text-slate-700">
                  2020 passout 
                </p>
                <p className="text-sm font-medium text-slate-700">Percentage: 92.00% </p>
              </div>
            </div>
            {/* <!-- left --> */}
            <div class="flex flex-row-reverse md:contents">
              <div
                class=" hover:bg-cyan-400 hover:scale-105 transition duration-500 bg-blue col-start-1 col-end-5 p-4 my-4 ml-auto shadow-md"
              >
                <div class=" text-slate-900 font-semibold text-base mb-1">Kendriya Vidyalaya No 3, Air Force
Station, Makarpura</div>
                <div className=" text-slate-800 font-semibold text-sm">Secondary School (Class 10th)</div>
                <p class="leading-tight text-sm font-medium text-slate-700">
                  2018 passout 
                </p>
                <p className="text-sm font-medium text-slate-700">Percentage: 92.20% </p>
              </div>
              <div class=" col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="  h-full w-6 flex items-center justify-center">
                  <div class=" bg-slate-300 h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  class=" bg-slate-500 w-3 h-3 left-[6px] absolute top-1/2 -mt-3 rounded-full shadow"
                ></div>
              </div>
            </div>
            
          </div>
          </motion.div>
        </div>
    </section>
  );
};

export default Education;
