import Text from "../../../componentLibrary/components/Text.Library";
import "./Text_Pretendard_12SB.scss";
function Text_Pretendard_12SB(props) {
    const { className, ...rest } = props;
    return <Text className={className + " Text_Pretendard_12SB"} {...rest}/>;
}
export default Text_Pretendard_12SB;
