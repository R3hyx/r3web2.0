import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import miniLogo from "./assets/logo/WhiteR3.png"

// pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import SmallR3Button from "./components/SmallR3Button/SmallR3Button";

function App() {
  
  return (
    <BrowserRouter>
      <main>
        <header>
          <nav>
            <NavLink className='homeImg' to="/">
            <input className="miniLogo" type="image" src={miniLogo}/>
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/services">Services</NavLink>
            <SmallR3Button/>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>
        {/* <footer>
          footercontent
        </footer> */}
      </main>
    </BrowserRouter>
  );
}

export default App;
