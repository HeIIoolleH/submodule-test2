import { HTMLAttributes, RefObject } from "react";
import "../styles/Text.Class.scss";

export interface TextClassProps extends HTMLAttributes<HTMLSpanElement> {
    textRef?: RefObject<HTMLSpanElement>;
    children: string;
    isUseFocus: boolean;
}

function Text_Class(props: TextClassProps) {
    const { textRef, children, isUseFocus, className, ...rest } = props;

    return (
        <span ref={textRef} className={`EQBR_Text${className ? " " + className : ""}${isUseFocus ? " focus" : ""}`} {...rest}>
            {children}
        </span>
    );
}

export default Text_Class;
