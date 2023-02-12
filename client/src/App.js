import './App.css';
import { Navbar } from "./Components/Navbar";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './Components/Home';
import { Mint } from "./Components/Mint";
import { About } from './Components/About';
import { Marketplace } from "./Components/Marketplace";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<> <Home /> <Footer/> </>} />
        <Route path='/marketplace' element={<Marketplace />} />
        <Route path='/mint' element={<Mint />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
