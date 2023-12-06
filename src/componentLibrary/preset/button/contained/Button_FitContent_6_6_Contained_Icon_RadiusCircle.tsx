import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import Button from "../../../componentLibrary/components/Button.Library";
import {
    ButtonPaddingPresetOption,
    ButtonPattern,
    ButtonRadiusPresetOption,
    ButtonType,
    ButtonWidthPresetOption,
} from "../../../componentLibrary/types/Button.Library.type";
import "./Button_FitContent_6_6_Contained_Icon_RadiusCircle.scss";

export interface Button_FitContent_6_6_Contained_Icon_RadiusCircle_Props
    extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const pattern = ButtonPattern.Icon;
const buttonType = ButtonType.Contained;
const widthOption = ButtonWidthPresetOption.Fit_Content;
const paddingOption = ButtonPaddingPresetOption.S;
const radiusOption = ButtonRadiusPresetOption.Radius_Circle;

function Button_FitContent_6_6_Contained_Icon_RadiusCircle(props: Button_FitContent_6_6_Contained_Icon_RadiusCircle_Props) {
    const { className, ...rest } = props;

    return (
        <Button
            className={className + " Button_FitContent_6_6_Contained_Icon_RadiusCircle"}
            isUseFocus={false}
            pattern={pattern}
            buttonType={buttonType}
            widthOption={widthOption}
            paddingOption={paddingOption}
            radiusOption={radiusOption}
            {...rest}
        />
    );
}

export default Button_FitContent_6_6_Contained_Icon_RadiusCircle;
