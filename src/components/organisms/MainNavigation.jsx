import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function MainNavigation() {
  const [isHidden, setIsHidden] = useState(true);

  const mobileMenuHandler = () => {
    setIsHidden(!isHidden);
    console.log(isHidden);
  };

  return (
    <>
      <div className="relative md:hidden" dir="rtl">
        <button onClick={mobileMenuHandler}>
          <GiHamburgerMenu className="text-yellowMotive fixed top-[20px] start-6 scale-150 z-50" />
        </button>
      </div>
      <div
        className={
          isHidden ? "sm:hidden transtion-all" : "md:hidden transition-all"
        }
      >
        <div className="flex flex-col sm:fixed sm:top-0 w-full md:hidden items-center space-y-5 rounded-b-full bg-lightGrayMotive py-5 z-40 ">
          <NavLink className="navItem" to="/">
            Home
          </NavLink>
          <NavLink className="navItem" to="/suggifi">
            Suggifi
          </NavLink>
          <NavLink className="navItem" to="/about">
            About
          </NavLink>
          <NavLink className="navItem" to="/credits">
            Credits
          </NavLink>
        </div>
      </div>
      <nav className="navBackground sticky top-0">
        <NavLink className="navItem" to="/">
          {" "}
          Home{" "}
        </NavLink>
        <NavLink className="navItem" to="/suggifi">
          {" "}
          Suggifi{" "}
        </NavLink>
        <NavLink className="navItem" to="/about">
          {" "}
          About{" "}
        </NavLink>
        <NavLink className="navItem" to="/credits">
          {" "}
          Credits{" "}
        </NavLink>
      </nav>
    </>
  );
}
