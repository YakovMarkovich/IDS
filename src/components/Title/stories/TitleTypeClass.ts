import {
    GlobalTypeClass,
    EventsTypeClass,
    ColorTypeClass,
    SpaceTypeClass,
    TypographyTypeClass,
    PositionTypeClass,
    FlexTypeClass,
  } from "./../../../sharedCode/storybook/typeClasses";
  
  export default class TextTypeClass {
      constructor() {
          Object.assign(this, new GlobalTypeClass());
          Object.assign(this, new EventsTypeClass());
          Object.assign(this, new ColorTypeClass());
          Object.assign(this, new SpaceTypeClass());
          Object.assign(this, new TypographyTypeClass());
          Object.assign(this, new PositionTypeClass());
          Object.assign(this, new FlexTypeClass());
      }
  }
  