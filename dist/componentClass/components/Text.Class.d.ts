import { HTMLAttributes, RefObject } from "react";
import "../styles/Text.Class.scss";
export interface TextClassProps extends HTMLAttributes<HTMLSpanElement> {
    textRef?: RefObject<HTMLSpanElement>;
    children: string;
    isUseFocus: boolean;
}
declare function Text_Class(props: TextClassProps): import("react").JSX.Element;
export default Text_Class;
