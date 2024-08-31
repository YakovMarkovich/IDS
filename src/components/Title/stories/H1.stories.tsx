import { ComponentMeta, Story } from "@storybook/react";
import H1 from "../H1";
import ImagineProvider from "../../ImagineProvider/ImagineProvider";
import * as React from "react";
import { Container } from "../../../index";
import { omitItems } from "../interface/Title_interface";
import TitleTypeClass from "./TitleTypeClass";
import {
  getKeysOfType,
  getStoriesArgsTypes,
} from "../../../sharedCode/storybook/helpers";

const keysOfType = getKeysOfType(TitleTypeClass, omitItems);
const argTypes = getStoriesArgsTypes(keysOfType);

export default {
  title: "Atoms/Titles/H1",
  component: H1,
  parameters: {
    controls: {
      expanded: false,
    },
  },
  argsTypes: {
    ...argTypes,
    /* Component Props */
    text: {
      control: "text",
      table: {
        category: "Component props",
      },
    },
    type: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5"],
      table: {
        category: "Component props",
      },
    },
    level: {
      control: "select",
      options: ["1", "2", "3", "4", "5"],
      table: {
        category: "Component props",
      },
    },
  },
} as ComponentMeta<typeof H1>;

export const Default: Story<any> = (args) => {
  return (
    <ImagineProvider id={"ImagineProvider-default"} height={"150px"}>
      <H1 id={"h1-default"} text={"ביטוח נסיעות לחול"} {...args} />
    </ImagineProvider>
  );
};

export const Center: Story<any> = (args) => {
  return (
    <ImagineProvider id={"ImagineProvider-center"} height={"150px"}>
      <H1 id={"h1-center"} text={"ביטוח נסיעות לחול"} textAlign="center" />
    </ImagineProvider>
  );
};

export const Left: Story<any> = (args) => {
  return (
    <ImagineProvider id={"ImagineProvider-center"} height={"150px"}>
      <H1 id={"h1-left"} text={"ביטוח נסיעות לחול"} textAlign="left" />
    </ImagineProvider>
  );
};

export const Bold: Story<any> = (args) => {
  return (
    <ImagineProvider id={"ImagineProvider-bold"} height={"150px"}>
      <H1 id={"h1-bold"} text={"ביטוח נסיעות לחול"} fontWeight="700" />
    </ImagineProvider>
  );
};

export const Level: Story<any> = (args) => {
  return (
    <ImagineProvider id={"ImagineProvider-level"} height={"150px"}>
      <H1 id={"h1-level"} text={"ביטוח נסיעות לחול"} level={"3"} />
    </ImagineProvider>
  );
};

export const Color: Story<any> = (args) => {
  return (
    <ImagineProvider id={"ImagineProvider-color"} height={"150px"}>
      <H1 id={"h1-color"} text={"ביטוח נסיעות לחול"} color={"primary-500"} />
    </ImagineProvider>
  );
};

export const BgColor: Story<any> = (args) => {
  return (
    <ImagineProvider id={"ImagineProvider-bg-color"} height={"150px"}>
      <H1
        id={"h1-bg-color"}
        text={"ביטוח נסיעות לחול"}
        background={"primary-150"}
      />
    </ImagineProvider>
  );
};


export const LongText: Story<any> = (args) => {
    return (
      <ImagineProvider id={"ImagineProvider-long-text"} height={"200px"}>
        <H1
          id={"h1-long-text"}
          text={'כותרת היא כיתוב המצוי בראש יצירה כתובה ולרוב מציג את הנושא המרכזי בו יעסוק הטקסטץ במקרים רביםת למשל כאשר מדובר על ספר או שירת הכותרת משתמשת גם כשם היצירהץ כותרת של ספר תופיע בדרך כל גם על עטיפת הספר ועל עמוד השערץ לפני השימוש בכותרות נהיה נפוץ, קטעי טקסט היו מזוהים על ידי האינציפיט'}
        />
      </ImagineProvider>
    );
  };
  
