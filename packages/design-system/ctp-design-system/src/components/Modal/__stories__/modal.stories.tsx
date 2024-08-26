import React from "react";
import Modal, { IModalProps } from "../modal";
import { StoryObj, Meta } from "@storybook/react";
import { View } from "react-native";
import Button from "../../Button/Button";

const meta: Meta<typeof Modal> = {
  title: "Components/modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    visible: {
      control: "boolean",
      label: "Set Is Visible:",
      name: "Set Is Visible:",
    },
    modalHeading: {
      control: "text",
      label: "Modal Heading:",
      name: "Modal Heading:",
    },
    bodyText: {
      control: "text",
      label: "Body Text:",
      name: "Body Text:",
    },
  },
  render: ({ ...args }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <View>
        <Button label="Open Modal" onPress={(): void => setIsOpen(true)} />
        <Modal
          visible={isOpen}
          modalHeading={args.modalHeading}
          bodyText={args.bodyText}
          buttonProps={{
            label: "Close",
            onPress: (): void => setIsOpen(false),
          }}
        />
      </View>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalStory: Story = {
  args: {
    modalHeading: "Heading",
    bodyText: "Body",
  },
};
