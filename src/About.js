import './About.css';
import aboutImage from './about-01.jpg';

export default function About(props) {
    return (
        <section className='section'>
            <h1 className="about__title">We make it easy to have better water.</h1>
            <img className='about__image' src={aboutImage} alt='woman drinking water'></img>
            <p className="about__body">Buying or renting water treatment equipment can be confusing. With so many products on the market and each claiming to be the best, it’s hard to know what you need. We can help.</p>
            <p className="about__body">Since 1980, we’ve helped over 20,000 customers solve their water challenges in Kitchener, Waterloo, Cambridge, Guelph and the surrounding area. We take time to learn about your needs to provide you with the most efficient solution, custom fit to your home and budget.</p>
        </section>
    )
}