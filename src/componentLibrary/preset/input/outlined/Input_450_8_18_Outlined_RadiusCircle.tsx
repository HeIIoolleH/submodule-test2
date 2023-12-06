import React from "react";
import { InputDesignType, InputPaddingPresetOption, InputRadiusPresetOption, InputWidthPresetOption } from "../../../componentLibrary/types/Input.Library.type";
import Input from "../../../componentLibrary/components/Input.Library";
import "./Input_450_8_18_Outlined_RadiusCircle.scss";

export interface Input_450_8_18_Outlined_RadiusCircle_Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const inputType = InputDesignType.Outlined;
const paddingOption = InputPaddingPresetOption.M;
const radiusOption = InputRadiusPresetOption.Radius_Circle;

function Input_450_8_18_Outlined_RadiusCircle(props: Input_450_8_18_Outlined_RadiusCircle_Props) {
    const { className, ...rest } = props;
    return (
        <Input
            className={className + " Input_450_8_18_Outlined_RadiusCircle"}
            inputType={inputType}
            paddingOption={paddingOption}
            radiusOption={radiusOption}
            {...rest}
        />
    );
}

export default Input_450_8_18_Outlined_RadiusCircle;
