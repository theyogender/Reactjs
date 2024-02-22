// import logo from "./logo.svg";

import "./App.css";
import Navbar from "./components/Navbar";

import Alert from "./components/Alert";
import React, { useState } from "react";






function App() {

   
  const [mode, setMode] = useState('light');
  const [alert, Setalert] = useState('null');
  let showalert = (msg, type) => {
    Setalert({
      message: msg,
      typ: type
    })

    setTimeout(() => {
      Setalert('null')
    }, 1500)

  }
  let chgbg = () => {
    if (mode === 'light') {
      setMode('black')
      document.body.style.backgroundColor = '#2F4F4F';
      showalert('Dark mode Enabled', 'danger')
      document.title = 'Gujjar Edits'

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert('Light mode Enabled', 'info')
    }
  }

  return (

      <>
      <Navbar  changebg={chgbg}/>
      <Alert alert={alert} />
      </>
      
  );
}

export default App;
