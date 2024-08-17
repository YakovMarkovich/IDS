import { ReactNode} from "react";
import FlexInterface from "../../../sharedCode/interfaces/Flex_interface";
import BorderInterface from "../../../sharedCode/interfaces/Border_interface";
import SpaceInterface from "../../../sharedCode/interfaces/Space_interface";
import ColorInterface from "../../../sharedCode/interfaces/Color_interface";
import GlobalInterface from "../../../sharedCode/interfaces/Global_interface";
import WindowEventsInterface from "../../../sharedCode/interfaces/WindowEvents_interface";

interface ImagineProviderInterface extends FlexInterface, BorderInterface, SpaceInterface, ColorInterface, GlobalInterface, WindowEventsInterface {
    /** React Node JSX */
    children?: ReactNode;
    /** Set height of page, default is 100%*/
    height?: string
}

export const omitItems:string[] = ['width'];

type OmitProps = { [K in keyof ImagineProviderInterface]: K extends typeof omitItems[number] ? never : K };

// @ts-ignore
type ImagineProviderType = Omit<ImagineProviderInterface, OmitProps[keyof OmitProps]> 

export default ImagineProviderType;

