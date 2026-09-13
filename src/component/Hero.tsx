import HeroLogo from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="hero min-h-screen container md:mx-auto">
      <div className="hero-content grid md:grid-cols-2 md:gap-12  max-w-[460px] p-0 md:max-w-full">
        <div className="flex flex-col justify-center items-center md:grid md:justify-start md:items-start">
          <h1 className="text-4xl font-bold mr-3 md:mr-0">
            Build Your Ideal <br /></h1>
            <p className="text-4xl mr-3 md:mr-0 font-bold bg-linear-to-r from-[#fc450d] via-[#dd127b] to-purple-800 bg-clip-text text-transparent">Development Stack
            </p>
          
          <p className="py-6 text-[17px] mr-10 ml-10 text-center md:mr-0 md:ml-0 md:text-left">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.
          </p>
          <div className="mr-3 md:mr-0">
            <button className="btn btn-primary mr-3 w-42 rounded-lg bg-linear-to-r from-[#F97316] to-[#f8248e] border-0">Explore Technologies</button>
            <button className="btn w-42 bg-[#f0f0f0] border rounded-lg border-[#bbbaba] text-[#374151] ">Learn More</button>
          </div>
          
        </div>

        <div className=" flex justify-center">
          <img
            alt="Tailwind CSS hero component"
            src={HeroLogo}
            className="max-w-md rounded-lg -mt-10 md:-mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
