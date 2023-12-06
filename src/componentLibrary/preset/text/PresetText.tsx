import { TextClassProps } from "../../componentClass/components/Text.Class";
import Text from "../../componentLibrary/components/Text.Library";
import "./PresetText.scss";

interface TextTestProps extends TextClassProps {}

function PresetText(props: TextTestProps) {
    return <Text className="Text-Test" {...props} />;
}

export default PresetText;
