import { FunctionComponent, RefObject, SVGProps } from "react";
import "../style/Icon.Class.scss";

export interface IconClassProps extends SVGProps<SVGSVGElement> {
    Icon: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined }>;
    iconRef?: RefObject<SVGSVGElement>;
    isUseFocus: boolean;
}

function Icon_Class(props: IconClassProps) {
    const { Icon, className, isUseFocus, ...rest } = props;

    return <Icon className={`EQBR_Icon ${className}${isUseFocus ? " focus" : ""}`} {...rest} />;
}

export default Icon_Class;
