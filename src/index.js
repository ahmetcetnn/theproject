import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Discovery from './Pages/Discovery';
import Watchlist from './Pages/Watchlist';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}  />
    <Route path='discovery' element={<Discovery/>} />
    <Route path='watchlist' element={<Watchlist/>} />
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

