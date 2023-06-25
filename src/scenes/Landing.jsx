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
      <div className='absolute top-36 right-40 w-2/3 h-56 bg-pink-200 opacity-100 rounded-full mix-blend-multiply filter blur-3xl'></div>
      <div className='absolute top-36 left-40 w-1/3 h-72 bg-sky-200 opacity-100 rounded-full mix-blend-multiply filter blur-3xl'></div>
      <div className='absolute top-52 left-1/3 w-1/3 h-72 bg-yellow-100 opacity-100 rounded-full mix-blend-multiply filter blur-3xl'></div> 
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
          className="relative before:rounded-3xl z-0 ml-10 before:absolute before:-top-5 before:left-8
          before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-8  before:border-yellow before:z-[-1]"
        >
          <div
            className="relative z-0 ml-10 rounded-3xl before:rounded-3xl before:absolute before:-top-10 before:left-10  left-8 top-10 
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-8  before:border-red border-8  border-blue  before:z-[-1]"
          >
            <img
              alt="profile"
              className=" h-96 hover:filter hover:saturate-150 rounded-2xl transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src={require("../assets/p1.jpeg")}
            />
          </div></div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src={require("../assets/p1.jpeg")}
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="md:pl-10 z-30 basis-2/5 mt-12 md:mt-32">
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
          <p className="  text-6xl font-custumfont font-extrabold z-10 text-center md:text-start">
            Karuna Sharma
           
          </p>

          <p className=" mt-10 mb-7 text-sm text-center md:text-start">
            Adipiscing arcu, in aliquam fringilla cursus. Elit arcu elementum
            viverra malesuada sem ac faucibus dolor. Sagittis scelerisque.
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
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-white opacity-90 hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="md:pl-10 flex mt-5 justify-center md:justify-start"
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
