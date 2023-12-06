import Button from "../../../componentLibrary/components/Button.Library";
import { ButtonPaddingPresetOption, ButtonPattern, ButtonType, ButtonWidthPresetOption, ButtonRadiusPresetOption, } from "../../../componentLibrary/types/Button.Library.type";
import "./Button_FitContent_6_6_Outlined_Icon_RadiusCircle.scss";
const pattern = ButtonPattern.Icon;
const buttonType = ButtonType.Outlined;
const widthOption = ButtonWidthPresetOption.Fit_Content;
const paddingOption = ButtonPaddingPresetOption.S;
const radiusOption = ButtonRadiusPresetOption.Radius_Circle;
function Button_FitContent_6_6_Outlined_Icon_RadiusCircle(props) {
    const { className, ...rest } = props;
    return (<Button className={className + " Button_FitContent_6_6_Outlined_Icon_RadiusCircle"} isUseFocus={false} pattern={pattern} buttonType={buttonType} widthOption={widthOption} paddingOption={paddingOption} radiusOption={radiusOption} {...rest}/>);
}
export default Button_FitContent_6_6_Outlined_Icon_RadiusCircle;
