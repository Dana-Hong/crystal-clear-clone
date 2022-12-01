import { nanoid } from "nanoid";

import PageTitle from "./PageTitle";

export default function Cart(props) {
    const { cart, cartQuantity, cartTotal, removeItem, updateCart } = props;

    console.log(cartQuantity);

    function handleChange(event, item) {
        const { value } = event.target;
        console.log(value);
        updateCart(value, item);
    }

    function handleClick(item) {
        removeItem(item);
    }

    function getCurrentQuantity(itemName) {
        const currentProduct = cart.filter((cartProduct) => cartProduct.name === itemName);
        return currentProduct[0].quantity;
    }

    const cartListElements = cart.map((item) => {
        return (
            <div
                key={nanoid()}
                className="border-2 border-gray-500 flex 2xs:flex-col 2xs:items-center md:flex-row md:justify-between md:items-center py-2 mb-4 rounded rounded-2xl"
            >
                <p className="font-bold text-lg flex-grow md:self-start md:text-xl">{item.name}</p>
                <img
                    className="object-cover w-60 h-60 mt-4 md:order-first"
                    src={item.img}
                    alt={item.name}
                />
                <div className="md:mr-12 flex flex-col items-center">
                    <div className="flex mx-auto w-60 justify-between">
                        <p className="2xs:p-4 md:px-0 md:text-xl w-[125px] text-center">
                            <label>Quantity:</label>
                            <input
                                max="300"
                                min="1"
                                type="number"
                                placeholder={item.quantity}
                                className="w-1/2 placeholder:text-slate-800 pl-4 mt-2 border"
                                onChange={(event) => handleChange(event, item)}
                                value={getCurrentQuantity(item.name)}
                            ></input>
                        </p>
                        <p className="2xs:p-4 md:px-0 md:text-xl w-[125px] text-center">
                            <span className="md:hidden font-bold">Price:</span> {`$${item.price}`}
                        </p>
                    </div>
                    <button
                        onClick={() => handleClick(item, item.quantity)}
                        className="
                            bg-[#02549F]
                            text-gray-200
                            rounded
                            rounded-lg
                            w-[125px]
                            px-4
                            py-2
                            md:mt-32
                            hover:font-bold
                            transition-[font_300ms]
                            ease-in-out
                        "
                    >
                        Remove Item
                    </button>
                </div>
            </div>
        );
    });

    return (
        <section className="bg-yellow-50 flex-grow shadow-[inset_0_2px_20px_0_rgba(0,0,0,.3)]">
            <div className="max-w-screen-xl mx-auto px-6">
                <PageTitle text={"Shopping Cart"} styles={"text-center"} />
                <p className="text-xl text-center py-4 md:text-2xl">
                    {"You have "}
                    <span className="font-bold">{cartQuantity}</span>
                    {` item${cartQuantity === 1 ? "" : "s"} in your cart.`}
                </p>
                <div className="md:flex md:justify-between py-2">
                    <div className="md:w-60"></div>
                    <div className="flex-grow"></div>
                    {cartQuantity !== 0 && (
                        <div className="flex mr-12 w-60 justify-between">
                            <p className="2xs:hidden md:block text-xl w-[125px] text-center font-bold">
                                Quantity
                            </p>
                            <p className="2xs:hidden md:block text-xl w-[125px] text-center font-bold">
                                Price
                            </p>
                        </div>
                    )}
                </div>
                {cartListElements}
                {cartQuantity !== 0 && (
                    <div className="w-72 ml-auto">
                        <p className="text-xl text-center">Order summary:</p>
                        <p className="text-xl text-center font-bold">Subtotal: ${cartTotal}</p>
                    </div>
                )}
            </div>
        </section>
    );
}
