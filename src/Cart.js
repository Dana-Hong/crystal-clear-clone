import { nanoid } from "nanoid";

export default function Cart(props) {

    const { cart, cartQuantity, cartTotal } = props;

    const cartListElements = cart.map(item => {
        return (
            <div key={nanoid()}>
                <p>{item.name}</p>
                <p>{`x ${item.quantity}`}</p>
            </div>
        );
    })

    return (
        <section>
            <div>
                <p>
                    {'You have '}
                    <span className="font-bold">{cartQuantity}</span>
                    {` item${cartQuantity === 1 ? '' : 's'} in your cart.`}
                </p>
                    
                {cartListElements}
                <p>Your total: ${cartTotal}</p>
            </div>
        </section>
    )
}