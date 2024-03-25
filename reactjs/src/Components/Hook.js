
//Hooks : Hooks are used to implement life cycle methods in Function Base Components ,'use' word is genrally a Hook like useState
//We can not use Hook in class Base Component

//UseEffect :It is a Hook which is called every time i.e when a component mount,updated and unmounted,We can use it conditionally also


import React, { useEffect, useState } from 'react'
function Hook() {
  const [count, setCount] = useState(0)
  const [data, setdata] = useState(0)
  useEffect(() => {
    console.warn("use effect")
  },[count])
  useEffect(() => {
    alert("Data : "+data)
  },[data])
  return (
    <div className="App">
      <h1>count:{count}</h1><br/>
      <h1>data: {data}</h1>
      <button onClick={() => setCount(count + 1)}>Update Counter</button><br/>
      <button onClick={() => setdata(data + 1)}>Update data</button>
    </div>
  );
}

export default Hook;