import { nanoid } from "nanoid";

import ListItem from "./ListItem";
import ProductWidget from "./ProductWidget";

import { waterSoftenerData } from "./water-softener-data";

export default function ProductCategory(props) {
    
    const { productData } = props;

    const listElements = Object.values(productData.benefits).map(listItem => {
        return <ListItem key={nanoid()} title={listItem.title} body={listItem.body} />
    });

    const productWidgetElements = waterSoftenerData.models.map(model => <ProductWidget key={nanoid()} img={model.img} name={model.name} path={model.path} />);

    return (
        <section>
            <h1>{productData.product}</h1>
            <ul>
                <p>In cities near hard water, having a water softener in your home is a must. The benefits include:</p>
                {listElements}
            </ul>
            <div className="max-w-screen-2xl border-4 border-red-200 mx-auto grid grid-cols-4 grid-rows-[repeat(2,_minmax(450px, 1fr)]">
                {productWidgetElements}
            </div>
            

        </section>
    )
}