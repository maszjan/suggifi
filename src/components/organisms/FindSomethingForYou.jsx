import { Link } from 'react-router-dom';
import { ReactSVG } from "react-svg";
import InputCard from "../molecules/InputCard";
import gamingPad from "../../assets/illustartions/svg/gaming-pad.svg";

export default function FindSomethingForYou() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center space-y-6 justify-between lg:max-w-full">
      <div className="sm:scale-[60%] md:scale-100 xl:scale-125">
        <ReactSVG src={gamingPad} />
      </div>
        <div className="flex flex-col items-center bg-lightGrayMotive space-y-12 h-[800px] w-[500px] lg:w-[500px] xl:rounded-l-lg ">
          <h3 className="p-5 mx-auto">Find Something For You</h3>
          <InputCard />
          <Link className='text-yellowMotive bg-darkMotive  hover:text-darkMotive rounded-full w-[200px] text-center text-4xl p-5 hover:bg-yellowMotive transition-all' to="/suggifi">
              Proceed
          </Link>
        </div>
      </div>

  );
}
