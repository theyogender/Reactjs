//JSX=Javascript Xml : Enable using html and Javascript in components
//as in Only javascrpt we have to use <script></script> tags
//without script tags it is very complicated ike using .creteElement('h1')

//React is a library we can use it with angular or other frameworks
//JSX can be used with react also

//Hooks : Hooks are used to implement life cycle methods in Function Base Components ,'use' word is genrally a Hook like useState
//We can not use Hook in class Base Component

//UseEffect :It is a Hook which is called every time i.e when a component mount,updated and unmounted,We can use it conditionally also


//Life cycle methods : 
//Constructor life cycle emthod : Constructor is a life cycle method as if you want to do a job (defining states)before becoming a component ready 
//you can use constructor as it calls automatically when a class formed

// class App extends React.Component{
//     constructor()
//     {
//       super();
//       this.state={
//         name:"Anil sidhu"
//       }
//       console.warn("constructor")
//     }
//     render()
//     {
//       console.warn("render")
//       return<div>
//         <h1>Hello World {this.state.name}</h1>
//       </div>
//     }
//   }

//Render life cycle method : A component get rerender automatically when we from it or update or change props or state 




//ComponentDidMount life cylce method : Only call one time when a component is mounted i.e 
//first time when we render html ,jsx.Genrally we call APIs in this method  ,it is called after Render LF method

// class App extends React.Component {
//     constructor()
//     {
//       super();
//       console.warn("constructor")
//       this.state={name:"anil"}
//     }
//     componentDidMount()
//     {
//       console.warn("componentDidMount")
  
//     }
//     render()
//     {
//       console.warn("render")
  
//       return (
//         <div className="App">
//           <h1>Component Did Mount {this.state.name}</h1>
//           <button onClick={()=>this.setState({name:"Sidhu"})}>Update</button>
//         </div>
//       );
//     }
//   }

//ComponentDidUpdate life cylce method :call every time when we update state or props,It can be stop being call using 
//it is uses if we want to call an API conditionally
// class App extends React.Component {
//     constructor()
//     {
//       super();
//       console.warn("constructor")
//       this.state={name:"anil"}
//     }
//     componentDidUpdate(props,prestate,snapshot)
//     {
//       console.warn("componentDidUpdate",prestate)
        //   if(thiss.state.count<5)
        // {
            // this.setstate({count:this.state.count+1})
        // }
  
//     }
//     render()
//     {
//       console.warn("render")
  
//       return (
//         <div className="App">
//           <h1>Component Did Mount {this.state.name}</h1>
//           <button onClick={()=>this.setState({name:"Sidhu"})}>Update</button>
//         </div>
//       );
//     }
//   }


//shouldComponentUpdate life cycle method :restrict bydefault rendering of a component if it returns false
// class App extends React.Component {
// constructor() {
//     super();
//     this.state={
//       count:0
//     }
//   }
//   shouldComponentUpdate()
//   {
//     console.warn("shouldComponentUpdate",this.state.count)
//    if(this.state.count<5)
//    {
//      return true;
//    }

//   }

//   render() {
//     return (
//       <div className="App">
//         <h1> Should Component Update  {this.state.count}</h1>
//         <button onClick={()=>this.setState({count:this.state.count+1})}>Update Counter</button>
//       </div>
//     );
//   }
// }


//ComponentWillUnmount life cycle method : Call automatically when a component is hide or removed

// import Student from './Student'
// class App extends React.Component {
//   constructor()
//   {
//     super();
//     this.state={
//       show:true
//     }
//   }
//   render() {
//     return (
//       <div className="App">
//         {
//           this.state.show?<Student />
//           :<h4>Component is removed</h4>
//         }
//         <button onClick={()=>this.setState({show:false})}> Toogle Student Component</button>
//       </div>
//     )
//   }
// }


// class Student extends React.Component{

//     componentWillUnmount()
//     {
//         alert("componentWillUnmount is called")
//     }
//     render()
//     {
//         return<h1>Student Component</h1>
//     }
// }