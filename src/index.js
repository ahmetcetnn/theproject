import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route,NavLink} from 'react-router-dom';
import Discovery from './Pages/Discovery';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}  />
    <Route path='discovery' element={<Discovery/>} />
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

