import { nanoid } from "nanoid";
export default function ListItem(props) {

    const bodyElements = props.body.map(bodyItem => {
        return <p key={nanoid()}>{bodyItem}</p>
    });

    return (
        <li>
            <p>{props.title}</p>
            {bodyElements}
        </li>
    )
}