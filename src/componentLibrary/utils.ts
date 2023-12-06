import { CSSProperties } from "react";

const parseStyleLegacy = (stylePropertyList: any, state: string, parsedPadding: string) => {
    const parsedStateStyle = stylePropertyList.reduce((acc: any, styleProperty: any) => {
        const [key, value] = styleProperty;
        if (key === "padding") {
            return { ...acc, [`--${key}__${state}`]: parsedPadding };
        }
        if (typeof value === "object") {
            const parsedValue = parseStyleLegacy(Object.entries(value), state, parsedPadding);
            return { ...acc, ...parsedValue };
        }
        return { ...acc, [`--${key}__${state}`]: value };
    }, {});
    return parsedStateStyle;
};

export const parseStateStylesLegacy = (stateStyles: any, parsePadding?: Function, pattern?: string): CSSProperties => {
    const stateList = Object.keys(stateStyles);

    const parsedStateStyles = stateList.reduce((acc: any, state: string) => {
        const stateStyle = stateStyles[state];
        const stylePropertyList = Object.entries(stateStyle);
        const parsedPadding = parsePadding ? (pattern ? parsePadding(stateStyle.padding, pattern) : parsePadding(stateStyle.padding)) : stateStyle.padding;

        return { ...acc, ...parseStyleLegacy(stylePropertyList, state, parsedPadding!) };
    }, {});
    return parsedStateStyles;
};

export const parseStyle = (stylePropertyList: any, state: string) => {
    const parsedStateStyle = stylePropertyList.reduce((acc: any, styleProperty: any) => {
        const [key, value] = styleProperty;
        if (typeof value === "object") {
            const parsedValue = parseStyle(Object.entries(value), state);
            return { ...acc, ...parsedValue };
        }
        return { ...acc, [`--${key}__${state}`]: value };
    }, {});
    return parsedStateStyle;
};

export const parseStateStyles = (stateStyles: any): CSSProperties => {
    const stateList = Object.keys(stateStyles);

    const parsedStateStyles = stateList.reduce((acc: any, state: string) => {
        const stateStyle = stateStyles[state];
        const stylePropertyList = Object.entries(stateStyle);

        return { ...acc, ...parseStyle(stylePropertyList, state) };
    }, {});
    return parsedStateStyles;
};

export const parseStyle1 = (stateStyle: any) => {
    if (stateStyle === undefined) {
        return {};
    }
    const stylePropertyList = Object.entries(stateStyle);
    const parsedStateStyle: any = stylePropertyList.reduce((acc: any, styleProperty: any) => {
        const [key, value] = styleProperty;
        if (typeof value === "object") {
            const parsedValue = parseStyle1(value);
            return { ...acc, ...parsedValue };
        }
        return { ...acc, [`--${key}`]: value };
    }, {});
    return parsedStateStyle;
};

export const parseStateStyles1 = (stateStyles: any): CSSProperties => {
    const stateList = Object.keys(stateStyles);

    const parsedStateStyles = stateList.reduce((acc: any, state: string) => {
        const stateStyle = stateStyles[state];

        return { ...acc, ...parseStyle(stateStyle, state) };
    }, {});
    return parsedStateStyles;
};
