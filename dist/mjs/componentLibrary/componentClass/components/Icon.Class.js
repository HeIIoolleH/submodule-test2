import "../style/Icon.Class.scss";
function Icon_Class(props) {
    const { Icon, className, isUseFocus, ...rest } = props;
    return <Icon className={`EQBR_Icon ${className}${isUseFocus ? " focus" : ""}`} {...rest}/>;
}
export default Icon_Class;
