import Text from "../../../componentLibrary/components/Text.Library";
import "./Text_Pretendard_16L.scss";
function Text_Pretendard_16L(props) {
    const { className, ...rest } = props;
    return <Text className={className + " Text_Pretendard_16L"} {...rest}/>;
}
export default Text_Pretendard_16L;
