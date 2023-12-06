import React from "react";
import { InputDesignType, InputPaddingPresetOption, InputWidthPresetOption } from "../../../componentLibrary/types/Input.Library.type";
import Input from "../../../componentLibrary/components/Input.Library";
import "./Input_450_12_16_Outlined_Radius60_Props.scss";

export interface Input_450_12_16_Outlined_Radius60_Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const inputType = InputDesignType.Outlined;
const paddingOption = InputPaddingPresetOption.L;

function Input_450_12_16_Outlined_Radius60(props: Input_450_12_16_Outlined_Radius60_Props) {
    const { className, ...rest } = props;
    return <Input className={className + " Input_450_12_16_Outlined_Radius60"} inputType={inputType} paddingOption={paddingOption} {...rest} />;
}

export default Input_450_12_16_Outlined_Radius60;
