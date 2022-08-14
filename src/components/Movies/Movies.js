import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
  const {isLoading} = props;

  return (
    <main className="main">
      <SearchForm />
      {isLoading ? <Preloader/> : <div/>}
    </main>
  );
}

export default Movies;
