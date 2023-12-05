import { HTMLAttributes, RefObject } from "react";
import "../style/Text.Class.scss";
export interface TextClassProps extends HTMLAttributes<HTMLSpanElement> {
    textRef?: RefObject<HTMLSpanElement>;
    stateStyles: any;
    children: string;
}
declare function Text_Class(props: TextClassProps): import("react").JSX.Element;
export default Text_Class;
