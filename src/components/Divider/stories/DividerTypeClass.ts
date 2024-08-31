import {
    ColorTypeClass,
    GlobalTypeClass,
    SpaceTypeClass,
    EventsTypeClass
  } from "./../../../sharedCode/storybook/typeClasses";
  
  export default class ContainerTypeClass {
      constructor() {
          Object.assign(this, new SpaceTypeClass());
          Object.assign(this, new GlobalTypeClass());
          Object.assign(this, new ColorTypeClass());
          Object.assign(this, new EventsTypeClass());
      }
  }