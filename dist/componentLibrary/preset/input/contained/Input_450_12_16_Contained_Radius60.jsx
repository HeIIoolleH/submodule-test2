import React from "react";
import { InputDesignType, InputPaddingPresetOption } from "../../../componentLibrary/types/Input.Library.type";
import Input from "../../../componentLibrary/components/Input.Library";
import "./Input_450_12_16_Contained_Radius60_Props.scss";
const inputType = InputDesignType.Contained;
const paddingOption = InputPaddingPresetOption.L;
function Input_450_12_16_Contained_Radius60(props) {
    const { className, ...rest } = props;
    return <Input className={className + " Input_450_12_16_Contained_Radius60"} inputType={inputType} paddingOption={paddingOption} {...rest}/>;
}
export default Input_450_12_16_Contained_Radius60;
