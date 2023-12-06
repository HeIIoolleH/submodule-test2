import { ButtonRadiusOptionType } from "../../componentClass/types/Button.Class.type";
export declare const ButtonPaddingPresetOption: {
    S: string;
    M: string;
    L: string;
};
export type ButtonPaddingPresetOptionType = (typeof ButtonPaddingPresetOption)[keyof typeof ButtonPaddingPresetOption];
export declare const ButtonWidthPresetOption: {
    Fit_Content: string;
    "100%": string;
    S: string;
    M: string;
    L: string;
};
export type ButtonWidthPresetOptionType = (typeof ButtonWidthPresetOption)[keyof typeof ButtonWidthPresetOption];
export declare const ButtonRadiusPresetOption: {
    Radius_Circle: string;
};
export type ButtonRadiusPresetOptionType = ButtonRadiusOptionType;
export declare const ButtonPattern: {
    IconText: string;
    TextIcon: string;
    Text: string;
    Icon: string;
};
export type ButtonPatternType = (typeof ButtonPattern)[keyof typeof ButtonPattern];
export declare const ButtonType: {
    Contained: string;
    Outlined: string;
    Ghost: string;
};
export type ButtonTypeType = (typeof ButtonType)[keyof typeof ButtonType];
