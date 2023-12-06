/// <reference types="react" />
import { InputClassProps } from "../../componentClass/components/Input.Class";
import { InputDesignTypeType, InputWidthPresetOptionType, InputPaddingPresetOptionType, InputRadiusPresetOptionType } from "../types/Input.Library.type";
export interface InputProps extends InputClassProps {
    inputType: InputDesignTypeType;
    widthOption?: InputWidthPresetOptionType;
    paddingOption?: InputPaddingPresetOptionType;
    radiusOption?: InputRadiusPresetOptionType;
}
declare function Input(props: InputProps): import("react").JSX.Element;
export default Input;
