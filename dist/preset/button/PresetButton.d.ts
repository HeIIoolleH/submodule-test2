/// <reference types="react" />
import { ButtonClassProps } from "../../componentClass/components/Button.Class";
import "./PresetButton.scss";
interface ButtonTestProps extends ButtonClassProps {
}
declare function PresetButton(props: ButtonTestProps): import("react").JSX.Element;
export default PresetButton;
