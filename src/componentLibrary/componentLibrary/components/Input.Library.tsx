import Input_Class, { InputClassProps } from "../../componentClass/components/Input.Class";
import { InputDesignTypeType, InputWidthPresetOptionType, InputPaddingPresetOptionType, InputRadiusPresetOptionType } from "../types/Input.Library.type";

export interface InputProps extends InputClassProps {
    inputType: InputDesignTypeType;
    widthOption?: InputWidthPresetOptionType;
    paddingOption?: InputPaddingPresetOptionType;
    radiusOption?: InputRadiusPresetOptionType;
}

function Input(props: InputProps) {
    const { inputType, paddingOption, className, ...rest } = props;
    return <Input_Class className={`${className}${` input-type_${inputType}${paddingOption ? ` input-padding_${paddingOption}` : ""}`}`} {...rest} />;
}

export default Input;
