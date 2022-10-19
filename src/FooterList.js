import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

export default function FooterList(props) {
    
    const listElements = props.listData.map(listItem => {
        return (
            <li key={nanoid()} className="py-1">
                <Link to={`/${props.listTitle}/${listItem}`}>
                    {listItem}
                </Link>
            </li>
        );
    })

    return (
        <div>
            <ul>
                {listElements}
            </ul>
        </div>
    );
}