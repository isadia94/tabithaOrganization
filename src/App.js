import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Dropdown from "./Components/Dropdown";
import Navbar from "./Components/Navbar";
import GlobalStyle from "./globalStyles";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import ContactSection from "./Components/ContactSection";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
      <ContactSection />
    </div>
  );
}

export default App;
