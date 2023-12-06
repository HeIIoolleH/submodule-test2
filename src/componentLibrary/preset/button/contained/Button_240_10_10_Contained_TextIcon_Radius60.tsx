import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import Button from "../../../componentLibrary/components/Button.Library";
import { ButtonPaddingPresetOption, ButtonPattern, ButtonType, ButtonWidthPresetOption } from "../../../componentLibrary/types/Button.Library.type";
import "./Button_240_10_10_Contained_TextIcon_Radius60.scss";

export interface Button_240_10_10_Contained_TextIcon_Radius60_Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const pattern = ButtonPattern.TextIcon;
const buttonType = ButtonType.Contained;
const widthOption = ButtonWidthPresetOption.L;
const paddingOption = ButtonPaddingPresetOption.L;

function Button_240_10_10_Contained_TextIcon_Radius60(props: Button_240_10_10_Contained_TextIcon_Radius60_Props) {
    const { className, ...rest } = props;
    return (
        <Button
            className={className + " Button_240_10_10_Contained_TextIcon_Radius60"}
            isUseFocus={false}
            pattern={pattern}
            buttonType={buttonType}
            widthOption={widthOption}
            paddingOption={paddingOption}
            {...rest}
        />
    );
}

export default Button_240_10_10_Contained_TextIcon_Radius60;
