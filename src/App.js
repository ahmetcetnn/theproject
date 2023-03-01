import './App.css';
import Homepage from './Pages/Homepage';
import { BrowserRouter,Routes,Route,NavLink} from 'react-router-dom';
import Discovery from './Pages/Discovery';
import Watchlist from './Pages/Watchlist';
import { GlobalProvider } from './Context/GlobalContext';



function App() {


  return (
    <GlobalProvider>
      <BrowserRouter>
      
    
      <Routes>
      <Route path="/" element={<Homepage />}  />
      <Route path='discovery' element={<Discovery/>} />
      <Route path='watchlist' element={<Watchlist/>} />
      </Routes>
    
      
      
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
