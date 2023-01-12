import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Footer from './layout/Footer';
// import { useStateContext } from './contexts';

const App = () => {
  // const { activeMenu } = useStateContext();


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
