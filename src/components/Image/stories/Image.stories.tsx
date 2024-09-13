import { ComponentMeta, Story } from "@storybook/react";
import * as React from "react";
import { ImagineProvider, Image, Container } from "./../../../index";
import H3 from "../../Title/H3";
import { omitItems } from "../interface/Image_interface";
import ImageTypeClass from "./ImageTypeClass";
import {
  getKeysOfType,
  getStoriesArgsTypes,
} from "../../../sharedCode/storybook/helpers";

const image = require("../../../mockData/images/pic9.png");
const planeSvg = require("../../../mockData/images/plane.svg");
const bubbleBlue = require("../../../mockData/images/blueBubble.svg");
const bubbleGreen = require("../../../mockData/images/greenBubble.svg");
const bubbleYellow = require("../../../mockData/images/yellowBubble.svg");

const keysOfType = getKeysOfType(ImageTypeClass, omitItems);
const argsTypes = getStoriesArgsTypes(keysOfType);

export default {
  title: "Atoms/Image",
  component: Image,
  parameters: {
    controls: {
      expanded: false,
    },
  },
  argTypes: {
    ...argsTypes,
    /* Data props */
    src: {
      control: "text",
      table: {
        category: "Data props",
      },
    },
    alt: {
      control: "text",
      table: {
        category: "Data props",
      },
    },
    nested: {
      control: "boolean",
      table: {
        category: "Data props",
      },
    },
    size: {
      control: "select",
      options: ["xxl", "xl", "lg", "md", "sm", "xs"],
      table: {
        category: "Data props",
      },
    },
    fixedWidth: {
      control: "text",
      table: {
        category: "Data props",
      },
    },
  },
} as ComponentMeta<typeof Image>;

export const Default: Story<any> = (args) => {
  return (
    <ImagineProvider
      id={"ImagineProvider-default"}
      alignItems={"center"}
      height={"auto"}
    >
      <Image
        id={"image-default"}
        testId={"image-default"}
        src={image}
        alt={"test"}
        {...args}
      />
    </ImagineProvider>
  );
};

export const Nested: Story<any> = (args) => {
  return (
    <ImagineProvider
      id={"ImagineProvider-Nested"}
      alignItems={"center"}
      height={"auto"}
    >
      <Image
        id={"image-nested"}
        testId={"image-nested"}
        src={image}
        alt={"test nested"}
        nested={true}
      />
    </ImagineProvider>
  );
};

export const NestedXsSize: Story<any> = (args) => {
  return (
    <ImagineProvider
      id={"ImagineProvider-NestedXsSize"}
      alignItems={"center"}
      height={"auto"}
    >
      <H3
        text={"Nested image width XS size (width: 150px)"}
        textAlign={"center"}
      />
      <Image
        id={"image-nested-XsSize"}
        size={"xs"}
        testId={"imageNested"}
        src={image}
        alt={"test nested"}
        nested={true}
      />
    </ImagineProvider>
  );
};

export const NestedSmSize: Story<any> = (args) => {
  return (
    <ImagineProvider
      id={"ImagineProvider-NestedSmSize"}
      alignItems={"center"}
      height={"auto"}
    >
      <H3
        text={"Nested image width SM size (width: 300px)"}
        textAlign={"center"}
      />
      <Image
        id={"image-nested-SmSize"}
        size={"sm"}
        testId={"image-nested-SmSize"}
        src={image}
        alt={"test nested"}
        nested={true}
      />
    </ImagineProvider>
  );
};

export const NestedMdSize: Story<any> = (args) => {
  return (
    <ImagineProvider
      id={"ImagineProvider-NestedMdSize"}
      alignItems={"center"}
      height={"auto"}
    >
      <H3
        text={"Nested image width MD size (width: 450px)"}
        textAlign={"center"}
      />
      <Image
        id={"image-nested-MdSize"}
        size={"md"}
        testId={"image-nested-MdSize"}
        src={image}
        alt={"test nested"}
        nested={true}
      />
    </ImagineProvider>
  );
};

export const NestedLgSize: Story<any> = (args) => {
  return (
    <ImagineProvider
      id={"ImagineProvider-NestedLgSize"}
      alignItems={"center"}
      height={"auto"}
    >
      <H3
        text={"Nested image width LG size (width: 600px)"}
        textAlign={"center"}
      />
      <Image
        id={"image-nested-LgSize"}
        size={"lg"}
        testId={"image-nested-LgSize"}
        src={image}
        alt={"test nested"}
        nested={true}
      />
    </ImagineProvider>
  );
};

