import {Route, Routes} from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Footer from '../Footer/Footer';
import {useState} from "react";
import Preloader from "../Preloader/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/movies" element={
          <Movies isLoading={isLoading}/>
        }/>
        <Route path="/" element={
          <Main />
        }/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
