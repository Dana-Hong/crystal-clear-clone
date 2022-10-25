import { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
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
        <section className="border-black border-4 mb-auto">
            <div className="max-w-screen-2xl mx-auto grid md:grid-cols-2 justify-center">
                <p className="md:hidden text-lg font-bold md:col-start-2">{productData.name}</p>
                <img 
                    src={productData.img}
                    alt=""
                    className="col-start-1"
                />
                <div className="flex flex-col justify-between border-red-500 border-2 max-w-[500px]">
                    <p className="hidden md:block text-lg md:text-3xl font-bold py-6 mx-auto">{productData.name}</p>
                    <div className="flex flex-col justify-center border-black border-2 flex-grow">
                        <p className="py-2">Product Number: </p>
                        <p className="py-2">Price: $ {productData.regPrice}</p>
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
                                w-[75px]
                                "
                            />
                        </div>
                        <div className="flex justify-center gap-4 border-green-300 border-4">
                            <button 
                                className="
                                    border-2
                                    border-black
                                    bg-[#02549F]
                                    text-gray-200
                                    rounded
                                    rounded-lg
                                    w-[125px]
                                    px-4
                                    py-2
                                    "
                                onClick={buyNow}
                            >
                                Add to cart
                            </button>
                            <Link to ='/cart'>
                                <button
                                    className="
                                    border-2
                                    border-black
                                    w-[125px]
                                    px-4
                                    py-2
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