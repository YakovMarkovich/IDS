import SpaceInterface from "../interfaces/Space_interface";
import TypographyInterface from "../interfaces/Typography_interface";

type mediaCssTypes = SpaceInterface & TypographyInterface;

export class TypographyTypeClass {
  fontSize?: string;
  fontWeight?: string;
  textAlign?: string;
  rowLimit?: string;
  showEllipsis?: boolean;
}

export class BorderTypeClass {
  shadow?: string;
  border?: string;
  borderRadius?: string;
  borderColor?: string;
}

export class ColorTypeClass {
  color?: string;
  background?: string;
}

export class EventsTypeClass {
  onClick?: (e: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  onKeyDown?: (e: any) => void;
  onKeyUp?: (e: any) => void;
  onChange?: (e: any) => void;
}

export class SpaceTypeClass {
  width?: string;
  padding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingRight?: string;
  paddingLeft?: string;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginRight?: string;
  marginLeft?: string;
  marginCenter?: string;
  gap?: string;
  gapRow?: string;
  gapCol?: string;
}

export class GlobalTypeClass {
  id?: string;
  keyId?: string;
  name?: string;
  direction?: string;
  className?: string;
  testId?: string;
  attributes?: any;
  xs?: { [K in keyof mediaCssTypes] };
  sm?: { [K in keyof mediaCssTypes] };
  md?: { [K in keyof mediaCssTypes] };
  lg?: { [K in keyof mediaCssTypes] };
  xl?: { [K in keyof mediaCssTypes] };
  xxl?: { [K in keyof mediaCssTypes] };
  filterValues?: string[];
}

export class FlexTypeClass {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
}

export class PositionTypeClass {
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  centerX?: boolean;
  centerY?: boolean;
}

export class InputTypeClass {
  inputName?: string;
  innerAttributes?: { input?: any; label?: any; error?: any; helperText?: any };
}

export class WrapperTypeClass {
  columns?: string;
  maxWidth?: string;
  minWidth?: string;
}

export class FixedSizeTypeClass {
  fixedMinWidth?: string;
  fixedMaxWidth?: string;
  fixedWidth?: string;
  fixedMinHeight?: string;
  fixedMaxHeight?: string;
  fixedHeight?: string;
}
