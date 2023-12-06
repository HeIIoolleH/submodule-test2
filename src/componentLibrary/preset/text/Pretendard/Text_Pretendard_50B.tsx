import Text from "../../../componentLibrary/components/Text.Library";
import { TextClassProps } from "../../../componentClass/components/Text.Class";
import "./Text_Pretendard_50B.scss";

export interface Text_Pretendard_50B_Props extends TextClassProps {}

function Text_Pretendard_50B(props: any) {
    const { className, ...rest } = props;
    return <Text className={className + " Text_Pretendard_50B"} {...rest} />;
}

export default Text_Pretendard_50B;
