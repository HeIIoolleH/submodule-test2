import Text_Class, { TextClassProps } from "../../componentClass/components/Text.Class";

interface TextProps extends TextClassProps {}

function Text(props: TextProps) {
    return <Text_Class {...props} />;
}

export default Text;
