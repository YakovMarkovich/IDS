export default interface windowEventsInterface {
  /** onResize event */
  onResize?: (e: any) => void;
  /** onBeforeunload event */
  onBeforeunload?: (e: any) => void;
  /** onLoad event */
  onLoad?: (e: any) => void;
  /** onUnload event */
  onUnload?: (e: any) => void;
  /** onError event */
  onError?: (e: any) => void;
  /** onOnline event */
  onOnline?: (e: any) => void;
  /** onOffline event */
  onOffline?: (e: any) => void;
}