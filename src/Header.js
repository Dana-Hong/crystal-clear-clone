import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Header(props) {
    return (
        <header className="App-header flex max-w-screen-2xl mx-auto">
            <Logo />
            <div className="burger">burger</div>
            <nav>
                <menu className="flex">
                    <li>
                        <Link to='/products'>
                            Products
                        </Link>
                    </li>
                    <Link to='/service'>
                        <li>Service</li>
                    </Link>
                    <Link to='/About'>
                        <li>About</li>
                    </Link>
                    <Link to='/Contact'>
                        <li>Contact</li>
                    </Link>
                </menu>
            </nav>
        </header>
    )
}