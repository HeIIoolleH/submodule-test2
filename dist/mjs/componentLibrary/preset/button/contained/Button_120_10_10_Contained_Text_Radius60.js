import Button from "../../../componentLibrary/components/Button.Library";
import { ButtonPaddingPresetOption, ButtonPattern, ButtonType, ButtonWidthPresetOption } from "../../../componentLibrary/types/Button.Library.type";
import "./Button_120_10_10_Contained_Text_Radius60.scss";
const pattern = ButtonPattern.Text;
const buttonType = ButtonType.Contained;
const widthOption = ButtonWidthPresetOption.S;
const paddingOption = ButtonPaddingPresetOption.L;
function Button_120_10_10_Contained_Text_Radius60(props) {
    const { className, ...rest } = props;
    return (<Button className={className + " Button_120_10_10_Contained_Text_Radius60"} isUseFocus={false} pattern={pattern} buttonType={buttonType} widthOption={widthOption} paddingOption={paddingOption} {...rest}/>);
}
export default Button_120_10_10_Contained_Text_Radius60;
