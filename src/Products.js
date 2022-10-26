import { Link } from "react-router-dom";

import crystalPerform from './imgs/crystal-perform.JPG';
import crystalOptimum from './imgs/crystal-optimum.JPG';
import PageTitle from "./PageTitle";

export default function Products(props) {
    return (
        <section className="bg-yellow-50 min-h-[90vh]">
            <PageTitle text={'Products'}></PageTitle>
            <div className="grid grid-cols-2">
                <div className="h-[450px] w-[450px]">
                    <Link to='/products/water-softeners'>
                        Water Softeners
                        <img className="brightness-50" src={crystalPerform} alt=''/>
                    </Link>
                </div>
                <div className="h-[450px] w-[450px] relative">
                        <p className="absolute top-1/2 left-1/2 translate-x-[-50%] text-white text-4xl z-10">COMING SOON</p>
                        <img className="brightness-50" src={crystalOptimum} alt=''/>
                    {/* <Link to='/products/reverse-osmosis'>
                        Reverse Osmosis Systems
                    </Link> */}
                </div>
                {/* <Link to='/products/replacement-filters'>
                    Replacement Filters
                </Link> */}
            </div>

        </section>
    )
}