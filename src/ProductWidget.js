import { Link } from "react-router-dom";

export default function ProductWidget(props) {
    console.log(props.path);
    return (
        <div className={`h-450px`}>
            {props.name}
            <Link to={props.path}>
                <img 
                    className="h-full w-full brightness-50"
                    src={props.img}
                    alt=""
                />
            </Link>
        </div>
    )
}