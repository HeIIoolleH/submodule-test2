import Button from "../../../componentLibrary/components/Button.Library";
import { ButtonPaddingPresetOption, ButtonPattern, ButtonType, ButtonWidthPresetOption } from "../../../componentLibrary/types/Button.Library.type";
import "./Button_200_10_10_Contained_Text_Radius60.scss";
const pattern = ButtonPattern.Text;
const buttonType = ButtonType.Contained;
const widthOption = ButtonWidthPresetOption.M;
const paddingOption = ButtonPaddingPresetOption.L;
function Button_200_10_10_Contained_Text_Radius60(props) {
    const { className, ...rest } = props;
    return (<Button className={className + " Button_200_10_10_Contained_Text_Radius60"} isUseFocus={false} pattern={pattern} buttonType={buttonType} widthOption={widthOption} paddingOption={paddingOption} {...rest}/>);
}
export default Button_200_10_10_Contained_Text_Radius60;
