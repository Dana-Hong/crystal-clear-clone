import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Header(props) {
    const [navOpen, setNavOpen] = useState(false);

    function toggleNav() {
        setNavOpen(prevNavOpen => !prevNavOpen);
        console.log(navOpen);
    }

    function cartIcon() {
        return props.cartEmpty ? 
            <svg className="mx-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
            :
            <svg className="mx-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM5.5 23a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
    }

    return (
        <header className=
            {`
                App-header
                flex
                max-w-screen-2xl
                mx-auto
                p-4
                items-center
                ${navOpen ? 'nav-open' : ''}
            `}>
            <div className="2xs:mx-auto md:mr-auto md:ml-0">
                <Link to='/'>
                    <Logo />
                </Link>
            </div>
            <button 
                className="
                        2xs:order-first
                        mx-6
                        md:hidden
                        cursor-pointer
                        h-8
                        w-8
                        flex
                        justify-center
                        items-center
                    "
                onClick={toggleNav}
                    >
                    <span className="burger"></span>
            </button>
            <nav className={
                `
                    ml-auto
                `
                }>
                <menu className="flex gap-6 ">
                    <li className='text-xl md:text-2xl'>
                        <Link to='/products'>
                            Products
                        </Link>
                    </li>
                    <li className='text-xl md:text-2xl'>
                        <Link to='/service'>
                            Service
                        </Link>
                    </li>
                    <li className='text-xl md:text-2xl'>
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                    <li className='text-xl md:text-2xl'>
                        <Link to='/contact'>
                            Contact
                        </Link>
                    </li>
                </menu>
            </nav>
            <div className="md:ml-0">
                <Link to='/cart'>
                    {cartIcon()}
                </Link>
            </div>
        </header>       
    )
}