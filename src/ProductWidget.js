import { Link } from "react-router-dom";

export default function ProductWidget(props) {
    return (
        <div className={
            `
            flex
            flex-col
            items-center
            hover:scale-105
            transition-[transform_300ms]
            border-2
            rounded
            rounded-2xl
            bg-blue-100
            `}>
            <p className="text-center text-2xl pt-6">
                <Link to={props.path}>
                    {props.name}
                </Link>
            </p>
            <Link to={props.path}>
                <img 
                    className="h-5/6 w-full max-w-full rounded rounded-xl my-4 object-cover"
                    src={props.img}
                    alt=""
                />
            </Link>
        </div>
    )
}