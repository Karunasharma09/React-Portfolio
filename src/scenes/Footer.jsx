import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className=" h-60 bg-green-600 pt-10 font-custumfont">
      <div className="w-9/12 mx-auto md:flex justify-center md:justify-between text-center items-center">
        <div className="p-3  ">
          <p className="font-semibold text-2xl text-white">
            Harsh Gaur
          </p>
          
        </div>
        <SocialMediaIcons />

      </div>
    </footer>
  );
};

export default Footer;
