import React from "react";
import { InputDesignType, InputPaddingPresetOption, InputWidthPresetOption } from "../../../componentLibrary/types/Input.Library.type";
import Input from "../../../componentLibrary/components/Input.Library";
import "./Input_Fill_12_16_Contained_Radius60.scss";

export interface Input_Fill_12_16_Contained_Radius60_Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const inputType = InputDesignType.Contained;
const widthOption = InputWidthPresetOption["100%"];
const paddingOption = InputPaddingPresetOption.L;

function Input_Fill_12_16_Contained_Radius60(props: Input_Fill_12_16_Contained_Radius60_Props) {
    const { className, ...rest } = props;
    return (
        <Input
            className={className + " Input_Fill_12_16_Contained_Radius60"}
            inputType={inputType}
            widthOption={widthOption}
            paddingOption={paddingOption}
            {...rest}
        />
    );
}

export default Input_Fill_12_16_Contained_Radius60;
