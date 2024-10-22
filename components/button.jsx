export default function Button(props) {
    const buttonWidth = props.width ? props.width : "w-[210px]"
    const hoverColor = props.color === "bg-orange" ? "hover:bg-dark_orange" : "hover:bg-gray_01"
    const activeColor = props.color === "bg-orange" ? "active:bg-gray_01" : "active:bg-gray_01"

    return (
        <button type="button" onClick={props.onClick} className={`${props.color} ${buttonWidth} ${hoverColor} ${activeColor} h-[48px] rounded-[10px] text-white`}>
            {props.name}
        </button>
    )
}