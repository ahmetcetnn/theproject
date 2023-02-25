import './App.css';
import Homepage from './Pages/Homepage';
import {GiSunRadiations} from "react-icons/gi"
import {useState} from "react"
function App() {
const [theme,setTheme] =useState(true)

  return (
    <div className={theme ? "light" : "dark" }>
      <div className='themee'> <GiSunRadiations  onClick={() => setTheme(!theme)}/></div>
      <Homepage/>
    
    </div>
  );
}

export default App;
