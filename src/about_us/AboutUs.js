import Hero from "../home/components/Hero";
import About from "../home/components/About";
import { about } from "../app/data";
import heroImage from './about_us_-01.JPG';

export default function AboutUs() {

    return (
        <div>
            <Hero heroImage={heroImage} />
            <About title={about.header} bodyText={about.body} /> 
            <ul className="about__list">
                <li>Highly efficient treatment solutions that use less salt and water</li>
                <li>Products that elimate disposable bottles</li>
                <li>Chemical free water systems</li>
            </ul>

        </div>
    )
}