import AboutProject from "../AboutProject/AboutProject";
import NavTab from "../NavTab/NavTab";
import Portfolio from "../Portfolio/Portfolio";
import Promo from "../Promo/Promo";
import Student from "../Student/Student";
import Techs from "../Techs/Techs";

function Main() {
  return (
    <main className="main">
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <Student />
      <Portfolio />
    </main>
  );
}

export default Main;
