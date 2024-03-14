import { useState } from "react"

function Alert(){

    let data="Jai"
     
    function AL(){
        data="change"
        alert(data)
        //m=()=>{alert()}
    }

    return(
        <div>
            <h3>{data}</h3>
            <button onClick={AL}> Clickme</button> 
        </div>
    )
}

//if we use AL()in onCLick={AL()} then it we call alert automatically without clicking on it
//as variable data='JAi' jai is not updated after calling funciton AL thats why we use state and props

//state is a object that used to store  data and we can update that data using it
//syntax : const [data,Update]=useState('Hi'),useState is a hook used to update data in that state 
//after updating state our component get rerendered

function State(){
    const [data,updata]=useState('Hii')

    function Up(){
        updata('Data Updated')
        // alert(data)
            
    }

    return(
        <>
        <button onClick={Up}>CLick Me</button>
        <h1>{data}</h1>
        </>
    )
}

export default State;