import Text from "../../../componentLibrary/components/Text.Library";
import "./Text_Pretendard_10B.scss";
function Text_Pretendard_10B(props) {
    const { className, ...rest } = props;
    return <Text className={className + " Text_Pretendard_10B"} {...rest}/>;
}
export default Text_Pretendard_10B;
