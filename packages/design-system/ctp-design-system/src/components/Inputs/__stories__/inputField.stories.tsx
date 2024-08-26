import InputField, { IInputProps } from "../inputField";
import { StoryObj, Meta } from "@storybook/react";
import { b } from "@storybook/react-native/dist/index.d-e107ed3d";

const meta: Meta<typeof InputField> = {
  title: "Components/Input Field",
  component: InputField,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placeholder: {
      control: "text",
      name: "Place Holder Text:",
      label: "Place Holder Text:",
    },
    formLabel: {
      control: "text",
      name: "Form Label Text:",
      label: "Form Label Text:",
    },
    isRequired: {
      control: "boolean",
      name: "Is Required:",
      label: "Is Required:",
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const InputFieldStory: Story = {
  args: {
    placeholder: "Type Something",
    formLabel: "Label",
    isRequired: true,
  },
};
