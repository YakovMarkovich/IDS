export default interface flexInterface {
  /** set Flex direction (row,col) */
  flexDirection: "col" | "row" | "row-reverse" | string;
  /** set justify content */
  justifyContent:
    | "start"
    | "end"
    | "center"
    | "between"
    | "evenly"
    | "stretch"
    | "around"
    | string;
  /** set Align items */
  alignItems: "start" | "end" | "center" | "baseline" | "stretch" | string;
}
