import "./App.css";
import Home from "./components/home/home";
import Header from "./components/home/componentsHome/header";
import About from "./components/about/about";

function App() {
  return (
    <div className="App sub-font-portfolio">
      <Header />
      {/* <Home /> */}
      <About />
    </div>
  );
}

export default App;
