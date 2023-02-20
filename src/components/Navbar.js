import React, { useState } from "react";
import { FaBriefcase, FaEnvelope, FaHome, FaUser } from "react-icons/fa";
function Navbar() {
  const [currentlyActive, setCurrentlyActive] = useState("home");
  return (
    <nav className="fixed right-0 h-screen flex justify-center mr-10 ">
      <ul className="m-auto">
        <a
          href="#a"
          className="m-auto"
          onClick={() => {
            setCurrentlyActive("home");
          }}
        >
          <li
            className={`w-[50px] h-[50px] ${
              currentlyActive === "home" ? "bg-primary" : "bg-inActive"
            } rounded-full m-auto mb-5 flex justify-center hover:bg-primary`}
          >
            <FaHome size={"1.3em"} color={"#ffffff"} className="m-auto" />
          </li>
        </a>

        <a
          href="#a"
          className="m-auto"
          onClick={() => {
            setCurrentlyActive("about");
          }}
        >
          <li
            className={`w-[50px] h-[50px] ${
              currentlyActive === "about" ? "bg-primary" : "bg-inActive"
            } rounded-full m-auto mb-5 flex justify-center hover:bg-primary`}
          >
            <FaUser size={"1.3em"} color={"#ffffff"} className="m-auto" />
          </li>
        </a>

        <a
          href="#a"
          className="m-auto"
          onClick={() => {
            setCurrentlyActive("portfolio");
          }}
        >
          <li
            className={`w-[50px] h-[50px] ${
              currentlyActive === "portfolio" ? "bg-primary" : "bg-inActive"
            } rounded-full m-auto mb-5 flex justify-center hover:bg-primary`}
          >
            <FaBriefcase size={"1.3em"} color={"#ffffff"} className="m-auto" />
          </li>
        </a>
        <a
          href="#a"
          className=" "
          onClick={() => {
            setCurrentlyActive("contact");
          }}
        >
          <li
            className={`w-[50px] h-[50px] ${
              currentlyActive === "contact" ? "bg-primary" : "bg-inActive"
            } rounded-full m-auto flex justify-center hover:bg-primary`}
          >
            <FaEnvelope size={"1.3em"} color={"#ffffff"} className="m-auto" />
          </li>
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
