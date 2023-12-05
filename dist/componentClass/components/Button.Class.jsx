import "../styles/Button.Class.scss";
function Button_Class(props) {
    const { className = "", buttonRef, isUseFocus, widthOption, radiusOption, children, ...rest } = props;
    return (<button ref={buttonRef} className={`EQBR_Button ${className}${widthOption ? ` btn-width_${widthOption}` : ""}${radiusOption ? ` btn-radius_${radiusOption}` : ""}${isUseFocus ? " focus" : ""}`} {...rest}>
            <div className="button-content">{children}</div>
        </button>);
}
export default Button_Class;
