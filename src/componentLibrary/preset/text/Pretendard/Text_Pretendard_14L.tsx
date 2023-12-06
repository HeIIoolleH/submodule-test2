import Text from "../../../componentLibrary/components/Text.Library";
import { TextClassProps } from "../../../componentClass/components/Text.Class";
import "./Text_Pretendard_14L.scss";

export interface Text_Pretendard_14L_Props extends TextClassProps {}

function Text_Pretendard_14L(props: any) {
    const { className, ...rest } = props;
    return <Text className={className + " Text_Pretendard_14L"} {...rest} />;
}

export default Text_Pretendard_14L;
