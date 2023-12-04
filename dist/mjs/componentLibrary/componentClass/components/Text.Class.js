import "../styles/Text.Class.scss";
function Text_Class(props) {
    const { textRef, children, isUseFocus, className, ...rest } = props;
    return (<span ref={textRef} className={`EQBR_Text ${className}${isUseFocus ? " focus" : ""}`} {...rest}>
            {children}
        </span>);
}
export default Text_Class;
