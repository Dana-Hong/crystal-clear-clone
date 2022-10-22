import { Link } from "react-router-dom";

export default function Products(props) {
    return (
        <section>
            <Link to='/products/water-softeners'>
                Water Softeners
            </Link>
            <Link to='/products/reverse-osmosis'>
                Reverse Osmosis Systems
            </Link>
            <Link to='/products/replacement-filters'>
                Replacement Filters
            </Link>

        </section>
    )
}