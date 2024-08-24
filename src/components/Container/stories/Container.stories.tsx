import { ComponentMeta, Story } from "@storybook/react";
import React, { useRef, useState } from "react";
import { ImagineProvider, Container } from "../../../index";
import ContainerTypeClass from "./ContainerTypeClass";
import {
  getKeysOfType,
  getStoriesArgsTypes,
} from "../../../sharedCode/storybook/helpers";

const keysOfType = getKeysOfType(ContainerTypeClass, []);
const argsTypes = getStoriesArgsTypes(keysOfType);

export default {
  title: "Wrappers/3- Container",
  component: Container,
  argsTypes: {
    ...argsTypes,
    /* Component Props */
    children: {
      control: "object",
      table: {
        category: "Component props",
      },
    },
    scrollByMedia: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "xxl"],
      table: {
        category: "Component props",
      },
    },
  },
} as ComponentMeta<typeof Container>;

export const Default: Story<any> = (args) => {
  return (
    <ImagineProvider id={"imagineProvider-default"} alignItems="center">
      <Container
        alignItems="center"
        background={"gradients-700"}
        borderRadius="100"
        color="primary-50"
        flexDirection="col"
        width={"100"}
        gap="30"
        justifyContent="center"
        padding="50"
        shadow="200"
        {...args}
      >
        Container test without link and test
      </Container>
    </ImagineProvider>
  );
};

export const ContainerWithRef: Story<any> = (args) => {
  const myRef = useRef<any>();

  const clickHandler = () => {
    const childElement = myRef.current;
    childElement.innerHTML = Math.random();
  };

  return (
    <ImagineProvider
      id={"imagineProvider-with-ref"}
      height={"11.11111rem"}
      alignItems="center"
      justifyContent="center"
      margin="10"
    >
      <button
        onClick={clickHandler}
        style={{
          borderRadius: "18px",
          background: "#fff",
          padding: "7px",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
      >
        Click to change the text by using "ref" of "container"
      </button>

      <Container
        background={"gradients-100"}
        width={"fit-content"}
        shadow="100"
        padding={"50"}
        borderRadius={"100"}
        margin={"10"}
        gap={"5"}
        border={"100"}
        {...args}
        ref={(r: any) => {
          if (r) {
            myRef.current = r;
          }
        }}
      >
        Container
      </Container>
    </ImagineProvider>
  );
};

export const twoColumnsOf25And75: Story<any> = (args) => {
  return (
    <ImagineProvider
      id="imagineProvider-twoContainers"
      background={"primary-150"}
      height="15rem"
      justifyContent="center"
    >
      <Container
        width={"100"}
        justifyContent="between"
        marginTop={"15"}
        marginBottom={"15"}
        gapRow={"5"}
        gapCol={"25"}
        columns={"25-75"}
      >
        <Container
          background={"primary-50"}
          borderRadius={"0"}
          width={"100"}
          padding={"15"}
        >
          this is my container
        </Container>
        <Container
          background={"primary-50"}
          borderRadius={"0"}
          width={"100"}
          padding={"15"}
        >
          this is your container
        </Container>
        <Container
          background={"primary-50"}
          borderRadius={"0"}
          width={"100"}
          padding={"15"}
        >
          this is container
        </Container>
        <Container
          background={"primary-50"}
          borderRadius={"0"}
          width={"100"}
          padding={"15"}
        >
          this is container
        </Container>
      </Container>
    </ImagineProvider>
  );
};


export const twoColumnsOf75And25: Story<any> = (args) => {
  return (
    <ImagineProvider
      id="imagineProvider-twoContainers"
      background={"primary-150"}
      height="15rem"
      justifyContent="center"
    >
      <Container
        width={"100"}
        justifyContent="between"
        marginTop={"15"}
        marginBottom={"15"}
        gapRow={"5"}
        gapCol={"25"}
        columns={"75-25"}
      >
        <Container
          background={"primary-50"}
          borderRadius={"0"}
          width={"100"}
          padding={"15"}
        >
          this is my container
        </Container>
        <Container
          background={"primary-50"}
          borderRadius={"0"}
          width={"100"}
          padding={"15"}
        >
          this is your container
        </Container>
        <Container
          background={"primary-50"}
          borderRadius={"0"}
          width={"100"}
          padding={"15"}
        >
          this is container
        </Container>
        <Container
          background={"primary-50"}
          borderRadius={"0"}
          width={"100"}
          padding={"15"}
        >
          this is container
        </Container>
      </Container>
    </ImagineProvider>
  );
};