function Prop(p){
    


    return(
        <div>
            <h1>{p.name}</h1>
            <h2>{p.pf()}</h2>
        </div>
    )

    
}
export default Prop;

//Props is just like parameters using which we can pass some data in a component