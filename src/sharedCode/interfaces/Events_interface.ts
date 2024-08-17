export default interface eventsInterface {
  /** onClick event */
  onClick?: (e: any) => void;
  /** onFocus event */
  onFocus?: (e: any) => void;
  /** onBlur event */
  onBlur?: (e: any) => void;
  /** onKeyDown event */
  onKeyDown?: (e: any) => void;
  /** onKeyUp event */
  onKeyUp?: (e: any) => void;
  /** onChange event */
  onChange?: (e: any) => void;
}
