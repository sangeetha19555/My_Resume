import "./App.css";
import { About } from "./component/About";
import React, { useState, useEffect } from "react";
import { Footer } from "./component/Footer";
import { Header } from "./component/Header";
import { Home } from "./component/Home";
import Project from "./component/Project";
import { SkillPage } from "./component/SkillPage";
import "./component/skill_style.css";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 9000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <HomePage /> <SkillPage /> <Project />
          <Footer />
        </div>
      )}
      {/* <HomePage /> <SkillPage /> <Project />
      <About />
      <Footer /> */}
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
// ========= Loader ===========
function Loader() {
  return (
    <div className="loader-container">
      <img src="images/loader.gif" alt="loader" width="300px" />
    </div>
  );
}
