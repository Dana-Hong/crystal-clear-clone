export default function ListItem(props) {

    const bodyElements = props.body.map(bodyItem => {
        return <p>{bodyItem}</p>
    });

    return (
        <li>
            <p>Title</p>
            <p>Body1</p>
            <p>body2</p>
        </li>
    )
}