import Button, { IButtonProps } from "../Button";
import { StoryObj, Meta } from "@storybook/react";
import { Alert, View } from "react-native";
const meta: Meta<typeof Button> = {
  title: "Components/button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: "text",
      label: "Button Label:",
      name: "Button Label:",
    },
  },
  render: ({ ...args }) => {
    return (
      <View>
        <Button
          label={args.label}
          onPress={() => Alert.alert("Button Pressed")}
        />
      </View>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonStory: Story = {
  args: {
    label: "Press Me",
  },
};
