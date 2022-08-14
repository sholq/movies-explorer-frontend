function MoviesCard(props) {
  const {movie} = props;

  return (
    <li className="card">
      <img className="card__image" src={movie.image} alt={movie.name} />
      <div className="card__container">
        <div>
          <h3 className="card__name">{movie.name}</h3>
          <p className="card__caption">{movie.duration}</p>
        </div>
        <button className={`card__like ${movie.isLiked ? 'card__like_active' : ''}`} type="button" aria-label="Лайк" />
      </div>
    </li>
  );
}

export default MoviesCard;
