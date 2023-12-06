import Button from "../../../componentLibrary/components/Button.Library";
import { ButtonPaddingPresetOption, ButtonPattern, ButtonType, ButtonWidthPresetOption } from "../../../componentLibrary/types/Button.Library.type";
import "./dButton_FitContent_6_10_Ghost_Text_Radius60.scss";
const pattern = ButtonPattern.Text;
const buttonType = ButtonType.Ghost;
const widthOption = ButtonWidthPresetOption.Fit_Content;
const paddingOption = ButtonPaddingPresetOption.M;
function dButton_FitContent_6_10_Ghost_Text_Radius60(props) {
    const { className, ...rest } = props;
    return (<Button className={className + " dButton_FitContent_6_10_Ghost_Text_Radius60"} isUseFocus={false} pattern={pattern} buttonType={buttonType} widthOption={widthOption} paddingOption={paddingOption} {...rest}/>);
}
export default dButton_FitContent_6_10_Ghost_Text_Radius60;
