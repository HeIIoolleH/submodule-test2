import { DetailedHTMLProps, InputHTMLAttributes, RefObject } from "react";
import { InputRadiusOptionType, InputWidthOptionType } from "../types/Input.Class.type";
import "../style/Input.Class.scss";

export interface InputClassProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    inputRef?: RefObject<HTMLInputElement>;
    isValid?: boolean;
    widthOption?: InputWidthOptionType;
    radiusOption?: InputRadiusOptionType;
}

function Input_Class(props: InputClassProps) {
    const { className = "", inputRef, isValid, widthOption, radiusOption, ...rest } = props;

    return (
        <input
            ref={inputRef}
            className={`EQBR_Input ${className}${widthOption ? ` input-width_${widthOption}` : ""}${radiusOption ? ` input-radius_${radiusOption}` : ""}${
                isValid !== undefined ? (isValid ? " valid" : " invalid") : ""
            }`}
            {...rest}
        />
    );
}
export default Input_Class;
