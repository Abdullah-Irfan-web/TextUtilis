
import './App.css';
import Maintext from './Components/Maintext';
import Navbar from './Components/Navbar';
import {useState} from 'react';

function App() {

  const[mode,setMode]=useState("light");
   
  const onmodechange=()=>{
      if(mode==='light'){
        setMode("dark");
        }
        else{
          setMode("light");
        }

       
  }

  return (
    <div className="App">
     <Navbar toggle={onmodechange} mode={mode}/>
     <Maintext mode={mode} />
    </div>
  );
}

export default App;
