import React from "react";
import { InputDesignType, InputPaddingPresetOption, InputRadiusPresetOption } from "../../../componentLibrary/types/Input.Library.type";
import Input from "../../../componentLibrary/components/Input.Library";
import "./Input_450_8_18_Outlined_RadiusCircle.scss";
const inputType = InputDesignType.Outlined;
const paddingOption = InputPaddingPresetOption.M;
const radiusOption = InputRadiusPresetOption.Radius_Circle;
function Input_450_8_18_Outlined_RadiusCircle(props) {
    const { className, ...rest } = props;
    return (<Input className={className + " Input_450_8_18_Outlined_RadiusCircle"} inputType={inputType} paddingOption={paddingOption} radiusOption={radiusOption} {...rest}/>);
}
export default Input_450_8_18_Outlined_RadiusCircle;
