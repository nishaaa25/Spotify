import React from "react";
import icon1 from "../assets/icon1.svg";
import icon3 from "../assets/icon3.svg";
import useGenreHook from "../hooks/useGenreHook";

const SideNavbar = () => {
  const genres = useGenreHook();
  console.log(genres);
  return (
    <div>
      <div className="w-[70px] bg-black-light card">
        <div>
          <img src={icon1} alt="home" width={26} className="m-auto mb-6" />
        </div>
        <div>
          <img src={icon3} alt="search" width={26} className="m-auto " />
        </div>
      </div>
      <div className="w-[70px] bg-black-light card mt-2">
        {genres &&
          genres.map((genre) => {
            return (
              <div className="w-[50px] h-[50px] mb-4 rounded-sm relative">
                <div className="relative z-10">{genre.name}</div>
                <div className="absolute top-0 left-0 w-full h-full object-cover z-0"></div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SideNavbar;
