import "./App.css";
import { Footer } from "./component/Footer";
import { Header } from "./component/Header";
import { Home } from "./component/Home";
import Project from "./component/Project";
import { SkillPage } from "./component/SkillPage";
import "./component/skill_style.css";
// import { Link  , Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <HomePage /> <SkillPage /> <Project />
      <Footer />
    </div>
  );
}

export default App;

function HomePage() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}
