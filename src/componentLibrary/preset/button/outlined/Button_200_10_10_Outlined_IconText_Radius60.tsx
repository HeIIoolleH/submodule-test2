import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import Button from "../../../componentLibrary/components/Button.Library";
import { ButtonPaddingPresetOption, ButtonPattern, ButtonType, ButtonWidthPresetOption } from "../../../componentLibrary/types/Button.Library.type";
import "./Button_200_10_10_Outlined_IconText_Radius60.scss";

export interface Button_200_10_10_Outlined_IconText_Radius60_Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const pattern = ButtonPattern.IconText;
const buttonType = ButtonType.Outlined;
const widthOption = ButtonWidthPresetOption.M;
const paddingOption = ButtonPaddingPresetOption.L;

function Button_200_10_10_Outlined_IconText_Radius60(props: Button_200_10_10_Outlined_IconText_Radius60_Props) {
    const { className, ...rest } = props;
    return (
        <Button
            className={className + " Button_200_10_10_Outlined_IconText_Radius60"}
            isUseFocus={false}
            pattern={pattern}
            buttonType={buttonType}
            widthOption={widthOption}
            paddingOption={paddingOption}
            {...rest}
        />
    );
}

export default Button_200_10_10_Outlined_IconText_Radius60;
