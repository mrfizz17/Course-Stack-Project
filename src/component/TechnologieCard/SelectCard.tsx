//select-------card



import React, { type Dispatch, type SetStateAction } from "react";

import reactLogo from "../../assets/react.svg";
import { FaStar } from "react-icons/fa";
import type { technologyMainType } from "../../types/mainType";

interface IpropsType {
  technologies: technologyMainType[];
}

const SelectCard = ({ technologies} :IpropsType) => {


  



  return (
    <div className=" grid md:grid-cols-3 gap-2 items-stretch">
      {technologies.map((technology) => {
        return (
          <div className="mt-4" key={technology.id}>
            <div className="card w-full bg-base-100 shadow-xl h-full border-2 border-[#dadada]">
              <div className="card-body">
                <div className="flex justify-between ">
                  <img src={technology.icon} alt="" className="w-10 h-10" />
                  <span className="badge badge-soft badge-secondary">
                    {technology.badge}
                  </span>
                </div>

                <h2 className="text-3xl font-bold  mb-2">{technology.name}</h2>

                <p>
                  {technology.description}
                </p>

                <ul className="flex  gap-1 justify-between items-center mt-2">
                  <li className="bg-[#cfcfcf] px-2 py-1 rounded-[5px]">{technology.category}</li>
                  <li className="text-[#6B7280] bg-base-200 p-1 rounded-[5px]">
                    {technology.difficulty}
                  </li>
                  <li className="text-[#F59E0B] font-semibold flex items-center gap-1"><FaStar />{technology.rating}</li>
                </ul>
                <div className="mt-6">
                  <button className="btn bg-[#0A0F1D] btn-block text-white rounded-[8px]"

                   
                  
                  >
                    Add to Stack
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SelectCard;
