import Button from "../../../componentLibrary/components/Button.Library";
import { ButtonPaddingPresetOption, ButtonPattern, ButtonType, ButtonWidthPresetOption } from "../../../componentLibrary/types/Button.Library.type";
import "./Button_FitContent_10_6_Outlined_Text_Radius60.scss";
const pattern = ButtonPattern.IconText;
const buttonType = ButtonType.Outlined;
const widthOption = ButtonWidthPresetOption.Fit_Content;
const paddingOption = ButtonPaddingPresetOption.M;
function Button_FitContent_10_6_Outlined_IconText_Radius60(props) {
    const { className, ...rest } = props;
    return (<Button className={className + " Button_FitContent_10_6_Outlined_IconText_Radius60"} isUseFocus={false} pattern={pattern} buttonType={buttonType} widthOption={widthOption} paddingOption={paddingOption} {...rest}/>);
}
export default Button_FitContent_10_6_Outlined_IconText_Radius60;
