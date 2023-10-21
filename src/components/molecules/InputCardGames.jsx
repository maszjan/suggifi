import getGameTitlesOne from "../../data/getGamesTitlesOne";
import GetGamesTitlesTwo from "../../data/getGamesTitlesTwo";
import getGameTitlesThree from "../../data/getGamesTitlesThree";
import CreatableSelect from 'react-select/creatable';
import FunctionalButton from '../atoms/FunctionalButton';


export default function InputCardGames(props) {

  const gameTitlesOne = getGameTitlesOne();
  const gameTitlesTwo = GetGamesTitlesTwo();
  const gameTitlesThree = getGameTitlesThree();


  return (
    <div className="flex flex-col space-y-10 p-3 items-center bg-lightGrayMotive rounded-xl">
      <h3 className="mx-auto">Your favourite games</h3>
      <div className="flex flex-col items-center space-y-6">
      <CreatableSelect className="w-[500px]" options={gameTitlesOne} />
      <CreatableSelect className="w-[500px]" options={gameTitlesTwo} />
      <CreatableSelect className="w-[500px]" options={gameTitlesThree} />
      </div>
      <p paragraph={props.paragraph} className="mx-auto text-sm">
        {props.paragraph}
      </p>
      <FunctionalButton text="Get started!" />
    </div>
  );
}
