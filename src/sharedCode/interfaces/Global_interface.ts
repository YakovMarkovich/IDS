import SpaceInterface from "./Space_interface";
import TypographyInterface from "./Typography_interface";
import WrapperInterface from "./wrapper_interface";

type mediaCssTypes = SpaceInterface & TypographyInterface & WrapperInterface;

export default interface globalInterface {
  /** set ID for your component */
  id?: string;
  /** key of component */
  keyId?: string;
  /** set Name for your component */
  name?: string;
  /** set direction */
  direction: "ltr" | "rtl" | string;
  /** Custom class names */
  className?: string;
  /** Add test ID only for JEST */
  testId?: string;
  /* @hidden
  /* you can set default props of children
  */
  propsFromParent?: any;
  /** Add additional attributes */
  attributes?: any;
  /* @hidden
  /* detect who was called it
  */
  parents?: string | null;
  /**
   @hidden
   add Special inline Css Style
   */
  style?: object;
  /* @hidden
  add variant as className
  */

  variant?: string;
  //create global props for adding classNames by media query
  xs?: { [K in keyof mediaCssTypes]: string };
  sm?: { [K in keyof mediaCssTypes]: string };
  md?: { [K in keyof mediaCssTypes]: string };
  lg?: { [K in keyof mediaCssTypes]: string };
  xl?: { [K in keyof mediaCssTypes]: string };
  xxl?: { [K in keyof mediaCssTypes]: string };

  /** ids to filter component by */
  filterValues?: string[];
}
