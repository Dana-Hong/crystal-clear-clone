import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

import PageTitle from "./PageTitle";
import { CartContext } from "./CartContext";
import ListItem from "./ListItem";

export default function ProductDetailed(props) {
    const [quantity, setQuantity] = useState(1);
    const { productData, productList } = props;
    const cartData = useContext(CartContext);
    console.log('productdataname:', productData.name);

    const listElements = Object.values(productData.features).map(feature => {
        return (
            <ListItem key={nanoid()} title={''} body={[feature]} styles={'pb-2 text-lg'} containerStyles={'list-disc'} />
        )
    });

    function handleChange(event) {
        setQuantity(event.target.value);
    }

    function buyNow() {
        if (!cartData.cart.some(item => item.name === productData.name) || quantity > 1 ) {
            cartData.addItem(productData.name, Number(quantity), productList);
            console.log(productData)
        }
    }

    console.log('productList:', productList);
    
    return (
        <section className="mb-auto flex-grow bg-yellow-50 shadow-[inset_0_2px_20px_0_rgba(0,0,0,.3)] flex items-center">
            <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center lg:flex-row">
                <PageTitle styles="lg:hidden font-bold text-center" text={productData.name} />
                <img 
                    src={productData.img}
                    alt=""
                    className="justify-self-center self-center"
                />
                <div className="flex flex-col w-[490px] h-2/3 mx-auto py-">
                    <PageTitle styles="2xs:hidden lg:block lg:text-4xl font-bold text-center" text={productData.name} />
                    <ul className="pl-4">
                        <p className="text-xl font-semibold pb-4">Features:</p>
                        {listElements}
                    </ul>
                    <p className="py-2 lg:py-8">Product Number: </p>
                    <p className="text-4xl font-semi-bold tracking-wider text-center py-6">
                        ${productData.regPrice}
                    </p>
                    <div className="flex justify-center py-2">
                        <label
                            htmlFor="productQuantity"
                            className="
                            px-4
                            py-2
                            w-[125px]
                            text-center
                            "
                            >
                                Quantity:
                        </label>
                        <input 
                            type='number'
                            name='productQuantity'
                            id='productQuantity'
                            placeholder="1"
                            min={1}
                            max={300}
                            onChange={handleChange}
                            className="
                            flex
                            justify-center
                            border-[1px]
                            border-black
                            rounded
                            rounded-md
                            w-[60px]
                            pl-2
                            "
                        />
                    </div>
                    <div className="flex justify-center gap-4 py-4">
                        <button 
                            className="
                                
                                bg-[#02549F]
                                text-gray-200
                                rounded
                                rounded-lg
                                w-[125px]
                                px-4
                                py-2
                                hover:font-bold
                                transition-[font_300ms]
                                ease-in-out
                                "
                            onClick={buyNow}
                        >
                            Add to cart
                        </button>
                        <Link to ='/cart'>
                            <button
                                className="
                                bg-[#007BEE]
                                text-gray-200
                                rounded
                                rounded-lg
                                w-[125px]
                                px-4
                                py-2
                                hover:font-bold
                                transition-[font_300ms]
                                ease-in-out
                                "
                                onClick={buyNow}
                            >
                                    Buy now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}