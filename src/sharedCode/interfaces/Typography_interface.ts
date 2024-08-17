export default interface TypographyInterface {
  /** set font-size */
  fontSize?: "16" | "18" | "22" | "24" | "28" | "35" | "43" | string;
  /** set font-weight */
  fontWeight?: "400" | "500" | "600" | "700" | string;
  /** text align - if you use rowLimit props, textAlign will not work. instead of textAlign use FlexInterface props */
  textAlign?: "left" | "center" | "right" | string;
  /** limit number of rows. cancel rowLimit by passing 0 */
  rowLimit?: "0" | "1" | "2" | "3" | "4" | string;
  // TODO: add prop to limit number of character
  /** add ellipsis (...) to shortened texts */
  showEllipsis?: boolean;
}
