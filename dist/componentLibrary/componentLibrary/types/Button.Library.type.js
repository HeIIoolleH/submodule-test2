// Padding
import { ButtonRadiusOption, ButtonWidthOption } from "../../componentClass/types/Button.Class.type";
export const ButtonPaddingPresetOption = {
    S: "S",
    M: "M",
    L: "L",
};
// Width
export const ButtonWidthPresetOption = {
    S: "S",
    M: "M",
    L: "L",
    ...ButtonWidthOption,
};
// Radius
export const ButtonRadiusPresetOption = ButtonRadiusOption;
// Pattern
export const ButtonPattern = {
    IconText: "icon-text",
    TextIcon: "text-icon",
    Text: "text",
    Icon: "icon",
};
// Type
export const ButtonType = {
    Contained: "contained",
    Outlined: "outlined",
    Ghost: "ghost",
};
