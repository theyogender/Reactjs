function Prop(p){
    


    return(
        <div>
            <h1>{p.name}</h1>
            <button onClick={p.f}>props as function</button>
        </div>
    )

    
}
export default Prop;

//Props is just like parameters using which we can pass some data in a component
//We can send html in props also for that we have to use this.props.childeren

//we can send props as function genrally function is defined in parent component (App.js) and  
//it can be used in many child  components which reduces multiple declaraitions of the function