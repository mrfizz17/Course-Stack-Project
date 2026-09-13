import { use } from "react";
import SelectCard from "./TechnologieCard/SelectCard";
import type { technologyMainType } from "../types/mainType";

interface propsType {
  promiseData: Promise<technologyMainType[]>
}

const Technologies = ({promiseData}:propsType) => {

  const technologies:technologyMainType[] = use(promiseData)

  console.log(technologies)

  return (
    <div className="container mx-auto mb-50 ">
      <h1 className="font-bold text-4xl">Explore the
        <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent"> Technologies
        </span>
      </h1>
      <p className=" text-1xl text-[#64748B] mt-2">
        Pick one technology per category to build your ideal stack.
      </p>

      
      <SelectCard technologies={technologies}/>


    </div>
  );
};

export default Technologies;
