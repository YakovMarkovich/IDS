import ColorInterface from "../../../sharedCode/interfaces/Color_interface";
import EventsInterface from "../../../sharedCode/interfaces/Events_interface";
import GlobalInterface from "../../../sharedCode/interfaces/Global_interface";
import SpaceInterface from "../../../sharedCode/interfaces/Space_interface";

interface DividerInterface extends EventsInterface, SpaceInterface, ColorInterface, GlobalInterface {
    type?: 'Horizontal' | 'vertical' | string;
    thickness?: '1' | '2' | '3' | '4' | '5' | string;
    align?: 'right' | 'center' | 'left' | string;
}

export const omitItems:string[] = ['gap', 'gapCol', 'gapRow', 'color', 'padding', 'paddingTop', 'paddingBottom', 'paddingRight', 'paddingLeft'];

type OmitProps = { [K in keyof DividerInterface]: K extends typeof omitItems[number] ? never : K };

// @ts-ignore
type DividerType = Omit<DividerInterface, OmitProps[keyof OmitProps]> 

export default DividerType;