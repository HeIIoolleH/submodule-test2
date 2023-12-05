import Button from "../../../componentLibrary/components/Button.Library";
import { ButtonPaddingPresetOption, ButtonPattern, ButtonType, ButtonWidthPresetOption } from "../../../componentLibrary/types/Button.Library.type";
import "./Button_FitContent_10_6_Outlined_Text_RadiusCircle.scss";
import { ButtonRadiusOption } from "../../../componentClass/types/Button.Class.type";
const pattern = ButtonPattern.Text;
const buttonType = ButtonType.Outlined;
const widthOption = ButtonWidthPresetOption.Fit_Content;
const paddingOption = ButtonPaddingPresetOption.S;
const radiusOption = ButtonRadiusOption.Radius_Circle;
function Button_FitContent_10_6_Outlined_Text_RadiusCircle(props) {
    const { className, ...rest } = props;
    return (<Button className={className + " Button_FitContent_10_6_Outlined_Text_RadiusCircle"} isUseFocus={false} pattern={pattern} buttonType={buttonType} widthOption={widthOption} paddingOption={paddingOption} radiusOption={radiusOption} {...rest}/>);
}
export default Button_FitContent_10_6_Outlined_Text_RadiusCircle;
