import { useEffect, useState } from "react";
// import { IconStateStyles } from "../../componentClass/type/Icon.Class.type";
import { parseStateStyles } from "../../utils";
import "../style/Icon.Class.scss";
const useIconStyle = (stateStyles) => {
    const { enabled: enabledStyle, hover: hoverStyle, active: activeStyle } = stateStyles;
    const [style, setStyle] = useState(parseStateStyles(stateStyles));
    const [hasHoverDesign, setHasHoverDesign] = useState(false);
    const [hasActiveDesign, setHasActiveDesign] = useState(false);
    if (enabledStyle.border === "none") {
        enabledStyle.border = enabledStyle.fill;
    }
    useEffect(() => {
        setStyle(parseStateStyles(stateStyles));
        setHasHoverDesign(hoverStyle ? true : false);
        setHasActiveDesign(activeStyle ? true : false);
    }, [stateStyles]);
    return { style, hasHoverDesign, hasActiveDesign };
};
function Icon_Class(props) {
    const { Icon, stateStyles, style, ...rest } = props;
    const { style: iconStyle, hasHoverDesign, hasActiveDesign } = useIconStyle(stateStyles);
    return <Icon className={`EQBR_icon ${hasHoverDesign ? "hover" : ""} ${hasActiveDesign ? "active" : ""}`} style={{ ...iconStyle, ...style }} {...rest}/>;
}
export default Icon_Class;
