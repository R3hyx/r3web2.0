import { Routes, Route } from "react-router-dom";
import { TranslationProvider } from "./LangContext";
// pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';


function App() {


  return (
    <TranslationProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>
    </TranslationProvider>
  );
}

export default App;
