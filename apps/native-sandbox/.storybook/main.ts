import { StorybookConfig } from "@storybook/react-native";

const main: StorybookConfig = {
  stories: [
    "./stories/**/*.stories.?(ts|tsx|js|jsx)",
    "../../../packages/design-system/ctp-design-system/src/components/**/__stories__/*.stories.?(tsx|ts|js|jsx)",
  ],
  addons: [
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-actions",
  ],
};

export default main;
