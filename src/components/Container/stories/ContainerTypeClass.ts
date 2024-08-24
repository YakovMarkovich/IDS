import {
  BorderTypeClass,
  ColorTypeClass,
  GlobalTypeClass,
  SpaceTypeClass,
  EventsTypeClass,
  FlexTypeClass,
  WrapperTypeClass,
  FixedSizeTypeClass,
} from "./../../../sharedCode/storybook/typeClasses";

export default class ContainerTypeClass {
    constructor() {
        Object.assign(this, new SpaceTypeClass());
        Object.assign(this, new GlobalTypeClass());
        Object.assign(this, new ColorTypeClass());
        Object.assign(this, new BorderTypeClass());
        Object.assign(this, new EventsTypeClass());
        Object.assign(this, new FlexTypeClass());
        Object.assign(this, new WrapperTypeClass());
        Object.assign(this, new FixedSizeTypeClass());
    }
}