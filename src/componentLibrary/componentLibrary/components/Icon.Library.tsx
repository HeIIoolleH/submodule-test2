import Icon_Class, { IconClassProps } from "../../componentClass/components/Icon.Class";

export interface IconProps extends IconClassProps {}

function Icon(props: IconProps) {
    return <Icon_Class {...props} />;
}

export default Icon;
