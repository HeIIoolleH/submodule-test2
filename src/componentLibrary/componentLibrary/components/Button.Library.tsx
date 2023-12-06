import { useEffect } from "react";
import Button_Class, { ButtonClassProps } from "../../componentClass/components/Button.Class";
import { ButtonPaddingPresetOptionType, ButtonPattern, ButtonPatternType, ButtonTypeType, ButtonWidthPresetOptionType } from "../types/Button.Library.type";

export interface ButtonProps extends ButtonClassProps {
    pattern: ButtonPatternType;
    buttonType: ButtonTypeType;
    widthOption?: ButtonWidthPresetOptionType;
    paddingOption?: ButtonPaddingPresetOptionType;
}

const useValidButtonStyle = (pattern: ButtonPatternType, children: any) => {
    useEffect(() => {
        if (children.length === 0) {
            throw new Error("Button must have one child.");
        }
        if (typeof children === "string") {
            throw new Error("Button must have one child component.");
        }
        let childrenArray = children;
        if (children.length === undefined) {
            childrenArray = [children];
        }
        if (childrenArray.length > 2 && childrenArray.find((child: any) => child.type.name === ("Icon" || "Text"))) {
            throw new Error("Button can use only one Icon or Text component.");
        }
        if (pattern === ButtonPattern.Icon && childrenArray.find((child: any) => child.type.name === "Text") && childrenArray.length > 1) {
            throw new Error("Button can use only one Icon component when pattern is Icon.");
        }
        if (pattern === ButtonPattern.Text && childrenArray.find((child: any) => child.type.name === "Icon") && childrenArray.length > 1) {
            throw new Error("Button can use only one Text component when pattern is Text.");
        }
        if (pattern === ButtonPattern.IconText && (childrenArray[0].type.name !== "Icon" || childrenArray[1].type.name !== "Text")) {
            throw new Error("Button can use Icon and Text component when pattern is IconText.");
        }
        if (pattern === ButtonPattern.TextIcon && (childrenArray[0].type.name !== "Text" || childrenArray[1].type.name !== "Icon")) {
            throw new Error("Button can use Text and Icon component when pattern is TextIcon.");
        }
    }, [pattern, children]);
};

function Button(props: ButtonProps) {
    const { isUseFocus, pattern, buttonType, paddingOption, className, children, ...rest } = props;
    useValidButtonStyle(pattern, children);
    return (
        <Button_Class
            className={`${className}${` btn-type_${buttonType}`}${` btn-pattern_${pattern}`}${paddingOption ? ` btn-padding_${paddingOption}` : ""}`}
            isUseFocus={isUseFocus}
            {...rest}
        >
            {children}
        </Button_Class>
    );
}

export default Button;
