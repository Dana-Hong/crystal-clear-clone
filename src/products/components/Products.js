import Hero from "../../home/components/Hero";
import UFill from '../u-fill-water.JPG';
import About from "../../home/components/About";
import waterSoftener from '../watersoftener.JPG';
import waterSoftenerAlternative from '../watersofteneralternative.JPG';
import reverseOsmosis from '../reverseosmosis.JPG';
import replacementFilters from '../replacementfilters.JPG';
import waterDistiller from '../waterdistiller.JPG';
import waterCooler from '../watercooler.JPG';
import uvSystem from '../uvsystem.JPG';
import commercial from '../commercial.JPG';
import waterDispenser from '../waterdispenser.JPG';

// <div className="product-container">
//     <img src={/>
//     <p>Filter Systems</p>
// </div>
export default function Products() {
    return (
        <div className="products-page">
            <h1 className="products-page-header">Products</h1>
            <div className='products-widget-container'>
                <div className="product-widget">
                    <p className="product-title">Water Softeners</p>
                    <img src={waterSoftener} alt=''/>
                </div>
                <div className="product-widget">
                    <p className="product-title">Saltless Water Softener Alternative</p>
                    <img src={waterSoftenerAlternative} alt=''/>
                </div>
                <div className="product-widget">
                    <p className="product-title">Reverse Osmosis Systems</p>
                    <img src={reverseOsmosis} alt=''/>
                </div>
                <div className="product-widget">
                    <p className="product-title">Replacement Filters</p>
                    <img src={replacementFilters} alt=''/>
                </div>
                <div className="product-widget">
                    <p className="product-title">Water Distillers</p>
                    <img src={waterDistiller} alt=''/>
                </div>
                <div className="product-widget">
                    <p className="product-title">Water Coolers</p>
                    <img src={waterCooler} alt=''/>
                </div>
                {/* <div className="product-widget">
                    <p className="product-title">U-Fill Water</p>
                    <img src={} alt=''/>
                </div> */}
                <div className="product-widget">
                    <p className="product-title">UV Systems</p>
                    <img src={uvSystem} alt=''/>
                </div>
                <div className="product-widget">
                    <p className="product-title">Commercial Products</p>
                    <img src={commercial} alt=''/>
                </div>
                <div className="product-widget">
                    <p className="product-title">Water Dispensers</p>
                    <img src={waterDispenser} alt=''/>
                </div>

            </div>
            
        </div>
    )
}