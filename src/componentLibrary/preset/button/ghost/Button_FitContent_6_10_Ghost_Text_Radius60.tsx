import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import Button from "../../../componentLibrary/components/Button.Library";
import { ButtonPaddingPresetOption, ButtonPattern, ButtonType, ButtonWidthPresetOption } from "../../../componentLibrary/types/Button.Library.type";
import "./dButton_FitContent_6_10_Ghost_Text_Radius60.scss";

export interface dButton_FitContent_6_10_Ghost_Text_Radius60_Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const pattern = ButtonPattern.Text;
const buttonType = ButtonType.Ghost;
const widthOption = ButtonWidthPresetOption.Fit_Content;
const paddingOption = ButtonPaddingPresetOption.M;

function dButton_FitContent_6_10_Ghost_Text_Radius60(props: dButton_FitContent_6_10_Ghost_Text_Radius60_Props) {
    const { className, ...rest } = props;

    return (
        <Button
            className={className + " dButton_FitContent_6_10_Ghost_Text_Radius60"}
            isUseFocus={false}
            pattern={pattern}
            buttonType={buttonType}
            widthOption={widthOption}
            paddingOption={paddingOption}
            {...rest}
        />
    );
}

export default dButton_FitContent_6_10_Ghost_Text_Radius60;
