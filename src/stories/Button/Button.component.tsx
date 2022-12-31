import React from "react";
import { Button, ButtonProps } from "@mui/material";

type OmitButtonProps = Omit<
  ButtonProps,
  "disableFocusRipple" | "disableRipple" | "onFocusVisible"
>;

export const Default = (props: OmitButtonProps) => <Button {...props} />;

export default Default;
