import React from "react";
import "./styles/styles.css";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Services from "./components/Services";
import Community from "./components/Community";
import News from "./components/News";
import Team from "./components/Team";
import Contact from "./components/Contact";
import PageSub from "./components/PageSub";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Services />
      <Community />
      <News />
      <Team />
      <Contact />
      <PageSub />
    </div>
  );
}

export default App;
