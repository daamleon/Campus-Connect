import bannerImg from "../assets/background.png";
import logo from "../assets/logo.png";
import { FaArrowDown } from "react-icons/fa";

function Hero() {
  const scrollToMainContent = () => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="w-full h-[620px] md:h-[650px] bg-cover bg-center relative z-10"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <img
          src={logo}
          alt="Logo"
          className="max-w-[320px] md:max-w-[700px] mx-auto"
        />
        <p className="text-white mt-4 text-xl md:text-2xl font-semibold">
          Connect, Collaborate, Thrive
        </p>
      </div>

      <div
        onClick={scrollToMainContent}
        className="absolute bottom-32 md:bottom-16 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
      >
        <FaArrowDown className="text-white text-3xl md:text-4xl" />
      </div>
    </section>
  );
}

export default Hero;
