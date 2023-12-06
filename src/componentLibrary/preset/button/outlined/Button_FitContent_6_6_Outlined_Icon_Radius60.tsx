import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import Button from "../../../componentLibrary/components/Button.Library";
import { ButtonPaddingPresetOption, ButtonPattern, ButtonType, ButtonWidthPresetOption } from "../../../componentLibrary/types/Button.Library.type";
import "./Button_FitContent_6_6_Outlined_Icon_Radius60.scss";

export interface Button_FitContent_6_6_Outlined_Icon_Radius60_Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const pattern = ButtonPattern.Icon;
const buttonType = ButtonType.Outlined;
const widthOption = ButtonWidthPresetOption.Fit_Content;
const paddingOption = ButtonPaddingPresetOption.S;

function Button_FitContent_6_6_Outlined_Icon_Radius60(props: Button_FitContent_6_6_Outlined_Icon_Radius60_Props) {
    const { className, ...rest } = props;

    return (
        <Button
            className={className + " Button_FitContent_6_6_Outlined_Icon_Radius60"}
            isUseFocus={false}
            pattern={pattern}
            buttonType={buttonType}
            widthOption={widthOption}
            paddingOption={paddingOption}
            {...rest}
        />
    );
}

export default Button_FitContent_6_6_Outlined_Icon_Radius60;
