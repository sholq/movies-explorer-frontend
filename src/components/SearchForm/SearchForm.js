function SearchForm() {
  return (
    <section className="search">
      <div className="section__container section__container_type_search">
        <div className="search__bar">
          <label className="search__wrap">
            <div className="search__icon" />
            <input className="search__input"/>
          </label>
          <button className="search__enter"/>
          <button className="search__filter"/>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
