import React from "react";
import me from "../assets/me.jpg";
function MainPage() {
  return (
    <div className="flex h-full w-full">
      <div className="flex justify-center w-1/2 h-screen">
        <img src={me} alt="me" className="my-auto rounded-3xl w-1/2 " />
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <h1>
          <span className="text-textColor text-[51px] ">I'm Gerardo Garza</span>
        </h1>
      </div>
    </div>
  );
}

export default MainPage;
