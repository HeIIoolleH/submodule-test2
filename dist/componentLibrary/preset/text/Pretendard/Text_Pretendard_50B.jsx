import Text from "../../../componentLibrary/components/Text.Library";
import "./Text_Pretendard_50B.scss";
function Text_Pretendard_50B(props) {
    const { className, ...rest } = props;
    return <Text className={className + " Text_Pretendard_50B"} {...rest}/>;
}
export default Text_Pretendard_50B;
