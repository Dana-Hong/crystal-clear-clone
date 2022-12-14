import { nanoid } from "nanoid";
export default function ListItem(props) {


    const bodyElements = props.body.map(bodyItem => {
        return <p className={props.styles} key={nanoid()}>{bodyItem}</p>
    });

    return (
        <li className={props.containerStyles}>
            <p className={`${props.titleStyles}`}>{props.title}</p>
            {props.body || bodyElements}
        </li>
    )
}