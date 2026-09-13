import React from "react";
import Logo from '../assets/logo-text.png';

const Footer = () => {
  return (
    <div className="container mx-auto justify-between">
      <footer className="footer sm:footer-horizontal bg-base-200 gap-20 text-base-content p-10 grid grid-cols-5 justify-between">
        <nav className="col-span-3 w-3/4">
          <img src={Logo} alt="" />
          <p className="text-[#64748B]">
            Curated tools, technologies, and resources for developers building modern software.
          </p>

          <div className="space-x-4 text-[15px] font-bold text-[#64748B]">
            <a className="cursor-pointer ">GitHub</a>
          <a className="cursor-pointer">Twitter</a>
          <a className="cursor-pointer">Linkedin</a>
          </div>

        </nav>
        <nav className="text-[#64748B] font-semibold">
          <h6 className="footer-title text-black opacity-100 ">Product</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Technology</a>
          <a className="link link-hover">Projects</a>
        </nav>
        <nav className="text-[#64748B] font-semibold">
          <h6 className="footer-title  text-black opacity-100">Company</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav className="text-[#64748B] font-semibold">
          <h6 className="footer-title  text-black opacity-100">Legal</h6>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Terms of use</a>
        </nav>
        
      </footer>

      <div className="divider"></div>

      <footer className="footer bg-base-200 text-[#64748B] border-base-300 border-t px-10 py-4 mb-6 flex justify-between">
        
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
