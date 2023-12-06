import Text from "../../../componentLibrary/components/Text.Library";
import "./Text_Pretendard_50M.scss";
function Text_Pretendard_50M(props) {
    const { className, ...rest } = props;
    return <Text className={className + " Text_Pretendard_50M"} {...rest}/>;
}
export default Text_Pretendard_50M;
