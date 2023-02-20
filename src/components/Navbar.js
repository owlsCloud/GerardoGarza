import React, { useState } from "react";
import { FaBriefcase, FaEnvelope, FaHome, FaUser } from "react-icons/fa";
function Navbar() {
  const [currentlyActive, setCurrentlyActive] = useState("home");
  return (
    <nav className="fixed right-0 h-screen flex justify-center mr-10 ">
      <ul className="m-auto">
        <a href="#a" className="m-auto">
          <li
            className={`w-[50px] h-[50px] ${
              currentlyActive === "home" ? "bg-primary" : "bg-inActive"
            } rounded-full m-auto mb-3 flex justify-center `}
          >
            <FaHome size={"1.3em"} color={"#ffffff"} className="m-auto" />
          </li>{" "}
        </a>

        <a href="#a" className="m-auto">
          <li
            className={`w-[50px] h-[50px] ${
              currentlyActive === "about" ? "bg-primary" : "bg-inActive"
            } rounded-full m-auto mb-3 flex justify-center `}
          >
            <FaUser size={"1.3em"} color={"#ffffff"} className="m-auto" />
          </li>
        </a>

        <a href="#a" className="m-auto">
          <li
            className={`w-[50px] h-[50px] ${
              currentlyActive === "portfolio" ? "bg-primary" : "bg-inActive"
            } rounded-full m-auto mb-3 flex justify-center `}
          >
            <FaBriefcase size={"1.3em"} color={"#ffffff"} className="m-auto" />
          </li>
        </a>
        <a href="#a" className=" hover:cursor-pointer">
          <li
            className={`w-[50px] h-[50px] ${
              currentlyActive === "contact" ? "bg-primary" : "bg-inActive"
            } rounded-full m-auto flex justify-center `}
          >
            <FaEnvelope size={"1.3em"} color={"#ffffff"} className="m-auto" />
          </li>
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
