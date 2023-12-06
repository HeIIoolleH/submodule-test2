import Text from "../../../componentLibrary/components/Text.Library";
import "./Text_Pretendard_16M.scss";
function Text_Pretendard_16M(props) {
    const { className, ...rest } = props;
    return <Text className={className + " Text_Pretendard_16M"} {...rest}/>;
}
export default Text_Pretendard_16M;
