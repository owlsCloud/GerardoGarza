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
          <div className="flex ">
            <div className="text-white w-1/2 ">
              <ul className="text-lg leading-10 w-max m-auto">
                <h2 className="text-3xl w-max ">Personal Info</h2>
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
                <a
                  href="#a"
                  className="rounded-full bg-transparent border border-primary py-1 px-5 m-auto hover:bg-primary 
              "
                >
                  Resume
                </a>
              </ul>
            </div>
            <div className="w-1/2">
              <p className="text-white w-1/2 leading-7">
                My passion lies in creating efficient solutions for complex
                problems. With years of experience, I possess the skills to
                build high-quality applications that are both functional and
                visually appealing. Beyond coding, I love spending my free time
                honing my guitar skills and walking with my cat May.
              </p>
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
}

export default About;
