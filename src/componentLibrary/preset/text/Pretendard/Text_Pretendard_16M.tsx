import Text from "../../../componentLibrary/components/Text.Library";
import { TextClassProps } from "../../../componentClass/components/Text.Class";
import "./Text_Pretendard_16M.scss";

export interface Text_Pretendard_16M_Props extends TextClassProps {}

function Text_Pretendard_16M(props: any) {
    const { className, ...rest } = props;
    return <Text className={className + " Text_Pretendard_16M"} {...rest} />;
}

export default Text_Pretendard_16M;
