import Logo from '../assets/logo-text.png';
import { RxHamburgerMenu } from "react-icons/rx";
const Nav = () => {
  return (
    <div className="bg-base-200 text-[#475569] shadow-sm mb-0.5 sticky top-0 z-1">
      <div className="navbar bg-base-200 container mx-auto gap-3 ">

        <div className='md:hidden mr-4'>
          <RxHamburgerMenu />
        </div>


        <div className="navbar-center ml-12 flex md:navbar-start md:w-1/4 md:ml-0">
           <img src={Logo} alt="" />
          
        </div>
        <div className="navbar navbar-center hidden md:flex md:w-2/4 ">
          <ul className="flex gap-5 px-1 text-[15px] cursor-pointer font-semibold md:mx-auto">
            <li className="text-[#DB2777]">
              <a>Home</a>
            </li>
            <li>
              <a href="">Technology</a>
            </li>
            <li>
              <a>Project</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-4 items-center mr-3 md:w-1/4 md:mr-0">
          <button className="text-13px font-semibold cursor-pointer">Sign in</button>
          <button className="btn w-1/2 text-[12px] cursor-pointer btn-secondary rounded-4xl text-center flex items-center justify-center px-4 font-normal">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
