import React from "react";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
import me from "../assets/me.jpg";
function MainPage() {
  return (
    <div id="home" className="flex h-full w-full">
      <div className="flex justify-center w-1/2 h-screen">
        <img src={me} alt="me" className="my-auto rounded-3xl w-1/2 " />
      </div>
      <div className="w-1/2 flex flex-col m-auto">
        <h1 className="text-textColor text-[51px]">
          I'm Gerardo Garza
          <span className="text-[#fff] block">Software Engineer</span>
        </h1>

        <ul className="text-primary leading-7">
          <Zoom delay={750}>
            <li className="before:content-['-'] before:mr-2">
              Fullstack Developer
            </li>
          </Zoom>
          <Zoom delay={2000}>
            <li className="before:content-['-'] before:mr-2">
              Dedicated Team Player
            </li>
          </Zoom>
          <Zoom delay={3250}>
            <li className="before:content-['-'] before:mr-2 mb-2">
              Reliable and Efficient
            </li>
          </Zoom>
          <Zoom delay={4450}>
            <Link
              to={"about"}
              className="rounded-full bg-primary text-white py-1 px-2.5 mt-10"
            >
              More About Me
            </Link>
          </Zoom>
        </ul>
      </div>
    </div>
  );
}

export default MainPage;
