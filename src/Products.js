import { Link } from "react-router-dom";

import ProductWidget from "./ProductWidget";
import crystalPerform from './imgs/crystal-perform-removebg.png';
import crystalOptimum from './imgs/crystal-optimum-removebg.png';
import pws8M from './imgs/pws8-m-removebg.png';
import PageTitle from "./PageTitle";

export default function Products(props) {
    return (
        <section className="flex-grow bg-yellow-50 shadow-[inset_0_2px_20px_0_rgba(0,0,0,.3)]">
            <div className="max-w-screen-2xl mx-auto px-4">
                <PageTitle text={'Products'} styles={'text-center my-6'}></PageTitle>
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4">
                    <ProductWidget 
                        path={'/products/water-softeners'} 
                        img={crystalPerform} 
                        name={'Water Softeners'} />
                    <ProductWidget 
                        path={'/products/reverse-osmosis'} 
                        img={crystalOptimum} 
                        name={'Reverse Osmosis Systems'} />
                    <ProductWidget
                        path={'/products/distillers'}
                        img={pws8M}
                        name={'Distillers'} />
                </div>
            </div>

        </section>
    )
}