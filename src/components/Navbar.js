import React, { useState } from "react";
import { FaBriefcase, FaEnvelope, FaHome, FaUser } from "react-icons/fa";
function Navbar() {
  const [currentlyActive, setCurrentlyActive] = useState("home");
  return (
    <nav className="fixed right-0 h-screen flex justify-center mr-10 ">
      <ul className="m-auto">
        <li
          className={`w-[50px] h-[50px] ${
            currentlyActive === "home" ? "bg-primary" : "bg-inActive"
          } rounded-full m-auto mb-3 flex justify-center `}
        >
          <a href="#a" className="m-auto">
            <FaHome size={"1.3em"} color={"#ffffff"} className="" />
          </a>
        </li>
        <li
          className={`w-[50px] h-[50px] ${
            currentlyActive === "about" ? "bg-primary" : "bg-inActive"
          } rounded-full m-auto mb-3 flex justify-center `}
        >
          <a href="#a" className="m-auto">
            <FaUser size={"1.3em"} color={"#ffffff"} />
          </a>
        </li>
        <li
          className={`w-[50px] h-[50px] ${
            currentlyActive === "portfolio" ? "bg-primary" : "bg-inActive"
          } rounded-full m-auto mb-3 flex justify-center `}
        >
          <a href="#a" className="m-auto">
            <FaBriefcase size={"1.3em"} color={"#ffffff"} />
          </a>
        </li>
        <li
          className={`w-[50px] h-[50px] ${
            currentlyActive === "contact" ? "bg-primary" : "bg-inActive"
          } rounded-full m-auto mb-3 flex justify-center `}
        >
          <a href="#a" className="m-auto hover:cursor-pointer">
            <FaEnvelope size={"1.3em"} color={"#ffffff"} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
