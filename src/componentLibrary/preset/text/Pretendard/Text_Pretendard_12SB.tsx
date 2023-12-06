import Text from "../../../componentLibrary/components/Text.Library";
import { TextClassProps } from "../../../componentClass/components/Text.Class";
import "./Text_Pretendard_12SB.scss";

export interface Text_Pretendard_12SB_Props extends TextClassProps {}

function Text_Pretendard_12SB(props: any) {
    const { className, ...rest } = props;
    return <Text className={className + " Text_Pretendard_12SB"} {...rest} />;
}

export default Text_Pretendard_12SB;
