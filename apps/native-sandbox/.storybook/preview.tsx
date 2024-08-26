import type { Preview } from "@storybook/react";
import { StyleSheet, View } from "react-native";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      values: [
        { name: "light", value: "#fff" },
        { name: "dark", value: "#333" },
      ],
    },
  },
};

const storyLayout = (StoryObj) => (
  <>
    <View style={[styles.mainStoryContainer]}>
      <StoryObj />
    </View>
  </>
);
export default preview;
export const decorators = [storyLayout];

const styles = StyleSheet.create({
  mainStoryContainer: {
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
  },
});
