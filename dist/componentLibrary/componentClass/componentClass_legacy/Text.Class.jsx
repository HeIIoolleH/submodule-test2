import { useEffect, useState } from "react";
// import { TextStateStyles } from "../../componentClass/type/Text.Class.type";
import { parseStateStyles } from "../../utils";
import "../style/Text.Class.scss";
const useTextStyle = (stateStyles) => {
    const { hover: hoverStyle, active: activeStyle } = stateStyles;
    const [style, setStyle] = useState(parseStateStyles(stateStyles));
    const [hasHoverDesign, setHasHoverDesign] = useState(false);
    const [hasActiveDesign, setHasActiveDesign] = useState(false);
    useEffect(() => {
        setStyle(parseStateStyles(stateStyles));
        setHasHoverDesign(hoverStyle ? true : false);
        setHasActiveDesign(activeStyle ? true : false);
    }, [stateStyles]);
    return { style, hasHoverDesign, hasActiveDesign };
};
function Text_Class(props) {
    const { textRef, stateStyles, children, style, ...rest } = props;
    const { style: textStyle, hasHoverDesign, hasActiveDesign } = useTextStyle(stateStyles);
    return (<span ref={textRef} className={`EQBR_text ${hasHoverDesign ? "hover" : ""} ${hasActiveDesign ? "active" : ""} `} style={{ ...textStyle, ...style }} {...rest}>
            {children}
        </span>);
}
export default Text_Class;
