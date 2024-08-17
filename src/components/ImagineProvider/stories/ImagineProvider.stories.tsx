import { ComponentMeta, Story } from "@storybook/react";
import { ImagineProvider } from "../../../index";
import { windowEventsArgsForStoryBook } from "../../../sharedCode/helpers/storiesArgs";
import { omitItems } from "../interface/ImagineProvider_interface";
import ImagineProviderTypeClass from "./ImagineProviderTypeClass";
import {
  getKeysOfType,
  getStoriesArgsTypes,
} from "../../../sharedCode/storybook/helpers";
import React from "react";

const keysOfType = getKeysOfType(ImagineProviderTypeClass, omitItems);
const argsTypes = getStoriesArgsTypes(keysOfType);

export default {
  title: "Wrappers/1- ImagineProvider",
  component: ImagineProvider,
  argTypes: {
    ...argsTypes,
    ...windowEventsArgsForStoryBook,
    /* Component Props */
    children: {
      control: "object",
      table: {
        category: "Component props",
      },
    },
    height: {
      control: "string",
      table: {
        category: "Component props",
      },
    },
    width: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof ImagineProvider>;

export const Default: Story<any> = (args) => {
  return (
    <ImagineProvider id={"ImagineProvider-default"} {...args}>
      test page
    </ImagineProvider>
  );
};

export const CustomHeight: Story<any> = (args) => {
  return (
    <ImagineProvider
      id={"ImagineProvider-CustomHeight"}
      height={"200px"}
      background={"primary-100"}
    >
      test page
    </ImagineProvider>
  );
};

export const withDesignProps: Story<any> = (args) => {
  return (
    <ImagineProvider
      id={"ImagineProvider-withDesignProps"}
      height={"200px"}
      background={"primary-500"}
      color={"primary-50"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      test page
    </ImagineProvider>
  );
};
