import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Page404 from './Page404'
export default function Navbar() {
    return(
        <>
        <BrowserRouter>
        
        <center> <Link to="/Home">Home Page</Link><br/>
        <Link to="/About">About Page</Link>
        </center>

        <Routes>
            <Route path='/Home' element={<Home />}/>
            <Route path='/About' element={<About />}/>
            <Route path='/*' element={<Page404 />}/>
        </Routes>
       
        </BrowserRouter>

        </>
    )
    
}

//React-router-dom is used to define routes and links in react 
//Links helps us to render a component without loading the page again ancher tag (hyperlink) couse the page to load again
//Browserrouter is a wrapper class in which Routes,links work .They can't work outside it