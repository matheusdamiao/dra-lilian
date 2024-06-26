import React, { useEffect, useState } from "react";
import useWindowDimensions from "./../utils/useWindowDimension";
import logo from "./../images/logo_del_bianco.svg";

const NavBar = () => {
  const size = useWindowDimensions();
  const [windowHeight, setWindowHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (size !== undefined) {
      setWindowHeight(size.scrollY);
      if (size?.width > 1000) {
        setIsOpen(false);
      }
    }
  }, [size]);

  return (
    <div className="bg-transparent top-0 w-full h-24 lg:h-[17svh] flex items-center justify-center flex-col pt-4 px-6 z-50">
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
