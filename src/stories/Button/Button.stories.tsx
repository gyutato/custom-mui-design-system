import type { Meta, StoryObj } from "@storybook/react";
import Default from "./Button.component";
import { Typography } from "@mui/material";

export const Basic: StoryObj = {
  args: {
    variant: "contained",
    children: "Button",
  },
};

export default {
  title: "Components/Button",
  component: Default,
  tags: ["autodocs"],
  parameters: {
    docs: {
      controls: {
        include: [
          "variant",
          "children",
          "color",
          "sx",
          "fullWidth",
          "startIcon",
          "endIcon",
          "size",
          "href",
          "ref",
        ],
      },
    },
  },
  argTypes: {
    children: {
      control: { type: "radio" },
      options: ["text", "Typography"],
      mapping: {
        text: "Button",
        Typography: <Typography>Button</Typography>,
      },
    },
  },
} as Meta;
