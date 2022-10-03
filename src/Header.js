import { Link } from "react-router-dom";
import './Header.css';
import logo from './crystal-clear-logo.jpg';


export default function Header(props) {
    return (
        <header className="header">
            <div>
                <Link>
                    <img className="logo" src={logo} alt="logo"></img>
                </Link>
            </div>
            <nav className="nav">
                <Link to='/'><span className="nav__item">Home</span></Link>
                <Link to='/products'><span className="nav__item">Products</span></Link>
                <Link to='/service'><span className="nav__item">Service</span></Link>
                <Link to='/flyer'><span className="nav__item">Flyer</span></Link>
                <Link to='/financing'><span className="nav__item">Financing</span></Link>
                <Link to='/about'><span className="nav__item">About us</span></Link>
                <Link to='/contact'><span className="nav__item">Contact</span></Link>
            </nav>
        </header>
    )
}