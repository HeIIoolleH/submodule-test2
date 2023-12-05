/// <reference types="react" />
import { ButtonClassProps } from "../../componentClass/components/Button.Class";
import { ButtonPaddingPresetOptionType, ButtonPatternType, ButtonTypeType, ButtonWidthPresetOptionType } from "../types/Button.Library.type";
export interface ButtonProps extends ButtonClassProps {
    pattern: ButtonPatternType;
    buttonType: ButtonTypeType;
    widthOption?: ButtonWidthPresetOptionType;
    paddingOption?: ButtonPaddingPresetOptionType;
}
declare function Button(props: ButtonProps): import("react").JSX.Element;
export default Button;
