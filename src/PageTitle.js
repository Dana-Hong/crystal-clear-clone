export default function PageTitle(props) {
    return (
        <p className={`2xs:text-3xl sm:text-4xl lg:text-5xl text-[#02549F] py-6 ${props.styles}`}>{props.text}</p>
    );
}