export const NestedXlSize: Story<any> = (args) => {
  return (
    <ImagineProvider
      id={"ImagineProvider-NestedXlSize"}
      alignItems={"center"}
      height={"auto"}
    >
      <H3
        text={"Nested image width XL size (width: 700px)"}
        textAlign={"center"}
      />
      <Image
        id={"image-nested-XlSize"}
        size={"xl"}
        testId={"image-nested-XlSize"}
        src={image}
        alt={"test nested"}
        nested={true}
      />
    </ImagineProvider>
  );
};

export const NestedXxlSize: Story<any> = (args) => {
  return (
    <ImagineProvider
      id={"ImagineProvider-NestedXxlSize"}
      alignItems={"center"}
      height={"auto"}
    >
      <H3
        text={"Nested image width XXL size (width: 780px)"}
        textAlign={"center"}
      />
      <Image
        id={"image-nested-XXlSize"}
        size={"xxl"}
        testId={"image-nested-XXlSize"}
        src={image}
        alt={"test nested"}
        nested={true}
      />
    </ImagineProvider>
  );
};

export const ArticleImage: Story<any> = (args) => {
  return (
    <ImagineProvider
      id={"ImagineProvider-fixWidth"}
      alignItems={"center"}
      height={"auto"}
    >
      <Image
        id={"ArticleImage-fixWidth"}
        testId={"ArticleImage-fixWidth"}
        src={image}
        background={"gradients-GR-5"}
        borderRadius={"100"}
        alt={"ArticleImage test fixWidth"}
        shadow={"200"}
        noMaxWidth={true}
        wrapperHeight={"380px"}
      />
    </ImagineProvider>
  );
};

export const SvgImage: Story<any> = (args) => {
  return (
    <ImagineProvider
      id={"ImagineProvider-fixWidth"}
      alignItems={"center"}
      height={"auto"}
    >
      <Image
        id={"ArticleImage-fixWidth"}
        alignItems={"center"}
        justifyContent={"center"}
        testId={"ArticleImage-fixWidth"}
        background={"gradients-GR-5"}
        borderRadius={"100"}
        src={planeSvg}
        wrapperHeight={"150px"}
        wrapperWidth={"1200px"}
        fixedWidth={"150px"}
        alt={"ArticleImage test fixWidth"}
      />
    </ImagineProvider>
  );
};

export const SpotlightSvgImage: Story<any> = (args) => {
  return (
    <ImagineProvider
      id={"ImagineProvider-fixWidth"}
      alignItems={"center"}
      height={"auto"}
    >
      <Container alignItems={"center"} justifyContent={"center"}>
        <Image
          id={"Spotlight-fixWidth"}
          testId={"Spotlight-fixWidth"}
          backgroundImage={bubbleGreen}
          src={planeSvg}
          wrapperHeight={"300px"}
          wrapperWidth={"300px"}
          fixedWidth={"170px"}
          alt={"Spotlightest fixWidth"}
          noMaxWidth
        />
         <Image
          id={"Spotlight-fixWidth"}
          testId={"Spotlight-fixWidth"}
          backgroundImage={bubbleBlue}
          src={planeSvg}
          wrapperHeight={"300px"}
          wrapperWidth={"300px"}
          fixedWidth={"170px"}
          alt={"Spotlightest fixWidth"}
          noMaxWidth
        />
         <Image
          id={"Spotlight-fixWidth"}
          testId={"Spotlight-fixWidth"}
          backgroundImage={bubbleYellow}
          src={planeSvg}
          wrapperHeight={"300px"}
          wrapperWidth={"300px"}
          fixedWidth={"170px"}
          alt={"Spotlightest fixWidth"}
          noMaxWidth
        />
         <Image
          id={"Spotlight-fixWidth"}
          testId={"Spotlight-fixWidth"}
          backgroundImage={bubbleGreen}
          src={planeSvg}
          wrapperHeight={"300px"}
          wrapperWidth={"300px"}
          fixedWidth={"170px"}
          alt={"Spotlightest fixWidth"}
          noMaxWidth
        />
         <Image
          id={"Spotlight-fixWidth"}
          testId={"Spotlight-fixWidth"}
          backgroundImage={bubbleBlue}
          src={planeSvg}
          wrapperHeight={"300px"}
          wrapperWidth={"300px"}
          fixedWidth={"170px"}
          alt={"Spotlightest fixWidth"}
          noMaxWidth
        />
      </Container>
    </ImagineProvider>
  );
};
