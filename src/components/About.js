import React from "react";
import Fade from "react-reveal/Zoom";
function About() {
  return (
    <>
      <h1 className=" m-10 text-[56px] text-white font-bold flex justify-center ">
        About&nbsp; <span className="text-primary">Me</span>
      </h1>
      <section id="aboutMe" className="h-screen">
        <Fade>
          <div className="flex w-1/2 ">
            <div className="text-white m-auto">
              <h2 className="text-3xl">Personal Info</h2>
              <ul className="text-lg leading-10">
                <li>
                  <span className="text-primary">Name:</span> Gerardo Garza
                </li>
                <li>
                  <span className="text-primary">Email:</span>{" "}
                  gjgarza31@gmail.com
                </li>
                <li>
                  <span className="text-primary">Location:</span> Edinburg, TX
                </li>
                <li>
                  <span className="text-primary">Availiability: </span>
                  Contract/Fulltime/Part-time
                </li>
              </ul>
              <button className="rounded-full bg-transparent border border-primary py-1 px-5 mt-2 hover:bg-primary">
                Resume
              </button>
            </div>
            <div className=""></div>
          </div>
        </Fade>
      </section>
    </>
  );
}

export default About;
