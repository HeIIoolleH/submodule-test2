import Text from "../../../componentLibrary/components/Text.Library";
import { TextClassProps } from "../../../componentClass/components/Text.Class";
import "./Text_Pretendard_16R.scss";

export interface Text_Pretendard_16R_Props extends TextClassProps {}

function Text_Pretendard_16R(props: any) {
    const { className, ...rest } = props;
    return <Text className={className + " Text_Pretendard_16R"} {...rest} />;
}

export default Text_Pretendard_16R;
