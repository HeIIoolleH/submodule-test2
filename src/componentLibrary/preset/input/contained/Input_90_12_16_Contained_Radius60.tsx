import React from "react";
import { InputDesignType, InputPaddingPresetOption } from "../../../componentLibrary/types/Input.Library.type";
import Input from "../../../componentLibrary/components/Input.Library";
import "./Input_90_12_16_Contained_Radius60_Props.scss";

export interface Input_90_12_16_Contained_Radius60_Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const inputType = InputDesignType.Contained;
const paddingOption = InputPaddingPresetOption.L;

function Input_90_12_16_Contained_Radius60(props: Input_90_12_16_Contained_Radius60_Props) {
    const { className, ...rest } = props;
    return <Input className={className + " Input_90_12_16_Contained_Radius60"} inputType={inputType} paddingOption={paddingOption} {...rest} />;
}

export default Input_90_12_16_Contained_Radius60;
