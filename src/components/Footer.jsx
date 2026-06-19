import Button from "./Button";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router";

function Footer() {
  return (
    <div className="bg-black size-fit lg:pt-[120px] pt-[90px] lg:pb-[60px] pb-[30px] lg:px-40 px-[30px]">
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-30 gap-20">
        <div className="flex flex-col lg:gap-y-[250px] gap-y-[50px]">
          <div className="">
            <div className="logo-footer mb-[30px]">
              <img
                src="/images/logo2.webp"
                className="w-[250px] h-[50px]"
                alt=""
              />
            </div>
            <div className="newsletter">
              <div className="text-[16px] text-[#FFFFFF66] mb-[30px]">
                Subscribe our newsletter:
              </div>
              <div className="newsletter-input">
                <form className="newsemailcontainer relative">
                  <input
                    type="email"
                    name="newsemail"
                    id="newsemail"
                    placeholder="ENTER YOUR EMAIL"
                    className="bg-[#ffffff1a] w-[100%] px-4 py-5 rounded-[30px] active:bg-[#fff] focus:bg-[#fff] hover:bg-[#fff] hover:placeholder:text-[#000]"
                  />
                  <Button
                    type="submit"
                    className="text-[#fff] absolute top-0 right-0"
                  ></Button>
                </form>
              </div>
            </div>
          </div>
          <div className="">
            <div className="social-container text-[#fff] flex justify-start items-center gap-4 mb-[30px]">
              <a href="">
                <FaTwitter className="hover:text-[#C78C24] duration-300 ease-in-out" />
              </a>
              <a href="">
                <FaFacebook className="hover:text-[#C78C24] duration-300 ease-in-out" />
              </a>
              <a href="">
                <FaInstagram className="hover:text-[#C78C24] duration-300 ease-in-out" />
              </a>
              <a href="">
                <FaLinkedin className="hover:text-[#C78C24] duration-300 ease-in-out" />
              </a>
              <a href="">
                <FaYoutube className="hover:text-[#C78C24] duration-300 ease-in-out" />
              </a>
            </div>
            <div className="copyright text-[#FFFFFF66]">
              <p>Copyright 2026. All Rights Reserved.</p>
              <p>Designed by DeepshiTech Private Limited</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:gap-y-[200px] gap-y-[50px]">
          <div className="pages-link flex flex-col">
            <NavLink
              className="text-[28px] text-[#fff] mb-2 hover:text-[#C78C24] hover:translate-x-1.5 duration-300"
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className="text-[28px] text-[#fff] mb-2 hover:text-[#C78C24] hover:translate-x-1.5 duration-300"
              to={"/portfolio"}
            >
              Portfolio
            </NavLink>
            <NavLink
              className="text-[28px] text-[#fff] mb-2 hover:text-[#C78C24] hover:translate-x-1.5 duration-300"
              to={"/services"}
            >
              Services
            </NavLink>
            <NavLink
              className="text-[28px] text-[#fff] mb-2 hover:text-[#C78C24] hover:translate-x-1.5 duration-300"
              to={"/contact"}
            >
              Contact
            </NavLink>
            <NavLink
              className="text-[28px] text-[#fff] mb-2 hover:text-[#C78C24] hover:translate-x-1.5 duration-300"
              to={"/blog"}
            >
              Blog
            </NavLink>
          </div>
          <div className="location-india">
            <h4 className="text-[#fff] text-[18px] mb-[30px]">Mumbai</h4>
            <p className="text-[#FFFFFF66] text-[16px]">
              Time Square Building, Unit No:2, A Wing, 4th Floor, Andheri Kurla
              Road, Andheri (E), Mumbai, Maharashtra 400059{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:gap-y-[200px] gap-y-[50px]">
          <div className="inner-pages text-[#FFFFFF66] flex flex-col gap-y-[20px]">
            <NavLink
              className={"hover:text-[#fff] hover:translate-x-1.5 duration-300"}
            >
              Privacy Policy
            </NavLink>
            <NavLink
              className={"hover:text-[#fff] hover:translate-x-1.5 duration-300"}
            >
              Terms and conditions
            </NavLink>
            <NavLink
              className={"hover:text-[#fff] hover:translate-x-1.5 duration-300"}
            >
              Cookie Policy
            </NavLink>
            <NavLink
              className={"hover:text-[#fff] hover:translate-x-1.5 duration-300"}
            >
              Careers
            </NavLink>
          </div>
          <div className="location-outside">
            <h4 className="text-[#fff] text-[18px] mb-[30px]">London UK</h4>
            <p className="text-[#FFFFFF66] text-[16px]">
              The Smiths Building 179 Great Portland St, London W1W 5PL, London
              GU51 3BL, United Kingdom
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
