import ListItem from "./ListItem";

export default function ProductMain(props) {

    const benefitListElements = Object.values(props.benefits).map(listItem => {
        <ListItem title={listItem.title} body={listItem.body} />
    });

    return (
        <section>
            <h1>Water Softeners</h1>
            <ul>
            </ul>

        </section>
    )
}