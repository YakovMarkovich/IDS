import {
    GlobalTypeClass,
    EventsTypeClass,
    SpaceTypeClass,
    TypographyTypeClass,
    PositionTypeClass,
  } from "./../../../sharedCode/storybook/typeClasses";
  
  export default class RichTextTypeClass {
      constructor() {
          Object.assign(this, new GlobalTypeClass());
          Object.assign(this, new EventsTypeClass());
          Object.assign(this, new SpaceTypeClass());
          Object.assign(this, new TypographyTypeClass());
          Object.assign(this, new PositionTypeClass());
      }
  }
  