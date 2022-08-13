import {Route, Routes} from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/movies" element={
          <Movies />
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
