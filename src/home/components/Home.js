import Hero from './Hero';
import heroImage from '../imgs/hero_cover.jpg';
import { home } from '../../app/data';

import About from './About';
import homeAboutImage from '../imgs/about-01.jpg';

import ProductsAndServices from './ProductsAndServices';
import Form from './Form';

export default function Home(props) {
    return (
        <div>
            <Hero heroImage={heroImage} />
            <About title={home.header} bodyText={home.body} image={homeAboutImage} />
            <ProductsAndServices />
            <Form />
        </div>
    )
}