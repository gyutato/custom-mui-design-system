import React from "react";
import { Badge } from "@mui/material";

import type { BadgeProps } from "@mui/material";
import { Meta } from "@storybook/react";

export const Default = (props: BadgeProps) => {
  return <Badge {...props} />;
};

Default.args = {
  badgeContent: "Badge입니다",
  color: "primary",
};

export default {
  title: "Components/Badge",
  component: Default,
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;
