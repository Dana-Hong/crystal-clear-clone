import { nanoid } from "nanoid";

import PageTitle from "./PageTitle";

export default function Cart(props) {

    const { cart, cartQuantity, cartTotal } = props;

    console.log(cart);

    const cartListElements = cart.map(item => {
        return (
            <div key={nanoid()} className='border-2'>
                <img className="" src={item.img} alt={item.name}/>
                <p>{item.name}</p>
                <p>{`x ${item.quantity}`}</p>
            </div>
        );
    })

    return (
        <section className="bg-yellow-50 flex-grow">
            <div className="border-2 max-w-screen-xl mx-auto">
                <PageTitle text={'Shopping Cart'} styles={'text-center'} />
                <p className="text-xl">
                    {'You have '}
                    <span className="font-bold">{cartQuantity}</span>
                    {` item${cartQuantity === 1 ? '' : 's'} in your cart.`}
                </p>
                    
                {cartListElements}
                <p className="text-xl">Your total: ${cartTotal}</p>
            </div>
        </section>
    )
}