import { Text, StyleSheet } from "react-native";
import React from "react";
import Typography from "../Typography";

interface ILargeHeading extends React.ComponentProps<typeof Typography> {
  text?: string;
}
export const LargeHeading = ({ text, children }: ILargeHeading) => {
  return (
    <Text
      accessibilityRole="text"
      accessibilityLabel={text}
      maxFontSizeMultiplier={2.2}
      minimumFontScale={0.7}
      style={styles.fontStyle}
      testID={text}
      textBreakStrategy="highQuality"
      lineBreakStrategyIOS="standard"
    >
      {children}
    </Text>
  );
};

export default LargeHeading;

const styles = StyleSheet.create({
  fontStyle: {
    color: "grey",
    letterSpacing: 4,
    lineHeight: 40,
    fontStyle: "normal",
    fontSize: 36,
    fontWeight: "600",
    textTransform: "uppercase",
  },
});
