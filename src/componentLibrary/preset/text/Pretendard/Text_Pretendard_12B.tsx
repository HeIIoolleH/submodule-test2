import Text from "../../../componentLibrary/components/Text.Library";
import { TextClassProps } from "../../../componentClass/components/Text.Class";
import "./Text_Pretendard_12B.scss";

export interface Text_Pretendard_12B_Props extends TextClassProps {}

function Text_Pretendard_12B(props: any) {
    const { className, ...rest } = props;
    return <Text className={className + " Text_Pretendard_12B"} {...rest} />;
}

export default Text_Pretendard_12B;
