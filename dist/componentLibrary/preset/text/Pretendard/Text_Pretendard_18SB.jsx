import Text from "../../../componentLibrary/components/Text.Library";
import "./Text_Pretendard_18SB.scss";
function Text_Pretendard_18SB(props) {
    const { className, ...rest } = props;
    return <Text className={className + " Text_Pretendard_18SB"} {...rest}/>;
}
export default Text_Pretendard_18SB;
