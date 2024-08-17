export default interface PositionInterface {
  /** add position to element */
  position?: "absolute" | "fixed" | "relative" | "sticky";
  /** Move element from the top */
  top?: string;
  /** Move element from the left */
  left?: string;
  /** Move element from the right */
  right?: string;
  /** Move element from the bottom top */
  bottom?: string;
  /** center element horizontally */
  centerX?: boolean;
  /** center element vertically */
  centerY?: boolean;
}
