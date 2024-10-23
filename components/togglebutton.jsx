export default function ToggleButton(props) {

    return (
        <button type="button" onClick={props.onClick} className={`bg-black lg:w-[276px] md:w-[165.6px] lg:h-[52px] md:h-[32px] lg:rounded-[10px] md:rounded-[6px] md:text-[16px] lg:text-[24px] text-white`}>
            {props.name}
        </button>
    )
}