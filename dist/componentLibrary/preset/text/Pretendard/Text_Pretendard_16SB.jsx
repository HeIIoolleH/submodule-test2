import Text from "../../../componentLibrary/components/Text.Library";
import "./Text_Pretendard_16SB.scss";
function Text_Pretendard_16SB(props) {
    const { className, ...rest } = props;
    return <Text className={className + " Text_Pretendard_16SB"} {...rest}/>;
}
export default Text_Pretendard_16SB;
