
//import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"; 

import Header from "./componentes/layout/Header";
import Nav from "./componentes/layout/Nav";
import Footer from "./componentes/layout/Footer";

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ServiciosPage from './pages/ServiciosPage';



function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="nosotros" element={<NosotrosPage />} />
          <Route path="sevicios" element={<ServiciosPage />} />
          <Route path="contacto" element={<ContactoPage />} />
        </Routes>

      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
