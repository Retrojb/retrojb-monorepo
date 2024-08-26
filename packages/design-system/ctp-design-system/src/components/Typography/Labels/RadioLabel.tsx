import { Text, StyleSheet } from "react-native";
import React from "react";

interface IRadioLabel extends React.PropsWithChildren<typeof Text> {
  text?: string;
}
export const RadioLabel = ({ text, children }: IRadioLabel) => {
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

export default RadioLabel;

const styles = StyleSheet.create({
  fontStyle: {
    fontStyle: "normal",
    fontSize: 20,
    fontWeight: "300",
    color: "grey",
    letterSpacing: 1,
    lineHeight: 22,
  },
});
