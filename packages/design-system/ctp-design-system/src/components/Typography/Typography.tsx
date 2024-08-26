import { Text, StyleSheet, TextStyle } from "react-native";
import React from "react";

interface ITypographyBase extends React.PropsWithChildren<typeof Text> {
  style?: TextStyle;
}
export const Typography = ({ children }: ITypographyBase) => {
  const [fontSize, setFontSize] = React.useState(16);
  const [fontColor, setFontColor] = React.useState("black");
  const [lineHeight, setLineHeight] = React.useState(1);
  const style = StyleSheet.create({
    typographyStyle: {
      color: fontColor,
      letterSpacing: 4,
      lineHeight: lineHeight,
      fontStyle: "normal",
      fontSize: fontSize,
      fontWeight: "600",
      textTransform: "uppercase",
    },
  });
  return (
    <Text
      accessibilityRole="text"
      maxFontSizeMultiplier={2.2}
      minimumFontScale={0.7}
      textBreakStrategy="highQuality"
      lineBreakStrategyIOS="standard"
    >
      {children}
    </Text>
  );
};

export default Typography;
