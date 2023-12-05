export declare const enum TextFontStyle {
    Normal = "normal",
    Italic = "italic",
    Oblique = "oblique"
}
export declare const enum TextDecorationStyle {
    None = "none",
    Underline = "underline",
    Overline = "overline",
    Line_Through = "line-through"
}
export type FontFamily = string;
export type FontWeight = number;
export type FontSize = string;
export type LetterSpacing = string;
export type LineHeight = string;
export type Color = string;
export type FontStyle = TextFontStyle;
export type TextDecoration = TextDecorationStyle;
export type TextStyle = {
    fontFamily: FontFamily;
    fontWeight: FontWeight;
    fontSize: FontSize;
    lineHeight: LineHeight;
    letterSpacing: LetterSpacing;
    color?: Color;
    fontStyle: FontStyle;
    textDecoration: TextDecoration;
};
export type TextOptionalStyle = {
    fontWeight?: FontWeight;
    fontSize?: FontSize;
    lineHeight?: LineHeight;
    letterSpacing?: LetterSpacing;
    color?: Color;
    fontStyle?: FontStyle;
    textDecoration?: TextDecoration;
};
export type TextStateStyles = {
    enabled: TextStyle;
    hover?: TextOptionalStyle;
    active?: TextOptionalStyle;
};
