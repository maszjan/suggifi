import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
import horrorMovie from "../../assets/illustartions/svg/horror-movie.svg";

export default function Header() {
  return (
    <div className="flex flex-col md:flex-col md:space-y-[100px] lg:flex-row mx-5 md:my-10 items-center mt-16 md:mt-40">
      <div className="flex flex-col space-y-24 md:space-y-20">
        <h1>Suggifi</h1>
        <p>
          Are you tired of endlessly scrolling through streaming platforms or
          pondering which game to play? Suggify has you covered. Our innovative
          platform utilizes machine learning algorithms to curate the perfect
          movie or game recommendation for your evening, tailored to you unique
          preferences.
        </p>
        <Link className="readMoreButton" to="/about">
          Read more
        </Link>
      </div>
      <div className="sm:scale-75 md:scale-100 lg:scale-100 xl:scale-100">
        <ReactSVG src={horrorMovie} />
      </div>
    </div>
  );
}
