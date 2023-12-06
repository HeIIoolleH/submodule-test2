import Text from "../../../componentLibrary/components/Text.Library";
import { TextClassProps } from "../../../componentClass/components/Text.Class";
import "./Text_Pretendard_16M2.scss";

export interface Text_Pretendard_16M2_Props extends TextClassProps {}

function Text_Pretendard_16M2(props: any) {
    const { className, ...rest } = props;
    return <Text className={className + " Text_Pretendard_16M2"} {...rest} />;
}

export default Text_Pretendard_16M2;
