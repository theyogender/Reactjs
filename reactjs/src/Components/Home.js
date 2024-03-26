import { Link } from "react-router-dom"

export default function Home() {
    return (
        <center> <h2>This is Home Page</h2>


            <br />


            <Link to="/About">About Page</Link>

        </center>
    )
}