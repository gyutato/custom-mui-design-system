import type { Meta, StoryObj } from "@storybook/react";
import Default from "./Button.component";

export const Basic: StoryObj = {
  args: {
    variant: "contained",
    children: "Button",
  },
};

export default {
  title: "Components/Button",
  component: Default,
} as Meta;
