import { FunctionComponent, RefObject, SVGProps } from "react";
import "../style/Icon.Class.scss";
export interface IconClassProps extends SVGProps<SVGSVGElement> {
    Icon: FunctionComponent<SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>;
    iconRef?: RefObject<SVGSVGElement>;
    isUseFocus: boolean;
}
declare function Icon_Class(props: IconClassProps): import("react").JSX.Element;
export default Icon_Class;
