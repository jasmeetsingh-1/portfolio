import "./App.css";
import Home from "./components/home/home";
import Header from "./components/home/componentsHome/header";
import About from "./components/about/about";
import { useState } from "react";

function App() {
  const [pageNavigate, setPageNavigate] = useState(true);
  //true -> home and false -> about
  return (
    <div className="App sub-font-portfolio">
      <Header setPageNavigate={setPageNavigate} />
      {pageNavigate ? <Home setPageNavigate={setPageNavigate} /> : <About />}
    </div>
  );
}

export default App;
