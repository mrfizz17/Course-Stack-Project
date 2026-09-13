import { use, useState } from "react";
import SelectCard from "./TechnologieCard/SelectCard";
import type { technologyMainType } from "../types/mainType";
import SelectedCard from "./TechnologieCard/SelectedCard";

interface propsType {
  promiseData: Promise<technologyMainType[]>
}

const Technologies = ({promiseData}:propsType) => {

  const technologies:technologyMainType[] = use(promiseData)

  console.log(technologies)

  const [selectedTechnology , setSelectedTechnology] = useState<technologyMainType[]>([]);

  return (
    <div className="container mx-auto mb-15 ">
      <h1 className="font-bold text-3xl text-center md:text-4xl md:text-left">Explore the
        <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent"> Technologies
        </span>
      </h1>
      <p className=" text-[15px] text-center text-[#64748B] mt-2 md:text-left">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid md:grid-cols-4 gap-5 mr-5 ml-5 md:mr-0 md:ml-0">
        <div className="md:col-span-3">
          <SelectCard technologies={technologies} setSelectedTechnology={setSelectedTechnology} selectedTechnology={selectedTechnology}/>
          
        </div>
        <div className="col-span-1">
          <SelectedCard setSelectedTechnology={setSelectedTechnology} selectedTechnology={selectedTechnology}/>

        </div>
      </div>
      

    </div>
  );
};

export default Technologies;
