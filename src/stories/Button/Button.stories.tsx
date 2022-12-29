import { Button, ButtonProps } from "@mui/material";

export const Default = (
  props: ButtonProps,
  { globals: { mode } }: { globals: any }
) => {
  return <Button {...props} />;
};

Default.args = {
  children: "Button",
  variant: "contained",
};

export const Context = (props: ButtonProps, context: any) => {
  console.log(context);
  return <Button {...props} />;
};

export default { title: "Components/Button", component: Default };
