import React from "react";
import me from "../assets/me.jpg";
function MainPage() {
  return (
    <div className="flex h-full w-full">
      <div className="flex justify-center w-1/2 h-screen">
        <img src={me} alt="me" className="my-auto rounded-3xl w-1/2 " />
      </div>
      <div className="w-1/2">
        <h1></h1>
      </div>
    </div>
  );
}

export default MainPage;
