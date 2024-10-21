export default function ToggleButton(props) {
    return (
        <button type="button" onClick={props.onClick} className={`bg-black w-[276px] h-[52px] rounded-[10px] text-white`}>
            {props.name}
        </button>
    )
}