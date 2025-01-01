import "./App.css";
import Home from "./components/home/home";
import Header from "./components/home/componentsHome/header";
import About from "./components/about/about";
import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import ShowList from "./components/home/showList";

const AppChild = ({ pageNavigate, setPageNavigate }) => {
  return (
    <>
      <Header setPageNavigate={setPageNavigate} />
      {pageNavigate ? <Home setPageNavigate={setPageNavigate} /> : <About />}
    </>
  );
};

function App() {
  const [pageNavigate, setPageNavigate] = useState(true);
  //true -> home and false -> about
  return (
    <div className="App sub-font-portfolio">
      <Routes>
        <Route exact path="/showlist" element={<ShowList />} />
        <Route exact path="/" element={<AppChild pageNavigate={pageNavigate} setPageNavigate={setPageNavigate} />} />
      </Routes>
    </div>
  );
}

export default App;
