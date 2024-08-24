import BorderInterface from "../../../sharedCode/interfaces/Border_interface";
import ColorInterface from "../../../sharedCode/interfaces/Color_interface";
import EventsInterface from "../../../sharedCode/interfaces/Events_interface";
import FlexInterface from "../../../sharedCode/interfaces/Flex_interface";
import GlobalInterface from "../../../sharedCode/interfaces/Global_interface";
import PositionInterface from "../../../sharedCode/interfaces/Position_interface";
import SpaceInterface from "../../../sharedCode/interfaces/Space_interface";
import TypographyInterface from "../../../sharedCode/interfaces/Typography_interface";

interface TextInterface extends EventsInterface, BorderInterface, SpaceInterface, ColorInterface, GlobalInterface, TypographyInterface, PositionInterface, FlexInterface {
    /** free plain text */
    text?: string;
    /** select tag */
    type?: 'p' | 'span' | 'plaintext' | string
}

export const omitItems:string[] = ['gap', 'gapCol', 'gapRow'];

type OmitProps = { [K in keyof TextInterface]: K extends typeof omitItems[number] ? never : K };

// @ts-ignore
type TextType = Omit<TextInterface, OmitProps[keyof OmitProps]> 

export default TextType;