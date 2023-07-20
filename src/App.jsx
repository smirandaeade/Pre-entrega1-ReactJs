import Navbar from './components/Navbar'
import Company from './components/Company'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';


const App = () => {
  const [activeMenu, setActiveMenu] = useState('Inicio');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  console.log(activeMenu);

  return (
    <Router>
      <Navbar onMenuClick={handleMenuClick} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/playstation" element={<Company activeMenu="PlayStation" />} />
        <Route exact path="/xbox" element={<Company activeMenu="Xbox" />} />
        <Route exact path="/nintendo-switch" element={<Company activeMenu="Nintendo Switch" />} />
      </Routes>
    </Router>
  )
}


export default App
