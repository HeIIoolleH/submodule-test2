import Button from "../../componentLibrary/components/Button.Library";
import { ButtonPaddingPresetOption, ButtonPattern, ButtonRadiusPresetOption, ButtonType, ButtonWidthPresetOption, } from "../../componentLibrary/types/Button.Library.type";
import "./PresetButton.scss";
const pattern = ButtonPattern.Text;
const buttonType = ButtonType.Contained;
const widthOption = ButtonWidthPresetOption.S;
const paddingOption = ButtonPaddingPresetOption.S;
const radiusOption = ButtonRadiusPresetOption.Radius_Circle;
function PresetButton(props) {
    return (<Button className="Button-Test" pattern={pattern} buttonType={buttonType} widthOption={widthOption} radiusOption={radiusOption} paddingOption={paddingOption} {...props}/>);
}
export default PresetButton;
