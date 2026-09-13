import HeroLogo from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="hero min-h-screen container mx-auto ">
      <div className="hero-content grid grid-cols-2 gap-12 p-0">
        <div className="">
          <h1 className="text-5xl font-bold">
            Build Your Ideal <br />
            <p className="bg-linear-to-r from-[#fc450d] via-[#dd127b] to-purple-800 bg-clip-text text-transparent">
              Development Stack
            </p>
          </h1>
          <p className="py-6">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.
          </p>
          <button className="btn btn-primary mr-3 w-42 rounded-lg bg-linear-to-r from-[#F97316] to-[#f8248e] border-0">Explore Technologies</button>
          <button className="btn w-42 bg-[#f0f0f0] border rounded-lg border-[#bbbaba] text-[#374151] ">Learn More</button>
        </div>

        <div className=" flex justify-center">
          <img
            alt="Tailwind CSS hero component"
            src={HeroLogo}
            className="max-w-md rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
