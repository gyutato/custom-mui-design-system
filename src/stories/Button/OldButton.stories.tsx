import React from "react";
import { Button as MuiButton } from "@mui/material";

import type { ButtonProps as MuiButtonProps } from "@mui/material";

export const Default = (props: MuiButtonProps) => {
  return <MuiButton {...props} />;
};

Default.args = {
  children: "test",
};

export const OutlinedButton = (props: MuiButtonProps) => {
  return <MuiButton {...props} variant="outlined" />;
};

OutlinedButton.args = {
  children: "test",
};

export const TextButton = (props: MuiButtonProps) => {
  return <MuiButton {...props} variant="text" />;
};

TextButton.args = {
  children: "test",
};

export default {
  title: "Components/Button",
  component: Default,
  parameters: {
    componentSubtitle: "https://mui.com/material-ui/react-button",
  },
};
