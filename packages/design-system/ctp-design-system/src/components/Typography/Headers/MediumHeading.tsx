import { Text, StyleSheet } from "react-native";
import React from "react";

interface IMediumHeading extends React.PropsWithChildren<typeof Text> {
  text?: string;
}
export const MediumHeading = ({ text, children }: IMediumHeading) => {
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
      {text ? text : children}
    </Text>
  );
};

export default MediumHeading;

const styles = StyleSheet.create({
  fontStyle: {
    fontStyle: "normal",
    fontSize: 28,
    fontWeight: "500",
    textTransform: "capitalize",
    color: "grey",
    letterSpacing: 2,
    lineHeight: 32,
  },
});
