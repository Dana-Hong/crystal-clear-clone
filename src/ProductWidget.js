import { Link } from "react-router-dom";

export default function ProductWidget(props) {
    return (
        <div className={`h-450px`}>
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