import {Route, Routes} from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Footer from '../Footer/Footer';
import {useState} from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/movies" element={
          <Movies isLoading={isLoading} />
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
