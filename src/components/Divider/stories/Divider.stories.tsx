import { ComponentMeta, Story } from "@storybook/react";
import React from "react";
import { Container, ImagineProvider, Divider, Text } from "../../../index";
import { omitItems } from "../interface/Divider_interface";
import DividerTypeClass from "./DividerTypeClass";
import {
  getKeysOfType,
  getStoriesArgsTypes,
} from "../../../sharedCode/storybook/helpers";

const keysOfType = getKeysOfType(DividerTypeClass, omitItems);
const argTypes = getStoriesArgsTypes(keysOfType);

export default {
  title: "Atoms/Divider",
  component: Divider,
  parameters: {
    controls: {
      expanded: false,
    },
  },
  argsTypes: {
    ...argTypes,
    /* Component Props */
    type: {
      control: "select",
      options: ["Horizontal", "vertical"],
      table: {
        category: "Component props",
      },
    },
    thickness: {
      control: "select",
      options: ["1", "2", "3", "4", "5"],
      table: {
        category: "Component props",
      },
    },
    align: {
      control: "select",
      options: ["right", "center", "left"],
      table: {
        category: "Component props",
      },
    },
  },
} as ComponentMeta<typeof Divider>;

export const Default: Story<any> = (args) => {
  return (
    <ImagineProvider
      id={"page-default"}
      testId={"page-default"}
      height={"20rem"}
    >
      <Container
        flexDirection={"col"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text text={"טקסט מעל קו המפריד"} />
        <Divider />
        <Text text={"טקסט מתחת קו המפריד"} />
      </Container>
    </ImagineProvider>
  );
};

export const Margin50: Story<any> = (args) => {
  return (
    <ImagineProvider
      id={"page-default"}
      testId={"page-default"}
      height={"20rem"}
    >
      <Container
        flexDirection={"col"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text text={"טקסט מעל קו המפריד"} />
        <Divider marginTop={"50"} marginBottom={"50"} />
        <Text text={"טקסט מתחת קו המפריד"} />
      </Container>
    </ImagineProvider>
  );
};

export const CustomColor: Story<any> = (args) => {
  return (
    <ImagineProvider
      id={"page-default"}
      testId={"page-default"}
      height={"20rem"}
    >
      <Container
        flexDirection={"col"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text text={"טקסט מעל קו המפריד"} />
        <Divider
          marginTop={"50"}
          marginBottom={"50"}
          background={"secondary-600"}
        />
        <Text text={"טקסט מתחת קו המפריד"} />
      </Container>
    </ImagineProvider>
  );
};

export const CustomWidthAndColor: Story<any> = (args) => {
  return (
    <ImagineProvider
      id={"page-default"}
      testId={"page-default"}
      height={"20rem"}
    >
      <Container
        flexDirection={"col"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text text={"טקסט מעל קו המפריד"} />
        <Divider
          marginTop={"50"}
          marginBottom={"50"}
          background={"secondary-600"}
          width={"50"}
        />
        <Text text={"טקסט מתחת קו המפריד"} />
      </Container>
    </ImagineProvider>
  );
};

export const CustomThickness: Story<any> = (args) => {
  return (
    <ImagineProvider
      id={"page-default"}
      testId={"page-default"}
      height={"30rem"}
    >
      <Container
        flexDirection={"col"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text text={"עובי 1"} />
        <Divider marginTop={"30"} marginBottom={"30"} thickness={"1"} />
        <Text text={"עובי 2"} />
        <Divider marginTop={"30"} marginBottom={"30"} thickness={"2"} />
        <Text text={"עובי 3"} />
        <Divider marginTop={"30"} marginBottom={"30"} thickness={"3"} />
        <Text text={"עובי 4"} />
        <Divider marginTop={"30"} marginBottom={"30"} thickness={"4"} />
        <Text text={"עובי 5"} />
        <Divider marginTop={"30"} marginBottom={"30"} thickness={"5"} />
      </Container>
    </ImagineProvider>
  );
};

export const AlignRight: Story<any> = (args) => {
  return (
    <ImagineProvider
      id={"page-default"}
      testId={"page-default"}
      height={"10rem"}
    >
      <Container
        flexDirection={"col"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text text={"טקסט מעל קו המפריד"} />
        <Divider
          marginTop={"30"}
          marginBottom={"30"}
          background={"secondary-600"}
          align={"right"}
          width={"50"}
        />
        <Text text={"טקסט מתחת קו המפריד"} />
      </Container>
    </ImagineProvider>
  );
};

export const AlignLeft: Story<any> = (args) => {
  return (
    <ImagineProvider
      id={"page-default"}
      testId={"page-default"}
      height={"10rem"}
    >
      <Container
        flexDirection={"col"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text text={"טקסט מעל קו המפריד"} />
        <Divider
          marginTop={"30"}
          marginBottom={"30"}
          background={"secondary-600"}
          align={"left"}
          width={"50"}
        />
        <Text text={"טקסט מתחת קו המפריד"} />
      </Container>
    </ImagineProvider>
  );
};

export const Vertical: Story<any> = (args) => {
  return (
    <ImagineProvider
      id={"page-default"}
      testId={"page-default"}
      height={"10rem"}
    >
      <Container
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text text={"טקסט בצד ימין"} />
        <Divider
          marginRight={"30"}
          marginLeft={"30"}
          background={"secondary-600"}
          type={"vertical"}
        />
        <Text text={"טקסט מצד שמאל"} />
      </Container>
    </ImagineProvider>
  );
};

export const VerticalThickness: Story<any> = (args) => {
  return (
    <ImagineProvider
      id={"page-default"}
      testId={"page-default"}
      height={"10rem"}
    >
      <Container
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text text={"טקסט בצד ימין"} />
        <Divider
          marginLeft={"30"}
          marginRight={"30"}
          background={"secondary-600"}
          type={"vertical"}
          thickness={"1"}
        />
        <Divider
          marginLeft={"30"}
          marginRight={"30"}
          background={"secondary-600"}
          type={"vertical"}
          thickness={"2"}
        />
        <Divider
          marginLeft={"30"}
          marginRight={"30"}
          background={"secondary-600"}
          type={"vertical"}
          thickness={"3"}
        />
        <Divider
          marginLeft={"30"}
          marginRight={"30"}
          background={"secondary-600"}
          type={"vertical"}
          thickness={"4"}
        />
        <Divider
          marginLeft={"30"}
          marginRight={"30"}
          background={"secondary-600"}
          type={"vertical"}
          thickness={"5"}
        />
        <Text text={"טקסט מצד שמאל"} />
      </Container>
    </ImagineProvider>
  );
};

export const ContainerDivider: Story<any> = (args) => {
  return (
    <ImagineProvider
      id={"page-default"}
      testId={"page-default"}
      height={"20rem"}
    >
      <Container
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Container
          flexDirection={"col"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"40"}
          background={"primary-150"}
          padding={"50"}
        >
          <Text text={"טקסט בצד ימין"} />
          <Text text={"טקסט מצד שמאל"} />
        </Container>
        <Divider
          marginLeft={"30"}
          marginRight={"30"}
          marginTop={"20"}
          marginBottom={"30"}
          background={"secondary-600"}
          type={"vertical"}
          thickness={"1"}
        />
        <Container
          flexDirection={"col"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"40"}
          background={"primary-150"}
          padding={"50"}
        >
          <Text text={"טקסט בצד ימין"} />
          <Text text={"טקסט מצד שמאל"} />
        </Container>
      </Container>
    </ImagineProvider>
  );
};

export const mediaProps: Story<any> = (args) => {
    return (
      <ImagineProvider
        id={"page-default"}
        testId={"page-default"}
        height={"20rem"}
      >
        <Container
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text text={"טקסט מעל קו המפריד"} />
          <Divider
            thickness={'1'} md={{paddingTop: '70', paddingBottom: '70'}} sm={{paddingTop: '30', paddingBottom: '30'}}
            xs={{paddingTop: '30', paddingBottom: '30'}}
          />
          <Text text={"טקסט מתחת קו המפריד"} />
        </Container>
      </ImagineProvider>
    );
  };
