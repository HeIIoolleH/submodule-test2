type IconSize = string;
type IconStroke = string;
type IconFill = "none" | string;
type IconBorder = "none" | string;
type IconStyle = {
    size: IconSize;
    stroke: IconStroke;
    fill: IconFill;
    border: IconBorder;
};
type IconOptionalStyle = {
    size?: IconSize;
    stroke?: IconStroke;
    fill?: IconFill;
    border?: IconBorder;
};
export type IconStateStyles = {
    enabled: IconStyle;
    hover?: IconOptionalStyle;
    active?: IconOptionalStyle;
};
export {};
