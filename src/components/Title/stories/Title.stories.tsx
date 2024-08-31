import { ComponentMeta, Story } from "@storybook/react";
import ImagineProvider from "../../ImagineProvider/ImagineProvider";
import Title from "../Title";
import * as React from "react";

export default {
  title: "Atoms/Title",
  component: Title,
  argTypes: {},
} as ComponentMeta<typeof Title>;

export const Default: Story<any> = () => {
  return (
    <ImagineProvider
      id={"ImagineProvider-default"}
      height={"150px"}
    >
        <Title id={'title-default'} text={'ביטוח נסיעות לחול'}/>
    </ImagineProvider>
  );
};
