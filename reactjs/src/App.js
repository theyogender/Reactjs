import logo from './logo.svg';
import './App.css';
// import Fcompo from './Components/Fcomp';
import {Fcompo} from './Components/Fcomp';
import ClassBcompo from './Components/ClassBcompo';
import State from './Components/Alert';
import Prop from './Components/Prop';
import { useState } from 'react';
// import Input from './Components/Input';
import Form from './Components/Form';
import FormValidation from './Components/FormValidation';
import Hook from './Components/Hook';
import Navbar from './Components/Navbar';

function App() {
  
  const [n,u]=useState('Yogi Singh')
   
  function aprop(){
    return(
      alert('Yogi from app')
    )
  }
  

  return (
   <div>
    {/* <Fcomponent/> */}
    {/* <Fcompo/> */}
    {/* <ClassBcompo/> */}
    {/* <State/> */}
    {/* <Prop  name={n}  f={aprop}/> */}
    {/* <button onClick={()=>{u('Yogender Kumar Singh')}}>Change Name</button> */}
    {/* <Input /> */}
    {/* < Form /> */}
    <FormValidation />
    {/* <Hook/> */}
    <Navbar />
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

// eval "$(ssh-agent -s)"
// ssh-add -l

