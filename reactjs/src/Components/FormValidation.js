import React, { useState } from "react"
export default function FormValidation()
{     
    const [atext,stext]=useState(null)
     const [apassW,spassW]=useState(null)
     const [text,vtext]=useState(false)
     const [passW,vpassW]=useState(false)

   
    function TextValidation(e){
        let  item=e.target.value
         if(item.length<3)
        { vtext(true)
            stext('')
          }
          else{
            vtext(false)
            stext(item)
          }

         
 
     }
     function passValidation(e){
        let  item=e.target.value
         if(item.length<3)
        { vpassW(true)
            spassW('')
          }
          else{
            vpassW(false)
            spassW(item)
          }
         
 
     }

    function formvalue(e){
        e.preventDefault()
        if(atext.length <3 || apassW.length<3)
        {
            alert(' Invalid input')
           
        }
        else
        {
            alert('Submitted')
            // console.log(atext)
            // console.log(apassW)
        }
    }

    return(
     <div>
        <hr/><br/>
        <center>
        
            <form onSubmit={formvalue}>
                <h2>Login Page</h2><b/>
                <input typr="text" placeholder="user Id"  onChange={TextValidation}  required/>{ text? <span>invalid</span>:null}<br/> <br/>
                <input typr="password"  placeholder="Password" onChange={passValidation} required/>{passW? <span>invalid</span>:null}<br/><br/>
                <button  type="submit">Submit</button>

                
            </form>
       
        </center>

        </div>
    )
}