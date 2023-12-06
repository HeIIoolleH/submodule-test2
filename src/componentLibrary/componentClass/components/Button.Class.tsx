import { ButtonHTMLAttributes, DetailedHTMLProps, RefObject } from "react";
import "../styles/Button.Class.scss";
import { ButtonRadiusOptionType, ButtonWidthOptionType } from "../types/Button.Class.type";

export interface ButtonClassProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    buttonRef?: RefObject<HTMLButtonElement>;
    isUseFocus: boolean;
    widthOption?: ButtonWidthOptionType;
    radiusOption?: ButtonRadiusOptionType;
}

function Button_Class(props: ButtonClassProps) {
    const { className = "", buttonRef, isUseFocus, widthOption, radiusOption, children, ...rest } = props;

    return (
        <button
            ref={buttonRef}
            className={`EQBR_Button ${className}${widthOption ? ` btn-width_${widthOption}` : ""}${radiusOption ? ` btn-radius_${radiusOption}` : ""}${
                isUseFocus ? " focus" : ""
            }`}
            {...rest}
        >
            <div className="button-content">{children}</div>
        </button>
    );
}

export default Button_Class;
