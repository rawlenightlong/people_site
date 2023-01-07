import { Link } from "react-router-dom"


export default function Header(props){
    return (<>
    
    <nav className="nav">
        <Link to="/">
            <div>People App</div>
        </Link>
    </nav>
    
    </>)
}