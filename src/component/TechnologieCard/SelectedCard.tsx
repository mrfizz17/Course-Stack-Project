//selected---------card
import { RxCross2 } from "react-icons/rx";
import type { technologyMainType } from "../../types/mainType";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface IpropsType {
  setSelectedTechnology: Dispatch<SetStateAction<technologyMainType[]>>;
  selectedTechnology: technologyMainType[];
}

const SelectedCard = ({
  setSelectedTechnology,
  selectedTechnology,
}: IpropsType) => {


  const handleDelete=(technology)=>{

    const updateTechnology= selectedTechnology.filter((tech)=>tech.id!==technology.id)

    setSelectedTechnology(updateTechnology);
    toast.error(`${technology.name} is Deleted from the stack`)
  }

  const handleAllDelete=()=>{

    toast.error(`All Selected are remove from stack`)

    setSelectedTechnology([]);
  }




  if (selectedTechnology.length === 0) {
    return (
      <div className="mt-4 card bg-base-100 shadow-2xl border-2 border-[#dadada] p-4 rounded-2xl">
        <p className="text-2xl font-semibold">Your Stack</p>
        <p className="text-[15px] text-[#94A3B8] mb-2 ">
          No technology selected yet
        </p>

        <div className="mb-4">
          <div className="mt-2  shadow-sm p-2 border-2 border-dotted border-[#E2E8F0] rounded-2xl text-center py-6 text-[#94A3B8]">
            Your stack is empty
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div
          className="mt-4 card bg-base-100 shadow-2xl border-2 border-[#dadada] p-4 rounded-2xl"
         
        >
          <p className="text-2xl font-semibold">Your Stack</p>
          <p className="text-[15px] text-[#94A3B8] mb-2 ">
            {selectedTechnology.length} Technology Selected
          </p>

          {selectedTechnology.map((Technology: technologyMainType, ind) => {
            return (
              <div className="mb-4"  key={ind}>
                <div className="mt-2 grid grid-cols-5 gap-2 items-center shadow-sm p-2 border-2 border-[#E2E8F0] rounded-2xl">
                  <img src={Technology.icon} alt="" className="col-span-1" />
                  <div className="col-span-3">
                    <p className="font-semibold text-1xl">{Technology.name}</p>
                    <p className="text-[#94A3B8] text-[12px]">
                      {Technology.category}
                    </p>
                  </div>

                  <RxCross2 className="col-span-1 w-8 h-8 text-[#94A3B8] cursor-pointer" 

                    onClick={()=>{
                        handleDelete(Technology);
                    }}
                  
                  />
                </div>
              </div>
            );
          })}

          <button className="btn bg-base-200 !bg-transparent border border-[#D82C20] text-[#D82C20] font-bold text-1xl rounded-[8px]"

            onClick={handleAllDelete}
          
          >
            {" "}
            Remove all
          </button>
        </div>
      </>
    );
  }
};

export default SelectedCard;
