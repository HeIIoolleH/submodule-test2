import "../style/Input.Class.scss";
function Input_Class(props) {
    const { className = "", inputRef, isUseFocus, widthOption, radiusOption, ...rest } = props;
    return (<input ref={inputRef} className={`EQBR_Input ${className}${widthOption ? ` input-width_${widthOption}` : ""}${radiusOption ? ` input-radius_${radiusOption}` : ""}${isUseFocus ? " focus" : ""}`} {...rest}/>);
}
export default Input_Class;
