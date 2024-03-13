import logo from './logo.svg';
import './App.css';
// import Fcompo from './Components/Fcomp';
import {Fcompo} from './Components/Fcomp';
import ClassBcompo from './Components/ClassBcompo';

function App() {
  return (
   <div>
    <Fcomponent/>
    <Fcompo/>
    <ClassBcompo/>
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
