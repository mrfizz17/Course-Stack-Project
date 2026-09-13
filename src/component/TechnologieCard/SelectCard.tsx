import React from "react";

import reactLogo from "../../assets/react.svg";
import type { technologyMainType } from "../../types/mainType";

interface IpropsType {
  technologies: technologyMainType[];
}

const SelectCard = ({ technologies }: IpropsType) => {
  return (
    <div className=" grid grid-cols-3 gap-2 items-stretch">
      {technologies.map((technology) => {
        return (
          <div className="mt-4" key={technology.id}>
            <div className="card w-80 bg-base-100 shadow-md h-full">
              <div className="card-body">
                <div className="flex justify-between ">
                  <img src={technology.icon} alt="" className="w-10 h-10" />
                  <span className="badge badge-soft badge-secondary">
                    {technology.badge}
                  </span>
                </div>

                <h2 className="text-3xl font-bold">{technology.name}</h2>

                <p>
                  {technology.description}
                </p>

                <ul className="flex  gap-1 justify-between items-center mt-auto">
                  <li className="bg-base-200 p-1 rounded-[5px]">{technology.category}</li>
                  <li className="bg-base-200 p-1 rounded-[5px]">
                    {technology.difficulty}
                  </li>
                  <li>{technology.rating}</li>
                </ul>
                <div className="mt-6">
                  <button className="btn bg-[#0A0F1D] btn-block text-white">
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
