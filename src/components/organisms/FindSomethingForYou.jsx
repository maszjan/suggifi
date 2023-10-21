import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import gamingPad from "../../assets/illustartions/svg/gaming-pad.svg";

export default function FindSomethingForYou() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center space-y-5 justify-between lg:max-w-full pb-5">
      <div className="sm:scale-[60%] md:scale-100 xl:scale-125">
        <ReactSVG src={gamingPad} />
      </div>
      <div className="flex flex-col items-center bg-lightGrayMotive space-y-12  w-[500px] lg:w-[500px] rounded-sm xl:rounded-l-lg pb-5">
        <h3 className="p-5 mx-auto">Find Something For You</h3>
        <p> 
          Our algorithm is your key to unlocking a world of entertainment
          options. It's easy and tailored to your unique preferences.
          Just a few simple questions stand between you and the perfect movie or
          game for tonight. Why choose randomly when you can find something
          tailored to your mood and taste? Whether you're in the mood for an
          action-packed blockbuster, a heartwarming romance, an
          adrenaline-pumping game, or a mind-bending puzzle, we've got options
          for everyone.
        </p>
        <Link
          className="text-yellowMotive bg-darkMotive  hover:text-darkMotive rounded-full w-[350px]  text-center text-4xl p-6 hover:bg-yellowMotive transition-all"
          to="/suggifi"
        >
          Go to the form
        </Link>
      </div>
    </div>
  );
}
