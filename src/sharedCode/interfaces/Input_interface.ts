export default interface InputInterface {
  /** set input name */
  inputName?: string;
  /** set inner attributes to component */
  innerAttributes?: { input?: any; label?: any; error?: any; helperText?: any };
}
