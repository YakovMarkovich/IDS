import EventsInterface from "../../../sharedCode/interfaces/Events_interface";
import GlobalInterface from "../../../sharedCode/interfaces/Global_interface";
import SpaceInterface from "../../../sharedCode/interfaces/Space_interface";
import PositionInterface from "../../../sharedCode/interfaces/Position_interface";
import TypographyInterface from "../../../sharedCode/interfaces/Typography_interface";

interface RichTextInterface
  extends EventsInterface,
    SpaceInterface,
    PositionInterface,
    GlobalInterface,
    TypographyInterface {
      
  strHTML: string | undefined;
}

export const omitItems: string[] = ["gap", "gapCol", "gapRow"];

type OmitProps = {
  [K in keyof RichTextInterface]: K extends typeof omitItems[number]
    ? never
    : K;
};

// @ts-ignore
type RichTextType = Omit<RichTextInterface, OmitProps[keyof OmitProps]>;

export default RichTextType;
