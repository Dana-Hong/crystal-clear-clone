import { nanoid } from "nanoid";

import PageTitle from "./PageTitle";
import ListItem from "./ListItem";
import ProductWidget from "./ProductWidget";

import { waterSoftenerData } from "./water-softener-data";

export default function ProductCategory(props) {
    
    const { productData } = props;

    const listElements = Object.values(productData.benefits).map(listItem => {
        return <ListItem
            key={nanoid()}
            title={listItem.title}
            body={listItem.body}
            titleStyles={'font-bold'}
            styles={'2xs:text-md md:text-lg'}
            containerStyles={'list-disc mx-4 py-1'} />
    });

    const productWidgetElements = waterSoftenerData.models.map(model => <ProductWidget key={nanoid()} img={model.img} name={model.name} path={model.path} />);

    return (
        <section className="bg-yellow-50">
            <div className="max-w-screen-2xl mx-auto px-6">
                <PageTitle styles={'text-center mt-6'} text={productData.product} />
                <ul className="max-w-4xl mx-auto mb-4">
                    <p className="2xs:text-lg md:text-2xl">In cities near hard water, having a water softener in your home is a must. The benefits include:</p>
                    {listElements}
                </ul>
                <div className="
                    max-w-screen-2xl
                    border-4
                    border-red-200
                    mx-auto
                    grid
                    grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] 
                ">
                    {/* grid-rows-[repeat(2,_minmax(450px, 1fr)] */}
                    {productWidgetElements}
                </div>
            </div>

        </section>
    )
}