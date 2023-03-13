import './App.css';
import Homepage from './Pages/Homepage';
import { BrowserRouter,Routes,Route,NavLink, Navigate} from 'react-router-dom';
import Discovery from './Pages/Discovery';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Help from './Pages/Help';
import Watchlist from './Pages/Watchlist';
import { GlobalProvider } from './Context/GlobalContext';
import { AuthContextProvider } from './Context/AuthContext';
import { AuthContext } from './Context/AuthContext';
import { useContext } from 'react';
import Comments from './Pages/Comments';



function App() {

  const {currentUser} = useContext(AuthContext)
 
   
  const RequireAuth = ({children}) =>{
    return currentUser ? (children) : <Navigate to= "login"/>
  }

  return (
    <GlobalProvider>


      <AuthContextProvider>
      <BrowserRouter>
      
    
      <Routes>
        
      <Route path='login' element={<Login/>}/>
      <Route path="/" element={<RequireAuth><Homepage /></RequireAuth>}  />
      <Route path='discovery' element={<RequireAuth><Discovery/></RequireAuth>} />
      <Route path='watchlist' element={<RequireAuth><Watchlist/></RequireAuth>} />     
      <Route path='register' element={<Register/>}/>
      <Route path='help' element={<RequireAuth><Help/></RequireAuth>}/>
      <Route path="comments" element={<RequireAuth><Comments/></RequireAuth>}/>
      </Routes>
    
      
      
      </BrowserRouter>
      </AuthContextProvider>
    </GlobalProvider>
  );
}

export default App;
