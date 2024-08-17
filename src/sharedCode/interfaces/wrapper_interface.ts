import EventsInterface from "./Events_interface";
import FlexInterface from "./Flex_interface";
import BorderInterface from "./Border_interface";
import SpaceInterface from "./Space_interface";
import ColorInterface from "./Color_interface";
import GlobalInterface from "./Global_interface";
import FixedSizeInterface from "./FixedSize_interface";

export default interface WrapperInterface extends EventsInterface, FlexInterface, BorderInterface, SpaceInterface, ColorInterface, GlobalInterface, FixedSizeInterface{
    /** set layout columns */
    columns?: '1' | '2' | '75-25' | '25-75' | '60-40' | '40-60' | '70-30' | '30-70' | '3' | '4' | '5' | '6' | string;
    /** set max-width of component */
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'| '100' | string
    /** set min-width of component */
    minWidth?: string
} 