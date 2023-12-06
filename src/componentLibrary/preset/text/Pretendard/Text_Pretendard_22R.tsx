import Text from "../../../componentLibrary/components/Text.Library";
import { TextClassProps } from "../../../componentClass/components/Text.Class";
import "./Text_Pretendard_22R.scss";

export interface Text_Pretendard_22R_Props extends TextClassProps {}

function Text_Pretendard_22R(props: any) {
    const { className, ...rest } = props;
    return <Text className={className + " Text_Pretendard_22R"} {...rest} />;
}

export default Text_Pretendard_22R;
