import logo from './imgs/logo.JPG';

export default function Logo(props) {
    return (
        <img className={props.css} src={logo} alt='logo'/>
    )
}