import { DetailedHTMLProps, InputHTMLAttributes, RefObject } from "react";
import "../style/Input.Class.scss";
export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    inputRef?: RefObject<HTMLInputElement>;
    stateStyles: any;
}
declare function Input_Class(props: InputProps): import("react").JSX.Element;
export default Input_Class;
