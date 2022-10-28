export default function TextField(props) {
    return (
        <div className={`flex flex-col ${props.containerStyles}`}>
            <label htmlFor={props.id} className='font-bold pb-2'>{props.label}</label>
            <input 
                id={props.id}
                name={props.name}
                type={props.type ? 'text': props.type}
                className='border-2'
            >

            </input>
        </div>
    )
}