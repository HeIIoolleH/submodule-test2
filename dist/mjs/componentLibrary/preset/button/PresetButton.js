import { ButtonRadiusOption } from "../../componentClass/types/Button.Class.type";
import Button from "../../componentLibrary/components/Button.Library";
import { ButtonPaddingPresetOption, ButtonPattern, ButtonType, ButtonWidthPresetOption } from "../../componentLibrary/types/Button.Library.type";
import "./PresetButton.scss";
const pattern = ButtonPattern.IconText;
const buttonType = ButtonType.Contained;
const widthOption = ButtonWidthPresetOption.S;
const paddingOption = ButtonPaddingPresetOption.S;
const radiusOption = ButtonRadiusOption.Radius_Circle;
function PresetButton(props) {
    return (<Button className="Button-Test" pattern={pattern} buttonType={buttonType} widthOption={widthOption} radiusOption={radiusOption} paddingOption={paddingOption} {...props}/>);
}
export default PresetButton;
