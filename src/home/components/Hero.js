import '../styles/Hero.css'

export default function Hero(props) {
    console.log(props)
    const style = {
        backgroundImage: `url(${props.heroImage})`
    }
    return (
        <section className="hero__home" style={style}>
            {/* <img/> */}
            <h1 className='hero__home__text'>
                The right solution for every need and budget
            </h1>
        </section>
    )
}