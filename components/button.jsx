export default function Button(props) {
    return (
        <button type="button" onClick={props.onClick} className={`${props.color} w-[210px] h-[48px] rounded-[10px] text-white`}>
            {props.name}
        </button>
    )
}