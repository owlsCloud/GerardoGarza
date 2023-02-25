import React from "react";
import Fade from "react-reveal/Zoom";
function About() {
  return (
    <section id="aboutMe" className="h-screen">
      <Fade>
        <h1 className=" p-10 text-[56px] text-white font-bold flex justify-center ">
          About&nbsp; <span className="text-primary">Me</span>
        </h1>
        <div className="flex justify-center w-1/2">
          <div className="text-white  ">
            <h5>Personal Info</h5>
            <ul>
              <li>Name: Gerardo Garza</li>
              <li>Email: gjgarza31@gmail.com</li>
            </ul>
            <ul>
              <li>Location: Edinburg, TX</li>
              <li>Open to Contract/Fulltime/Parttime employment</li>
            </ul>
            <button className="rounded-full bg-textColor py-1 px-5 mt-2">
              Resume
            </button>
          </div>
          <div className=""></div>
        </div>
      </Fade>
    </section>
  );
}

export default About;
