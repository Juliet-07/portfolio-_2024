import React from "react";
import Me from "./assets/me.png";

const App = () => {
  return (
    <div className="w-full h-full bg-[#101828] text-white font-primaryRegular">
      <div className="w-full  h-20 flex items-center justify-between px-4 bg-white">
        <div>Logo</div>
        <div>Social media handles</div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-stretch">
        {/* Fist Half */}
        <div className="md:w-[50%] px-10">
          <div className="w-[205px] md:w-[225px] rounded-[32px] bg-[#D1FADF] text-[#027A48]  text-sm md:text-base font-primarySemibold flex items-center justify-center p-1 md:p-2 my-4">
            Developer and more
          </div>
          <p className="text-4xl md:text-6xl font-primaryBold  md:py-4">
            Juliet Kelechi
          </p>
          <p className="text-gray-400 text-lg my-4">
            Crafting products from inception to fruition is my forte. From
            conceptulization to execution.
          </p>
          <ul className="hidden mt-10 md:grid gap-4">
            <li>Overview</li>
            <li>About me</li>
            <li>Expereince</li>
            <li>Project</li>
            <li>Achievements</li>
            <li>Contact me</li>
          </ul>
        </div>
        {/* Second Half */}
        <div className="md:w-[50%] relative">
          <img src={Me} alt="Image of Juliet" />
          <div className="bg-[#101828]">
            <p>About me</p>
            <p>
              Crafting products from inception to fruition is my forte. From
              conceptualization to execution, I thrive on the journey of shaping
              ideas into tangible, impactful realities that resonate with users.
              <br />
              Crafting products from inception to fruition is my forte. From
              conceptualization to execution, I thrive on the journey of shaping
              ideas into tangible, impactful realities that resonate with users.
            </p>
          </div>
          <div>Work Expereince</div>
          <div>Projects</div>
          <div>Skills</div>
        </div>
      </div>
    </div>
  );
};

export default App;
