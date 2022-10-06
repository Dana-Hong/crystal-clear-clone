import { Link } from "react-router-dom";
import '../styles/Header.css';
import logo from '../imgs/crystal-clear-logo.jpg';


export default function Header(props) {
    return (
        <header className="header">
            <div>
                <Link>
                    <img className="logo" src={logo} alt="logo"></img>
                </Link>
            </div>
            <button className="nav-toggle" aria-label="toggle navigation" onClick={props.toggleNav}>
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <div className="nav__list">
                    <Link to='/'><span className="nav__item">Home</span></Link>
                    <Link to='/products'><span className="nav__item">Products</span></Link>
                    <Link to='/service'><span className="nav__item">Service</span></Link>
                    <Link to='/flyer'><span className="nav__item">Flyer</span></Link>
                    <Link to='/financing'><span className="nav__item">Financing</span></Link>
                    <Link to='/about'><span className="nav__item">About us</span></Link>
                    <Link to='/contact'><span className="nav__item">Contact</span></Link>
                </div>
            </nav>
        </header>
    );
}