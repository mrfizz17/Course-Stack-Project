//selected---------card
import { RxCross2 } from "react-icons/rx";
import reactLogo from "../../assets/react.svg";


const SelectedCard = () => {
 
    return (
      <>
        

          
            <div className="mt-4 card bg-base-100 shadow-2xl border-2 border-[#dadada] p-4 rounded-2xl">
            <p className="text-2xl font-semibold">Your Stack</p>
            <p className="text-[15px] text-[#94A3B8] mb-2 ">
              2 Technology Selected
            </p>

            <div className="mb-4">
              <div className="mt-2 grid grid-cols-5 gap-2 items-center shadow-sm p-2 border-2 border-[#E2E8F0] rounded-2xl">
                <img src={reactLogo} alt="" className="col-span-1" />
                <div className="col-span-3">
                  <p className="font-semibold text-1xl">React</p>
                  <p className="text-[#94A3B8] text-[12px]">Fronend</p>
                </div>

                <RxCross2 className="col-span-1 w-8 h-8 text-[#94A3B8] cursor-pointer" />
              </div>

              
            </div>

            <button className="btn bg-base-200 !bg-transparent border border-[#D82C20] text-[#D82C20] font-bold text-1xl rounded-[8px]">
              {" "}
              Remove all
            </button>
          </div>
          

          
        
      </>
    );
  }


export default SelectedCard;
