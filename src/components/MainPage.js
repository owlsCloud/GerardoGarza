import React from "react";
import me from "../assets/me.jpg";
function MainPage() {
  return (
    <div className="flex h-full w-full">
      <div className="flex justify-center w-1/2 h-screen">
        <img src={me} alt="me" className="my-auto rounded-3xl w-1/2 " />
      </div>
      <div className="w-1/2 flex flex-col m-auto">
        <h1 className="text-textColor text-[51px]">
          I'm Gerardo Garza
          <span className="text-[#fff] block">Software Engineer</span>
        </h1>
        <p className="text-white leading-7 w-1/2">
          I am a fullstack developer that is passionate about creating elegant
          solutions to complex problems. In addition to my technical skills, I
          am a dedicated team player who enjoys collaborating with others to
          achieve our shared goals.
        </p>
      </div>
    </div>
  );
}

export default MainPage;
