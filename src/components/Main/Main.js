// import './Main.css';

import AboutProject from "../AboutProject/AboutProject";
import NavTab from "../NavTab/NavTab";
import Portfolio from "../Portfolio/Portfolio";
import Promo from "../Promo/Promo";
import Student from "../Student/Student";
import Techs from "../Techs/Techs";

function Main() {
  return (
    <>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <Student />
      <Portfolio />
    </>
  );
}

export default Main;
