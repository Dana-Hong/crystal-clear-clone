import { Link } from "react-router-dom";

export default function ProductWidget(props) {
    console.log(props.path);
    return (
        <div className={
            `
            relative
            h-450px
            hover:brightness-50
            transition-[brightness_300ms_text_300ms]
            `}>
            <p className="w-full text-center absolute top-[4px] z-10 hover:brightness-150">{props.name}</p>
            <Link to={props.path}>
                <img 
                    className="h-full w-full max-w-full"
                    src={props.img}
                    alt=""
                />
            </Link>
        </div>
    )
}