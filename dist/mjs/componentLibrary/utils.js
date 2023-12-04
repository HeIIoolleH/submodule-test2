const parseStyleLegacy = (stylePropertyList, state, parsedPadding) => {
    const parsedStateStyle = stylePropertyList.reduce((acc, styleProperty) => {
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
export const parseStateStylesLegacy = (stateStyles, parsePadding, pattern) => {
    const stateList = Object.keys(stateStyles);
    const parsedStateStyles = stateList.reduce((acc, state) => {
        const stateStyle = stateStyles[state];
        const stylePropertyList = Object.entries(stateStyle);
        const parsedPadding = parsePadding ? (pattern ? parsePadding(stateStyle.padding, pattern) : parsePadding(stateStyle.padding)) : stateStyle.padding;
        return { ...acc, ...parseStyleLegacy(stylePropertyList, state, parsedPadding) };
    }, {});
    return parsedStateStyles;
};
export const parseStyle = (stylePropertyList, state) => {
    const parsedStateStyle = stylePropertyList.reduce((acc, styleProperty) => {
        const [key, value] = styleProperty;
        if (typeof value === "object") {
            const parsedValue = parseStyle(Object.entries(value), state);
            return { ...acc, ...parsedValue };
        }
        return { ...acc, [`--${key}__${state}`]: value };
    }, {});
    return parsedStateStyle;
};
export const parseStateStyles = (stateStyles) => {
    const stateList = Object.keys(stateStyles);
    const parsedStateStyles = stateList.reduce((acc, state) => {
        const stateStyle = stateStyles[state];
        const stylePropertyList = Object.entries(stateStyle);
        return { ...acc, ...parseStyle(stylePropertyList, state) };
    }, {});
    return parsedStateStyles;
};
export const parseStyle1 = (stateStyle) => {
    if (stateStyle === undefined) {
        return {};
    }
    const stylePropertyList = Object.entries(stateStyle);
    const parsedStateStyle = stylePropertyList.reduce((acc, styleProperty) => {
        const [key, value] = styleProperty;
        if (typeof value === "object") {
            const parsedValue = parseStyle1(value);
            return { ...acc, ...parsedValue };
        }
        return { ...acc, [`--${key}`]: value };
    }, {});
    return parsedStateStyle;
};
export const parseStateStyles1 = (stateStyles) => {
    const stateList = Object.keys(stateStyles);
    const parsedStateStyles = stateList.reduce((acc, state) => {
        const stateStyle = stateStyles[state];
        return { ...acc, ...parseStyle(stateStyle, state) };
    }, {});
    return parsedStateStyles;
};
