import React from "react";
import { InputDesignType, InputPaddingPresetOption, InputWidthPresetOption } from "../../../componentLibrary/types/Input.Library.type";
import Input from "../../../componentLibrary/components/Input.Library";
import "./Input_Fill_8_14_Underlined_Radius0.scss";
const inputType = InputDesignType.Underlined;
const widthOption = InputWidthPresetOption["100%"];
const paddingOption = InputPaddingPresetOption.M;
function Input_Fill_8_14_Underlined_Radius0(props) {
    const { className, ...rest } = props;
    return (<Input className={className + " Input_Fill_8_14_Underlined_Radius0"} inputType={inputType} widthOption={widthOption} paddingOption={paddingOption} {...rest}/>);
}
export default Input_Fill_8_14_Underlined_Radius0;
