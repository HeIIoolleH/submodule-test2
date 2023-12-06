import React from "react";
import { InputDesignType, InputPaddingPresetOption } from "../../../componentLibrary/types/Input.Library.type";
import Input from "../../../componentLibrary/components/Input.Library";
import "./Input_250_8_14_Underlined_Radius0.scss";
const inputType = InputDesignType.Underlined;
const paddingOption = InputPaddingPresetOption.M;
function Input_250_8_14_Underlined_Radius0(props) {
    const { className, ...rest } = props;
    return <Input className={className + " Input_250_8_14_Underlined_Radius0"} inputType={inputType} paddingOption={paddingOption} {...rest}/>;
}
export default Input_250_8_14_Underlined_Radius0;
