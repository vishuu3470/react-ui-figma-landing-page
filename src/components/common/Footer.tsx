import { Link } from "react-router-dom";
import logo from "./../../assets/Logo.png";
import linkedinLogo from "./../../assets/linkedin.svg";
import instaLogo from "./../../assets/instaLogo.svg";
import faceBook from "./../../assets/faceBook_logo.svg";

export default function Footer() {
  const footerNav = [
    { name: "FAQ", url: "#" },
    { name: "Privacy", url: "#" },
    { name: "Support", url: "#" },
    { name: "Contact", url: "#" },
  ];
  return (
    <footer className="bg-brown-darker text-neutral-0  px-[24px] xl:px-0">
      <div className="container m-auto py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        <img
              src={logo}
              alt="logo"
              height={40}
              className=" md:hidden block w-[71px]"
            />
          <ul className="flex flex-wrap items-center justify-center gap-[24px] ">
            <img
              src={logo}
              alt="logo"
              height={40}
              className=" hidden md:block w-[71px]"
            />
            {footerNav.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.url}
                  className="text-neutral-0 font-normal text-[16px] "
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-2">
            <Link to="#" className="text-neutral-80 h-10 w-10 flex justify-center items-center hover:text-neutral-0">
              <img src={faceBook} alt="linkedin logo" className="w-6 h-6" />
            </Link>
            <Link to="#" className="text-neutral-80 h-10 w-10  flex items-center justify-center hover:text-neutral-0">
              <img src={instaLogo} alt="insta logo" className="w-6 h-6" />
            </Link>
            <Link to="#" className="text-neutral-80 h-10 w-10 flex justify-center items-center hover:text-neutral-0">
              <img src={linkedinLogo} alt="linkedin logo" className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="text-center  text-neutral-30  text-caption text-xs leading-3">
          © 2024 Central Texas Fly Fishing All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
