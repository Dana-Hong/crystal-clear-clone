import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Header(props) {
    return (
        <header className="App-header flex max-w-screen-2xl mx-auto">
            <Link to='/'>
                <Logo />
            </Link>
            <div className="burger">burger</div>
            <nav>
                <menu className="flex">
                    <li>
                        <Link to='/products'>
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to='/service'>
                            Service
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact'>
                            Contact
                        </Link>
                    </li>
                </menu>
            </nav>
        </header>
    )
}