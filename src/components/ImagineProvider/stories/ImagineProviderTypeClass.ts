import {
  ColorTypeClass,
  GlobalTypeClass,
  SpaceTypeClass,
  EventsTypeClass,
  BorderTypeClass,
  FlexTypeClass,
} from "./../../../sharedCode/storybook/typeClasses";

export default class ImagineProviderTypeClass {
  constructor() {
    Object.assign(this, new SpaceTypeClass());
    Object.assign(this, new GlobalTypeClass());
    Object.assign(this, new ColorTypeClass());
    Object.assign(this, new EventsTypeClass());
    Object.assign(this, new BorderTypeClass());
    Object.assign(this, new FlexTypeClass());
  }
}
