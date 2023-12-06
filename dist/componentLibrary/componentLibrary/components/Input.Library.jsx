import Input_Class from "../../componentClass/components/Input.Class";
function Input(props) {
    const { inputType, paddingOption, className, ...rest } = props;
    return <Input_Class className={`${className}${` input-type_${inputType}${paddingOption ? ` input-padding_${paddingOption}` : ""}`}`} {...rest}/>;
}
export default Input;
