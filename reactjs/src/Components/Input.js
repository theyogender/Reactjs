import {useState} from "react"
export default function Input(){
    let [d,s]=useState(null)
    let [p,ps]=useState(null)
    let uc,lc=null
     function gdata(v){
        s(v.target.value)
        ps(null)
      
     }
    function UpC(){
        uc=d.toUpperCase()
       ps(uc)
    }
    function LwC(){
        uc=d.toLowerCase()
       ps(uc)
    }

    return(
        <center>
            <hr />
          
            <input type="text" onChange={gdata}/>
             <button onClick={LwC} >Lower Case</button>
             <button onClick={UpC} >Upper Case</button>
             {
                p?<h2>{p}</h2>:null
             }
        </center>
        
    )
}
