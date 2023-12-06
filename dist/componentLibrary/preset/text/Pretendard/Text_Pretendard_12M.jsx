import Text from "../../../componentLibrary/components/Text.Library";
import "./Text_Pretendard_12M.scss";
function Text_Pretendard_12M(props) {
    const { className, ...rest } = props;
    return <Text className={className + " Text_Pretendard_12M"} {...rest}/>;
}
export default Text_Pretendard_12M;
