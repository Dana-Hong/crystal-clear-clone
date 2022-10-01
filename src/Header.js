import { Link } from "react-router-dom";
import './Header.css';


export default function Header(props) {
    return (
        <header className="header">
            <div>
                <Link>
                    Logo
                </Link>
            </div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/service'>Service</Link>
                <Link to='/flyer'>Flyer</Link>
                <Link to='/financing'>Financing</Link>
                <Link to='/about'>About us</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </header>
    )
}