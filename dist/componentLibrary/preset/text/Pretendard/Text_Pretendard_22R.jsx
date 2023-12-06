import Text from "../../../componentLibrary/components/Text.Library";
import "./Text_Pretendard_22R.scss";
function Text_Pretendard_22R(props) {
    const { className, ...rest } = props;
    return <Text className={className + " Text_Pretendard_22R"} {...rest}/>;
}
export default Text_Pretendard_22R;
