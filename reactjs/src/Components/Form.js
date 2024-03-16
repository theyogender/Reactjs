import { useState } from "react"
export default function Form()
{    
    let [name,setname]=useState('')
    let [gender,setgender]=useState('')
    let [tnc,settnc]=useState(false)
    function gd(e){
         e.preventDefault()
         console.log(name,gender,tnc)
    }

    return(
        <div>
            <hr/><br/>
            <center>
            <form  onSubmit={gd}>
                <input type='text' onChange={(e)=>(setname(e.target.value))} /><br/><br/>
                <select onChange={(e)=>(setgender(e.target.value))}>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                </select><br/>
                <input type="checkbox" onChange={(e)=>(settnc(e.target.value))}/><span>Accept term and conditions</span>
                <br/>
                <button type="Submit">Submit</button>
                
            </form>
            </center>
        </div>
    )
}