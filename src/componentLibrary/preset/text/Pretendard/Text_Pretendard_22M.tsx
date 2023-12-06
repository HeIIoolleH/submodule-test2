import Text from "../../../componentLibrary/components/Text.Library";
import { TextClassProps } from "../../../componentClass/components/Text.Class";
import "./Text_Pretendard_22M.scss";

export interface Text_Pretendard_22M_Props extends TextClassProps {}

function Text_Pretendard_22M(props: any) {
    const { className, ...rest } = props;
    return <Text className={className + " Text_Pretendard_22M"} {...rest} />;
}

export default Text_Pretendard_22M;
