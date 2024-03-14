import logo from './logo.svg';
import './App.css';
// import Fcompo from './Components/Fcomp';
import {Fcompo} from './Components/Fcomp';
import ClassBcompo from './Components/ClassBcompo';
import State from './Components/Alert';
import Prop from './Components/Prop';
import { useState } from 'react';

function App() {
  
  const [n,u]=useState('Yogi Singh')

  return (
   <div>
    {/* <Fcomponent/> */}
    {/* <Fcompo/> */}
    {/* <ClassBcompo/> */}
    {/* <State/> */}
    <Prop  name={n}/>
    <button onClick={()=>{u('Yogender Kumar Singh')}}>Change Name</button>
   </div>
  );
}

function Fcomponent(){    //Function Base component
  return(
    <div>
      <h1>Function base component</h1>
      <h2>Sunceesfull</h2>
      
      
    </div>
  )
}

export default App;

//eval "$(ssh-agent -s)"
//ssh-add -l

