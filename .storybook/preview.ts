import type { Preview } from "@storybook/react";
import previewDecorators from "./preview-decorators";
import DocsTemplate from "../src/stories/assets/DocsTemplate.mdx";

const preview: Preview = {
  decorators: previewDecorators,

  globalTypes: {
    mode: {
      description: "Mode for preview area",
      defaultValue: "light",
      toolbar: {
        // The label to show for this toolbar item
        title: "Mode",
        icon: "starhollow",
        // Array of plain string values or MenuItem shape (see below)
        items: [
          { value: "light", icon: "starhollow", title: "light" },
          { value: "dark", icon: "star", title: "dark" },
        ],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },

  parameters: {
    docs: {
      page: DocsTemplate,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
