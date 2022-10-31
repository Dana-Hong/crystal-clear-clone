import { nanoid } from "nanoid";

import PageTitle from "./PageTitle";

export default function Cart(props) {
    const { cart, cartQuantity, cartTotal } = props;

    const cartListElements = cart.map(item => {
        return (
            <div key={nanoid()} className='border-2 border-gray-500 flex 2xs:flex-col 2xs:items-center md:flex-row md:justify-between md:items-center py-2 mb-4 rounded rounded-2xl'>
                <p className="font-bold text-lg flex-grow md:self-start md:text-xl">{item.name}</p>
                <img className="object-cover w-60 h-60 mt-4 md:order-first" src={item.img} alt={item.name}/>
                <div className="flex md:mr-12 w-60 justify-between">
                    <p className='2xs:p-4 md:px-0 md:text-xl w-20 text-center'><span className="md:hidden font-bold">Quantity:</span> {`x${item.quantity}`}</p>
                    <p className='2xs:p-4 md:px-0 md:text-xl w-20 text-center'><span className="md:hidden font-bold">Price:</span> {`$${item.price}`}</p>
                </div>
            </div>
        );
    })

    return (
        <section className="bg-yellow-50 flex-grow">
            <div className="max-w-screen-xl mx-auto px-6">
                <PageTitle text={'Shopping Cart'} styles={'text-center'} />
                <p className="text-xl text-center py-4 md:text-2xl">
                    {'You have '}
                    <span className="font-bold">{cartQuantity}</span>
                    {` item${cartQuantity === 1 ? '' : 's'} in your cart.`}
                </p>
                <div className="md:flex md:justify-between py-2">
                    <div className="md:w-60"></div>
                    <div className="flex-grow"></div>
                    <div className="flex mr-12 w-60 justify-between">
                        <p className="2xs:hidden md:block text-xl w-20 text-center font-bold">Quantity</p>
                        <p className="2xs:hidden md:block text-xl w-20 text-center font-bold">Price</p>
                    </div>

                </div>
                {cartListElements}
                <div className="w-72 ml-auto">
                    <p className="text-xl text-center">Order summary:</p>
                    <p className="text-xl text-center font-bold">Subtotal: ${cartTotal}</p>
                    
                </div>
            </div>
        </section>
    );
}