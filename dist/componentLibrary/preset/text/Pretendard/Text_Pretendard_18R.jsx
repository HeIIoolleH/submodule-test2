import Text from "../../../componentLibrary/components/Text.Library";
import "./Text_Pretendard_18R.scss";
function Text_Pretendard_18R(props) {
    const { className, ...rest } = props;
    return <Text className={className + " Text_Pretendard_18R"} {...rest}/>;
}
export default Text_Pretendard_18R;
