import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import miniLogo from "./assets/logo/WhiteR3.png"

// pages
import Home from './pages/Home/Home';
import Intro from './pages/Intro/Intro';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import SmallR3Button from "./components/SmallR3Button/SmallR3Button";

function App() {
  
  return (
    <BrowserRouter>
      <header>
        <nav>
          <NavLink className='homeImg' to="/">
          <input className="miniLogo" type="image" src={miniLogo}/>
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/services">Services</NavLink>
          <SmallR3Button lang="en"/>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/intro" element={<Intro/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
