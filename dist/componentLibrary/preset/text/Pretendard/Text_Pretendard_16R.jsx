import Text from "../../../componentLibrary/components/Text.Library";
import "./Text_Pretendard_16R.scss";
function Text_Pretendard_16R(props) {
    const { className, ...rest } = props;
    return <Text className={className + " Text_Pretendard_16R"} {...rest}/>;
}
export default Text_Pretendard_16R;
