//select-------card

import React, { useState, type Dispatch, type SetStateAction } from "react";

import reactLogo from "../../assets/react.svg";
import { FaStar } from "react-icons/fa";
import type { technologyMainType } from "../../types/mainType";
import { toast } from "react-toastify";

interface IpropsType {
  technologies: technologyMainType[];
  setSelectedTechnology: Dispatch<SetStateAction<technologyMainType[]>>;
  selectedTechnology: technologyMainType[];
}

const SelectCard = ({
  technologies,
  setSelectedTechnology,
  selectedTechnology,
}: IpropsType) => {
  const [disableButton, setDisableButton] = useState(false);

  const handleSelect = (technology: technologyMainType) => {
    if (selectedTechnology.find((tech) => tech.id === technology.id)) {
      toast("already selected");

      setDisableButton(true);
      return;
    }

    const newSelectArray = [...selectedTechnology, technology];

    setSelectedTechnology(newSelectArray);
    toast.success(`${technology.name} is Added to stack`);
    console.log(selectedTechnology, "hello");
  };

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

                <p>{technology.description}</p>

                <ul className="flex  gap-1 justify-between items-center mt-2">
                  <li className="bg-[#cfcfcf] px-2 py-1 rounded-[5px]">
                    {technology.category}
                  </li>
                  <li className="text-[#6B7280] bg-base-200 p-1 rounded-[5px]">
                    {technology.difficulty}
                  </li>
                  <li className="text-[#F59E0B] font-semibold flex items-center gap-1">
                    <FaStar />
                    {technology.rating}
                  </li>
                </ul>
                <div className="mt-6">
                  <button
                    className={`btn bg-[#0A0F1D] btn-block text-white rounded-[8px] 
                    ${
                      selectedTechnology.some(
                        (item) => item.id === technology.id,
                      )
                        ? "!bg-gray-400"
                        : "!bg-[#0A0F1D]"
                    }
                  
                  `}
                    onClick={() => {
                      if (selectedTechnology.some((item) => item.id === technology.id)
                      ){
                        toast.warning("This technology is already selected!");
                        return;
                      }



                      handleSelect(technology);
                    }}
                    
                  >
                    {selectedTechnology.some((item) => item.id === technology.id)
                      ? "✓ Added to Stack" : "Add to Stack"}
                    
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
