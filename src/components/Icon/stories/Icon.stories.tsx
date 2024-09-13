import { ComponentMeta, Story } from "@storybook/react";
import * as React from "react";
import { ImagineProvider, Icon } from "./../../../index";
import { omitItems } from "../interface/Icon_interface";
import IconTypeClass from "./IconTypeClass";
import {
  getKeysOfType,
  getStoriesArgsTypes,
} from "../../../sharedCode/storybook/helpers";
import H2 from "../../Title/H2";

const keysOfType = getKeysOfType(IconTypeClass, omitItems);
const argsTypes = getStoriesArgsTypes(keysOfType);

export default {
  title: "Atoms/Icon",
  component: Icon,
  parameters: {
    controls: {
      expanded: false,
    },
  },
  argTypes: {
    ...argsTypes,
    /* Data props */
    icon: {
      table: {
        category: "Data props",
      },
    },
    size: {
      control: "select",
      options: ["L", "M", "S", "large", "medium", "small"],
      table: {
        category: "Data props",
      },
    },
    disabled: {
      control: "boolean",
      table: {
        category: "Data props",
      },
    },
  },
} as ComponentMeta<typeof Icon>;

export const Default: Story<any> = (args) => {
  return (
    <ImagineProvider id={"ImagineProvider-default"} height={"300px"}>
      <Icon
        name={"icon-print"}
        icon={"icon-print"}
        id={"icon-default"}
        testId={"default"}
        {...args}
      />
    </ImagineProvider>
  );
};

export const Small: Story<any> = (args) => {
  return (
    <ImagineProvider id={"ImagineProvider-small"} height={"300px"}>
      <Icon
        name={"icon-print"}
        icon={"icon-print"}
        size={"small"}
        id={"icon-small"}
        testId={"small"}
      />
    </ImagineProvider>
  );
};

export const Medium: Story<any> = (args) => {
  return (
    <ImagineProvider id={"ImagineProvider-medium"} height={"300px"}>
      <Icon
        name={"icon-print"}
        icon={"icon-print"}
        size={"medium"}
        id={"icon-medium"}
        testId={"medium"}
      />
    </ImagineProvider>
  );
};

export const Large: Story<any> = (args) => {
  return (
    <ImagineProvider id={"ImagineProvider-large"} height={"300px"}>
      <Icon
        name={"icon-print"}
        icon={"icon-print"}
        size={"large"}
        id={"icon-large"}
        testId={"large"}
      />
    </ImagineProvider>
  );
};

export const AccessibleLabel: Story<any> = (args) => {
  return (
    <ImagineProvider id={"ImagineProvider-accessibleLabel"} height={"300px"}>
      <Icon
        name={"icon-print"}
        icon={"icon-print"}
        size={'medium'}
        id={"icon-accessibleLabel"}
        testId={"accessibleLabel"}
        attributes={{'aria-label': 'Provide description for screen reader',
            'role': 'img'
        }}
      />
    </ImagineProvider>
  );
};


export const ClickEvent: Story<any> = (args) => {
    return (
      <ImagineProvider id={"ImagineProvider-default"} height={"300px"}>
        <Icon
          name={"icon-print"}
          icon={"icon-print"}
          id={"icon-default"}
          testId={"default"}
          onClick={() => alert('click event')}
        />
      </ImagineProvider>
    );
  };
