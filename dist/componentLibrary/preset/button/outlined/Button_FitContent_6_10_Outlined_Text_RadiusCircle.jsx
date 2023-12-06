import Button from "../../../componentLibrary/components/Button.Library";
import { ButtonPaddingPresetOption, ButtonPattern, ButtonRadiusPresetOption, ButtonType, ButtonWidthPresetOption, } from "../../../componentLibrary/types/Button.Library.type";
import "./Button_FitContent_6_10_Outlined_Text_RadiusCircle.scss";
const pattern = ButtonPattern.Text;
const buttonType = ButtonType.Outlined;
const widthOption = ButtonWidthPresetOption.Fit_Content;
const paddingOption = ButtonPaddingPresetOption.M;
const radiusOption = ButtonRadiusPresetOption.Radius_Circle;
function Button_FitContent_6_10_Outlined_Text_RadiusCircle(props) {
    const { className, ...rest } = props;
    return (<Button className={className + " Button_FitContent_6_10_Outlined_Text_RadiusCircle"} isUseFocus={false} pattern={pattern} buttonType={buttonType} widthOption={widthOption} paddingOption={paddingOption} radiusOption={radiusOption} {...rest}/>);
}
export default Button_FitContent_6_10_Outlined_Text_RadiusCircle;
