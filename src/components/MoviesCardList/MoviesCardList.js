import MoviesCard from "../MoviesCard/MoviesCard";

import {movies} from "../../utils/movies"

function MoviesCardList() {
  return (
    <section className="cards">
      <div className="section__container">
        <ul className="list cards__list">
          {movies.map((movie, index) => (
            <MoviesCard movie={movie} key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default MoviesCardList;
