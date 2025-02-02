import bannerImg from "../assets/Logo.png";

function Hero() {
  return (
    <section
      className="w-full h-[620px] md:h-[650px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    ></section>
  );
}

export default Hero;
