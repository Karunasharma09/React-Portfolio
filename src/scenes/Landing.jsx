import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className=" font-custumfont mx-auto md:flex md:justify-between md:items-center gap-16 md:h-full"
    >
      {/* IMAGE SECTION */}
      {/* <div className=' animate-pulse  absolute top-36 right-40 w-2/3 h-56 bg-pink-200 opacity-100 rounded-full mix-blend-multiply filter blur-3xl'></div>
      <div className=' animate-pulse absolute top-36 left-40 w-1/3 h-72 bg-sky-200 opacity-100 rounded-full mix-blend-multiply filter blur-3xl'></div>
      <div className='animate-pulse absolute top-52 left-1/3 w-1/3 h-72 bg-yellow-100 opacity-100 rounded-full mix-blend-multiply filter blur-3xl'></div>  */}
      <div className="basis-4/5 z-10 mt-16 md:mt-16 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
          className=" relative before:rounded-xl z-0 ml-10 before:absolute before:-top-1 before:left-2
          before:w-full before:max-w-[400px] md:before:max-w-[1000px] before:h-full before:border-8  before:border-green-900 before:z-[-1]"
        >
          <div
            className="relative z-0 ml-10 rounded-3xl before:rounded-xl before:absolute before:-top-8 before:left-20 left-8 top-10 
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-8  before:border-green-700 border-8  border-green-800  before:z-[-1]"
          >
            <img
              alt="profile"
              className=" h-96 hover:filter hover:saturate-150 rounded-2xl transition duration-500 z-10 w-full max-w-[400px] md:max-w-[1000px]"
              src={require("../assets/harsh_pic.jpg")}
            />
          </div></div>
        ) : (
          <img
            alt="profile"
            className=" pt-5 rounded-3xl z-10 w-full max-w-[800px] md:max-w-[1000px]"
            src={require("../assets/harsh_pic.jpg")}
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="md:pt-5 z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className=" text-green-600 text-6xl font-custumfont font-extrabold z-10 text-center md:text-start">
            Harsh       
          </p>
          <p className=" text-6xl font-custumfont font-extrabold z-10 text-center md:text-start">Gaur   </p>
          <p className=" mt-10 mb-10 text-xl text-center md:text-start">
          I am a programmer and Full stack developer
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className=" flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex p-3 rounded-lg bg-gradient-to-r from-green-600 via-green-900 to-green-900">
          <AnchorLink
            className="  text-deep-blue py-2 px-5 font-semibold
            rounded-l-2xl hover:text-white transition duration-500 text-base"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact
          </AnchorLink>
          {/* <AnchorLink */}
            {/* className=""
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          > */}
            <div className="  rounded-r-2xl opacity-100 hover:text-red transition duration-500 flex items-center justify-center px-5 text-base font-semibold">
            <a href={require("../assets/Harsh_oc.pdf")} download="myFile">Resume</a>
               
              <span className="animate-bounce">
              <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg></span>


            </div>
            </div>
          {/* </AnchorLink> */}
        </motion.div>

        <motion.div
          className="flex mt-0 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
