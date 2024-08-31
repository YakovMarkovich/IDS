import ColorInterface from "../../../sharedCode/interfaces/Color_interface";
import EventsInterface from "../../../sharedCode/interfaces/Events_interface";
import FlexInterface from "../../../sharedCode/interfaces/Flex_interface";
import GlobalInterface from "../../../sharedCode/interfaces/Global_interface";
import PositionInterface from "../../../sharedCode/interfaces/Position_interface";
import SpaceInterface from "../../../sharedCode/interfaces/Space_interface";
import TypographyInterface from "../../../sharedCode/interfaces/Typography_interface";

interface TitleInterface extends EventsInterface, SpaceInterface, ColorInterface, GlobalInterface, TypographyInterface, PositionInterface, FlexInterface {
    /** free plain text */
    text?: string;
    /** select tag */
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | string;
    /** aria level */
    level?: '1' | '2' | '3' | '4' | '5' | '6' | string;
}

export const omitItems:string[] = ['gap', 'gapCol', 'gapRow'];

type OmitProps = { [K in keyof TitleInterface]: K extends typeof omitItems[number] ? never : K };

// @ts-ignore
type TitleType = Omit<TitleInterface, OmitProps[keyof OmitProps]> 

export default TitleType;