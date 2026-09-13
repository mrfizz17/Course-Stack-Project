import React from "react";
import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="container mx-auto justify-between">
      <footer className="footer sm:footer-horizontal bg-base-200 gap-20 text-base-content p-10 grid md:grid-cols-5 justify-between md:p-0">
        <nav className="col-span-3 w-3/4 flex flex-col mx-auto justify-center items-center  md:justify-start md:items-start md:mx-0">
          <img src={Logo} alt="" className="text-center md:text-left" />
          <p className="text-[#64748B] text-center md:text-left">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="space-x-4 text-[15px] font-bold text-[#64748B]">
            <a className="cursor-pointer ">GitHub</a>
            <a className="cursor-pointer">Twitter</a>
            <a className="cursor-pointer">Linkedin</a>
          </div>
        </nav>
        <nav className="text-[#64748B] font-semibold hidden md:block">
          <h6 className="footer-title text-black opacity-100 ">Product</h6>

          <div className="flex flex-col">
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Technology</a>
            <a className="link link-hover">Projects</a>
          </div>
        </nav>
        <nav className="text-[#64748B] font-semibold hidden md:block">
          <h6 className="footer-title  text-black opacity-100">Company</h6>
          <div className="flex flex-col">
            <a className="link link-hover">About</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Careers</a>
          </div>
        </nav>
        <nav className="text-[#64748B] font-semibold hidden md:block">
          <h6 className="footer-title  text-black opacity-100">Legal</h6>
          <div className="flex flex-col">
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Terms of use</a>
          </div>
        </nav>
      </footer>

      <div className="md:divider"></div>

      <footer className="footer bg-base-200 text-[#64748B] border-base-300 border-t px-10 py-4 mb-6 flex justify-between md:flex-row md:px-0 md:py-0">
        <p>© 2026 Dev Stack .All right reserved</p>

        <div className="flex gap-4 font-semibold">
          <a className="link link-hover">Privacy</a>
          <a className="link link-hover">Terms</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
