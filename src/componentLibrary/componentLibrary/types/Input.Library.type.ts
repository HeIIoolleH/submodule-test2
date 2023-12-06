import { InputRadiusOption, InputRadiusOptionType, InputWidthOption, InputWidthOptionType } from "../../componentClass/types/Input.Class.type";
// Padding
export const InputPaddingPresetOption = {
    S: "S",
    M: "M",
    L: "L",
};
export type InputPaddingPresetOptionType = (typeof InputPaddingPresetOption)[keyof typeof InputPaddingPresetOption];

// Width
export const InputWidthPresetOption = InputWidthOption;
export type InputWidthPresetOptionType = InputWidthOptionType;

// Radius
export const InputRadiusPresetOption = InputRadiusOption;
export type InputRadiusPresetOptionType = InputRadiusOptionType;

// Type
export const InputDesignType = {
    Contained: "contained",
    Outlined: "outlined",
    Underlined: "underlined",
};
export type InputDesignTypeType = (typeof InputDesignType)[keyof typeof InputDesignType];
