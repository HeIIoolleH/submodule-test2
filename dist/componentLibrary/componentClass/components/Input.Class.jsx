import "../style/Input.Class.scss";
function Input_Class(props) {
    const { className = "", inputRef, isValid, widthOption, radiusOption, ...rest } = props;
    return (<input ref={inputRef} className={`EQBR_Input ${className}${widthOption ? ` input-width_${widthOption}` : ""}${radiusOption ? ` input-radius_${radiusOption}` : ""}${isValid !== undefined ? (isValid ? " valid" : " invalid") : ""}`} {...rest}/>);
}
export default Input_Class;
