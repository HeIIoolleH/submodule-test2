import { ButtonHTMLAttributes, DetailedHTMLProps, RefObject } from "react";
import "../styles/Button.Class.scss";
import { ButtonRadiusOptionType, ButtonWidthOptionType } from "../types/Button.Class.type";
export interface ButtonClassProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    buttonRef?: RefObject<HTMLButtonElement>;
    isUseFocus: boolean;
    widthOption?: ButtonWidthOptionType;
    radiusOption?: ButtonRadiusOptionType;
}
declare function Button_Class(props: ButtonClassProps): import("react").JSX.Element;
export default Button_Class;
