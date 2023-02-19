import React from "react";
import { FaBriefcase, FaEnvelope, FaHome, FaUser } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="fixed right-0 h-screen flex ">
      <ul className="m-auto">
        <li className="m-10">
          <a href="#a">
            <FaHome size={"1.3em"} color={"#ffffff"} />
          </a>
        </li>
        <li className="m-10">
          <a href="#a">
            <FaUser size={"1.3em"} color={"#ffffff"} />
          </a>
        </li>
        <li className="m-10">
          <a href="#a">
            <FaBriefcase size={"1.3em"} color={"#ffffff"} />
          </a>
        </li>
        <li className="m-10">
          <a href="#a">
            <FaEnvelope size={"1.3em"} color={"#ffffff"} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
