import { useEffect, useState } from "react";
// import { InputClassStateStyles, InputRadiusPreset } from "../../componentClass/type/Input.Class.type";
import { parseStateStyles } from "../../utils";
import "../style/Input.Class.scss";
const useInputStyle = (stateStyles, disabled) => {
    const { hover: hoverStyle, active: activeStyle, focus: focusStyle, valid: validStyle, invalid: invalidStyle } = stateStyles;
    const [style, setStyle] = useState(parseStateStyles(stateStyles));
    const [hasHoverDesign, setHasHoverDesign] = useState(false);
    const [hasActiveDesign, setHasActiveDesign] = useState(false);
    const [hasFocusDesign, setHasFocusDesign] = useState(false);
    const [hasValidDesign, setHasValidDesign] = useState(false);
    const [hasInvalidDesign, setHasInvalidDesign] = useState(false);
    useEffect(() => {
        setStyle(parseStateStyles(stateStyles));
        setHasHoverDesign(hoverStyle && !disabled ? true : false);
        setHasActiveDesign(activeStyle && !disabled ? true : false);
        setHasFocusDesign(focusStyle && !disabled ? true : false);
        setHasValidDesign(validStyle && !disabled ? true : false);
        setHasInvalidDesign(invalidStyle && !disabled ? true : false);
    }, [stateStyles]);
    return { style, hasHoverDesign, hasActiveDesign, hasFocusDesign, hasValidDesign, hasInvalidDesign };
};
function Input_Class(props) {
    const { inputRef, stateStyles, disabled, ...rest } = props;
    const { enabled: enabledStyle } = stateStyles;
    const { style, hasHoverDesign, hasActiveDesign, hasFocusDesign, hasValidDesign, hasInvalidDesign } = useInputStyle(stateStyles, disabled);
    return (<input ref={inputRef} className={`EQBR_input  ${"widthSize" + enabledStyle.width} ${enabledStyle.radius === "radius-circle" ? "radius-circle" : ""} ${hasHoverDesign ? "hover" : ""} ${hasActiveDesign ? "active" : ""} ${hasFocusDesign ? "focus" : ""} ${hasValidDesign ? "valid" : ""} ${hasInvalidDesign ? "invalid" : ""}`} style={style} disabled={disabled} {...rest}/>);
}
export default Input_Class;
