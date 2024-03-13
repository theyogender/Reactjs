export function Fcompo(){

    function Appple(){   //I can use Component inside the component But it can only be used inside Fcompo
        return(<div>Comonent Inside the component</div>)  
    }

    return(
        <div>
            <h1>Function Base component 2</h1>
            <h2>Sunceesfull2</h2>
            <Appple/>
        </div>
    )
}

//export default Fcompo //if export default is used then use 'import Fcompo form ./Comonents/Fcompo'
//if  export function Fcompo(){}    is used then use 'import {Fcompo} from ./Component/Fcompo'