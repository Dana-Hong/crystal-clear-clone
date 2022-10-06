import '../styles/About.css';

export default function About(props) {
    const bodyElements = props.bodyText.map((paragraph, index) => <p key={index} className='about__body'>{paragraph}</p>)

    return (
        <section className='section about'>
            <h1 className="about__title">{props.title}</h1>
            <div className='about__body_container'>
                {bodyElements}
            </div>
            <img className='about__image' src={props.image} alt='woman drinking water'></img>
        </section>
    )
}