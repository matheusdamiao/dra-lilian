import React, { useEffect, useState } from "react";
import useWindowDimensions from "./../utils/useWindowDimension";
import logo from "./../images/logo-branca.svg";

const NavBar = () => {
 

  return (
    <div className="bg-none absolute top-0 w-full h-24 lg:h-[120px] flex justify-center pt-4 px-6 z-50">
      <img
        src={logo}
        width={214}
        height={76.11}
        alt="logo"
        className="w-[200px] lg:w-[274px] "
      />
    </div>
  );
};

export default NavBar;
