import EventsInterface from "../../../sharedCode/interfaces/Events_interface";
import BorderInterface from "../../../sharedCode/interfaces/Border_interface";
import SpaceInterface from "../../../sharedCode/interfaces/Space_interface";
import ColorInterface from "../../../sharedCode/interfaces/Color_interface";
import GlobalInterface from "../../../sharedCode/interfaces/Global_interface";
import PositionInterface from "../../../sharedCode/interfaces/Position_interface";
import FlexInterface from "../../../sharedCode/interfaces/Flex_interface";

interface ImageInterface extends EventsInterface, BorderInterface, SpaceInterface, ColorInterface, GlobalInterface, PositionInterface, FlexInterface {
    /** image url */
    src?: string | undefined;
    /** image alt */
    alt?: string;
    /** if nested=true, max width changed by break points. */
    nested?: boolean;
    /** max width of image if Nested=true */
    size?: 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | string;
    /** set width of image */
    fixedWidth?: string;
    /** Cancel max-width of image */
    noMaxWidth?: boolean;
    /** set width of wrapper div */
    wrapperWidth?: string;
    /** set height of wrapper div */
    wrapperHeight?: string;
    /** set background image (no Gradient) */
    backgroundImage?: string;
    /** set focal point -center, top, bottom, right, left */
    focalPoint?: 'center-center' | 'top-center' | 'bottom-center' | 'right-center' | 'left-center' | 'left-top' | 'left-bottom' | 'center-left' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | string;

}

export const omitItems: string[] = ['gap', 'gapCol', 'gapRow', 'color', 'customStyles'];

type OmitProps = {[K in keyof ImageInterface]: K extends typeof omitItems[number] ? never : K};
//@ts-ignore
type ImageType = Omit<ImageInterface, OmitProps[keyof OmitProps]>;

export default ImageType;
