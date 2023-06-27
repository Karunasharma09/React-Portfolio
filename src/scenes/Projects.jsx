import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title,description }) => {
  const overlayStyles = ` max-w-[400px] max-h-[400px] absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
   bg-yellow z-30 flex flex-col justify-center items-center text-center p-8 text-deep-blue`;
  const projectTitle = title.split(" ").join("").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative max-h-[400px] max-w-[400px]">
      <div className={overlayStyles}>
        {/* <p className="text-2xl font-playfair">{title}</p> */}
        <p className="mt-7">
          {description}
        </p>
      </div>
      <img src={require(`../assets/${projectTitle}.png`)} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-32 pb-32">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10 flex">
          These are some of my work in Frontend Development. Hope you like them !
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
</svg> */}

        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Project 1" description= "Hero section of Fhealth. An online application for spreading awareness about female health issues." />
          <Project title="Project 2" description=" Landing Page of an online banking application named BankWiz" />

          {/* ROW 2 */}
          <Project title="Project 3" description="Landing page of Take-A-Step. An online platform to post issues of your surrounding and get them noticed." />
          <Project title="Project 4" description=" Landing page of an online Loan Application." />
          <Project title="Project 5" description={"Body of Fhealth. This application also includes PCOS, cancer and malaria predictor and much more."}/>

          <Project title="Project 6" description={"Further body and footer of BankWiz"} />
          <Project title="Project 7" description={"Feed page of Take-A-Step. This project won First Position in Hack4Earth Hackathon conducted by IIITG under Swachhta Pakhwada."} />
          <Project title="Project 8" description={"Footer of online Loan Application and Contact Us page of BankWiz"}/>

          {/* ROW 3 */}
          <Project title="Project 9" description={"Further Body of Fhealth. This project got selected to participate in the final round of the Microsoft Azure Hackathon."} />
          <Project title="Project 10" description={"Interactive Dashboard for BankWiz users and admin."} />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
              <div className="flex justify-center text-center items-center p-4 bg-slate-200
              max-w-[400px] max-h-[400px] text-md font-semibold">
                  Gihub links
              </div>
              
            <div className=" hover:text-red transition duration-500 flex justify-center text-center items-center p-4 bg-slate-200
              max-w-[400px] max-h-[400px] text-md font-semibold">
                 <a href="https://github.com/Karunasharma09/FHealth">Fhealth</a> 
            </div>
            <div className=" hover:text-red transition duration-500 flex justify-center text-center items-center p-4 bg-slate-200
              max-w-[400px] max-h-[400px] text-md font-semibold">
                  <a href="">BankWiz</a>
            </div>
            <div className=" hover:text-red transition duration-500 flex justify-center text-center items-center p-4 bg-slate-200
              max-w-[400px] max-h-[400px] text-md font-semibold">
                  <a href="https://github.com/Karunasharma09/TakeaStep">Take-A-Step</a>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
