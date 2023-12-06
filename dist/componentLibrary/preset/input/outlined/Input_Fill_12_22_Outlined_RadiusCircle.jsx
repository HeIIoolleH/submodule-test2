import React from "react";
import { InputDesignType, InputPaddingPresetOption, InputRadiusPresetOption, InputWidthPresetOption } from "../../../componentLibrary/types/Input.Library.type";
import Input from "../../../componentLibrary/components/Input.Library";
import "./Input_Fill_12_22_Outlined_RadiusCircle.scss";
const inputType = InputDesignType.Outlined;
const widthOption = InputWidthPresetOption["100%"];
const paddingOption = InputPaddingPresetOption.L;
const radiusOption = InputRadiusPresetOption.Radius_Circle;
function Input_Fill_12_22_Outlined_RadiusCircle(props) {
    const { className, ...rest } = props;
    return (<Input className={className + " Input_Fill_12_22_Outlined_RadiusCircle"} inputType={inputType} widthOption={widthOption} paddingOption={paddingOption} radiusOption={radiusOption} {...rest}/>);
}
export default Input_Fill_12_22_Outlined_RadiusCircle;
