import EventsInterface from "../../../sharedCode/interfaces/Events_interface";
import BorderInterface from "../../../sharedCode/interfaces/Border_interface";
import SpaceInterface from "../../../sharedCode/interfaces/Space_interface";
import ColorInterface from "../../../sharedCode/interfaces/Color_interface";
import GlobalInterface from "../../../sharedCode/interfaces/Global_interface";
import PositionInterface from "../../../sharedCode/interfaces/Position_interface";

interface IconInterface extends EventsInterface, BorderInterface, SpaceInterface, ColorInterface, GlobalInterface, PositionInterface {
    icon?: string;
    size?: 'L' | 'M' | 'S' | 'large' | 'medium' | 'small' | string;
    disabled?: boolean;
}

export const omitItems: string[] = ['gap', 'gapCol', 'gapRow', 'width'];

type OmitProps = {[K in keyof IconInterface]: K extends typeof omitItems[number] ? never : K};
//@ts-ignore
type IconType = Omit<IconInterface, OmitProps[keyof OmitProps]>;

export default IconType;
