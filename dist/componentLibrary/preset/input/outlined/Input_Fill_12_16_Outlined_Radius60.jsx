import React from "react";
import { InputDesignType, InputPaddingPresetOption, InputWidthPresetOption } from "../../../componentLibrary/types/Input.Library.type";
import Input from "../../../componentLibrary/components/Input.Library";
import "./Input_Fill_12_16_Outlined_Radius60.scss";
const inputType = InputDesignType.Outlined;
const widthOption = InputWidthPresetOption["100%"];
const paddingOption = InputPaddingPresetOption.L;
function Input_Fill_12_16_Outlined_Radius60(props) {
    const { className, ...rest } = props;
    return (<Input className={className + " Input_Fill_12_16_Outlined_Radius60"} inputType={inputType} widthOption={widthOption} paddingOption={paddingOption} {...rest}/>);
}
export default Input_Fill_12_16_Outlined_Radius60;
