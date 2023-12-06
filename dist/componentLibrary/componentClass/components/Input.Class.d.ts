import { DetailedHTMLProps, InputHTMLAttributes, RefObject } from "react";
import { InputRadiusOptionType, InputWidthOptionType } from "../types/Input.Class.type";
import "../style/Input.Class.scss";
export interface InputClassProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    inputRef?: RefObject<HTMLInputElement>;
    isValid?: boolean;
    widthOption?: InputWidthOptionType;
    radiusOption?: InputRadiusOptionType;
}
declare function Input_Class(props: InputClassProps): import("react").JSX.Element;
export default Input_Class;
