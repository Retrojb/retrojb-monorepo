import { Text, StyleSheet } from "react-native";
import React from "react";

interface XLHeading extends React.PropsWithChildren<typeof Text> {
  text?: string;
}
export const XLHeading = ({ text, children }: XLHeading) => {
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

export default XLHeading;

const styles = StyleSheet.create({
  textContainer: {
    padding: 16,
  },
  fontStyle: {
    fontStyle: "normal",
    fontSize: 48,
    fontWeight: "700",
    textTransform: "capitalize",
    color: "grey",
    letterSpacing: 4,
    lineHeight: 40,
  },
});
