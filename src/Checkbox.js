export default function Checkbox(props) {
    return (
        <div className="flex items-center gap-2 pb-2">
            <input 
                id={props.id}
                name={props.name}
                type='checkbox'
                className="h-4 w-4"
                >
                </input>
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    )
}