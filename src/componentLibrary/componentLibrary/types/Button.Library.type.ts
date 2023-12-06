// Padding
import { ButtonRadiusOption, ButtonWidthOption, ButtonRadiusOptionType } from "../../componentClass/types/Button.Class.type";
export const ButtonPaddingPresetOption = {
    S: "S",
    M: "M",
    L: "L",
};
export type ButtonPaddingPresetOptionType = (typeof ButtonPaddingPresetOption)[keyof typeof ButtonPaddingPresetOption];

// Width
export const ButtonWidthPresetOption = {
    S: "S",
    M: "M",
    L: "L",
    ...ButtonWidthOption,
};
export type ButtonWidthPresetOptionType = (typeof ButtonWidthPresetOption)[keyof typeof ButtonWidthPresetOption];

// Radius
export const ButtonRadiusPresetOption = ButtonRadiusOption;
export type ButtonRadiusPresetOptionType = ButtonRadiusOptionType;

// Pattern
export const ButtonPattern = {
    IconText: "icon-text",
    TextIcon: "text-icon",
    Text: "text",
    Icon: "icon",
};
export type ButtonPatternType = (typeof ButtonPattern)[keyof typeof ButtonPattern];

// Type
export const ButtonType = {
    Contained: "contained",
    Outlined: "outlined",
    Ghost: "ghost",
};
export type ButtonTypeType = (typeof ButtonType)[keyof typeof ButtonType];
