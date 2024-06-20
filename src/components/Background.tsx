import React from "react";

const Background = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-[6rem] z-0"
      >
        <path
          fill="#c80000"
          fill-opacity="1"
          d="M0,64L60,101.3C120,139,240,213,360,229.3C480,245,600,203,720,165.3C840,128,960,96,1080,96C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>

      <div className="absolute bottom-0 z-0 h-24 w-full bg-[#c80000]" />
    </>
  );
};

export default Background;
