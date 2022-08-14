import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {
  const {isLoading} = props;

  return (
    <main className="main">
      <SearchForm />
      {isLoading ? <Preloader/> : <MoviesCardList />}
    </main>
  );
}

export default Movies;
