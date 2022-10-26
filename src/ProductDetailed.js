import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import PageTitle from "./PageTitle";
import { CartContext } from "./CartContext";
import ListItem from "./ListItem";

export default function ProductDetailed(props) {
    const [quantity, setQuantity] = useState(1);
    const { productData } = props;
    const cartData = useContext(CartContext);
    console.log(cartData);

    const listElements = Object.values(productData.features).map(feature => <ListItem title={''} body={[feature]} />)

    function handleChange(event) {
        setQuantity(event.target.value);
    }

    function buyNow() {
        if (!cartData.cart.some(item => item.name === productData.name) || quantity > 1 ) {
            cartData.addItem(productData.name, Number(quantity));
        }
    }

    console.log(quantity);
    
    return (
        <section className="mb-auto flex-grow">
            <div className="max-w-screen-2xl mx-auto grid md:grid-cols-2 justify-center">
                <PageTitle styles="md:hidden font-bold md:col-start-2" text={productData.name} />
                <img 
                    src={productData.img}
                    alt=""
                    className="col-start-1"
                />
                <div className="flex flex-col justify-between max-w-[500px]">
                    <PageTitle styles="hidden md:block text-lg md:text-2xl lg:text-4xl font-bold py-6 mx-auto" 
                    text={productData.name}
                    />
                    <div className="flex flex-col justify-center flex-grow">
                        <p className="py-6">Product Number: </p>
                        <p className="py-6 text-4xl font-semi-bold tracking-wider">
                            ${productData.regPrice}
                        </p>
                        <div className="flex justify-center mt-auto">
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
                                onChange={handleChange}
                                className="
                                border-2
                                border-black
                                w-[50px]
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
            </div>
        </section>
    )
}