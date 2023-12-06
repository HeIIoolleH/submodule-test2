import Text from "../../../componentLibrary/components/Text.Library";
import { TextClassProps } from "../../../componentClass/components/Text.Class";
import "./Text_Pretendard_14SB.scss";

export interface Text_Pretendard_14SB_Props extends TextClassProps {}

function Text_Pretendard_14SB(props: any) {
    const { className, ...rest } = props;
    return <Text className={className + " Text_Pretendard_14SB"} {...rest} />;
}

export default Text_Pretendard_14SB;
