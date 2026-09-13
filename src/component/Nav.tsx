import Logo from '../assets/logo-text.png';

const Nav = () => {
  return (
    <div className="bg-amber-50 text-[#475569] shadow-sm">
      <div className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start">
           <img src={Logo} alt="" />
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5 px-1 text-[15px] cursor-pointer font-semibold ">
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
        <div className="navbar-end flex gap-4 items-center">
          <a className="text-13px font-semibold">Sign in</a>
          <button className="btn btn-secondary rounded-4xl text-center">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
