import {useState} from "react";

function SearchForm() {
  const [isOff, setIsOff] = useState(false);

  const handleSwitchClick = () => {
    setIsOff(() => !isOff);
    console.log("Click");
  }

  return (
    <section className="search">
      <div className="section__container section__container_type_search">
        <div className="search__wrap">
          <form className="search__form">
            <div className="search__icon" />
            <label className="search__field">
              <input className="search__input" placeholder="Фильм"/>
            </label>
            <button className="search__enter" type="submit"/>
          </form>
          <div className="search__filter">
            <div className={"search__hub" + (isOff ? " search__hub_off" : "")} onClick={handleSwitchClick}>
              <button className={"search__switch" + (isOff ? " search__switch_off" : "")}/>
            </div>
            <p className="search__caption">Короткометражки</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default SearchForm;
