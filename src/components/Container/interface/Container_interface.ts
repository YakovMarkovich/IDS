import { ReactNode } from "react";
import WrapperInterface from "../../../sharedCode/interfaces/wrapper_interface";

export default interface ContainerInterface extends WrapperInterface {
    /** React Node JSX */
    children?: ReactNode;
    // scrollInMobile?: boolean;
    scrollByMedia?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    /** inner shadow placement */
    innerShadow?: 'right' | 'left' | 'inline';
}