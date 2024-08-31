import { ComponentMeta, Story } from "@storybook/react";
import Text from "../Text";
import ImagineProvider from "../../ImagineProvider/ImagineProvider";
import * as React from "react";
import { Container } from "../../../index";
import { omitItems } from "../interface/Text_interface";
import TextTypeClass from "./TextTypeClass";
import {
  getKeysOfType,
  getStoriesArgsTypes,
} from "../../../sharedCode/storybook/helpers";

const keysOfType = getKeysOfType(TextTypeClass, omitItems);
const updatedArgsObj = getStoriesArgsTypes(keysOfType);

export default {
  title: "Atoms/Text",
  component: Text,
  parameters: {
    controls: {
      expanded: false,
    },
  },
  argsTypes: {
    ...updatedArgsObj,
    /* Component Props */
    text: {
      control: "text",
      table: {
        category: "Component props",
      },
    },
    type: {
      control: "select",
      options: ["p", "span", "plaintext"],
      table: {
        category: "Component props",
      },
    },
  },
} as ComponentMeta<typeof Text>;

export const Default: Story<any> = (args) => {
  return (
    <ImagineProvider id={"ImagineProvider-default"}>
      <Text id={"text-default"} text={"default (span)"} {...args} />
    </ImagineProvider>
  );
};

export const Paragraph: Story<any> = (args) => {
  return (
    <ImagineProvider
      id={"ImagineProvider-paragraph"}
      height="50px"
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Text id={"text-paragraph"} text={"Paragraph"} type={"p"} />
    </ImagineProvider>
  );
};

export const PlainText: Story<any> = () => {
  return (
    <ImagineProvider
      id={"ImagineProvider-plaintext"}
      height={"50px"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Text text={"plain text"} type={"plaintext"} />
    </ImagineProvider>
  );
};

export const BoldText: Story<any> = () => {
  return (
    <ImagineProvider
      id={"ImagineProvider-BoldText"}
      height={"50px"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Text
        id={"text-BoldText"}
        text={"Bolded text"}
        type={"p"}
        fontWeight={"600"}
      />
    </ImagineProvider>
  );
};

export const WithRowLimit: Story<any> = () => {
  return (
    <ImagineProvider
      id={"ImagineProvider-WithRowLimit"}
      height={"150px"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Container padding={"15"} width={"25"}>
        <Text
          id={"text-WithRowLimit"}
          rowLimit={"2"}
          text={"טקסט ארוך מאוד לצורך בדיקה של פרופ חדש שמגביל את מספר שורות"}
        />
      </Container>
    </ImagineProvider>
  );
};

export const WithEllipsis: Story<any> = () => {
  return (
    <ImagineProvider
      id={"ImagineProvider-WithEllipsis"}
      height={"150px"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Container padding={"15"} width={"20"}>
        <Text
          id={"text-WithEllipsis"}
          showEllipsis={true}
          text={"טקסט ארוך בתוך רוחב מוגבל לבדיקה קיצור טקסט והוספת 3 נקודות"}
        />
      </Container>
    </ImagineProvider>
  );
};

export const Styled: Story<any> = () => {
  return (
    <ImagineProvider
      id={"ImagineProvider-styled"}
      height={"50px"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Text
        id={"text-styled"}
        text={"text with style props"}
        padding={"5"}
        border={"100"}
        color={"primary-500"}
        shadow={"100"}
      />
    </ImagineProvider>
  );
};

export const Absolute: Story<any> = () => {
  return (
    <ImagineProvider
      id={"ImagineProvider-styled"}
      height={"350px"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {" "}
      <Container
        border={"100"}
        background={"primary-150"}
        width={"50"}
        padding={"70"}
        marginTop={"70"}
      >
        <Text text={'טקסט השני הוא צף בתוך ה-container ומוגבל לו bottom של -100'}/>
        <Text
          id={"text-styled"}
          text={"text with position props"}
          padding={"5"}
          border={"100"}
          color={"primary-500"}
          shadow={"100"}
          position={'absolute'}
          bottom={"-50px"}
          left={"-100px"}
        />
      </Container>
    </ImagineProvider>
  );
};
