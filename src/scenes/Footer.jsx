import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className=" h-60 bg-red pt-10 font-custumfont">
      <div className="w-9/12 mx-auto md:flex justify-center md:justify-between text-center items-center">
        <div className="p-3  ">
          <p className="font-semibold text-2xl text-yellow">
            Karuna Sharma
          </p>
          
        </div>
        <SocialMediaIcons />

      </div>
    </footer>
  );
};

export default Footer;
