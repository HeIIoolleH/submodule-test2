import Text from "../../../componentLibrary/components/Text.Library";
import "./Text_Pretendard_18L.scss";
function Text_Pretendard_18L(props) {
    const { className, ...rest } = props;
    return <Text className={className + " Text_Pretendard_18L"} {...rest}/>;
}
export default Text_Pretendard_18L;
