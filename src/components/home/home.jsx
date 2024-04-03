import MainIntro from "./componentsHome/mainIntro";
import "./home.css";

function Home({ setPageNavigate }) {
  return (
    <div className="main-home-holder-div">
      <MainIntro setPageNavigate={setPageNavigate} />
    </div>
  );
}

export default Home;
