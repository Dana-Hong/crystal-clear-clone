import Hero from "../../home/components/Hero";
import heroImage from '../imgs/service-01.jpg';
import About from "../../home/components/About";
import { service } from '../../app/data';
import serviceImage from '../imgs/service-02.jpg';

export default function Service(props) {
    return (
        <div>
            <Hero heroImage={heroImage}/>
            <About title={service.header} image={serviceImage} bodyText={service.body} />
            <div className="about__body_container">
                <h1 className="about__title">We provide service for Residential & Commercial:</h1>
                <table className='table'>
                    <colgroup>
                        <col className="table-column" />
                        <col className="table-column" />
                    </colgroup>
                    <tr>
                        <th className="table-header">Drinking Water Systems</th>
                        <th className="table-header">Water Treatment Systems</th>
                    </tr>
                    <tr>
                        <td className="table-cell">Reverse Osmosis</td>
                        <td className="table-cell">Water Softeners</td>
                    </tr>
                    <tr>
                        <td className="table-cell">Water Distillers</td>
                        <td className="table-cell">Carbon Filters</td>
                    </tr>
                    <tr>
                        <td className="table-cell">Water Coolers</td>
                        <td className="table-cell">Iron Filters</td>
                    </tr>
                    <tr>
                        <td className="table-cell">Water Dispensers</td>
                        <td className="table-cell">UV Systems</td>
                    </tr>
                </table>
            </div>
            <div className="btn-container">
                <button className="btn">Browse Filters</button>
                <button className="btn">Schedule a call</button>
            </div>
        </div>
    )
}