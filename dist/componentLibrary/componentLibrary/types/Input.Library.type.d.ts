import { InputRadiusOptionType, InputWidthOptionType } from "../../componentClass/types/Input.Class.type";
export declare const InputPaddingPresetOption: {
    S: string;
    M: string;
    L: string;
};
export type InputPaddingPresetOptionType = (typeof InputPaddingPresetOption)[keyof typeof InputPaddingPresetOption];
export declare const InputWidthPresetOption: {
    Fit_Content: string;
    "100%": string;
};
export type InputWidthPresetOptionType = InputWidthOptionType;
export declare const InputRadiusPresetOption: {
    Radius_Circle: string;
};
export type InputRadiusPresetOptionType = InputRadiusOptionType;
export declare const InputDesignType: {
    Contained: string;
    Outlined: string;
    Underlined: string;
};
export type InputDesignTypeType = (typeof InputDesignType)[keyof typeof InputDesignType];
